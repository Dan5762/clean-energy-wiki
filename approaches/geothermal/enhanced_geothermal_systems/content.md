# Enhanced Geothermal Systems (EGS)

## Fundamental Principle

### Natural Asymmetry Exploited

::: facet ultimate_source
Earth's interior contains enormous thermal energy from two sources: primordial heat from planetary formation (~4.5 billion years ago when gravitational accretion and differentiation released energy) and ongoing radioactive decay of uranium, thorium, and potassium in the crust and mantle. This creates a temperature gradient of approximately 25-30°C per kilometer of depth, meaning temperatures of 150-200°C exist at 3-5 km depth across vast continental areas.

Conventional hydrothermal geothermal requires three elements to coexist naturally: heat, fluid, and permeability. These conditions occur together in only a small fraction of Earth's surface. The fundamental insight behind Enhanced Geothermal Systems is that heat is far more abundant than the combination of heat, fluid, and permeability. EGS creates artificial reservoirs in hot, low-permeability rock through hydraulic stimulation, transforming the geothermal resource base from geographically limited sites to virtually anywhere with sufficient geothermal gradient.
:::

### Ultimate Source

::: facet ultimate_source
The thermal energy extracted by EGS originates from:
- **Primordial heat** (~40-50%): Residual thermal energy from Earth's formation and core differentiation
- **Radiogenic heat** (~50-60%): Ongoing decay of long-lived isotopes (²³⁸U, ²³²Th, ⁴⁰K) in crustal rocks

Total Earth heat flow is approximately 47 TW, with an average surface heat flux of 87 mW/m². While this is negligible compared to solar flux (~1000 W/m²), the integrated thermal energy in accessible crustal rock is enormous: the heat content in the upper 10 km of continental crust exceeds 10²⁶ joules, equivalent to thousands of years of current global energy consumption.
:::

### Key Physics

**Geothermal gradient:**

Temperature increases with depth according to the geothermal gradient:

::: equation geothermal_gradient
$$\frac{dT}{dz} \approx 25-30°C/km$$
:::

This average varies significantly: volcanic regions may exceed 100°C/km while stable continental shields may be 15-20°C/km.

**Conductive heat flow:**

Heat moves from Earth's interior to the surface primarily by conduction through rock:

::: equation heat_flow
$$q = -k\frac{dT}{dz}$$
:::

Where q is heat flux (W/m²), k is thermal conductivity (typically 2-3 W/m·K for crusite rock), and dT/dz is the temperature gradient.

**Target conditions:**

At 3-5 km depth, temperatures reach 150-200°C, sufficient for efficient electricity generation. At 5-7 km, temperatures of 200-250°C enable higher thermodynamic efficiency. The challenge is that most rock at these depths lacks natural permeability for fluid circulation.

---

## Conversion Mechanism

### Energy Capture and Conversion

::: facet conversion_pathway
EGS extracts thermal energy from hot rock through engineered fluid circulation and converts it to electricity via a thermodynamic power cycle:

$$\text{Geothermal heat} \rightarrow \text{Circulating fluid} \rightarrow \text{Heat exchanger} \rightarrow \text{Turbine/generator} \rightarrow \text{Electricity}$$

The process requires creating permeability in hot rock through hydraulic stimulation, then circulating water through the engineered fracture network to extract heat. This is a thermal intermediate process, subject to Carnot efficiency limits, but provides continuous baseload power.
:::

### Physical Processes

**1. Reservoir creation (stimulation)**

EGS creates permeability through several mechanisms:

*Hydraulic shearing (hydroshearing):* The dominant mechanism. Injected fluid increases pore pressure, reducing effective normal stress on pre-existing fractures. When pore pressure exceeds a critical threshold, fractures slip in shear, dilating permanently.

::: equation mohr_coulomb
$$\tau = c + \mu(\sigma_n - P)$$
:::

Where τ is shear stress at failure, c is cohesion, μ is coefficient of friction (~0.6-0.85), σ_n is normal stress, and P is pore pressure. Increasing P allows slip at lower shear stress, creating self-propping fractures.

*Hydraulic fracturing:* Creates new tensile fractures when fluid pressure exceeds minimum principal stress plus rock tensile strength:

::: equation breakdown_pressure
$$P_{breakdown} = 3\sigma_3 - \sigma_1 + T - P_0$$
:::

*Thermal stimulation:* Cold water injection causes thermal contraction:

::: equation thermal_contraction
$$\Delta L = \alpha L \Delta T$$
:::

Where α is thermal expansion coefficient (~10⁻⁵/°C for granite). This creates thermal stresses that can fracture rock or enhance fracture apertures.

**2. Heat extraction**

Water circulates from injection well through the fractured reservoir to production well, extracting heat by conduction through fracture walls:

::: equation heat_transfer
$$q = h A (T_{rock} - T_{fluid})$$
:::

The heat transfer coefficient h depends on flow velocity, fluid properties, and fracture geometry. Target flow rates are 50-100 kg/s per well pair.

**3. Power generation**

Hot fluid (typically 150-200°C) drives a power cycle:
- **Binary ORC (Organic Rankine Cycle):** Most common for EGS temperatures. Working fluid (isobutane, isopentane) with lower boiling point than water enables efficient conversion at moderate temperatures
- **Flash steam:** For higher temperatures (>180°C), pressure reduction flashes water to steam
- **Combined cycles:** Some plants use both flash and binary stages

**4. Fluid reinjection**

Cooled fluid returns to the injection well, creating a closed loop. Water loss through the reservoir should be <10% for sustainable operation.

### Conversion Chain

$$\text{Hot rock} \xrightarrow{\text{circulation}} \text{Hot water (150-250°C)} \xrightarrow{\text{binary/flash}} \text{Turbine rotation} \xrightarrow{\text{generator}} \text{AC electricity}$$

---

## Theoretical Limits

::: facet theoretical_limit
EGS efficiency is bounded by the Carnot limit for heat engines operating between reservoir temperature (T_h) and rejection temperature (T_c):
:::

::: equation carnot_efficiency
$$\eta_{Carnot} = 1 - \frac{T_c}{T_h}$$
:::

### Origin of the Limit

For typical EGS conditions:
- Hot reservoir: 175°C (448 K)
- Cold rejection: 40°C (313 K)
- Carnot efficiency: 1 - 313/448 = **30%**

For deeper, hotter reservoirs:
- Hot reservoir: 250°C (523 K)
- Cold rejection: 40°C (313 K)
- Carnot efficiency: 1 - 313/523 = **40%**

### Practical Efficiency

Actual plant efficiencies are significantly lower due to:
- **Irreversibilities** in heat exchangers, turbines, and pumps
- **Parasitic loads** for circulation pumps (15-30% of gross output)
- **Temperature differentials** required for heat transfer

| Plant Type | Temperature Range | Net Efficiency |
|------------|-------------------|----------------|
| Binary ORC | 100-180°C | 8-13% |
| Flash steam | 180-250°C | 10-18% |
| Dry steam | >235°C | 15-25% |

EGS plants typically achieve 40-60% of the theoretical Carnot efficiency.

### Key Design Tradeoffs

**Depth vs. efficiency:** Deeper drilling accesses higher temperatures (better Carnot efficiency) but dramatically increases cost. Current economics favor 3-5 km depths; advancing drilling technology may enable 7+ km.

**Flow rate vs. thermal drawdown:** Higher flow rates increase power output but accelerate reservoir cooling. Sustainable operation requires balancing extraction against the reservoir's thermal mass.

---

## Practical Limitations

### Induced Seismicity

::: limitation induced_seismicity
Fluid injection can trigger earthquakes by increasing pore pressure on pre-existing faults. Most induced events are microseismic (M<2, unfelt), but larger events have occurred:

| Project | Year | Magnitude | Outcome |
|---------|------|-----------|---------|
| Basel, Switzerland | 2006 | M3.4 | Project cancelled, ~$9M damages |
| Pohang, South Korea | 2017 | M5.4 | Project cancelled, injuries, major damages |
| Strasbourg, France | 2020 | M3.6 | Project terminated |

Modern projects use traffic light protocols, careful site selection, and improved stimulation techniques. Utah FORGE achieved maximum M1.9 during commercial-scale stimulation; Fervo Cape Station reports no felt seismicity.
:::

### Drilling Costs

::: limitation drilling_cost
Drilling represents 50-70% of EGS project costs. Each well costs $5-20 million depending on depth and geology. High-temperature conditions (>200°C) challenge equipment, fluids, and electronics. However, costs are declining rapidly: Fervo reported 70% reduction in drilling time between initial and subsequent wells at Cape Station, with costs falling from $9.4M to $4.8M per horizontal well.
:::

### Reservoir Sustainability

::: limitation thermal_drawdown
Unlike hydrothermal systems with natural recharge, EGS reservoirs cool over time as heat is extracted. Thermal drawdown depends on:
- Flow rate (higher = faster cooling)
- Fracture spacing (affects heat exchange surface area)
- Rock thermal properties
- Reservoir volume

Sustainable operation requires maintaining economic temperatures for 20-30+ years, necessitating careful reservoir design and flow management.
:::

### Water Requirements

::: limitation water_loss
EGS requires water for stimulation and circulation. Water loss through the fractured reservoir should be <10% for sustainable operation. Modern projects achieve >90% water recovery (FORGE 30-day test). Makeup water requirements are modest but may be significant in arid regions.
:::

### Technical Challenges

::: limitation technical_maturity
Key technical challenges include:
- **Short-circuiting:** Preferential flow paths that bypass heat exchange
- **Scaling and corrosion:** Managing geochemistry in engineered systems
- **High-temperature materials:** Equipment for 250°C+ conditions
- **Reservoir characterization:** Predicting fracture network behavior
:::

### Permitting and Regulatory

::: limitation permitting
EGS faces lengthy permitting processes:
- US federal lands: Multi-year BLM timelines
- Induced seismicity regulations evolving post-Basel
- Public acceptance challenges due to "fracking" association

DOE estimates permitting delays add years and substantial cost to projects. Streamlined processes could significantly accelerate deployment.
:::

---

## Scaling Characteristics

### Output Scaling Behavior

::: facet scale_regime
EGS output scales with the number of well pairs and reservoir volume. Unlike truly modular technologies (solar PV), EGS requires significant site-specific development: geological characterization, drilling, stimulation, and power plant construction. However, multiple wells can be drilled from single pads, and larger projects achieve economies of scale in power plant equipment and operations.
:::

### Viable Scale Range

**Minimum:** Single well pair systems produce 1-10 MW. Fervo's Project Red (3.5 MW) represents the minimum commercial scale.

**Typical:** Commercial plants expected at 50-400 MW. Cape Station targets 400 MW initially, scalable to 2 GW.

**Maximum:** No fundamental upper limit, constrained by available land and grid interconnection. Large geothermal complexes (The Geysers, California) exceed 1 GW from multiple plants.

### Land Requirements

EGS has a small surface footprint compared to solar and wind:
- Typical: 10-50 hectares per 100 MW
- Subsurface reservoir: ~1 km³ per 100 MW over project lifetime
- Well pads can be consolidated with directional drilling

### Resource Potential

| Region | EGS Potential | Notes |
|--------|---------------|-------|
| Global (8 km depth) | ~600 TW | 2,000× conventional geothermal |
| United States | 70+ TW | NREL estimates 4,349 GW at 3-7 km |
| China | ~50 TW | Second largest potential |
| Europe | ~40 TW | 35× current installed capacity |
| Africa | ~115 TW | Largest untapped potential |

At 5 km depth, EGS technical potential reaches ~42 TW globally. Beyond 7 km, virtually every continental region has suitable resources.

### Comparison to Other Sources

| Source | Geographic Constraint | Dispatchable | Land Intensity |
|--------|----------------------|--------------|----------------|
| EGS | Nearly global | Yes | Low |
| Conventional geothermal | Plate boundaries only | Yes | Low |
| Solar PV | Global (varies) | No | High |
| Wind | Global (varies) | No | Moderate |
| Nuclear | Global | Yes | Low |

EGS uniquely combines near-universal geographic availability with dispatchable, baseload operation.

---

## Current Status

### Technology Readiness Level

| Component | TRL | Status |
|-----------|-----|--------|
| Horizontal drilling | 9 | Mature (from oil/gas) |
| Hydraulic stimulation | 8 | Proven at scale |
| Reservoir creation | 7 | Demonstrated at FORGE, Fervo |
| Commercial operation | 7 | First plant online (2023) |
| Multi-zone completion | 7-8 | Demonstrated, optimizing |

EGS has transitioned from research to early commercial deployment.

### Levelised Cost of Energy

| Timeframe | LCOE |
|-----------|------|
| Current (2024) | $80-150/MWh |
| DOE 2035 target | $45/MWh |
| Long-term potential | $30-50/MWh |

Cost reduction pathways include drilling improvements (50% potential), learning curves (35% rate observed), and scale effects.

### Major Projects

**Utah FORGE (DOE Research Facility):**
- Location: Beaver County, Utah
- Depth: 2.6 km, 200°C
- Achievement: First successful commercial-scale EGS reservoir creation in US (2024)
- 12-stage stimulation, >90% water recovery, maximum M1.9 seismicity
- All data publicly available for industry benefit

**Fervo Project Red (First US Commercial EGS):**
- Location: Humboldt County, Nevada
- Capacity: 3.5 MW
- Online: November 2023
- Customer: Google/NV Energy

**Fervo Cape Station (Commercial Scale):**
- Location: Beaver County, Utah
- Planned capacity: 400 MW (scalable to 2 GW)
- Timeline: 100 MW by October 2026, 400 MW by 2028
- Customer: Southern California Edison (320 MW PPA)
- 15 wells drilled as of 2024, reservoir temperatures >220°C

**International:**
- Soultz-sous-Forêts (France): 1.5 MW, operating since 2008, longest-running EGS
- Landau/Insheim (Germany): 3-5 MW scale, commercial since 2007
- Rittershoffen (France): 24 MW thermal for industrial heat

### Research Frontiers

**Superhot rock geothermal:** Targeting temperatures >375°C where water becomes supercritical, dramatically increasing power output per well. Technical challenges remain significant.

**Closed-loop systems (AGS):** Alternative approach using sealed pipes for heat exchange, eliminating seismicity risk but with lower power output per well.

**Advanced drilling:** Millimeter-wave, plasma, and other non-mechanical drilling concepts could dramatically reduce costs for deep wells.

**Machine learning:** AI/ML for reservoir characterization, stimulation optimization, and seismicity prediction.

---

## Historical Development

### Early Research (1970s-1990s)

**Fenton Hill, New Mexico (1974-1995):** First Hot Dry Rock project demonstrated heat extraction from engineered fractures in crystalline rock. Achieved 10 MW thermal from 3.5 km depth. Project ended due to budget cuts, not technical failure.

**Rosemanowes, UK (1977-1991):** Established that natural fractures control reservoir behavior. Pioneered understanding of hydroshearing vs. hydrofracturing.

### Demonstration Era (1990s-2010s)

**Soultz-sous-Forêts, France (1987-present):** Longest-running EGS project. First grid-connected EGS power (2008). Demonstrated long-term operation but at costs above commercial viability.

**Basel, Switzerland (2006):** M3.4 induced earthquake led to project cancellation and major setback for European EGS development. Established need for rigorous seismic risk assessment.

### Modern Era (2020s)

**Technology transfer from shale:** Horizontal drilling, multi-zone stimulation, and fiber-optic sensing adapted from oil/gas industry dramatically improved EGS prospects.

**Commercial breakthrough:** Fervo's Project Red (2023) demonstrated commercial viability. Rapid cost reductions suggest EGS may follow learning curves similar to solar PV and shale development.

---

## Summary

### Key Specifications

| Parameter | Value |
|-----------|-------|
| Current global capacity | ~4 MW (first commercial plant 2023) |
| US resource potential (3-7 km) | 4,349 GW |
| Global resource potential (8 km) | ~600 TW |
| Typical depth | 2-6 km |
| Target temperature | >150°C |
| Current LCOE | $80-150/MWh |
| Target LCOE (2035) | $45/MWh |
| Capacity factor | 80-90% |
| DOE 2035 target | 38 GW (US) |
| DOE 2050 target | 90 GW (US) |

### Strengths and Limitations

**Strengths:**
- Vast resource base (anywhere with sufficient geothermal gradient)
- Firm, dispatchable power (24/7, 80-90% capacity factor)
- Small land footprint
- Long project lifetime (30+ years)
- Leverages mature oil/gas technology and workforce
- No fuel cost, zero direct emissions, domestic energy source

**Limitations:**
- High current costs ($80-150/MWh)
- Induced seismicity risk (requires careful site selection and management)
- Long development timelines (years from exploration to operation)
- High upfront capital (drilling-dominated costs)
- Technology still maturing (limited operational track record)
- Water requirements for circulation

### Role in Energy Landscape

::: facet scale_regime
EGS represents a potential transformation of geothermal from a niche resource to a major contributor to global electricity supply. Unlike conventional geothermal, which is limited to plate boundaries and volcanic regions, EGS can theoretically be deployed anywhere with sufficient heat at accessible depths.

For the energy transition, EGS offers something unique: firm, dispatchable, carbon-free electricity available nearly anywhere. As solar and wind reach high penetrations, the value of reliable clean power increases. EGS could fill this role while providing additional benefits including district heating, industrial process heat, and potential synergies with hydrogen production or direct air capture.

The combination of horizontal drilling, multi-zone stimulation, and fiber-optic monitoring borrowed from the oil/gas industry has dramatically improved EGS prospects. Fervo's rapid cost reductions suggest EGS may follow a learning curve similar to solar PV or shale, transitioning from expensive curiosity to mainstream energy source within 1-2 decades. The key near-term test is whether developers can achieve commercial-scale deployment while maintaining acceptable seismicity and demonstrating sustained reservoir performance.
:::
