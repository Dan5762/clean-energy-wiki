# Tidal Barrage

## Fundamental Principle

### Gravitational Origin of Tidal Energy

::: facet ultimate_source
Tidal barrage energy exploits the potential energy stored in the vertical displacement of ocean water caused by gravitational interactions between Earth, Moon, and Sun. Unlike wave energy (wind-driven) or OTEC (solar thermal), tidal energy derives from the rotational kinetic energy of the Earth-Moon system, making it fundamentally astronomical rather than solar in origin.
:::

The Moon's gravitational pull creates tidal bulges on opposite sides of Earth. As Earth rotates beneath these bulges, coastal locations experience two high tides and two low tides approximately every 24 hours and 50 minutes (the lunar day). The Sun contributes a smaller tidal force; when Sun and Moon align (spring tides), tidal ranges are maximized, while at right angles (neap tides), ranges are minimized.

The gravitational potential energy available in tides is ultimately extracted from Earth's rotational kinetic energy. Tidal friction gradually slows Earth's rotation (by about 2.3 milliseconds per century) while accelerating the Moon's orbital velocity, causing it to recede at approximately 3.8 cm/year. This process will continue for billions of years until Earth and Moon become tidally locked, but the effect of human tidal energy extraction on this timescale is utterly negligible.

### Energy Content of Tidal Range

A tidal barrage captures the potential energy of water raised by the tide. For a basin of surface area A and tidal range R (difference between high and low water), the theoretical energy available per tidal cycle is:

::: equation tidal_potential_energy
$$E = \frac{1}{2} \rho g A R^2$$
:::

Where:
- ρ = seawater density (~1,025 kg/m³)
- g = gravitational acceleration (9.81 m/s²)
- A = basin area (m²)
- R = tidal range (m)

The critical insight is that energy scales with the **square** of tidal range. Doubling the tidal range quadruples the available energy. This is why tidal barrages are only economically viable at sites with exceptionally large tidal ranges (typically >5 m mean range, ideally >7 m).

**Example calculation:**

For a hypothetical basin:
- Area: 10 km² = 10 × 10⁶ m²
- Tidal range: 8 m
- Seawater density: 1,025 kg/m³

Energy per tide = ½ × 1,025 × 9.81 × 10 × 10⁶ × 8² = 3.22 × 10¹² J = 3.22 TJ

With two tidal cycles per day, and accounting for conversion losses (~25-30% efficiency), this basin could generate approximately 50-60 MW average power.

### Global Tidal Range Distribution

::: facet geographic_constraint
Tidal ranges vary enormously worldwide, from nearly zero in enclosed seas to over 16 m in exceptional locations. The highest tidal ranges occur where:
:::

1. **Resonant amplification**: Basin geometry creates standing wave resonance with tidal period
2. **Funneling effects**: Converging coastlines concentrate tidal flow
3. **Shallow continental shelves**: Amplify tidal wave height

**Highest tidal ranges globally:**

| Location | Mean Tidal Range | Maximum Range |
|----------|------------------|---------------|
| Bay of Fundy (Canada) | 11-12 m | 16.3 m |
| Ungava Bay (Canada) | 9-10 m | 17 m |
| Severn Estuary (UK) | 8-9 m | 14.5 m |
| Rance Estuary (France) | 8 m | 13.5 m |
| Gulf of St. Malo (France) | 8-9 m | 13.5 m |
| Bristol Channel (UK) | 7-8 m | 14 m |
| Cook Inlet (Alaska) | 7-9 m | 12 m |
| Gyeonggi Bay (South Korea) | 6-7 m | 9 m |

These exceptional sites represent only a tiny fraction of global coastline, fundamentally limiting tidal barrage potential.

## Conversion Mechanism

### Barrage Structure and Components

::: facet conversion_pathway
A tidal barrage is a dam-like structure spanning an estuary, bay, or inlet. Key components include:
:::

**Embankments and caissons:**
- Reinforced concrete or rockfill dam structure
- Must withstand enormous hydraulic forces (pressure differentials up to 10+ m head)
- La Rance barrage: 750 m long, including 332.5 m power station section

**Sluice gates:**
- Allow water to pass without generating power
- Used to fill basin rapidly on flood tide
- Types: flap gates, vertical rising gates, radial gates, sector gates
- Sihwa Lake: 8 culvert-type sluice gates (15.3 m × 12 m each)

**Turbine-generators:**
- Low-head hydroelectric turbines (typically Kaplan bulb turbines)
- Must operate efficiently across varying head (typically 2-10 m)
- Reversible designs allow generation on both flood and ebb tides
- La Rance: 24 × 10 MW bulb turbines, 5.35 m diameter
- Sihwa: 10 × 25.4 MW bulb turbines, 7.5 m diameter

**Ship locks:**
- Allow vessel passage through barrage
- Essential for estuaries with port access requirements

### Operating Modes

**Ebb generation (most common):**
1. Flood tide: Sluice gates open, basin fills to high tide level
2. High tide: Gates close, trapping water at elevated level
3. Ebb tide: Sea level falls, creating head differential
4. Generation: When head reaches ~2-3 m, turbines open and generate as water flows out
5. Continue generating until head drops below minimum (~1.5 m)
6. Cycle repeats

This mode is most efficient because the upper half of the basin contains more volume than the lower half (for typical bathymetry), maximizing energy extraction per cycle.

**Flood generation:**
1. Ebb tide: Sluice gates open, basin drains to low tide level
2. Low tide: Gates close, maintaining low basin level
3. Flood tide: Sea level rises, creating head differential
4. Generation: Turbines generate as water flows into basin
5. Less efficient than ebb generation (lower volume in lower basin half)

**Two-way (dual-effect) generation:**
- Generate on both flood and ebb tides
- Requires reversible turbines
- Higher total energy capture but lower peak efficiency
- Reduces environmental impact by maintaining more natural tidal exchange
- La Rance was designed for two-way operation but now operates primarily in ebb mode

**Pumping-enhanced generation:**
- Use turbines as pumps during off-peak hours to raise basin level slightly above natural high tide
- Increases available head and energy capture
- Can boost output by 10-15%
- Requires cheap off-peak electricity

### Efficiency Considerations

**Theoretical maximum:**
The maximum extractable energy is limited by the need to maintain minimum head for turbine operation. Typically, only 25-35% of the theoretical potential energy can be captured:

- Cannot extract energy when head < 1.5-2 m (turbine minimum)
- Basin does not fill/empty instantaneously
- Generation windows limited to portions of tidal cycle
- Turbine efficiency varies with head and flow

**Turbine efficiency:**
- Kaplan bulb turbines: 85-93% at design point
- Efficiency drops significantly at low heads (<60% below 2 m head)
- Reversible turbines less efficient than unidirectional designs

**System efficiency:**
- Hydraulic losses in tunnels and gates: 5-10%
- Generator efficiency: 95-98%
- Transformer and transmission: 95-98%
- Overall water-to-wire efficiency: 70-85% at optimal head

**Capacity factor:**

::: facet temporal_character
Due to the intermittent nature of tides (generation only during part of each cycle), tidal barrages have inherently limited capacity factors:
:::

| Plant | Installed Capacity | Annual Output | Capacity Factor |
|-------|-------------------|---------------|-----------------|
| La Rance | 240 MW | 500-540 GWh | 24-26% |
| Sihwa Lake | 254 MW | 550 GWh | 25% |
| Annapolis Royal | 20 MW | 50 GWh | 28% |

For comparison: nuclear plants achieve 85-90%, wind 30-45%, solar PV 15-25%.

## Theoretical Limits

### Maximum Energy Extraction

::: facet theoretical_limit
The fundamental limit on tidal barrage energy is set by the available gravitational potential energy:

::: equation tidal_power
$$P_{max} = \frac{1}{2} \rho g A R^2 \times \frac{2}{T}$$
:::
:::

Where T is the tidal period (~12.42 hours for semidiurnal tides).

For a 100 km² basin with 10 m tidal range:
- Energy per tide: 50 TJ
- Two tides per day: 100 TJ/day
- Average power: ~1,160 MW theoretical maximum

In practice, extraction efficiency of 25-35% yields 290-400 MW average power from such a basin.

### Tidal Resonance Constraints

Barrage construction can alter the tidal resonance of an estuary, potentially:
- Reducing tidal range within the basin (less energy available)
- Increasing or decreasing tidal range in adjacent waters
- Shifting phase relationships between tide and generation

Studies of the Severn Estuary suggest a barrage would reduce the tidal range within the basin by approximately 25-30%, partially offsetting energy gains from the impoundment.

### Global Resource Limit

The total global dissipation of tidal energy is approximately 3.7 TW, of which:
- ~2.5 TW dissipates in the deep ocean
- ~1.2 TW dissipates in shallow coastal waters

Only the coastal dissipation is potentially accessible, and only a fraction occurs at sites suitable for barrages. Various estimates suggest:

| Source | Global Tidal Barrage Potential |
|--------|-------------------------------|
| World Energy Council | 500-1,000 TWh/year (60-115 GW) |
| Optimistic estimates | 150-200 GW |
| Realistically developable | 20-50 GW |

For context, global electricity consumption is approximately 30,000 TWh/year. Even fully developed, tidal barrages could supply only 2-3% of global electricity demand.

## Practical Limitations

### Site Constraints

Economically viable tidal barrage sites must have:

1. **Large tidal range**: >5 m mean range (ideally >7 m)
2. **Suitable geometry**: Natural basin that can be enclosed with reasonable barrage length
3. **Low Gibrat ratio**: Ratio of barrage length (m) to annual energy production (kWh)
   - La Rance: 0.36 (excellent)
   - Severn: 0.87 (good)
   - Passamaquoddy: 0.92 (marginal)

Only a handful of sites worldwide meet these criteria. Most are already identified and studied:

**Sites with >1 GW potential:**
- Severn Estuary, UK: 8-15 GW
- Bay of Fundy, Canada: 5-7 GW
- Gulf of Khambhat, India: 7 GW
- Incheon Bay, South Korea: 1.3 GW
- Garolim Bay, South Korea: 0.5 GW
- Mersey Estuary, UK: 0.7 GW

### Capital Costs

Tidal barrages require enormous upfront investment:

| Project | Capacity | Cost | Cost per kW |
|---------|----------|------|-------------|
| La Rance (1966) | 240 MW | €95M (original) | ~€400/kW |
| Sihwa Lake (2011) | 254 MW | $298-560M | $1,200-2,200/kW |
| Severn Barrage (proposed) | 8.6 GW | £20-30 billion | £2,300-3,500/kW |
| Swansea Tidal Lagoon (proposed) | 320 MW | £1.3 billion | £4,000/kW |

For comparison:
- Onshore wind: $1,000-1,500/kW
- Solar PV: $800-1,200/kW
- Nuclear: $5,000-10,000/kW
- Offshore wind: $2,500-4,000/kW

The high capital cost is driven by:
- Massive civil engineering works (concrete, steel, earthworks)
- Marine construction in challenging tidal conditions
- Custom-designed turbines for low-head, high-flow operation
- Long construction periods (5-10 years)

### Levelized Cost of Energy

Due to high capital costs and low capacity factors, tidal barrage LCOE is relatively high:

| Plant/Project | LCOE Estimate |
|---------------|---------------|
| La Rance (mature) | €0.02-0.04/kWh (costs now recovered) |
| New-build barrage | €0.15-0.30/kWh |
| Swansea Lagoon (proposed) | £0.30/kWh initially |
| Severn Barrage (proposed) | £0.15-0.25/kWh |

However, tidal barrages have extremely long operational lifetimes (100+ years potential), and once capital is recovered, operating costs are very low. La Rance now produces electricity at €0.018/kWh, cheaper than nuclear.

### Environmental Impacts

::: limitation public_acceptance
Tidal barrages cause significant environmental disruption:

**Habitat loss:**
:::
- Intertidal mudflats reduced or eliminated
- Critical feeding grounds for wading birds destroyed
- La Rance: Initial ecosystem collapse during construction; 10+ years to establish new equilibrium
- Severn Estuary: Potential loss of 3,000-14,000 hectares of intertidal habitat

**Sediment transport:**
- Altered patterns of erosion and deposition
- Progressive silting of basin (La Rance has experienced significant siltation)
- Changes to downstream sediment supply

**Fish migration:**
- Barrier to migratory species (salmon, eels)
- Turbine mortality risk
- Fish passes required but imperfect
- Annapolis Royal closed in 2019 partly due to fish mortality concerns

**Water quality:**
- Reduced flushing can trap pollutants
- Changes in salinity gradients
- Sihwa Lake experienced severe pollution before tidal exchange restored

**Ecological trade-offs:**
- Some species benefit from reduced tidal range (less disturbance)
- New rocky habitats on barrage structure
- Sihwa has shown ecosystem recovery with restored tidal flow

The Severn Estuary is protected under multiple conservation designations (Ramsar, Special Protection Area, Special Area of Conservation), creating major regulatory obstacles to barrage development.

### Construction Challenges

Building a barrage across a major estuary is among the most challenging civil engineering projects:

- Construction in hostile tidal environment with strong currents
- Temporary cofferdams required to create dry work areas
- Long construction periods expose project to economic uncertainty
- La Rance required complete closure of estuary for 3 years during construction
- Integration with shipping, flood defense, and existing infrastructure

## Scaling Characteristics

### Economies of Scale

::: facet scale_regime
Tidal barrages exhibit strong economies of scale:
:::

- Civil works cost per MW decreases with project size
- Turbine costs benefit from standardization and volume
- Grid connection and infrastructure costs spread over larger capacity
- Larger basins have more favorable Gibrat ratios

The Severn Barrage at 8.6 GW would have significantly lower per-MW costs than smaller projects, but the absolute cost (£20-30 billion) creates financing challenges.

### Modular Alternatives: Tidal Lagoons

Tidal lagoons are artificial enclosures built offshore, avoiding the need to dam an entire estuary:

**Advantages over barrages:**
- Can be sited to minimize environmental impact
- Do not block estuaries or navigation
- Modular construction possible
- Lower per-project investment (though higher per-MW cost)

**Proposed projects:**
- Swansea Bay Lagoon (UK): 320 MW, rejected 2018 on cost grounds
- Cardiff Lagoon (UK): 3 GW, conceptual

Lagoons remain unproven at commercial scale.

### Learning and Cost Reduction

Unlike solar PV or wind, tidal barrages have seen minimal cost reduction:

- Only two large plants built (1966 and 2011)
- Each project is site-specific, limiting standardization
- Civil engineering costs dominated by materials and labor, not technology
- Limited learning curve potential

Cost reduction pathways:
- Improved turbine designs (higher efficiency at low head)
- Construction techniques from offshore wind industry
- Prefabricated caisson construction
- Integration with other infrastructure (flood defense, transport links)

## Current Status

### Operational Plants

Only a handful of tidal barrage plants operate worldwide:

**La Rance, France (1966)**
- Capacity: 240 MW (24 × 10 MW turbines)
- Annual output: 500-540 GWh
- Capacity factor: 24-26%
- Basin area: 22.5 km²
- Tidal range: 8 m mean, 13.5 m maximum
- Barrage length: 750 m
- Status: Operating since 1966; >58 years of reliable operation
- Cumulative generation: >27,000 GWh
- Current LCOE: €0.018/kWh (capital recovered)

La Rance demonstrated technical feasibility and long-term reliability. After 20 years to recover costs, it now produces among the cheapest electricity in France.

**Sihwa Lake, South Korea (2011)**
- Capacity: 254 MW (10 × 25.4 MW turbines)
- Annual output: 550 GWh
- Capacity factor: 25%
- Basin area: ~30 km² (reduced from original 43 km²)
- Tidal range: 5.6 m mean, 7.8 m spring
- Status: Operating; world's largest tidal power station
- Construction cost: $298-560 million
- Secondary benefit: Water quality improvement in polluted lake

Sihwa was built by retrofitting an existing seawall, significantly reducing costs. It operates in flood-only mode to maximize water exchange for environmental remediation.

**Annapolis Royal, Canada (1984)**
- Capacity: 20 MW (single turbine)
- Annual output: ~50 GWh (when operating)
- Tidal range: Bay of Fundy (~7 m at site)
- Status: **Closed 2019** due to fish mortality concerns and structural issues
- Demonstrated technology but highlighted environmental challenges

**Smaller installations:**
- Jiangxia, China: 3.2 MW (1980)
- Kislaya Guba, Russia: 1.7 MW (1968, upgraded from 0.4 MW)
- Several small Chinese plants: <1 MW each

**Total global installed capacity: ~520 MW**

### Proposed Projects

**Severn Barrage, UK:**
- Proposed capacity: 8-15 GW (various configurations)
- Potential output: 15-25 TWh/year (5-7% of UK electricity)
- Estimated cost: £20-30 billion
- Status: Repeatedly studied and rejected (1925, 1981, 2010, ongoing)
- Main obstacles: Cost, environmental impact, financing structure
- Latest: Severn Estuary Commission (2024-25) recommended smaller demonstration projects

**Incheon Bay, South Korea:**
- Proposed capacity: 1,320 MW
- Status: Feasibility studies completed; development uncertain

**Garolim Bay, South Korea:**
- Proposed capacity: 520 MW
- Status: Basic design completed; paused

**Mersey Barrage, UK:**
- Proposed capacity: 700 MW
- Status: Conceptual; periodically revisited

**Gulf of Khambhat, India:**
- Potential capacity: 7,000 MW
- Status: Early feasibility stage

### Market and Policy Context

Tidal barrage development has stalled for decades due to:

1. **High capital costs**: Cannot compete with declining solar/wind costs
2. **Long payback periods**: 20+ years to recover investment
3. **Environmental concerns**: Habitat destruction, fish mortality
4. **Financing challenges**: Private sector unwilling without government support
5. **Alternative technologies**: Tidal stream turbines offer lower-impact option

Recent developments:
- UK NESO (National Energy System Operator) 2024 scenarios project 3-5 GW of tidal range energy needed by 2050
- Severn Estuary Commission (2025) recommended pathfinder projects to build evidence base
- Growing interest in tidal lagoons as lower-impact alternative

### Outlook

**Near-term (2025-2035):**
- No major new tidal barrages likely
- Possible small demonstration lagoon projects
- Continued operation of La Rance and Sihwa
- Focus shifts to tidal stream technology (underwater turbines)

**Medium-term (2035-2050):**
- If demonstration lagoons succeed, larger projects possible
- Severn scheme remains possibility if cost/environmental issues resolved
- South Korean and Chinese projects may advance
- Potential capacity: additional 1-5 GW globally

**Long-term potential:**
- Global technically feasible: 100-200 GW
- Economically viable (current costs): 10-30 GW
- Likely development by 2050: 5-15 GW

Tidal barrages will remain a niche technology, valuable at exceptional sites where large tidal ranges coincide with favorable geography, but unable to make major contribution to global electricity supply. Their primary advantages are:

- **Predictability**: Tides are perfectly predictable centuries in advance
- **Longevity**: 100+ year operational lifetime (vs. 25-30 years for wind/solar)
- **Reliability**: La Rance has operated continuously for nearly 60 years
- **Low operating costs**: Once built, marginal costs are minimal

The fundamental constraint is simple: there are very few places on Earth where the tides rise and fall enough to make barrage construction worthwhile, and most of those places have high ecological value that complicates development. Tidal barrages represent proven technology waiting for the right combination of site, finance, and policy alignment rather than a technology requiring fundamental breakthroughs.