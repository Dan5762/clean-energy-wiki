import fs from 'fs/promises';
import path from 'path';
import YAML from 'yaml';

/**
 * Recursively finds all directories containing meta.yaml files
 */
async function findContentDirs(baseDir) {
  const dirs = [];

  async function scan(dir) {
    const entries = await fs.readdir(dir, { withFileTypes: true });

    for (const entry of entries) {
      if (entry.isDirectory()) {
        const subDir = path.join(dir, entry.name);
        const metaPath = path.join(subDir, 'meta.yaml');

        try {
          await fs.access(metaPath);
          dirs.push(subDir);
        } catch {
          // No meta.yaml, continue scanning subdirectories
          await scan(subDir);
        }
      }
    }
  }

  await scan(baseDir);
  return dirs;
}

/**
 * Load a single approach or concept from its directory
 */
async function loadItem(itemDir) {
  const metaPath = path.join(itemDir, 'meta.yaml');
  const contentPath = path.join(itemDir, 'content.md');

  // Read meta.yaml
  const metaRaw = await fs.readFile(metaPath, 'utf-8');
  const meta = YAML.parse(metaRaw);

  // Read content.md (optional)
  let content = '';
  try {
    content = await fs.readFile(contentPath, 'utf-8');
  } catch {
    // No content file yet
  }

  return {
    id: meta.id,
    meta,
    content,
    path: itemDir
  };
}

/**
 * Validate an approach against the facets schema
 */
function validateApproach(approach, facets, sources) {
  const errors = [];
  const { meta, path: approachPath } = approach;

  // Required fields
  if (!meta.id) {
    errors.push(`${approachPath}: Missing required field 'id'`);
  }
  if (!meta.name) {
    errors.push(`${approachPath}: Missing required field 'name'`);
  }
  if (!meta.short_description) {
    errors.push(`${approachPath}: Missing required field 'short_description'`);
  }

  // Validate facet values
  if (meta.facets) {
    for (const [facetType, facetValue] of Object.entries(meta.facets)) {
      if (!facets[facetType]) {
        errors.push(`${approachPath}: Unknown facet type '${facetType}'`);
      } else if (!facets[facetType].values[facetValue]) {
        errors.push(`${approachPath}: Unknown value '${facetValue}' for facet '${facetType}'`);
      }
    }
  } else {
    errors.push(`${approachPath}: Missing required field 'facets'`);
  }

  // Validate source citations in content
  const citationPattern = /\[@([^\]]+)\]/g;
  let match;
  while ((match = citationPattern.exec(approach.content)) !== null) {
    const sourceKey = match[1];
    if (!sources[sourceKey]) {
      errors.push(`${approachPath}: Unknown source citation '${sourceKey}'`);
    }
  }

  return errors;
}

/**
 * Main content loader function
 */
export async function loadContent(contentDir) {
  const errors = [];

  // Load facets.yaml
  let facets = {};
  try {
    const facetsPath = path.join(contentDir, 'facets.yaml');
    const facetsRaw = await fs.readFile(facetsPath, 'utf-8');
    facets = YAML.parse(facetsRaw);
  } catch (err) {
    errors.push(`Failed to load facets.yaml: ${err.message}`);
  }

  // Load sources.yaml
  let sources = {};
  try {
    const sourcesPath = path.join(contentDir, 'sources.yaml');
    const sourcesRaw = await fs.readFile(sourcesPath, 'utf-8');
    sources = YAML.parse(sourcesRaw);
  } catch (err) {
    errors.push(`Failed to load sources.yaml: ${err.message}`);
  }

  // Load approaches
  const approaches = [];
  const approachesDir = path.join(contentDir, 'approaches');
  try {
    const approachDirs = await findContentDirs(approachesDir);

    for (const dir of approachDirs) {
      try {
        const approach = await loadItem(dir);
        const validationErrors = validateApproach(approach, facets, sources);
        errors.push(...validationErrors);
        approaches.push(approach);
      } catch (err) {
        errors.push(`Failed to load approach from ${dir}: ${err.message}`);
      }
    }
  } catch {
    // No approaches directory yet
  }

  // Load concepts
  const concepts = [];
  const conceptsDir = path.join(contentDir, 'concepts');
  try {
    const conceptDirs = await findContentDirs(conceptsDir);

    for (const dir of conceptDirs) {
      try {
        const concept = await loadItem(dir);
        // Concepts have simpler validation
        if (!concept.meta.id) {
          errors.push(`${dir}: Missing required field 'id'`);
        }
        if (!concept.meta.name) {
          errors.push(`${dir}: Missing required field 'name'`);
        }
        concepts.push(concept);
      } catch (err) {
        errors.push(`Failed to load concept from ${dir}: ${err.message}`);
      }
    }
  } catch {
    // No concepts directory yet
  }

  // Check for duplicate IDs
  const allIds = [...approaches.map(a => a.id), ...concepts.map(c => c.id)];
  const seen = new Set();
  for (const id of allIds) {
    if (seen.has(id)) {
      errors.push(`Duplicate ID found: '${id}'`);
    }
    seen.add(id);
  }

  return {
    facets,
    sources,
    approaches,
    concepts,
    errors
  };
}
