# Hydropower

## Fundamental Principle

### Natural Asymmetry Exploited

Hydropower exploits the gravitational potential energy of water elevated above a reference point. The ultimate energy source is the Sun, which drives the hydrological cycle: solar radiation evaporates water from oceans and land surfaces, atmospheric circulation transports this moisture, and precipitation deposits it at elevation. Rivers then return water to the sea, and hydropower intercepts this flow to extract mechanical work.

The hydrological cycle represents approximately 23% of incoming solar radiation (roughly 40,000 TW of power globally). Of this, only a fraction appears as surface runoff suitable for hydropower. The theoretical global hydropower potential is estimated at 40,000-50,000 TWh/year, with technical potential around 16,000 TWh/year and economic potential perhaps 8,000-10,000 TWh/year.

### Key Physics

**Gravitational potential energy:**

The energy available from water at elevation is:

$$E = mgh$$

where m is the mass of water (kg), g is gravitational acceleration (9.81 m/s²), and h is the vertical drop or "head" (m).

**Hydraulic power:**

The theoretical power available from flowing water is:

$$P = \rho g Q H$$

where ρ is water density (~1000 kg/m³), Q is volumetric flow rate (m³/s), and H is the effective head (m).

For practical calculation: **P (kW) = 9.81 × Q (m³/s) × H (m) × η**

where η is the overall system efficiency (typically 0.85-0.93 for modern installations).

**Example calculations:**

-   Small stream: Q = 1 m³/s, H = 50 m → P ≈ 440 kW (at 90% efficiency)
-   Large river: Q = 1000 m³/s, H = 100 m → P ≈ 880 MW (at 90% efficiency)
-   Three Gorges: Q ≈ 900 m³/s average through turbines, H = 80.6 m design head, 32 × 700 MW turbines = 22.5 GW capacity

**Scaling relationships:**

-   Power scales linearly with both head and flow
-   Energy storage in a reservoir scales as: E = ρgVH, where V is reservoir volume
-   High-head sites can generate significant power from modest flows
-   Low-head sites require very large flows for equivalent power

## Conversion Mechanism

### Energy Capture

Water is collected either from natural river flow or from a reservoir created by a dam. The water is directed through a penstock (pressure conduit) to turbines located at a lower elevation. The potential energy converts to kinetic energy as water accelerates, then to mechanical energy as it drives turbine rotation.

### Hydropower Plant Types

**1. Storage (Reservoir) Hydropower**

A dam creates a reservoir, storing water and creating head. Water release is controlled, allowing generation to match demand.

_Characteristics_:

-   Dispatchable: can generate on demand
-   Provides energy storage (hours to seasons)
-   Enables flood control, irrigation, water supply
-   Highest environmental impact (land inundation, river alteration)
-   Capacity factors: 25-60% depending on purpose and hydrology

**2. Run-of-River Hydropower**

Diverts a portion of river flow through turbines with minimal or no storage. Generation follows natural river flow patterns.

_Characteristics_:

-   Limited dispatchability (follows river flow)
-   Lower environmental impact (no large reservoir)
-   More variable output (seasonal, weather-dependent)
-   Capacity factors: 30-60% depending on flow regime
-   Often lower capital cost per kW

**3. Pumped Storage Hydropower (PSH)**

Two reservoirs at different elevations connected by reversible pump-turbines. Water is pumped uphill during low-demand periods (storing energy) and released through turbines during high-demand periods.

_Characteristics_:

-   Energy storage, not generation (net energy consumer)
-   Round-trip efficiency: 70-87% (typically 80%)
-   Storage duration: hours to weeks (some seasonal)
-   Rapid response: seconds to minutes
-   Provides grid stability, frequency regulation, spinning reserve
-   Global capacity: 189 GW (2024), representing >90% of grid-scale electricity storage

**4. Diversion (Canal) Hydropower**

Channels water from a river through a canal or penstock to turbines, returning it downstream. No dam or minimal weir.

### Turbine Types

The turbine converts the kinetic energy of moving water into rotational mechanical energy. Turbine selection depends on head and flow characteristics.

| Turbine Type   | Head Range        | Flow        | Peak Efficiency | Mechanism                                              |
| -------------- | ----------------- | ----------- | --------------- | ------------------------------------------------------ |
| **Pelton**     | 300-1800 m (high) | Low         | ~90%            | Impulse: water jets strike buckets on wheel rim        |
| **Francis**    | 40-600 m (medium) | Medium-High | ~93%            | Reaction: mixed-flow through shaped runner blades      |
| **Kaplan**     | 10-70 m (low)     | High        | ~93%            | Reaction: axial-flow with adjustable propeller blades  |
| **Cross-flow** | 5-200 m           | Low-Medium  | ~85%            | Impulse: water passes through cylindrical runner twice |

**Pelton turbines** are impulse turbines: water accelerates through nozzles into high-velocity jets that strike cup-shaped buckets, extracting kinetic energy at atmospheric pressure. Well-suited for high-head, low-flow mountain installations. Multiple jets can be used for higher power.

**Francis turbines** are reaction turbines: water enters radially through guide vanes, flows through the runner, and exits axially. The runner is fully immersed; both pressure and velocity decrease across the blades. The most widely used turbine type, covering a broad range of heads and flows. Can achieve 93-95% efficiency at design point.

**Kaplan turbines** are axial-flow reaction turbines with adjustable runner blades (like a ship propeller) and adjustable guide vanes. The dual adjustment maintains high efficiency across a wide range of flows and heads. Essential for low-head, high-flow installations. Double-regulated Kaplan turbines maintain >90% efficiency from 15-100% of rated flow.

**Generator coupling**: Turbines drive synchronous generators, either directly (for low-speed turbines like Kaplan) or through gearboxes (for high-speed small turbines). Large hydro generators are among the most efficient rotating machines, with efficiencies exceeding 98%.

### Conversion Efficiency

Overall wire-to-water efficiency for modern hydropower:

-   Penstock/intake losses: 1-5%
-   Turbine efficiency: 85-95%
-   Generator efficiency: 95-99%
-   Transformer losses: 0.5-1%

**Total system efficiency: 80-93%**

This is far higher than thermal power plants (33-60%) and comparable to the best wind turbines (45-50% of Betz limit, or ~27-30% of wind energy).

## Theoretical Limits

### Thermodynamic Efficiency

Unlike heat engines, hydropower is not constrained by Carnot efficiency. The conversion is mechanical, not thermal, so there is no fundamental thermodynamic limit analogous to Carnot or Shockley-Queisser.

The theoretical maximum is 100% conversion of gravitational potential energy to electricity. Practical limits arise from:

-   Friction losses in penstocks and draft tubes
-   Turbulence and flow separation in turbines
-   Mechanical friction in bearings and seals
-   Electrical losses in generators and transformers

Modern large hydro plants approach 93-95% efficiency at design conditions.

### Capacity Factor Constraints

Unlike installed capacity (which is limited by turbine size), energy production is constrained by water availability:

-   Reservoirs provide storage but lose water to evaporation
-   Run-of-river plants depend entirely on river flow
-   Seasonal variation in precipitation affects all plants
-   Climate change is altering hydrological patterns

Global average capacity factor for hydropower is approximately 40-45%, though individual plants range from 20% to over 60% depending on hydrology and operating regime.

### Energy Density

Hydropower has exceptional energy density compared to other renewables:

-   A 100m head with 1000 kg of water stores 0.98 MJ (0.27 kWh)
-   Three Gorges reservoir: 39.3 km³ at 80m average head ≈ 8.5 TWh storage capacity
-   For comparison: 1 kg of gasoline contains 46 MJ, but only ~15 MJ is recoverable as mechanical work

The power density of hydropower (W/m² of reservoir or watershed area) varies enormously:

-   High-head alpine plants: 50-500 W/m² of reservoir
-   Low-head reservoir plants: 1-20 W/m² of reservoir
-   Run-of-river: difficult to compare (minimal land footprint)

## Practical Limitations

### Site Constraints

Hydropower requires specific geography:

-   Adequate water flow (precipitation, catchment area)
-   Suitable topography (head, dam sites, geology)
-   Proximity to load centres or transmission
-   Acceptable environmental and social impacts

The best sites have largely been developed in mature markets (Europe, North America, Japan). Significant untapped potential remains in Africa (11% of 600+ GW potential developed), South America, and parts of Asia.

### Hydrological Variability

Water availability varies across multiple timescales:

-   **Seasonal**: snowmelt, monsoons, dry seasons
-   **Interannual**: wet years vs. drought years
-   **Climate change**: shifting precipitation patterns, glacier retreat

Droughts can severely curtail generation. In 2023, drought reduced global hydropower output by ~5%, demonstrating vulnerability to climate variability. Reservoir storage provides buffer but cannot fully compensate for multi-year droughts.

### Environmental and Social Impacts

**Ecological impacts**:

-   River fragmentation: dams block fish migration, fragmenting populations
-   Flow regime alteration: affects downstream ecosystems, sediment transport
-   Thermal stratification: reservoirs develop temperature layers affecting water quality
-   Habitat loss: reservoirs inundate terrestrial ecosystems

**Greenhouse gas emissions**:

-   Reservoirs, especially in tropical regions, can emit significant methane (CH₄)
-   Decomposition of flooded vegetation releases CO₂ and CH₄
-   Emissions vary enormously: 4-80+ gCO₂e/kWh depending on climate, age, and reservoir characteristics
-   Some tropical reservoirs emit more GHGs per kWh than gas-fired plants
-   Temperate reservoirs typically emit <20 gCO₂e/kWh
-   Emissions decrease over time as organic matter depletes
-   Reservoirs account for ~5% of global anthropogenic methane emissions

**Social impacts**:

-   Displacement: 40-80 million people displaced by large dams over 20th century
-   Loss of agricultural land, cultural sites, communities
-   Downstream impacts on fishing, agriculture, water supply

**Sediment trapping**:

-   Dams trap sediment, starving downstream deltas and coastlines
-   Reduces reservoir capacity over time (sedimentation)
-   Affects downstream agriculture and ecosystems

### Aging Infrastructure

Much of the global hydropower fleet is aging:

-   Average age of US dams: ~60 years
-   Many plants need modernization, refurbishment
-   Dam safety concerns in some regions
-   Relicensing requirements create opportunities for environmental improvements

Modernization can increase efficiency by 5-10% and extend plant life by decades.

## Scaling Characteristics

### Project Scale Range

Hydropower spans an enormous range of scales:

| Category | Capacity      | Characteristics                     |
| -------- | ------------- | ----------------------------------- |
| Pico     | <5 kW         | Off-grid, single households         |
| Micro    | 5-100 kW      | Small communities, farms            |
| Mini     | 100 kW - 1 MW | Villages, small industries          |
| Small    | 1-30 MW       | Regional grids, run-of-river        |
| Large    | 30 MW - 1 GW  | Major infrastructure, reservoirs    |
| Giant    | >1 GW         | National significance, major rivers |

The largest plants exceed 20 GW; the smallest are measured in watts. This scalability is unique among dispatchable renewable sources.

### Economies of Scale

Large plants benefit from significant economies of scale:

-   Cost per kW decreases with size (to a point)
-   Large turbines are more efficient than small ones
-   Civil works cost per kW decreases with scale
-   O&M costs per kWh decrease with scale

However, large projects face:

-   Longer development timelines (often 10+ years)
-   Higher absolute investment (billions of dollars)
-   Greater environmental and social impacts
-   Political and financing complexity

Small hydro (<30 MW) avoids many large-project challenges but at higher cost per kWh.

### Global Distribution

Hydropower potential is geographically uneven:

-   Concentrated in mountainous regions with high precipitation
-   Major resources in South America, Africa, Central Asia, Southeast Asia
-   Mature markets (Europe, North America, Japan) largely developed
-   Africa has developed only 11% of 600+ GW potential

### Fleet Characteristics

Global hydropower fleet (end 2024):

-   Total capacity: ~1,250-1,400 GW (including PSH)
-   Conventional hydropower: ~1,060-1,210 GW
-   Pumped storage: ~189 GW
-   Annual generation: ~4,578 TWh (14% of global electricity)

## Current Status

### Global Deployment (2024)

**Installed capacity**: ~1,250-1,400 GW total

-   Conventional: ~1,060-1,210 GW
-   Pumped storage: 189 GW

**2024 additions**: 24.6 GW total

-   Conventional: 16.2 GW
-   Pumped storage: 8.4 GW (5% growth)

**Annual generation**: 4,578 TWh (up 10% from drought-affected 2023)

-   14.3% of global electricity
-   Largest source of renewable electricity (ahead of wind + solar combined for generation, though not for new capacity)
-   Equivalent to avoiding 2.2 billion tonnes CO₂ compared to gas generation

**Top countries by installed capacity**:

1. China: ~420 GW (adding 14.4 GW in 2024)
2. Brazil: ~110 GW
3. Canada: ~82 GW
4. United States: ~80 GW
5. Russia: ~55 GW

**Top countries for 2024 additions**: China (14.4 GW), Tanzania (1.9 GW), Ethiopia (1.2 GW), Bhutan (1.0 GW), Pakistan

### Major Installations

| Plant        | Country         | Capacity | Annual Generation | Completed |
| ------------ | --------------- | -------- | ----------------- | --------- |
| Three Gorges | China           | 22.5 GW  | ~100-112 TWh      | 2012      |
| Baihetan     | China           | 16.0 GW  | ~60 TWh           | 2022      |
| Itaipu       | Brazil/Paraguay | 14.0 GW  | ~90-103 TWh       | 1984      |
| Xiluodu      | China           | 13.9 GW  | ~55 TWh           | 2014      |
| Belo Monte   | Brazil          | 11.2 GW  | ~40 TWh           | 2019      |
| Guri         | Venezuela       | 10.2 GW  | ~50 TWh           | 1986      |

Three Gorges and Itaipu generate roughly equal annual energy despite the large capacity difference because the Paraná River has steadier year-round flow than the seasonally variable Yangtze.

### Pumped Storage Growth

PSH is experiencing accelerating growth:

-   Global capacity: 189 GW (2024)
-   2024 additions: 8.4 GW (up from historical 2-4 GW/year average)
-   Pipeline: ~600 GW in development globally
-   China target: 120 GW PSH by 2030 (on track to exceed)
-   Europe pipeline: 52.9 GW in development

PSH provides >90% of global grid-scale electricity storage capacity. As variable renewables (wind, solar) grow, PSH becomes increasingly valuable for grid stability.

### Costs

**Capital costs** (highly site-specific):

-   Large hydro: $600-4,500/kW (average ~$2,800/kW for 2023 projects)
-   Small hydro: $1,500-6,000/kW
-   Adding hydro to existing dam: $450-1,500/kW
-   Pumped storage: $1,500-4,000/kW

**LCOE** (2023 global weighted average):

-   Large hydro: $0.057/kWh (range $0.02-0.19/kWh)
-   Small hydro: $0.06-0.15/kWh
-   Among the cheapest electricity sources where good resources exist

**Operating costs**:

-   O&M: 1-4% of capital cost annually (typically 2-2.5% for large plants)
-   Very long asset life: 50-100+ years with refurbishment
-   Some of the oldest plants (>100 years) still operate

### Workforce and Industry

-   Global hydropower workforce: 2.3+ million jobs (2024)
-   Major turbine manufacturers: Voith, GE Vernova, Andritz, Dongfang Electric
-   Engineering/construction: global network of specialized firms
-   Operating companies: mix of state utilities, IPPs, international developers

### Development Pipeline

-   Global pipeline: 1,075+ GW (including ~600 GW PSH, ~475 GW conventional)
-   Most under-construction capacity expected operational by 2030
-   Potential shortfall of 60-70 GW vs. IRENA "tripling renewables" target
-   Africa represents major growth frontier (600+ GW potential, 11% developed)

### Research Frontiers

**Technology improvements**:

-   Advanced turbine designs: fish-friendly, higher efficiency at part load
-   Variable-speed pump-turbines: improved efficiency and grid services
-   Digital twins and AI: optimized operations, predictive maintenance
-   Floating solar on reservoirs: hybrid generation, reduced evaporation

**Environmental mitigation**:

-   Improved fish passage: innovative ladders, "salmon cannons", trap-and-haul
-   Environmental flows: mimicking natural flow regimes
-   Sediment management: flushing, bypass, downstream reinjection
-   Methane capture from reservoirs

**New applications**:

-   Non-powered dam conversions: adding generation to existing infrastructure
-   Underground/seawater PSH: expanding site options
-   Small/micro hydro standardization: reducing costs
-   Hybrid systems: hydro + solar + storage

### Outlook

Hydropower faces a paradox:

-   Essential for grid stability as variable renewables grow
-   Mature technology with limited cost reduction potential
-   Best sites in developed regions already built
-   Environmental and social concerns constrain new large projects
-   Climate change threatens reliability in some regions

Expected trajectory:

-   20-30 GW/year additions through 2030 (below net-zero requirements)
-   Shift toward Africa, Asia, South America for new conventional
-   Rapid PSH growth globally, especially China and Europe
-   Modernization of aging fleet in mature markets
-   Growing role in grid flexibility and storage

To meet climate targets, hydropower capacity would need to roughly double by 2050, requiring ~$130 billion/year investment vs. current ~$50 billion/year. Whether this acceleration occurs depends on streamlined permitting, sustainable development practices, and recognition of hydropower's unique value for grid stability.
