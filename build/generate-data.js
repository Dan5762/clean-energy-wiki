/**
 * Generate comparison data for client-side use
 */
export function generateComparisonData(approaches, facets) {
  const comparisons = {};

  // Theoretical limit comparison
  const theoreticalLimit = {
    title: 'Theoretical Efficiency Limits',
    columns: ['technology', 'limit_name', 'limit_percent', 'achieved_percent'],
    rows: []
  };

  for (const approach of approaches) {
    const limitData = approach.meta.comparison_data?.theoretical_limit;
    if (limitData) {
      theoreticalLimit.rows.push({
        id: approach.id,
        name: approach.meta.name,
        limit_name: limitData.name,
        limit_percent: limitData.value_percent,
        achieved_percent: limitData.achieved_percent
      });
    }
  }

  // Sort by limit_percent descending
  theoreticalLimit.rows.sort((a, b) => (b.limit_percent || 0) - (a.limit_percent || 0));
  comparisons.theoretical_limit = theoreticalLimit;

  // Power density comparison
  const powerDensity = {
    title: 'Power Density',
    columns: ['technology', 'peak_w_per_m2', 'average_w_per_m2', 'delivered_w_per_m2'],
    rows: []
  };

  for (const approach of approaches) {
    const densityData = approach.meta.comparison_data?.power_density;
    if (densityData) {
      powerDensity.rows.push({
        id: approach.id,
        name: approach.meta.name,
        peak_w_per_m2: densityData.peak_w_per_m2,
        average_w_per_m2: densityData.average_w_per_m2,
        delivered_w_per_m2: densityData.delivered_w_per_m2
      });
    }
  }

  // Sort by average_w_per_m2 descending
  powerDensity.rows.sort((a, b) => (b.average_w_per_m2 || 0) - (a.average_w_per_m2 || 0));
  comparisons.power_density = powerDensity;

  // Current status comparison
  const currentStatus = {
    title: 'Current Status',
    columns: ['technology', 'trl', 'lcoe_low', 'lcoe_high', 'global_capacity_gw'],
    rows: []
  };

  for (const approach of approaches) {
    const statusData = approach.meta.comparison_data?.current_status;
    if (statusData) {
      currentStatus.rows.push({
        id: approach.id,
        name: approach.meta.name,
        trl: statusData.trl,
        lcoe_low: statusData.lcoe_range_usd_mwh?.[0],
        lcoe_high: statusData.lcoe_range_usd_mwh?.[1],
        global_capacity_gw: statusData.global_capacity_gw
      });
    }
  }

  // Sort by global_capacity_gw descending
  currentStatus.rows.sort((a, b) => (b.global_capacity_gw || 0) - (a.global_capacity_gw || 0));
  comparisons.current_status = currentStatus;

  // Facet-based groupings
  for (const [facetKey, facetDef] of Object.entries(facets)) {
    const groups = {};

    for (const [valueKey, valueDef] of Object.entries(facetDef.values || {})) {
      const techs = approaches
        .filter(a => a.meta.facets?.[facetKey] === valueKey)
        .map(a => a.id);

      if (techs.length > 0) {
        groups[valueKey] = {
          name: valueDef.name,
          description: valueDef.description || '',
          technologies: techs
        };
      }
    }

    if (Object.keys(groups).length > 0) {
      comparisons[facetKey] = {
        title: facetDef.name,
        groups
      };
    }
  }

  return comparisons;
}

/**
 * Generate facet index for quick lookup
 */
export function generateFacetIndex(approaches, facets) {
  const index = {};

  for (const facetKey of Object.keys(facets)) {
    index[facetKey] = {};

    for (const approach of approaches) {
      const value = approach.meta.facets?.[facetKey];
      if (value) {
        if (!index[facetKey][value]) {
          index[facetKey][value] = [];
        }
        index[facetKey][value].push(approach.id);
      }
    }
  }

  return index;
}

/**
 * Generate a simple search index
 */
export function generateSearchIndex(approaches, concepts) {
  const index = [];

  for (const approach of approaches) {
    index.push({
      type: 'approach',
      id: approach.id,
      title: approach.meta.name,
      description: approach.meta.short_description,
      url: `/approaches/${approach.id}.html`
    });
  }

  for (const concept of concepts) {
    index.push({
      type: 'concept',
      id: concept.id,
      title: concept.meta.name,
      description: concept.meta.short_description || '',
      url: `/concepts/${concept.id}.html`
    });
  }

  return index;
}
