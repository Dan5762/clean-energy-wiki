# Hydrothermal Geothermal Energy

## Fundamental Principle

### Natural Asymmetry Exploited

::: facet ultimate_source
Geothermal energy exploits the temperature difference between Earth's hot interior and its cool surface. Earth's core reaches 5000-6000°C while the surface averages ~15°C, creating a thermal gradient that drives continuous heat flow outward. In hydrothermal systems, this heat concentrates where geological conditions allow hot water or steam to accumulate in permeable rock formations, creating naturally occurring underground reservoirs that can be tapped for energy extraction.
:::

### Ultimate Source

::: facet ultimate_source
Geothermal energy derives from thermal energy stored within Earth's interior, originating from two primary sources:

**Primordial heat (~40-50%):** When Earth formed approximately 4.5 billion years ago, accretion heating (kinetic energy from colliding planetesimals), gravitational compression, and core differentiation (dense iron sinking to form the core) generated enormous thermal energy. This primordial heat has been slowly dissipating ever since.

**Radiogenic heat (~50-60%):** The decay of long-lived radioactive isotopes continuously generates heat:

| Isotope | Half-life (billion years) | Share of radiogenic heat |
|---------|---------------------------|--------------------------|
| Uranium-238 (²³⁸U) | 4.47 | ~40% |
| Thorium-232 (²³²Th) | 14.0 | ~40% |
| Potassium-40 (⁴⁰K) | 1.25 | ~16% |
| Uranium-235 (²³⁵U) | 0.70 | ~4% |

Earth's total internal heat flow to the surface is approximately 47 TW, far exceeding total human energy consumption (~18 TW), though only a small fraction is practically accessible.
:::

### Key Physics

**Geothermal gradient:**

Temperature increases with depth below Earth's surface at a rate called the geothermal gradient:

::: equation geothermal_gradient
$$\frac{dT}{dz} \approx 25-30°C/km$$
:::

This average varies significantly by tectonic setting:

| Setting | Gradient (°C/km) | Examples |
|---------|------------------|----------|
| Stable continental interior | 15-25 | Canadian Shield |
| Normal continental | 25-30 | Most continents |
| Active margins | 40-80 | Cascades, Andes |
| Volcanic/rift zones | 80-200+ | Iceland, East African Rift |

**Conductive heat flow:**

Heat flows from Earth's interior to the surface via conduction:

::: equation heat_flow
$$q = -k\frac{dT}{dz}$$
:::

Where q is heat flux (W/m²), k is thermal conductivity (~2-4 W/m·K for rock), and dT/dz is the temperature gradient. Average surface heat flow is ~87 mW/m² globally—roughly 0.03% of solar flux, which is why geothermal requires accessing concentrated subsurface heat rather than collecting surface heat flow.

**Hydrothermal reservoir requirements:**

For a hydrothermal system to exist, three elements must coexist naturally:
1. **Heat source:** Hot rock (typically >150°C for electricity generation)
2. **Fluid:** Water or steam to transport heat
3. **Permeability:** Fractures or porous rock allowing fluid circulation

These conditions occur together primarily at tectonic plate boundaries, volcanic regions, and rift zones.

---

## Conversion Mechanism

### Energy Capture and Conversion

::: facet conversion_pathway
Hydrothermal geothermal plants convert thermal energy from underground reservoirs into electricity through steam turbines or binary cycle systems. Hot water or steam is extracted from production wells, its thermal energy drives a turbine-generator system, and cooled fluid is typically reinjected to maintain reservoir pressure. This is a thermal intermediate process, subject to Carnot efficiency limits.
:::

### Physical Processes

**1. Fluid extraction**

Production wells tap the hydrothermal reservoir, bringing hot water or steam to the surface. Well depths typically range from 500m to 3000m depending on resource characteristics.

**2. Phase separation (for liquid-dominated systems)**

Hot pressurized water "flashes" to steam when pressure drops:

::: equation flash_fraction
$$x_{flash} = \frac{h_1 - h_f}{h_{fg}}$$
:::

Where x_flash is the mass fraction that becomes steam, h₁ is incoming fluid enthalpy, h_f is liquid enthalpy at flash pressure, and h_fg is latent heat of vaporization. For water at 250°C flashing to 1 bar, approximately 15-20% becomes steam.

**3. Power generation**

Three main technologies convert geothermal heat to electricity:

*Dry steam plants:* Steam from vapor-dominated reservoirs flows directly through turbines. Simplest design, highest efficiency (20-30%), but limited to rare vapor-dominated resources (~5% of hydrothermal sites).

*Flash steam plants:* Hot water flashes to steam in separators. Single-flash (10-15% efficiency), double-flash (15-20%), or triple-flash configurations extract progressively more energy. Most common technology (~65% of global capacity).

*Binary cycle plants:* Geothermal fluid heats a secondary working fluid (isobutane, isopentane) with lower boiling point. Working fluid vaporizes and drives turbine. Enables use of moderate-temperature resources (100-180°C). Near-zero emissions since geofluid remains isolated.

**4. Heat rejection**

Waste heat is rejected via cooling towers (evaporative) or air-cooled condensers. Condensed working fluid recirculates; cooled geofluid is typically reinjected.

**5. Reinjection**

Cooled geothermal fluid returns to the reservoir via injection wells, maintaining pressure and extending field life. The Geysers uses 20 million gallons/day of treated wastewater for this purpose.

### Conversion Chain

$$\text{Hot reservoir} \xrightarrow{\text{wells}} \text{Steam/hot water} \xrightarrow{\text{turbine}} \text{Mechanical rotation} \xrightarrow{\text{generator}} \text{AC electricity}$$

---

## Theoretical Limits

::: facet theoretical_limit
Geothermal power conversion is fundamentally limited by the Carnot efficiency, which depends on the temperature difference between the hot reservoir and the cold sink. Lower geothermal temperatures compared to combustion result in lower theoretical maximum efficiencies (typically 26-45% Carnot limit).
:::

### Origin of the Limit

Maximum theoretical efficiency for any heat engine:

::: equation carnot_efficiency
$$\eta_{Carnot} = 1 - \frac{T_c}{T_h}$$
:::

Where temperatures are in Kelvin.

| Hot side (°C) | Cold side (°C) | Carnot limit |
|---------------|----------------|--------------|
| 150 | 40 | 26% |
| 200 | 40 | 34% |
| 250 | 40 | 40% |
| 300 | 40 | 45% |

### Practical Efficiency

Actual plant efficiencies are 40-60% of Carnot due to:
- Irreversibilities in heat exchange
- Turbine inefficiency
- Parasitic loads (pumps, fans, gas extraction)
- Practical temperature differences required for heat transfer

| Plant Type | Temperature Range | Net Efficiency |
|------------|-------------------|----------------|
| Dry steam | >180°C | 20-30% |
| Single flash | 180-250°C | 10-15% |
| Double flash | 230-300°C | 15-20% |
| Binary ORC | 100-180°C | 8-15% |

### Exergy Analysis

Exergy (available work) better characterizes geothermal resource quality:

::: equation specific_exergy
$$e = (h - h_0) - T_0(s - s_0)$$
:::

Where h, s are enthalpy and entropy of geofluid, and subscript 0 denotes ambient reference state.

Utilization efficiency compares actual power to exergy input:

::: equation utilization_efficiency
$$\eta_u = \frac{W_{net}}{\dot{m} \cdot e}$$
:::

Typical values: dry steam 50-70%, flash 35-50%, binary 25-45%.

### Key Design Tradeoffs

**Temperature vs. resource availability:** Higher temperatures enable better efficiency but are geographically scarcer. Binary plants trade lower efficiency for access to more moderate-temperature resources.

**Parasitic loads:** Geothermal plants have significant auxiliary power requirements (15-40% of gross output), especially binary plants with circulation pumps and cooling systems.

---

## Practical Limitations

### Geographic Constraint

::: limitation geographic_constraint
Hydrothermal resources are geographically concentrated at tectonic plate boundaries, volcanic regions, and rift zones. This limits deployment to specific regions: the Pacific Ring of Fire, East African Rift, Mediterranean, and Iceland account for most global capacity. Conventional hydrothermal potential is estimated at ~200 GW globally, compared to thousands of GW for solar and wind.
:::

### Exploration Risk

::: limitation exploration_risk
Geothermal development faces unique exploration risk. Drilling costs $1-5 million per well with 50-80% success rates for production-grade wells. Several wells are typically needed per MW of capacity. Early-stage exploration can be 15-30% of total project cost, all spent before any revenue. This front-loaded risk profile deters some investors and increases financing costs.
:::

### Reservoir Depletion

::: limitation reservoir_sustainability
Hydrothermal reservoirs can be depleted through:
- Steam/water pressure decline
- Temperature reduction
- Chemical changes affecting permeability

The Geysers peaked at >2,000 MW (1987) but declined due to steam depletion. Reinjection of extracted fluids and supplemental water maintains reservoir pressure but requires careful management. Sustainable extraction rates are typically 1-3% of reservoir heat content per year.
:::

### Fluid Chemistry

::: limitation fluid_chemistry
Geothermal fluids contain dissolved minerals and gases that create operational challenges:

| Component | Concentration | Issues |
|-----------|---------------|--------|
| Silica (SiO₂) | 100-1000 ppm | Scaling in pipes, equipment |
| Chloride | 100-100,000 ppm | Corrosion |
| H₂S | 0.01-2% | Toxic emissions, corrosion |
| CO₂ | 0.1-5% | Emissions, pH effects |

Fluid chemistry significantly affects plant design, materials selection, and environmental management. Binary plants isolate corrosive fluids from power equipment via heat exchangers.
:::

### Induced Seismicity

::: limitation induced_seismicity
Fluid injection can trigger small earthquakes. Conventional hydrothermal operations rarely cause felt earthquakes (typically <M2), but reinjection has triggered events up to M3-4 at some sites. The Geysers experiences frequent M2-3 events managed through injection protocols. Risk is lower than for Enhanced Geothermal Systems but requires monitoring and adaptive management.
:::

### Development Timeline

::: limitation development_timeline
Geothermal projects require 5-10 years from exploration to operation:
- Exploration and permitting: 2-4 years
- Drilling and well testing: 1-2 years
- Plant construction: 2-3 years

This slow development limits ability to respond quickly to market opportunities or policy incentives compared to solar/wind (1-2 years).
:::

---

## Scaling Characteristics

### Output Scaling Behavior

::: facet scale_regime
Hydrothermal geothermal is site-limited rather than modular. Output depends on the natural reservoir's size, temperature, and sustainable extraction rate. Individual fields typically support 50-500 MW; exceptional fields like The Geysers reach 1.5 GW. Unlike solar PV, capacity cannot be arbitrarily expanded—each site has a maximum sustainable output determined by geology.
:::

### Viable Scale Range

**Minimum:** Small binary plants can operate at 1-5 MW for distributed applications or remote sites.

**Typical:** Commercial plants range from 20-100 MW per unit. Fields commonly support 50-300 MW total.

**Maximum:** The Geysers (California) at 1,517 MW from 18 plants represents the largest complex. Individual plants rarely exceed 100-150 MW per unit.

### Land Requirements

Geothermal has a modest surface footprint:

| Component | Land use |
|-----------|----------|
| Power plant | 1-5 hectares per 100 MW |
| Well pads | 0.1-0.5 ha each |
| Steam gathering | Pipelines across field |
| **Total** | **10-50 ha per 100 MW** |

Given the high capacity factor (80-95%), land use per unit energy is competitive with or better than solar/wind.

### Resource Potential

Global conventional hydrothermal potential is estimated at ~200 GW, constrained by the requirement for heat, fluid, and permeability to coexist naturally. This compares to:
- Current installed: ~16 GW
- Enhanced Geothermal Systems potential: >5,000 GW
- Solar potential: >100,000 GW

### Comparison to Other Sources

| Source | Geographic Constraint | Capacity Factor | Land per TWh/yr |
|--------|----------------------|-----------------|-----------------|
| Hydrothermal | Tectonic regions only | 80-95% | 1-5 km² |
| Solar PV | Global (varies by latitude) | 15-25% | 20-40 km² |
| Wind | Global (varies by wind resource) | 25-45% | 30-70 km² |
| Nuclear | Global (cooling water needed) | 90-93% | 1-3 km² |

Geothermal's high capacity factor means installed capacity translates efficiently to energy production.

---

## Current Status

### Technology Readiness Level

| Technology | TRL | Status |
|------------|-----|--------|
| Dry steam plants | 9 | Mature, limited sites |
| Flash steam plants | 9 | Mature, most common |
| Binary ORC plants | 9 | Mature, expanding |
| Combined flash-binary | 9 | Commercial |
| Supercritical systems | 4-5 | Experimental (IDDP) |

Hydrothermal geothermal is a mature technology with over 110 years of operational history.

### Levelised Cost of Energy

| Context | LCOE |
|---------|------|
| IRENA global weighted average (2022) | $56/MWh |
| Best projects (Iceland, Kenya) | $40-60/MWh |
| Flash steam (high-temp) | $50-70/MWh |
| Binary (moderate-temp) | $70-100/MWh |
| Challenging projects | $100-140/MWh |

LCOE is competitive with fossil fuels in favorable locations but generally higher than utility-scale solar/wind. High capacity factor partially offsets higher capital costs.

### Major Deployments

**Global capacity (2024):** ~16 GW across 30+ countries, generating ~95-100 TWh/year (~0.3% of global electricity)

**Top countries:**

| Country | Capacity (MW) | Share of electricity |
|---------|---------------|---------------------|
| United States | 3,937 | <1% |
| Indonesia | 2,653 | ~5% |
| Philippines | 1,984 | ~12% |
| Türkiye | 1,734 | ~3% |
| New Zealand | 1,207 | ~18% |
| Kenya | 985 | ~45% |
| Mexico | 976 | ~2% |
| Italy | 916 | ~2% |
| Iceland | 786 | ~25% |

**Major fields:**

- **The Geysers (USA):** 1,517 MW, world's largest, dry steam, operating since 1960
- **Larderello (Italy):** ~800 MW, first geothermal power (1904)
- **Cerro Prieto (Mexico):** 720 MW, major flash plant
- **Hellisheiði (Iceland):** 303 MW + district heating, CarbFix CO₂ injection

### Research Frontiers

**Supercritical geothermal:** The IDDP project in Iceland drilled to 4.5 km encountering 450°C+ fluids. Supercritical conditions could yield 10× power per well but face major technical challenges.

**Enhanced Geothermal Systems (EGS):** Creating artificial reservoirs in hot dry rock could expand geothermal potential from ~200 GW to thousands of GW. Fervo Energy's 2023 demonstration and Utah FORGE are advancing this technology.

**Advanced power cycles:** Supercritical CO₂ cycles and improved organic fluids could increase conversion efficiency by 10-20%.

**CO₂ sequestration:** Iceland's CarbFix project injects CO₂ into basalt where it mineralizes, demonstrating geothermal's potential role in carbon capture.

---

## Summary

### Key Specifications

| Parameter | Value |
|-----------|-------|
| Global capacity (2024) | ~16 GW |
| Annual generation | ~95-100 TWh |
| Global potential (conventional) | ~200 GW |
| Capacity factor | 80-95% |
| LCOE | $50-80/MWh |
| Plant efficiency | 10-25% |
| CO₂ emissions | 15-55 g/kWh (flash); ~0 (binary) |
| Plant lifetime | 30-50 years |
| Development timeline | 5-10 years |

### Strengths and Limitations

**Strengths:**
- Baseload, dispatchable power (24/7 generation)
- High capacity factor (80-95%)
- Low emissions (especially binary plants)
- Small land footprint per unit energy
- Long plant life (30-50 years)
- No fuel cost after development
- Can provide grid services (inertia, voltage support)
- Combined heat and power applications

**Limitations:**
- Geographically constrained to tectonic regions
- High upfront capital cost ($3,000-5,000/kW)
- Exploration risk (drilling before revenue)
- Slow development timeline (5-10 years)
- Limited scalability (site-dependent capacity)
- Potential induced seismicity
- Reservoir depletion risk without management
- Some emissions from flash/dry steam plants

### Role in Energy Landscape

::: facet scale_regime
Hydrothermal geothermal occupies a valuable but geographically constrained niche in the global energy system. It provides reliable baseload power unaffected by weather or time of day—a characteristic shared only with nuclear among low-carbon sources. For countries with good resources (Kenya, Iceland, Philippines, New Zealand), geothermal can supply 10-45% of electricity.

Global potential for conventional hydrothermal is limited to ~200 GW by the requirement for heat, fluid, and permeability to coexist naturally. This constrains geothermal to ~1-2% of global electricity potential with current technology. However, Enhanced Geothermal Systems could expand this dramatically by creating artificial reservoirs anywhere with sufficient geothermal gradient.

As grids integrate more variable solar and wind, firm dispatchable power becomes increasingly valuable. Geothermal's high capacity factor and 24/7 availability position it well to complement intermittent renewables, providing stable baseload and grid services. While unlikely to become a dominant global energy source, hydrothermal geothermal will remain an important contributor in favorable regions and a foundation for the emerging EGS industry.
:::
