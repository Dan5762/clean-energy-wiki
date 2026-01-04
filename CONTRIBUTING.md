# Contributing to Clean Energy from First Principles

This guide explains how to write and edit content for the wiki. The system is designed to balance readable prose with structured data that powers comparison views and cross-references.

## Table of Contents

- [Overview](#overview)
- [Repository Structure](#repository-structure)
- [Writing a New Article](#writing-a-new-article)
  - [Step 1: Create the Folder](#step-1-create-the-folder)
  - [Step 2: Fill in meta.yaml](#step-2-fill-in-metayaml)
  - [Step 3: Write content.md](#step-3-write-contentmd)
  - [Step 4: Add Sources](#step-4-add-sources)
  - [Step 5: Validate](#step-5-validate)
- [File Formats](#file-formats)
  - [meta.yaml Reference](#metayaml-reference)
  - [content.md Annotations](#contentmd-annotations)
  - [sources.yaml Reference](#sourcesyaml-reference)
- [The Facet System](#the-facet-system)
- [Comparison Data](#comparison-data)
- [Common Tasks](#common-tasks)
- [Style Guide](#style-guide)
- [Validation and Building](#validation-and-building)

---

## Overview

Each technology or concept in the wiki consists of two files:

| File | Purpose | Format |
|------|---------|--------|
| `meta.yaml` | Structured data for comparisons and navigation | YAML |
| `content.md` | Prose content with lightweight annotations | Markdown |

This separation means:
- **Writers** can focus on prose without worrying about data structures
- **Comparison views** can pull structured data without parsing prose
- **Validation** can check data integrity automatically
- **Updates** to numerical data don't require editing prose

The annotation system in `content.md` creates links between prose and the structured facet system, enabling the "living margins" feature where readers can pivot from reading about one technology to comparing it with others.

---

## Repository Structure

```
/content
├── approaches/                    # Energy technologies
│   ├── photovoltaics/
│   │   ├── meta.yaml
│   │   └── content.md
│   ├── wind/
│   │   ├── meta.yaml
│   │   └── content.md
│   └── .../
│
├── concepts/                      # Shared theoretical concepts
│   ├── carnot-limit/
│   │   ├── meta.yaml
│   │   └── content.md
│   ├── betz-limit/
│   │   ├── meta.yaml
│   │   └── content.md
│   └── .../
│
├── comparisons/                   # Comparison view configurations
│   ├── theoretical-limits.yaml
│   ├── power-density.yaml
│   └── .../
│
├── sources/
│   └── sources.yaml               # Central bibliography
│
├── facets.yaml                    # Facet definitions (schema)
│
└── templates/                     # Starter templates
    ├── approach-meta.yaml
    └── approach-content.md
```

---

## Writing a New Article

### Step 1: Create the Folder

```bash
# Copy the template
cp -r content/templates/approach content/approaches/your-technology

# Rename to your technology (use lowercase, hyphens for spaces)
mv content/approaches/approach content/approaches/tidal-stream
```

Technology IDs should be:
- Lowercase
- Hyphenated (not underscores or spaces)
- Descriptive but concise

Good: `tidal-stream`, `nuclear-fission`, `concentrated-solar-thermal`
Bad: `TidalStream`, `tidal_stream`, `csp`

### Step 2: Fill in meta.yaml

Open `meta.yaml` and fill in the structured data. This file has three main sections:

**Identity and facets** (required):
```yaml
id: tidal-stream
name: Tidal Stream
short_description: Extraction of kinetic energy from tidal currents using underwater turbines

facets:
  ultimate_source: gravitational
  conversion_pathway: mechanical_intermediate
  theoretical_limit: betz
  temporal_character: predictable_cyclic
  geographic_constraint: coastal
  scale_regime: site_limited
  material_criticality: abundant
```

**Comparison data** (fill in what you can):
```yaml
comparison_data:
  theoretical_limit:
    name: Betz limit
    value_percent: 59
    achieved_percent: 45
  power_density:
    peak_w_per_m2: 5000      # Per swept area, not sea surface
    average_w_per_m2: 1500
    delivered_w_per_m2: 800
  current_status:
    trl: 7
    lcoe_range_usd_mwh: [100, 300]
    global_capacity_gw: 0.5
    annual_growth_percent: 15
```

**Relationships** (add as relevant):
```yaml
related:
  - id: tidal-barrage
    relationship: alternative_tidal_approach
  - id: wind
    relationship: shares_betz_limit

equations:
  - id: betz_limit
    latex: P_{\text{max}} = \frac{16}{27} \cdot \frac{1}{2} \rho A v^3
    description: Maximum extractable power from fluid flow
```

See [meta.yaml Reference](#metayaml-reference) for the complete specification.

### Step 3: Write content.md

Write your article following the standard framework structure. Add annotations to connect prose to the facet system.

```markdown
# Tidal Stream

## Fundamental Principle

### Natural Asymmetry Exploited

::: facet ultimate_source
The gravitational interaction between Earth, Moon, and Sun creates 
periodic variations in sea level. As water moves to equalise these 
variations, it forms tidal currents with substantial kinetic energy, 
particularly where geography constrains the flow through narrow 
channels or around headlands.
:::

### Ultimate Source

::: facet ultimate_source
The Earth-Moon-Sun gravitational system. The Moon's gravity creates 
a tidal bulge; Earth's rotation carries coastlines through this bulge 
twice daily. The energy ultimately derives from Earth's rotational 
kinetic energy, which is gradually transferred to the Moon (causing 
it to recede at ~3.8 cm/year). [@munk1998]
:::

This is a finite but vast store: Earth's rotational energy is ~2.6 × 10²⁹ J,
and tidal dissipation removes ~3.7 TW. At this rate, significant slowdown 
takes billions of years.

...
```

See [content.md Annotations](#contentmd-annotations) for the full annotation syntax.

### Step 4: Add Sources

Add any new sources to `/content/sources/sources.yaml`:

```yaml
munk1998:
  type: journal
  authors: [Walter Munk]
  title: "Abyssal recipes II: energetics of tidal and wind mixing"
  journal: Deep Sea Research Part I
  year: 1998
  doi: 10.1016/S0967-0637(98)00070-3
  confidence: peer_reviewed
```

Then reference in your content with `[@munk1998]`.

### Step 5: Validate

Run the validation script to check for errors:

```bash
npm run validate
```

This checks:
- All facet values are valid (defined in `facets.yaml`)
- All source references exist in `sources.yaml`
- Required fields are present in `meta.yaml`
- Markdown annotations are well-formed

---

## File Formats

### meta.yaml Reference

#### Required Fields

```yaml
# Identity
id: string                    # Unique identifier, lowercase with hyphens
name: string                  # Human-readable name
short_description: string     # One sentence summary

# Facet memberships
facets:
  ultimate_source: string     # See facets.yaml for valid values
  conversion_pathway: string
  theoretical_limit: string
  temporal_character: string
  geographic_constraint: string
  scale_regime: string
  material_criticality: string
```

#### Optional Fields

```yaml
# Comparison data (for tables and comparison views)
comparison_data:
  theoretical_limit:
    name: string              # Name of the limit
    value_percent: number     # Theoretical maximum
    achieved_percent: number  # Best achieved in practice
    applies_to: string        # Conditions (e.g., "single junction, unconcentrated")
    variants:                 # For technologies with sub-types
      - name: string
        limit_percent: number
        achieved_percent: number

  power_density:
    peak_w_per_m2: number
    average_w_per_m2: number
    delivered_w_per_m2: number  # After all system losses
    notes: string               # Clarify what area means (swept area, land area, etc.)

  current_status:
    trl: number               # 1-9
    lcoe_range_usd_mwh: [number, number]  # [min, max]
    global_capacity_gw: number
    annual_growth_percent: number

  temporal:
    diurnal: boolean
    seasonal_variation: string  # "none", "moderate", "high_latitude_affected"
    predictability: string      # "high", "moderate", "low"
    dispatchable: boolean

# Relationships to other content
related:
  - id: string                # ID of related technology/concept
    relationship: string      # Type of relationship

# Key equations used in this article
equations:
  - id: string                # Unique ID for cross-referencing
    latex: string             # LaTeX markup
    description: string       # Plain English description
```

#### Facet Values

Valid values for each facet are defined in `/content/facets.yaml`. Current values:

| Facet | Valid Values |
|-------|--------------|
| `ultimate_source` | `solar`, `gravitational`, `nuclear`, `primordial`, `chemical`, `ambient_thermal` |
| `conversion_pathway` | `direct_electrical`, `thermal_intermediate`, `mechanical_intermediate`, `chemical_intermediate` |
| `theoretical_limit` | `carnot`, `betz`, `shockley_queisser`, `landsberg`, `other` |
| `temporal_character` | `diurnal_cyclic`, `weather_driven`, `seasonal`, `predictable_cyclic`, `dispatchable`, `baseload` |
| `geographic_constraint` | `global`, `coastal`, `geological`, `latitude_dependent`, `river_dependent` |
| `scale_regime` | `arbitrarily_modular`, `threshold_scale`, `site_limited` |
| `material_criticality` | `abundant`, `critical_minerals`, `fuel_dependent`, `variant_dependent` |

To add new values, edit `facets.yaml` and ensure all relevant articles are updated.

---

### content.md Annotations

Content files are standard Markdown with a few custom annotations:

#### Facet Blocks

Mark sections that relate to a specific facet:

```markdown
::: facet ultimate_source
This paragraph discusses where the energy comes from.
Multiple paragraphs can be included in a single block.
:::
```

This enables:
- The margin to show "this section discusses: Ultimate Source"
- Comparison views to pull relevant text from multiple articles
- Navigation to other articles with the same facet value

#### Limitation Blocks

Tag specific practical limitations:

```markdown
::: limitation material_scarcity
Neodymium for permanent magnets is concentrated in Chinese supply chains.
[@usgs2023]
:::
```

Limitation types:
- `material_scarcity`
- `material_toxicity`
- `manufacturing_energy`
- `manufacturing_complexity`
- `geographic_restriction`
- `intermittency`
- `land_intensity`
- `water_use`
- `long_build_time`
- `public_acceptance`

#### Shared Limitations

Link limitations that appear across technologies:

```markdown
::: limitation material_scarcity
Tellurium scarcity limits CdTe deployment. [:shared_with cigs, thermoelectrics]
:::
```

#### Equations

Reference equations defined in `meta.yaml`:

```markdown
::: equation betz_limit
$$P_{\text{max}} = \frac{16}{27} \cdot \frac{1}{2} \rho A v^3$$
:::
```

The equation ID links to the definition in `meta.yaml`, enabling cross-references when the same equation appears in multiple articles.

#### Citations

Use Pandoc-style citations:

```markdown
This was first derived by Betz in 1919. [@betz1920]

Multiple sources can be cited together. [@betz1920; @lanchester1915]
```

#### Comparison Links

Create inline links to comparison views:

```markdown
Power density varies significantly across technologies [:compare power_density].
```

Clicking this opens the power density comparison panel.

#### Cross-References

Link to other articles:

```markdown
Unlike [:link wind], tidal stream output is predictable years in advance.
```

---

### sources.yaml Reference

```yaml
source_key:                    # Unique key for citation
  type: string                 # journal, book, report, website, calculation
  authors: [string]            # List of author names
  title: string
  
  # For journals
  journal: string
  volume: number
  issue: number
  pages: string                # e.g., "510-519"
  
  # For books
  publisher: string
  edition: string
  
  # For reports
  institution: string
  report_number: string
  
  # Common fields
  year: number
  doi: string                  # Preferred identifier
  url: string                  # If no DOI available
  accessed: string             # For websites: "2024-01-15"
  
  confidence: string           # See below
```

#### Confidence Levels

| Level | Meaning |
|-------|---------|
| `foundational` | Highly cited, foundational work in the field |
| `peer_reviewed` | Published in peer-reviewed journal |
| `industry_authoritative` | From established industry body (IEA, NREL, Fraunhofer) |
| `industry_report` | Industry source, may have commercial bias |
| `government` | Government agency data |
| `preprint` | Not yet peer-reviewed |
| `news` | Journalistic source |
| `author_derived` | Author's own calculation based on cited data |

---

## The Facet System

Facets are the primary way readers navigate between technologies. Each facet groups technologies by a shared characteristic.

### How Facets Work

1. **Definition**: Facets and their valid values are defined in `/content/facets.yaml`
2. **Assignment**: Each technology declares its facet values in `meta.yaml`
3. **Annotation**: Prose sections are tagged with relevant facets using `::: facet` blocks
4. **Display**: The UI shows facet membership in the margin and enables comparison views

### Current Facets

| Facet | Question it Answers |
|-------|---------------------|
| Ultimate Source | Where does this energy come from? |
| Conversion Pathway | How is it converted to useful form? |
| Theoretical Limit | What physics constrains efficiency? |
| Temporal Character | When is it available? |
| Geographic Constraint | Where does it work? |
| Scale Regime | What sizes are viable? |
| Material Criticality | What materials could limit deployment? |

### Adding a New Facet

1. Add the facet definition to `facets.yaml`:

```yaml
new_facet:
  name: Human Readable Name
  description: What question does this facet answer?
  values:
    value_one:
      name: Value One
      description: What this value means
      members: []  # Will be populated as articles are updated
    value_two:
      name: Value Two
      description: What this value means
      members: []
```

2. Add the facet to all existing `meta.yaml` files
3. Run validation to ensure consistency

---

## Comparison Data

Comparison views pull structured data from across all technologies. For this to work, `comparison_data` in `meta.yaml` must follow consistent formats.

### Theoretical Limits

```yaml
comparison_data:
  theoretical_limit:
    name: "Carnot"                # Must match a theoretical_limit facet value
    value_percent: 50             # The limit itself
    achieved_percent: 40          # Best achieved
    applies_to: "600K/300K"       # Conditions for this limit value
```

For technologies with variants (like PV with different cell types):

```yaml
comparison_data:
  theoretical_limit:
    name: "Shockley-Queisser"
    value_percent: 33
    applies_to: "single junction, unconcentrated"
    variants:
      - name: Silicon
        limit_percent: 29
        achieved_percent: 26.8
      - name: GaAs
        limit_percent: 33
        achieved_percent: 29.1
      - name: Perovskite-Si tandem
        limit_percent: 45
        achieved_percent: 33.9
```

### Power Density

Be explicit about what area means:

```yaml
comparison_data:
  power_density:
    peak_w_per_m2: 1000
    average_w_per_m2: 200
    delivered_w_per_m2: 8
    notes: "Land area including spacing for utility-scale installation"
```

For wind and tidal, distinguish swept area from land/sea area:

```yaml
comparison_data:
  power_density:
    peak_w_per_m2: 500            # Per swept area
    average_w_per_m2: 150
    delivered_w_per_m2: 2         # Per land area including spacing
    notes: "Swept area values; land use is 1-3 W/m²"
```

---

## Common Tasks

### Adding a New Technology

1. Copy template: `cp -r content/templates/approach content/approaches/new-tech`
2. Edit `meta.yaml` with structured data
3. Write `content.md` following the framework
4. Add sources to `sources.yaml`
5. Run `npm run validate`
6. Submit pull request

### Adding a New Concept Page

Concept pages explain shared theoretical foundations (Carnot limit, Betz limit, etc.):

1. Create folder in `/content/concepts/`
2. `meta.yaml` is simpler (no comparison data needed):

```yaml
id: carnot-limit
name: Carnot Limit
short_description: Maximum efficiency of heat engine between two temperatures

related_approaches:
  - concentrated-solar-thermal
  - geothermal
  - otec
  - nuclear-fission
```

3. `content.md` explains the concept with derivations

### Updating LCOE or Capacity Data

These change frequently. To update:

1. Edit the relevant `meta.yaml`:

```yaml
current_status:
  lcoe_range_usd_mwh: [15, 50]   # Update range
  global_capacity_gw: 1750       # Update capacity
```

2. Add the new source to `sources.yaml`
3. Update the prose in `content.md` if it references specific numbers

### Adding a Source

1. Add to `sources.yaml` with a unique key
2. Reference in content with `[@key]`
3. Choose appropriate `confidence` level

---

## Style Guide

### Prose

- Write for a technically literate reader who may not be a specialist
- Define terms on first use
- Prefer concrete numbers over vague qualifiers ("~33% efficiency" not "high efficiency")
- Cite sources for non-obvious claims
- Use consistent units (SI preferred, with conversions where helpful)

### Numbers and Units

- Use SI units with standard prefixes: kW, MW, GW, TW
- Express efficiency as percentages
- Express costs in USD/MWh for LCOE
- Express power density in W/m²
- Express energy density in J/kg or Wh/kg
- Use ~ for approximate values: ~33%, ~1000 W/m²

### Equations

- Use LaTeX in `$...$` for inline, `$$...$$` for display
- Define all variables on first use
- Provide numerical examples where helpful

### Formatting

- Use headers consistently (H2 for framework sections, H3 for subsections)
- Use tables for structured comparisons
- Use lists sparingly and only when structure genuinely helps
- Include blank lines before lists and after headers (CommonMark requirement)

### Annotations

- Tag all prose that discusses a facet, not just the first mention
- Use specific limitation types rather than generic tags
- Cite sources immediately after claims, not at paragraph end
- Use comparison links where a reader might naturally want to compare

---

## Validation and Building

### Validation

```bash
npm run validate
```

Checks:
- `meta.yaml` has all required fields
- Facet values match `facets.yaml`
- Source references exist in `sources.yaml`
- Annotation syntax is valid
- Related technology IDs exist

### Local Development

```bash
npm run dev
```

Starts a local server with hot reload. Changes to content files are reflected immediately.

### Building

```bash
npm run build
```

Outputs static site to `/dist`:
- HTML pages for each technology and concept
- JSON files for facet navigation and comparison views
- Search index

### Checking Comparison Data

To see what the comparison views will look like:

```bash
npm run preview-comparisons
```

This outputs a text summary of each comparison view, useful for spotting missing or inconsistent data.

---

## Questions?

If something in this guide is unclear or you encounter an undocumented situation, please open an issue. The system is designed to evolve as we learn what works.