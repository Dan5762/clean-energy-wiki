# Concentrated Solar Thermal

## Fundamental Principle

### Natural Asymmetry Exploited

::: facet ultimate_source
The temperature difference between the Sun's surface (~5800K) and the Earth (~300K), identical to photovoltaics but exploited through a different mechanism. Concentrated solar thermal (CST) systems use optical concentration to create a localised region of high temperature, then extract work via a heat engine operating across the resulting temperature gradient.

The key physical quantity out of equilibrium is the directional flux of solar radiation. Unlike the isotropic thermal radiation environment at 300K, sunlight arrives from a narrow solid angle (the solar disc subtends ~0.5° as seen from Earth, corresponding to a solid angle of ~6.8 × 10⁻⁵ steradians). This directionality enables optical concentration: mirrors or lenses can redirect radiation from a large collection area onto a small absorber, achieving flux densities far exceeding the ~1000 W/m² available at the Earth's surface.
:::

### Ultimate Source

::: facet ultimate_source
Nuclear fusion in the Sun's core, as with photovoltaics. The fusion of hydrogen into helium releases binding energy, which thermalises through the solar interior and radiates from the photosphere. At Earth's orbital distance, this delivers the solar constant of ~1361 W/m² above the atmosphere.

For CST, the relevant quantity is Direct Normal Irradiance (DNI): the component of solar radiation arriving directly from the solar disc, excluding diffuse sky radiation. CST systems cannot concentrate diffuse light (it arrives from all directions and cannot be optically redirected to a point or line). Typical DNI at good sites ranges from 2000-2800 kWh/m²/year, with instantaneous values of 800-1000 W/m² under clear skies.

The source is effectively inexhaustible on human timescales. The Sun has approximately 5 billion years of hydrogen fuel remaining. Annual solar energy incident on Earth (~5.4 × 10²⁴ J) exceeds human primary energy consumption (~6 × 10²⁰ J) by a factor of ~9000.
:::

### Key Physics

**Solar geometry and concentration:**

The maximum achievable concentration ratio is set by the second law of thermodynamics (or equivalently, by conservation of étendue in optics). For radiation from a source subtending solid angle Ω_s, the maximum concentration onto an absorber is:

::: equation max_concentration
$$C_{max} = \frac{n^2}{\sin^2(\theta_s)}$$
:::

where n is the refractive index of the medium (n = 1 for air) and θ_s is the half-angle subtended by the source (~0.27° for the Sun). This gives:

$$C_{max} \approx 46{,}000 \text{ suns}$$

for a 3D concentrator (point focus), or:

$$C_{max} \approx 215 \text{ suns}$$

for a 2D concentrator (line focus).

Practical systems achieve a fraction of these limits due to optical errors, tracking imprecision, and receiver geometry constraints. Typical values:

| Technology | Concentration Ratio | Receiver Temperature |
|------------|-------------------|---------------------|
| Parabolic trough | 70-100× | 300-400°C |
| Linear Fresnel | 30-80× | 250-400°C |
| Solar tower (central receiver) | 300-1500× | 500-1000°C |
| Parabolic dish | 1000-3000× | 600-1200°C |

**Heat engine thermodynamics:**

::: equation carnot_efficiency
The Carnot efficiency for a heat engine operating between hot reservoir T_H and cold reservoir T_C is:

$$\eta_{Carnot} = 1 - \frac{T_C}{T_H}$$
:::

For a receiver at 565°C (838K) rejecting heat at 35°C (308K):

$$\eta_{Carnot} = 1 - \frac{308}{838} \approx 63\%$$

Real heat engines (Rankine steam cycles, Brayton gas turbines) achieve 40-50% of Carnot efficiency, giving practical thermal-to-electric conversions of 35-45%.

**Receiver thermal balance:**

::: equation receiver_thermal_balance
At steady state:

$$\alpha \cdot C \cdot G = \epsilon \sigma T_R^4 + h(T_R - T_{amb}) + Q_{useful}$$
:::

where α is absorptivity, C is concentration ratio, G is DNI, ε is emissivity, σ is Stefan-Boltzmann constant (5.67 × 10⁻⁸ W/m²K⁴), T_R is receiver temperature, h is convective heat transfer coefficient, and Q_useful is extracted thermal power.

The quartic temperature dependence of radiative losses creates a fundamental trade-off: higher temperatures improve heat engine efficiency but increase receiver losses. An optimum operating temperature exists for each concentration ratio.

---

## Conversion Mechanism

### Energy Capture and Conversion

::: facet conversion_pathway
CST systems capture solar energy as heat, then convert heat to electricity via a thermodynamic power cycle. This two-stage process distinguishes CST from photovoltaics, which convert photon energy directly to electrical work.

The primary physical interactions are:

1. **Optical concentration**: Reflective surfaces (mirrors) redirect incident DNI onto a smaller absorber area
2. **Thermal absorption**: A receiver converts concentrated radiation to heat in a working fluid
3. **Thermodynamic conversion**: A heat engine extracts mechanical work from the temperature difference between the hot working fluid and a cold sink (ambient air or cooling water)
4. **Electrical generation**: A generator converts mechanical work to AC electricity
:::

### Physical Processes

**Optical system (solar field):**

The solar field consists of concentrating collectors that track the sun and redirect DNI onto a receiver. The optical efficiency η_optical accounts for:

- Mirror reflectivity (typically 92-94% for silvered glass)
- Cosine efficiency: effective mirror area decreases as cos(θ) where θ is the angle between the sun vector and the mirror normal
- Shadowing: collectors blocking sunlight from reaching adjacent collectors
- Blocking: collectors intercepting reflected light from adjacent collectors
- Atmospheric attenuation: absorption and scattering over the path from mirror to receiver
- Spillage: reflected light missing the receiver aperture due to optical errors and sun-shape

Annual average optical efficiencies range from 50-70% depending on technology and field layout.

**Receiver:**

The receiver absorbs concentrated solar flux and transfers heat to a working fluid. Key receiver types:

- **Tube receivers** (parabolic trough, linear Fresnel): Heat transfer fluid flows through tubes along the focal line. Selective coatings with high solar absorptivity (~95%) and low thermal emissivity (~10% at operating temperature) reduce radiative losses.

- **External receivers** (solar tower): Panels of tubes arranged on the exterior of a cylinder or prism, exposed to flux from all directions. Operating at 500-600°C with molten salt or 250-565°C with water/steam.

- **Cavity receivers**: Concentrated flux enters through an aperture into an insulated cavity, reducing convective and radiative losses. Used for very high temperature applications (>1000°C).

**Heat transfer fluids:**

| Fluid | Temperature Range | Advantages | Limitations |
|-------|------------------|------------|-------------|
| Synthetic oil (Therminol VP-1) | Up to 400°C | Mature technology, low freezing point | Temperature limit, flammable, degrades |
| Molten salt (60% NaNO₃/40% KNO₃) | 290-565°C | Higher temperature, inherent storage | Freezes at 220°C, requires heat tracing |
| Water/steam | 250-550°C | No intermediate fluid, familiar technology | Phase change complexity, limited storage |
| Air/CO₂ | Up to 1000°C+ | Very high temperatures possible | Poor heat transfer, requires high pressure |

**Power block:**

Most CST plants use Rankine steam cycles, similar to conventional fossil thermal plants. Superheated steam at 370-565°C and 100-170 bar drives a steam turbine. Cycle efficiency increases with steam temperature and pressure, motivating the drive toward higher receiver temperatures.

Advanced cycles under development include:
- Supercritical CO₂ Brayton cycles (target efficiency 50%+ at 700°C)
- Combined cycles (gas turbine topping cycle with steam bottoming cycle)

**Cooling system:**

::: limitation water_use
Heat rejection to the environment is required for any heat engine. Options include:
- Wet cooling towers: Highest efficiency, requires 2-3 m³/MWh of water
- Dry cooling (air-cooled condensers): 5-10% efficiency penalty, minimal water use
- Hybrid systems: Wet cooling during peak demand, dry at other times

Since high-DNI regions are typically arid, water availability is a significant constraint. Most new CST plants use dry or hybrid cooling.
:::

### Conversion Chain

$$\text{Solar DNI} \xrightarrow{\text{optical}} \text{Concentrated flux} \xrightarrow{\text{receiver}} \text{Hot HTF} \xrightarrow{\text{heat exchanger}} \text{Steam} \xrightarrow{\text{turbine}} \text{Shaft work} \xrightarrow{\text{generator}} \text{AC electricity}$$

Principal losses occur at:

1. **Optical stage** (~30-50%): Reflection, cosine, shadowing, blocking, spillage, atmospheric attenuation
2. **Receiver stage** (~5-15%): Radiative, convective, and conductive thermal losses
3. **Power block stage** (~55-65%): Thermodynamic irreversibilities in the heat engine (Carnot limit plus real-cycle inefficiencies)
4. **Parasitics** (~5-15%): Pumps, fans, tracking motors, heat tracing, plant auxiliaries

Overall solar-to-electric efficiency: 12-25% (annual average), with peak instantaneous efficiencies of 20-35%.

---

## Theoretical Limits

### Primary Efficiency Limit

::: facet theoretical_limit
The overall efficiency of a CST system is the product of optical efficiency, receiver thermal efficiency, and power cycle efficiency:

$$\eta_{total} = \eta_{optical} \times \eta_{receiver} \times \eta_{cycle}$$

The fundamental limit is ultimately thermodynamic. For a blackbody absorber at temperature T_R receiving concentrated solar flux and driving a Carnot engine rejecting heat at ambient temperature T_amb, the maximum efficiency occurs at an optimal receiver temperature that balances:
- Receiver losses (which increase with T_R⁴)
- Carnot efficiency (which increases with T_R)
:::

The optimal receiver temperature and corresponding maximum efficiency depend on concentration ratio. For an idealised system with perfect optics and a blackbody receiver:

$$\eta_{max} = \eta_{optical} \times \left(1 - \frac{4T_{amb}}{3T_R} + \frac{1}{3}\left(\frac{T_{amb}}{T_R}\right)^4\right) \times \left(1 - \frac{T_{amb}}{T_R}\right)$$

The Chambadal-Novikov efficiency, which accounts for finite-rate heat transfer, gives a practical upper bound of ~70% for an ideal solar thermal system at maximum concentration.

For realistic concentration ratios:

| Concentration | Optimal T_R | Maximum η (ideal) |
|---------------|-------------|-------------------|
| 100× | ~700K | ~40% |
| 1000× | ~1100K | ~55% |
| 10000× | ~1700K | ~65% |

### Origin of the Limit

The limit arises from thermodynamic constraints:

1. **Second law of thermodynamics**: The Carnot efficiency sets the maximum work extractable from a temperature difference. No heat engine can exceed this limit regardless of design.

2. **Stefan-Boltzmann law**: Radiative losses scale as T⁴, creating an upper bound on practical operating temperatures for any given concentration ratio.

3. **Étendue conservation**: The maximum achievable concentration is limited by the angular size of the solar disc, preventing arbitrarily high flux densities.

Unlike the Shockley-Queisser limit for photovoltaics (which arises from quantum mechanical constraints on photon-electron interactions), CST limits are purely classical thermodynamics.

### Key Design Tradeoffs

**Concentration vs. cost:**
Higher concentration enables higher temperatures and better Carnot efficiency, but requires more precise optics and tracking. Two-axis tracking (towers, dishes) costs more than single-axis (troughs, linear Fresnel) but achieves higher concentration.

**Temperature vs. receiver efficiency:**
Operating at higher temperatures improves power cycle efficiency but increases receiver thermal losses. The optimum shifts upward with better receiver selectivity (high absorptivity, low emissivity) and higher concentration.

**Storage duration vs. capital cost:**
More hours of thermal energy storage (TES) increase capacity factor and enable dispatchability, but add capital cost for salt inventory and tank volume. Typical designs optimise at 6-15 hours of storage.

**Receiver size vs. spillage:**
A larger receiver aperture captures more reflected light (reducing spillage) but has higher thermal losses. Optimal receiver sizing depends on optical quality of the heliostat field.

**Field density vs. blocking:**
Denser heliostat fields collect more energy per unit land area but suffer more blocking and shadowing losses. Optimal density depends on latitude and tower height.

### Relation to Thermodynamic Bounds

The Carnot efficiency between the Sun's surface (5800K) and Earth ambient (300K) is:

$$\eta_{Carnot} = 1 - \frac{300}{5800} \approx 95\%$$

CST systems capture only a fraction of this potential because:

1. They operate at intermediate temperatures (500-1000K), not at the Sun's temperature
2. Practical heat engines achieve 70-85% of Carnot efficiency for their actual temperature difference
3. Optical losses consume 30-50% before thermal conversion begins
4. Receiver thermal losses consume another 5-15%

The gap between the 95% thermodynamic limit and the 15-25% achieved by real CST systems is large but partially fundamental: creating a region at 5800K on Earth's surface is not practically achievable, and lower temperatures necessarily reduce Carnot efficiency.

Current best commercial CST systems achieve 40-50% of their technology-specific theoretical limits.

---

## Practical Limitations

### Material Constraints

**Mirrors:**

Standard CST mirrors use 4mm low-iron float glass with a silver reflective layer and protective backing. Glass abundance is not a constraint, but manufacturing capacity and quality control are considerations. Mirror reflectivity of 93-94% is standard; higher values require advanced coatings.

Alternative reflector materials include:
- Thin glass (1mm) on steel or aluminium substrates
- Polymer films with silver or aluminium coatings
- Polished aluminium (lower reflectivity, ~85%)

**Heat transfer fluids:**

The dominant molten salt formulation (60% sodium nitrate/40% potassium nitrate, "solar salt") uses abundant materials. Global nitrate production is sufficient for large-scale CST deployment. However, advanced salts with lower melting points or higher operating temperatures often require less abundant materials.

Thermal oil (synthetic hydrocarbon) is petroleum-derived and temperature-limited to ~400°C due to thermal decomposition.

::: limitation manufacturing_complexity
**Receiver materials:**

High-temperature receivers require specialised alloys (Inconel, Haynes alloys) that resist creep and corrosion at elevated temperatures. These nickel-based superalloys contain chromium, cobalt, and molybdenum, which have moderate abundance but concentrated supply chains.

Selective absorber coatings (for trough receivers) use ceramic-metallic composites that degrade over time at high temperatures, requiring periodic replacement.
:::

**Storage tanks:**

Molten salt tanks are constructed from carbon steel with internal insulation or stainless steel for hot tanks (565°C). Tank construction is straightforward but represents significant capital cost. The salt inventory itself (tens of thousands of tonnes for a large plant) is a major cost component.

### Degradation and Lifetime

**Mirrors:**
- Glass mirrors degrade at ~0.1-0.2% reflectivity loss per year from weathering and micro-scratching
- Soiling (dust accumulation) reduces reflectivity by 1-5% between cleaning cycles
- Expected lifetime: 20-30 years with periodic washing

**Receivers:**
- Selective coatings degrade at elevated temperatures, with absorptivity dropping 1-2% per year
- Tube receivers can develop hydrogen penetration (from oil decomposition), reducing vacuum performance
- Glass envelope breakage from thermal shock or impact
- Expected lifetime: 15-25 years

**Heat transfer systems:**
- Molten salt corrosion of piping and tanks (manageable with proper materials selection)
- Oil degradation products require periodic filtering or replacement
- Freeze protection systems must prevent salt solidification (freezing point ~220°C)

**Power block:**
- Similar to conventional thermal plants: 25-40 year lifetimes with scheduled maintenance
- Turbine blade erosion and bearing wear follow standard industrial patterns

Overall plant lifetime: 25-30 years, with major component replacements (receivers, salt) at 15-20 years.

### Geographic and Resource Constraints

::: facet geographic_constraint
CST requires Direct Normal Irradiance (DNI), unlike PV which can use diffuse radiation. The threshold for economic viability is typically DNI > 2000 kWh/m²/year.

**Optimal regions** (DNI > 2500 kWh/m²/year):
- Southwest United States (Mojave, Sonoran deserts)
- North Africa and Middle East (Sahara, Arabian Peninsula)
- Southern Africa (Kalahari, Namib)
- Australia (outback)
- Chile (Atacama)
- Southern Spain (limited area)

**Marginal regions** (1800-2500 kWh/m²/year):
- Mediterranean (reduced capacity factors)
- Northern Mexico
- Parts of India
- Central Asia

**Unsuitable regions**:
- Northern Europe, UK, Northern US/Canada
- Tropical regions (high humidity, clouds, diffuse fraction)
- Any location with frequent cloud cover or aerosol loading

This geographic constraint is more severe than for PV. CST cannot operate economically in roughly 70% of inhabited regions where PV is viable.
:::

::: limitation geographic_restriction
Additional site requirements:
- Relatively flat terrain (slope <3% for troughs, <5% for towers)
- Low seismic activity (for towers especially)
- Access to water for wet cooling, or tolerance for dry cooling penalty
- Grid connection capacity
- Minimal dust storms and sand erosion
:::

### Power and Energy Density

**Incident flux:**

DNI at good sites: ~800-1000 W/m² peak, ~200-350 W/m² annual average (accounting for day/night, seasons, weather).

**Power density at generation:**

After optical, thermal, and conversion losses, utility-scale CST delivers:

| Technology | Power Density (W/m² mirror) | Power Density (W/m² land) |
|------------|----------------------------|---------------------------|
| Parabolic trough | 15-25 | 4-8 |
| Solar tower | 20-35 | 5-10 |
| Linear Fresnel | 10-20 | 4-7 |

::: limitation land_intensity
Land-use intensity (including all plant infrastructure):
- Parabolic trough: 2.5-3.5 ha/MW (25-35 m²/kW)
- Solar tower: 2.0-3.0 ha/MW (20-30 m²/kW)
:::

**Energy density of thermal storage:**

Molten salt (290-565°C temperature swing):
- Specific heat: ~1.5 kJ/kg·K
- Energy density: ~400 kJ/kg or ~110 Wh/kg
- Volumetric: ~700 MJ/m³ or ~190 kWh/m³

For comparison, lithium-ion batteries: ~150-250 Wh/kg, ~300-500 kWh/m³

Thermal storage is less energy-dense than batteries but far cheaper per kWh.

### Temporal Characteristics

::: facet temporal_character
CST without storage has the same diurnal and weather variability as PV. However, thermal inertia provides some smoothing: a cloud passing over causes gradual output reduction rather than the step changes seen in PV.

**With thermal energy storage:**

CST becomes partially or fully dispatchable. Stored thermal energy can be dispatched to the power block when needed, decoupling solar collection from electricity generation.

| Storage Duration | Capacity Factor | Dispatch Capability |
|------------------|----------------|---------------------|
| 0 hours | 20-25% | Solar hours only |
| 6 hours | 35-45% | Extended evening generation |
| 10 hours | 45-55% | Near baseload operation |
| 15 hours | 55-65% | Full dispatchability |

Ramp rates are limited by thermal cycling constraints on the power block. Typical values:
- Cold start: 1-2 hours to full power
- Warm start: 20-40 minutes
- Load following: 3-5%/minute (comparable to combined cycle gas)

Minimum stable generation: typically 15-25% of rated capacity, limited by steam turbine turndown ratio.
:::

**Predictability:**

CST output is more predictable than wind. Clear-sky solar resource is deterministic; weather forecast accuracy for clouds and aerosols is the main uncertainty. Day-ahead forecasts typically achieve 90-95% accuracy for energy production.

### System Role and Integration

CST with storage fills a unique niche: dispatchable renewable generation.

**Grid roles:**

- **Firm capacity**: Unlike wind or PV, CST with 10+ hours storage can guarantee output during evening peak demand hours, providing capacity credit comparable to gas peakers
- **Load following**: Can adjust output to follow demand, though more slowly than gas turbines
- **Spinning reserve**: Hot molten salt tanks can provide rapid response for grid frequency regulation
- **Baseload complement**: High capacity factors (50-65%) can serve continuous loads

**Complementary infrastructure:**

- Grid connection: Standard AC synchronous generator, provides inherent inertia and voltage support
- No battery storage required: Thermal storage is built into the design
- Minimal backup generation needed: Unlike PV, CST with storage can operate through evenings and overnight

**Ancillary services:**

- Synchronous generators provide grid inertia (unlike inverter-based wind/solar)
- Voltage support through reactive power control
- Black start capability with sufficient storage
- Frequency response within ramp rate limits

**System integration advantages:**

CST addresses the "duck curve" problem: In regions with high PV penetration, electricity demand peaks in the evening as PV output falls. CST with storage can shift generation from midday collection to evening dispatch, providing power precisely when PV cannot.

---

## Scaling Characteristics

### Output Scaling Behaviour

::: facet scale_regime
CST exhibits economies of scale. Larger plants are more efficient and cost-effective than smaller ones due to:

- Fixed costs (land preparation, grid connection, control systems) amortised over more generation
- Larger steam turbines operate at higher efficiency than smaller ones
- Heliostat manufacturing benefits from bulk production
- Receiver and tower costs scale sublinearly with thermal power
:::

**Power scaling:**

For solar towers, thermal power scales with heliostat field area. Tower height increases sublinearly: doubling thermal capacity requires increasing tower height by ~1.3× (to maintain concentration and reduce atmospheric attenuation).

Optical efficiency improves at larger scales as the field can be better optimised, though very large fields (>1 km radius) face increasing atmospheric attenuation.

### Viable Scale Range

**Minimum:**

Practical minimum: ~10-20 MW for tower systems, ~30-50 MW for trough systems. Below these scales, the power block becomes prohibitively expensive per watt, and optical efficiency suffers.

Smaller scales are possible for process heat applications (where electricity generation is not required) or research facilities, but are not economically competitive for grid electricity.

**Maximum:**

No fundamental upper limit. The largest plants under construction are 700-950 MW (Dubai Noor Energy 1). Single-tower systems are limited to ~150-200 MW thermal by atmospheric attenuation; larger plants use multiple towers or very large parabolic trough fields.

::: limitation long_build_time
Practical constraints on maximum size include:
- Grid absorption capacity at a single point
- Capital availability (plants cost $1-3 billion)
- Construction time (3-5 years)
:::

### Land Requirements

CST requires more land than fossil plants (which import energy-dense fuel) but less than biomass.

| Scale | Land Area |
|-------|-----------|
| 100 MW (tower with storage) | 250-400 ha |
| 500 MW | 1000-1750 ha |
| 1 GW | 2000-3500 ha |

For context, 1 GW of CST (with 10 hours storage, ~50% capacity factor) requires roughly:
- 20-35 km² of land
- Annual generation: ~4.4 TWh
- Land productivity: ~125-220 MWh/ha/year

Comparison to other sources:

| Source | Land Intensity (ha/GW capacity) |
|--------|--------------------------------|
| CST (with storage) | 2000-3500 |
| Solar PV | 1500-2000 |
| Wind | 30,000-50,000 (total); 200-400 (direct) |
| Nuclear | 100-400 |
| Natural gas | 50-100 (excluding fuel extraction) |

---

## Current Status

### Technology Readiness Level

| Technology | TRL | Status |
|------------|-----|--------|
| Parabolic trough (oil HTF) | 9 | Mature, commercial (~4.7 GW installed) |
| Parabolic trough (molten salt) | 7-8 | Pilot/demonstration |
| Solar tower (water/steam) | 8-9 | Commercial, limited deployment |
| Solar tower (molten salt) | 8-9 | Commercial, growing deployment |
| Linear Fresnel | 8 | Commercial but limited adoption |
| Parabolic dish/Stirling | 6-7 | Demonstration only, no commercial plants |
| Falling particle receivers | 5-6 | Research/pilot scale |
| sCO₂ power cycles | 4-5 | Laboratory demonstration |

### Levelised Cost of Energy

CST costs have declined more slowly than PV but remain significantly above PV in most markets.

| Context | LCOE (2024) |
|---------|-------------|
| Best projects (high DNI, low financing costs) | $70-90/MWh |
| Good sites (Middle East, Chile) | $90-120/MWh |
| US (Southwestern states) | $110-150/MWh |
| Europe (Southern Spain) | $120-180/MWh |

For comparison:
- Utility-scale PV: $25-50/MWh (without storage)
- PV + 4 hours battery: $60-100/MWh
- Onshore wind: $25-50/MWh
- Gas combined cycle: $50-80/MWh (depending on gas prices)

CST costs are higher than PV but the comparison is complicated by storage value. CST with 10 hours storage competes against PV+battery systems for dispatchable solar. At current battery prices, CST is competitive only for storage durations >6-8 hours in high-DNI locations.

NREL projections suggest CST with 10 hours storage could reach $50-70/MWh by 2030 with continued development, though PV+battery costs are also falling rapidly.

### Major Deployments

**Global installed capacity:** ~6.7 GW (end of 2023)

**Leading countries by installed capacity:**
1. Spain: ~2.3 GW (largely 50 MW trough plants built 2008-2013)
2. United States: ~1.8 GW (primarily SEGS, Ivanpah, Crescent Dunes)
3. China: ~0.6 GW (growing rapidly under 14th Five-Year Plan)
4. Morocco: ~0.5 GW (Noor-Ouarzazate complex)
5. South Africa: ~0.5 GW (various REIPPP projects)

**Notable installations:**

| Plant | Location | Capacity | Technology | Storage |
|-------|----------|----------|------------|---------|
| Noor Energy 1 (DEWA) | Dubai, UAE | 950 MW (700 CSP + 250 PV) | Tower + Trough | 15 hours |
| Ivanpah | California, USA | 392 MW | Tower (no storage) | None |
| SEGS (9 plants) | California, USA | 354 MW | Trough | None |
| Noor III | Morocco | 150 MW | Tower | 7.5 hours |
| Crescent Dunes | Nevada, USA | 110 MW | Tower | 10 hours |
| Gemasolar | Spain | 20 MW | Tower | 15 hours |

**Under construction/development:**

China has ~4 GW of CSP projects under construction or development as part of its "CSP+" policy, which pairs CSP with large-scale PV and wind in integrated renewable energy bases.

### Research Frontiers

**Next-generation receivers:**

- **Falling particle receivers**: Ceramic particles fall through concentrated flux, absorbing heat directly. Can operate at >1000°C, enabling advanced power cycles. DOE Gen3 programme demonstrated 6 MW system at Sandia National Laboratories.
- **Gas-phase receivers**: Pressurised air or CO₂ heated to >1000°C for gas turbine or sCO₂ cycles.

**Advanced power cycles:**

- **Supercritical CO₂ Brayton cycles**: Higher efficiency (50%+) at moderate temperatures (700°C). Compact turbomachinery. Significant DOE investment; pilot systems under construction.
- **Combined cycles**: Solar-heated gas turbine with bottoming steam cycle. Demonstrated at research scale.

**Higher temperature molten salts:**

- Chloride salts operating at 500-750°C to enable higher Carnot efficiency
- Challenges: corrosion, freeze point management, material compatibility

**Cost reduction:**

- Heliostat cost reduction through mass manufacturing, lighter structures, and improved drives
- Receiver improvements for higher flux tolerance and better selectivity
- Standardised plant designs to reduce engineering costs

**Hybrid systems:**

- CSP + PV: Combined plants using PV for daytime generation and CSP for storage/evening
- CSP + gas backup: Hybrid plants that can fire natural gas during extended cloudy periods
- Solar fuel production: Using CST heat for thermochemical hydrogen production or synthetic fuel synthesis
