# Thermoelectric Energy Conversion

## Fundamental Principle

### Natural Asymmetry Exploited

::: facet ultimate_source
Thermoelectric generators (TEGs) exploit temperature differences to generate electricity through the Seebeck effect. Any temperature gradient, whether from industrial waste heat, solar thermal concentration, geothermal sources, body heat, or ambient temperature differences, can drive electron flow through appropriately designed semiconductor junctions.

The fundamental phenomenon was discovered by Thomas Johann Seebeck in 1821: when two dissimilar conductors are joined and their junctions maintained at different temperatures, a voltage develops proportional to the temperature difference. This direct conversion of thermal energy to electrical energy requires no moving parts, no working fluids, and no intermediate mechanical steps.

The temperature difference need not be large. While higher gradients yield more power, TEGs can operate on temperature differences as small as 5 to 10°C (body heat applications) or as large as several hundred degrees (industrial waste heat, radioisotope systems). This versatility makes thermoelectric conversion applicable across an extraordinarily wide range of heat sources.
:::

### Ultimate Source

::: facet ultimate_source
Thermoelectric generators are agnostic to heat source. They can harvest:

**Waste heat (solar origin):** Industrial processes, vehicle exhaust, power plant discharge, data center cooling, and any combustion byproduct represent solar energy previously captured by photosynthesis (biomass, fossil fuels) or directly (solar thermal).

**Geothermal heat:** Temperature gradients from Earth's interior provide a steady, non-solar heat source exploitable by TEGs in geothermal wells or hot springs.

**Radioisotope decay:** Nuclear decay of isotopes like Pu-238 provides heat for radioisotope thermoelectric generators (RTGs) used in space missions where solar power is insufficient.

**Body heat:** Human metabolism (ultimately solar-derived through food) creates temperature gradients exploitable by wearable TEGs.

**Ambient gradients:** Day/night temperature cycling, indoor/outdoor differentials, and similar naturally occurring gradients can power low-power devices.

The "ambient thermal" category reflects this mixed heritage: most accessible heat sources trace ultimately to solar energy (directly or through combustion of solar-derived fuels), while geothermal and radioisotope sources are independent of solar input.
:::

### Key Physics

The Seebeck effect generates a voltage proportional to the temperature difference:

::: equation seebeck_voltage
$$V = S \cdot \Delta T$$
:::

Where V is the open-circuit voltage (V), S is the Seebeck coefficient (V/K or μV/K), and ΔT is the temperature difference between hot and cold junctions (K).

The Seebeck coefficient varies by material, typically ranging from a few μV/K for metals to several hundred μV/K for optimized semiconductors. For practical power generation, many thermocouple pairs are connected electrically in series and thermally in parallel.

The efficiency of thermoelectric conversion depends on material properties captured in the dimensionless figure of merit ZT:

::: equation figure_of_merit
$$ZT = \frac{S^2 \sigma T}{\kappa}$$
:::

Where S is the Seebeck coefficient, σ is electrical conductivity (S/m), κ is thermal conductivity (W/mK), and T is absolute temperature (K).

The maximum theoretical efficiency is given by:

::: equation max_efficiency
$$\eta_{max} = \eta_{Carnot} \cdot \frac{\sqrt{1 + ZT} - 1}{\sqrt{1 + ZT} + T_c/T_h}$$
:::

Where η_Carnot = (T_h - T_c)/T_h is the Carnot efficiency, T_h and T_c are hot and cold junction temperatures.

This equation reveals that thermoelectric efficiency is fundamentally limited by Carnot efficiency (like all heat engines) and further reduced by a factor depending on ZT. With current materials (ZT ≈ 1), TEGs achieve only about 1/6 of Carnot efficiency. Materials with ZT ≈ 3 would approach 1/3 of Carnot efficiency.

---

## Conversion Mechanism

### Energy Capture and Conversion

::: facet conversion_pathway
Thermoelectric conversion is direct: thermal energy converts to electrical energy in a single solid-state step with no intermediate mechanical motion. Heat flows through semiconductor materials, driving charge carriers (electrons in n-type, holes in p-type) from hot to cold regions, creating a voltage and current.

The conversion chain is simply:
$$\text{Heat flux} \xrightarrow{\text{Seebeck effect}} \text{Electron/hole flow} \xrightarrow{\text{External circuit}} \text{Electrical power}$$

This directness is both a strength (simplicity, reliability, no moving parts) and a limitation (efficiency constrained by material properties that are difficult to optimize simultaneously).
:::

### Physical Processes

**1. Heat Input at Hot Junction**

Heat enters the thermoelectric element at the hot side, raising the temperature and thermal energy of charge carriers.

**2. Carrier Diffusion**

Electrons (n-type material) or holes (p-type material) diffuse from the hot region toward the cold region, carrying both charge and thermal energy. This is the Seebeck effect in action.

**3. Voltage Generation**

The accumulation of charge carriers at the cold end creates an electric field opposing further diffusion. At equilibrium, a voltage (Seebeck voltage) develops across the element proportional to the temperature difference.

**4. Current Flow**

When connected to an external load, current flows through the circuit, delivering electrical power while simultaneously transporting heat (Peltier effect) and generating Joule heating.

**5. Heat Rejection at Cold Junction**

Heat exits at the cold junction through the Peltier effect (heat carried by current) and ordinary thermal conduction. Maintaining a large temperature difference requires effective heat sinking.

### Competing Effects

Three interrelated phenomena determine TEG performance:

**Seebeck effect (beneficial):** Generates voltage from temperature difference.

**Joule heating (detrimental):** I²R losses in the thermoelectric material and contacts reduce efficiency.

**Thermal conduction (detrimental):** Heat flowing directly through the material (without generating electricity) reduces the temperature gradient and wastes thermal energy.

These effects are coupled through the same material properties, creating fundamental tradeoffs. Good electrical conductors typically have high thermal conductivity. High Seebeck coefficients often correlate with low electrical conductivity. Optimizing ZT requires decoupling these properties, which is the central challenge in thermoelectric materials research.

### Module Construction

A practical TEG module consists of:

- Multiple p-type and n-type thermoelectric legs (typically Bi₂Te₃ at low temperatures, PbTe at medium, SiGe at high)
- Metal interconnects connecting legs electrically in series
- Electrically insulating but thermally conducting ceramic plates on hot and cold sides
- External leads for power output

Typical commercial modules contain 100-200 thermocouple pairs in a few square centimeters, producing several watts at temperature differences of 100-200°C.

---

## Theoretical Limits

::: facet theoretical_limit
The fundamental limit on thermoelectric efficiency is the Carnot efficiency, which applies to all heat engines. For a TEG operating between 500 K (hot) and 300 K (cold), Carnot efficiency is 40%.

However, practical thermoelectric efficiency is much lower due to material constraints captured in ZT. With ZT = 1 (current commercial materials), the same TEG achieves only about 6-7% efficiency. With ZT = 2 (best laboratory results), efficiency rises to approximately 12-15%. The theoretical limit with ZT = 3-4 (not yet achieved in practical devices) would be 20-25%.

The ultimate constraint is thermodynamic: thermoelectric generators are heat engines subject to the Second Law. Unlike some energy conversion processes (photovoltaic, electrochemical) that can in principle approach 100% of their theoretical maximum, TEGs are fundamentally limited to a fraction of Carnot efficiency.
:::

### Origin of the Limit

**Interdependence of properties:**

The Wiedemann-Franz law states that electrical and thermal conductivity are proportional in metals: κ_electronic = LσT, where L is the Lorenz number. This means improving electrical conductivity automatically increases thermal conductivity, limiting ZT gains.

Semiconductors partially circumvent this by having significant lattice (phonon) thermal conductivity separate from electronic conductivity. The strategy for improving ZT is to reduce lattice thermal conductivity while maintaining high electrical conductivity and Seebeck coefficient.

**Phonon-glass, electron-crystal paradox:**

The ideal thermoelectric would conduct electricity like a crystal (high σ) but conduct heat like a glass (low κ). Achieving this requires nanostructuring, complex crystal structures, or other approaches that scatter phonons more effectively than electrons.

### ZT vs. Efficiency

| ZT | Efficiency (ΔT = 200K, T_h = 500K) | Fraction of Carnot |
|----|-----------------------------------|-------------------|
| 0.5 | ~3-4% | ~10% |
| 1.0 | ~6-7% | ~17% |
| 1.5 | ~9-10% | ~25% |
| 2.0 | ~12-13% | ~32% |
| 3.0 | ~17-18% | ~45% |
| 4.0 | ~21-22% | ~55% |

Commercial materials (Bi₂Te₃, PbTe) have ZT ≈ 0.8-1.0. Laboratory demonstrations have achieved ZT ≈ 2-2.5 in nanostructured materials. Reports of ZT > 3 exist but have not translated to practical devices.

### Practical Performance

| Application | Temperature Difference | Typical Efficiency | Notes |
|-------------|----------------------|-------------------|-------|
| Body heat harvesting | 5-15°C | 0.1-0.5% | Very low ΔT limits efficiency |
| Low-grade waste heat | 50-100°C | 2-4% | Industrial exhaust, data centers |
| Automotive exhaust | 200-400°C | 4-8% | Exhaust manifold recovery |
| Industrial high-temp | 300-600°C | 5-10% | Furnaces, kilns |
| RTG (radioisotope) | 500-1000°C | 6-7% | Space missions |

---

## Practical Limitations

### Material Constraints

::: limitation material_interdependence
The three key material properties (Seebeck coefficient, electrical conductivity, thermal conductivity) are interdependent through fundamental physics:

- Increasing carrier concentration improves σ but reduces S
- High σ materials have high electronic thermal conductivity
- Reducing lattice thermal conductivity often introduces defects that reduce σ

This "thermoelectric trade-off" limits ZT to approximately 1 for bulk materials using conventional approaches. Breaking through this limit requires nanostructuring, band engineering, or fundamentally new materials.
:::

::: limitation material_cost
High-performance thermoelectric materials are expensive:

- **Bismuth telluride (Bi₂Te₃):** $500-1000/kg for high-purity material
- **Lead telluride (PbTe):** Contains toxic lead; tellurium is scarce
- **Skutterudites:** Require rare earth elements for optimal performance
- **Half-Heuslers:** Complex ternary compounds requiring precise stoichiometry

Tellurium scarcity is a significant concern. Global tellurium production is only ~500 tonnes/year, primarily as a byproduct of copper refining. Massive TEG deployment would strain this supply.
:::

::: limitation material_toxicity
Several high-performance thermoelectric materials pose environmental and health concerns:

- **Lead telluride:** Lead toxicity limits applications, especially wearables
- **Bismuth telluride:** Contains toxic tellurium
- **Antimony compounds:** Antimony toxicity

Research into "green" thermoelectrics (silicides, oxides, organic materials) aims to address these concerns but typically achieves lower ZT.
:::

### Efficiency Limitations

::: limitation low_efficiency
The fundamental limitation of thermoelectric generators is their low efficiency compared to other energy conversion technologies:

- TEGs: 5-8% typical, 15% maximum demonstrated
- Steam turbines: 40-45%
- Gas turbines: 35-40%
- Internal combustion engines: 25-35%
- Photovoltaics: 15-25%

This low efficiency means TEGs are generally not competitive for primary power generation. Their value lies in applications where:
- Waste heat is otherwise unused (zero fuel cost)
- Simplicity and reliability outweigh efficiency (space, remote sensing)
- Small scale and solid-state operation are essential (wearables, IoT)
- No moving parts are required (maintenance-free operation)
:::

### Thermal Management

::: limitation heat_exchange
TEG efficiency depends critically on maintaining a large temperature difference. This requires effective heat exchangers on both hot and cold sides:

**Hot side challenges:**
- Thermal contact resistance between heat source and TEG
- Temperature gradients through interface materials
- Thermal expansion mismatch causing mechanical stress

**Cold side challenges:**
- Heat rejection to ambient (air, water, radiation)
- Parasitic heat loads reducing ΔT
- Condensation in humid environments

In many applications, the cost and complexity of heat exchangers exceed the TEG modules themselves. System efficiency (including pumping/fan power) is typically 30-50% lower than module efficiency.
:::

### Temporal Characteristics

::: facet temporal_character
Thermoelectric generators respond instantaneously to temperature differences with no startup time. However, thermal inertia of the system (heat exchangers, thermal mass) introduces lag.

**Continuous operation:** TEGs work 24/7 wherever temperature differences exist.

**Variable output:** Power output varies with temperature difference, which may fluctuate (e.g., vehicle exhaust varies with engine load).

**Degradation:** Long-term operation at high temperatures causes gradual degradation through interdiffusion, oxidation, and contact degradation. Typical lifetimes range from 5 years (high-temperature industrial) to 20+ years (low-temperature, space applications).

**No storage:** TEGs produce power only when temperature differences exist. Integration with batteries or other storage is required for applications needing constant power from variable heat sources.
:::

### Degradation and Lifetime

**High-temperature degradation:**
- Sublimation of volatile components (Te, Sb)
- Oxidation of thermoelectric materials
- Interdiffusion at contacts
- Thermal fatigue from cycling

**Contact degradation:**
- Intermetallic compound formation
- Increased contact resistance
- Mechanical failure at interfaces

Typical lifetimes:
- Automotive (high ΔT, cycling): 5-10 years
- Industrial (steady high T): 10-15 years
- Low-temperature (wearables, IoT): 15-20 years
- Space (RTGs): 20-40+ years (Voyager RTGs still operating after 47 years)

---

## Scaling Characteristics

### Output Scaling Behavior

::: facet scale_regime
Thermoelectric power scales linearly with the number of thermocouple pairs and with temperature difference. A TEG with twice as many couples (or twice the area) produces twice the power, assuming identical thermal conditions.

The technology spans an enormous range:
- **Microwatts:** Body heat harvesters for wearables
- **Milliwatts:** Wireless sensors, IoT devices
- **Watts:** Portable generators, equipment cooling
- **Kilowatts:** Automotive exhaust recovery, industrial waste heat
- **Tens of kilowatts:** Large-scale industrial systems

There is no inherent minimum or maximum scale. The practical limits are:
- Lower bound: Parasitic losses and contact resistance dominate at very small scales
- Upper bound: Cost and material availability for very large systems
:::

### Viable Scale Range

| Power Level | Application | Module Count | Typical ΔT |
|-------------|-------------|--------------|------------|
| 1-100 μW | Wearable sensors | 1 miniature | 5-15°C |
| 1-100 mW | Wireless sensors, IoT | 1-5 modules | 20-50°C |
| 1-10 W | Portable power, camping | 10-50 modules | 100-200°C |
| 100-1000 W | Small-scale waste heat | 50-200 modules | 150-300°C |
| 1-10 kW | Automotive, industrial | 200-1000 modules | 200-400°C |
| 10-100 kW | Large industrial | 1000+ modules | 300-600°C |

The largest demonstrated systems are in the tens of kilowatts range. Scaling to MW would require thousands of modules and extensive heat exchanger infrastructure.

### Resource Potential

The global waste heat resource is enormous. Approximately 60-70% of all primary energy consumed becomes waste heat at temperatures ranging from slightly above ambient to over 1000°C.

**Waste heat inventory (approximate global):**
- Industrial processes: ~15-20 EJ/year
- Transportation: ~15-20 EJ/year
- Power generation: ~30-40 EJ/year
- Buildings: ~10-15 EJ/year

At 5% conversion efficiency, capturing just 10% of industrial waste heat could generate ~100 TWh/year of electricity.

**Practical constraints:**
- Much waste heat is low-grade (<100°C), where TEG efficiency is very poor
- Distributed sources (millions of vehicles) are difficult to aggregate
- Retrofit costs often exceed energy value
- Competing technologies (ORC, heat pumps) may be more efficient

**Best applications:**
- High-temperature industrial exhaust where ORC is impractical
- Remote/off-grid locations where maintenance-free operation is valuable
- Small-scale distributed generation where turbines are impractical
- Space applications where no alternatives exist

### Cost Considerations

| Application | System Cost | Cost per Watt | Payback Period |
|-------------|-------------|---------------|----------------|
| Commercial TEG module | $5-20 | $5-15/W | N/A (component) |
| Waste heat system (industrial) | $10,000-100,000 | $10-50/W | 3-10 years |
| Automotive TEG | $500-2000 | $50-200/W | Typically not economic |
| Space RTG (MMRTG) | $109 million | ~$900,000/W | N/A (mission critical) |
| Wearable TEG | $10-50 | $100-500/W | N/A (enabling technology) |

The high cost per watt compared to other generation technologies ($1-3/W for solar PV, $1-2/W for wind) limits TEG deployment to niche applications where their unique characteristics (solid-state, no maintenance, small scale, works in dark/vacuum) justify the premium.

---

## Current Status

### Technology Readiness Level

| Application | TRL | Status |
|-------------|-----|--------|
| Commercial Bi₂Te₃ modules | 9 | Mature commercial product |
| Automotive waste heat | 6-7 | Demonstrated prototypes, limited production |
| Industrial waste heat | 7-8 | Commercial systems available |
| Wearable TEGs | 5-6 | Research/early commercial |
| High-ZT materials (lab) | 3-5 | Research demonstrations |
| Flexible TEGs | 4-5 | Research prototypes |
| Space RTGs | 9 | Flight-proven, decades of operation |

### Market Size and Growth

The global thermoelectric generator market is valued at approximately $1 billion (2024-2025) and projected to reach $1.4-1.7 billion by 2030, growing at 6-10% CAGR.

**Market segments (2024):**
- Waste heat recovery: ~44%
- Automotive: ~29%
- Energy harvesting (IoT, wearables): ~22%
- Other (aerospace, military): ~5%

**Key growth drivers:**
- Increasing focus on energy efficiency and waste heat recovery
- Growth of IoT requiring autonomous power sources
- Automotive fuel efficiency regulations
- Expansion of data centers with cooling requirements

### Major Players and Products

**Material/Module manufacturers:**
- Ferrotec (Japan/US)
- Laird Thermal Systems (US)
- II-VI Marlow (US)
- Kryotherm (Russia)
- Thermonamic (China)

**System integrators:**
- Gentherm (automotive thermal management)
- Alphabet Energy (industrial waste heat, now defunct)
- European Thermodynamics (UK)

**Space systems:**
- Aerojet Rocketdyne/Teledyne (RTGs for NASA)
- DOE/INL (fuel and assembly)

### Recent Demonstrations

**Automotive:**
- BMW, Ford, GM have all demonstrated TEG exhaust recovery systems producing 200-1000 W
- Fuel efficiency improvements of 2-5% demonstrated
- Cost and complexity have prevented mass production

**Industrial:**
- 15 kW system demonstrated at 80°C temperature difference from coal bed methane plant (2024)
- Multiple commercial installations in steel, glass, and cement industries

**Wearables:**
- Flexible Bi₂Te₃ fiber TEGs demonstrated (KAIST, 2024)
- Body-powered smartwatch prototypes
- Estimated 22-25% of IoT sensors may use TEGs by 2030

### Research Frontiers

**High-ZT materials:**
- SnSe single crystals: ZT = 2.6 at 923 K (laboratory)
- PbTe nanostructures: ZT = 2.2 at 915 K
- Mg₃Sb₂-based materials: ZT > 1.5, tellurium-free
- Organic thermoelectrics: ZT = 0.3-0.5, flexible and low-cost

**Device innovations:**
- Segmented legs using different materials for different temperature ranges
- Flexible and printed thermoelectric devices
- Micro-TEGs for MEMS integration
- Hybrid systems combining TEG with thermophotovoltaics

**Manufacturing:**
- Screen printing of thermoelectric materials
- Additive manufacturing of complex geometries
- Roll-to-roll processing for flexible TEGs

---

## Summary

### Key Specifications

| Parameter | Low-Temp (Bi₂Te₃) | Mid-Temp (PbTe) | High-Temp (SiGe) |
|-----------|-------------------|-----------------|------------------|
| Operating range | 200-450 K | 450-850 K | 850-1300 K |
| Peak ZT | 1.0-1.2 | 1.5-2.0 | 0.8-1.0 |
| Typical efficiency | 4-6% | 6-10% | 5-7% |
| Cost ($/W) | $5-15 | $10-30 | $50-200 |
| Primary applications | Waste heat, wearables | Industrial, automotive | Space, high-temp industrial |

### Strengths and Limitations

**Strengths:**
- Solid-state: no moving parts, silent, vibration-free
- Highly reliable: decades of operation possible (Voyager RTGs)
- Scalable: microwatts to kilowatts with same technology
- Maintenance-free: no fluids, filters, or mechanical wear
- Direct conversion: no intermediate steps
- Works in any environment: vacuum, atmosphere, underwater
- Instant response: no startup time
- Bidirectional: same device can cool (Peltier) or generate power (Seebeck)

**Limitations:**
- Low efficiency: 5-10% typical, fundamentally limited by ZT
- High cost per watt: $5-50/W for modules, higher for systems
- Material constraints: tellurium scarcity, lead toxicity
- Requires temperature difference: no standalone operation
- Heat exchanger dependency: system efficiency limited by thermal management
- Degradation at high temperatures: limited lifetime in harsh conditions
- Poor economics: rarely competitive with ORC, heat pumps, or direct use of heat

### Role in Energy Landscape

::: facet scale_regime
Thermoelectric generators occupy a specialized niche in the energy landscape, valued not for efficiency but for unique operational characteristics that no other technology matches.

**Current role:**
- Space power: RTGs remain the only viable option for deep space and planetary surface missions beyond Mars. Voyager, Curiosity, Perseverance, and upcoming Dragonfly missions depend on RTGs.
- Remote sensing: Pipeline monitoring, arctic sensors, and other applications requiring maintenance-free power in harsh environments.
- Waste heat recovery: Limited commercial deployment in industrial settings where heat is otherwise unusable.
- Emerging IoT: Growing interest in self-powered sensors and wearables.

**Future potential:**
- Automotive: If costs decrease and ZT improves, TEGs could contribute 3-5% fuel efficiency gains across vehicle fleets.
- Data centers: Large-scale waste heat recovery as computing infrastructure grows.
- Industrial IoT: Self-powered sensors eliminating battery replacement and wiring.
- Wearables: Body-powered health monitors and devices.

**Fundamental position:**
TEGs are a complementary technology, not a primary power source. They excel at harvesting small temperature differences that would otherwise be wasted, powering devices where battery replacement is impractical, and operating where no other power source is viable (deep space, inside machinery, remote locations).

The market of ~$1 billion/year is modest compared to solar (~$200 billion) or wind (~$100 billion), reflecting TEGs' niche status. Growth will come from expanding applications rather than displacing other technologies.

**Key insight:**
Every joule of electricity from a TEG represents waste heat that would otherwise be lost. Even at 5% efficiency, converting otherwise-useless heat to electricity is 100% efficient in terms of fuel consumed. This changes the economic calculus: the relevant comparison is not TEG efficiency vs. turbine efficiency, but the cost of TEG electricity vs. the alternative of no electricity at all.
:::