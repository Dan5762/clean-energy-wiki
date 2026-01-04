# Wave Energy

## Fundamental Principle

### Natural Asymmetry Exploited

::: facet ultimate_source
Ocean waves represent a tertiary form of solar energy: the Sun heats Earth's surface unevenly, creating atmospheric pressure gradients that drive winds, which in turn transfer energy to the ocean surface through friction and pressure differentials. This energy accumulates in waves as they travel across vast ocean fetches, concentrating diffuse wind energy into a denser, more persistent form.
:::

The key insight is energy density amplification: while solar radiation delivers ~100-200 W/m² on average and wind power density is typically 300-500 W/m² at good sites, wave power can reach 30-70 kW per metre of wave crest in energetic locations. This 5-30× concentration occurs because water is ~800× denser than air, and because wave energy accumulates over hundreds or thousands of kilometres of fetch.

### Ultimate Source

Solar radiation drives atmospheric circulation, which drives wind, which drives waves. The global theoretical wave energy resource is estimated at 2-3 TW, with a technical potential of approximately 500 GW assuming 40% conversion efficiency along 2% of the world's coastlines exceeding 30 kW/m wave power density. This represents roughly 32,000 TWh/year of potential electricity generation.

### Key Physics

**Wave energy density:**

::: equation wave_energy_density
The mean energy density per unit horizontal area in a surface gravity wave is:

$$E = \frac{1}{16} \rho g H^2$$
:::

where ρ is water density (~1025 kg/m³ for seawater), g is gravitational acceleration (9.81 m/s²), and H is the significant wave height. The energy is equally partitioned between kinetic energy (water particle motion) and potential energy (surface displacement), as expected from the equipartition theorem.

**Wave power (energy flux):**

::: equation wave_power
The power transmitted per unit width of wave crest in deep water is:

$$P = \frac{\rho g^2}{64\pi} H_{m0}^2 T_e \approx 0.5 \cdot H^2 \cdot T \text{ [kW/m]}$$
:::

where H_{m0} is the significant wave height (metres), T_e is the energy period (seconds), and the simplified approximation gives power in kW per metre of wave front.

**Critical relationships:**
- Power scales with the **square of wave height**: doubling wave height quadruples power
- Power scales **linearly with period**: longer-period swells carry more energy per unit height
- A 3m wave with 8-second period carries approximately 36 kW/m
- A 5m wave with 10-second period carries approximately 125 kW/m

**Wave formation physics:**

Waves grow when wind speed exceeds wave phase velocity. Energy transfer occurs through:
1. Pressure differentials between windward and leeward faces of wave crests
2. Surface friction (shear stress) between moving air and water
3. Resonant feedback as waves steepen

Wave height depends on:
- Wind speed
- Wind duration (how long it has blown)
- Fetch (distance over which wind acts on water)
- Water depth (affects wave behaviour near shore)

Fully developed seas (maximum wave height for given wind speed) require fetch of hundreds of kilometres and duration of many hours to days.

## Conversion Mechanism

### Energy Capture

::: facet conversion_pathway
Wave energy converters (WECs) extract energy from one or more of the six degrees of freedom of wave-induced motion:
:::
- **Heave**: Vertical up-down motion
- **Surge**: Horizontal motion in wave direction
- **Sway**: Horizontal motion perpendicular to wave direction
- **Pitch**: Rotation about horizontal axis perpendicular to wave direction
- **Roll**: Rotation about horizontal axis parallel to wave direction
- **Yaw**: Rotation about vertical axis

Unlike wind turbines, which have converged on a dominant design (three-bladed horizontal axis), wave energy converters exhibit remarkable diversity. No single architecture has emerged as clearly superior, reflecting the complexity of the wave energy conversion problem.

### Principal WEC Archetypes

**1. Point Absorbers**

Small floating or submerged bodies that absorb energy from waves in all directions. Their characteristic dimension is much smaller than the wavelength.

*Operating principle*: The buoy heaves (and possibly surges/pitches) in response to passing waves. Relative motion between the buoy and a reference (seabed, submerged plate, or internal mass) drives a power take-off system.

*Examples*: CorPower Ocean C4, Ocean Power Technologies PowerBuoy, Seabased

*Characteristics*:
- Omnidirectional (captures energy from any wave direction)
- Can theoretically achieve capture width ratio >100% (capturing energy from a wave front wider than the device itself)
- Limited scalability: difficult to reach MW-scale with individual units
- Typical device size: 5-30m characteristic dimension

**2. Attenuators**

Long, multi-segment floating structures oriented parallel to wave direction. Energy is extracted from the flexing motion between segments.

*Operating principle*: As waves pass along the device length, different segments rise and fall at different times, creating relative angular motion at hinged joints. Hydraulic rams at joints pump fluid through motors to generate electricity.

*Examples*: Pelamis (discontinued), DEXA

*Characteristics*:
- Naturally aligns with wave direction
- Capture width can increase with device length
- Theoretical capture width ratio limit: ~100%
- Lower mooring loads than terminators (aligned with wave direction)

**3. Terminators**

Devices oriented perpendicular to wave direction, presenting a barrier to incoming waves.

*Operating principle*: Intercepts wave front directly. Can use oscillating flaps, water columns, or overtopping mechanisms.

*Examples*: Oyster (oscillating wave surge converter), WaveRoller

*Characteristics*:
- Capture width increases with device width
- Theoretical capture width ratio limit: ~50%
- Higher structural loads (facing waves head-on)
- Often bottom-mounted in nearshore locations

**4. Oscillating Water Columns (OWC)**

Partially submerged structures with an air chamber above a water column open to the sea below.

*Operating principle*: Wave action causes the internal water surface to oscillate, alternately compressing and expanding trapped air. This bidirectional airflow drives a self-rectifying air turbine (typically Wells turbine or impulse turbine).

*Examples*: Mutriku Wave Power Plant (Spain), Islay LIMPET (Scotland, decommissioned), OE Buoy

*Characteristics*:
- Can be fixed (shoreline/breakwater-mounted) or floating
- No moving parts below waterline (improved survivability)
- Air turbines have relatively low efficiency (30-50%)
- Overall efficiency typically 20-45%
- Well-suited for integration with coastal infrastructure

**5. Overtopping Devices**

Structures that capture water from wave crests in an elevated reservoir, then release it through low-head hydro turbines.

*Operating principle*: Waves run up a ramp and overtop into a reservoir above mean sea level. The potential energy of elevated water drives turbines as it drains back to sea.

*Examples*: Wave Dragon

*Characteristics*:
- Uses proven hydro turbine technology
- Requires significant wave height to overtop
- Large structures needed for meaningful power
- Simple, robust concept but challenging economics

**6. Oscillating Wave Surge Converters (OWSC)**

Bottom-hinged flaps that oscillate back and forth with the horizontal surge motion of waves in nearshore waters.

*Operating principle*: In shallow water, wave particle motion becomes predominantly horizontal (surge-dominant). A hinged flap captures this motion, driving hydraulic power take-off.

*Examples*: Oyster (Aquamarine Power, discontinued), WaveRoller (AW-Energy)

*Characteristics*:
- Exploits amplified surge motion in shallow water
- Bottom-mounted (avoids extreme surface conditions)
- Hydraulic power take-off pumps to shore-based generation
- Lab tests have achieved hydrodynamic efficiencies up to 80%

### Power Take-Off Systems

The power take-off (PTO) converts mechanical wave-induced motion to electricity:

- **Hydraulic systems**: Most common. Rams pump hydraulic fluid through accumulators and motors. Well-suited for high-force, low-speed oscillatory motion. Accumulators smooth power output.

- **Direct-drive linear generators**: Magnet moves through coil (or vice versa) without intermediate conversion. Simpler but requires close matching of generator characteristics to wave motion.

- **Air turbines**: Used in OWC devices. Self-rectifying designs (Wells, impulse) produce rotation regardless of airflow direction.

- **Mechanical systems**: Gearboxes, rack-and-pinion, or rope drives convert oscillatory to rotary motion.

## Theoretical Limits

### No Simple Betz-Equivalent Limit

::: facet theoretical_limit
Unlike wind turbines (Betz limit: 59.3%) or solar cells (Shockley-Queisser: 33%), wave energy has no single, simple theoretical efficiency limit. The physics is more complex because:
:::

1. Wave energy exists in multiple degrees of freedom simultaneously
2. Devices can theoretically capture energy from a wave front wider than themselves
3. Optimal control is non-causal (depends on future wave motion)
4. Real seas are polychromatic (multiple frequencies) and multidirectional

### Capture Width and Capture Width Ratio

The key performance metric is **capture width** (CW): the width of wave front from which the device extracts all energy, expressed in metres. The **capture width ratio** (CWR) normalizes this by device characteristic dimension:

$$CWR = \frac{\text{Absorbed power}}{\text{Wave power per metre} \times \text{Device width}}$$

Theoretical maximum capture widths for idealised point absorbers in regular waves:
- Heaving only: CW_max = λ/(2π) where λ is wavelength
- Surging only: CW_max = λ/π
- Combined heave + surge: CW_max = 3λ/(2π)

For a 10-second wave (λ ≈ 156m), a heaving point absorber could theoretically capture energy from a 25m wide wave front, regardless of the device's actual size. This means CWR can exceed 100% for small devices.

### Practical Efficiency Limits

Real-world constraints dramatically reduce achievable performance:

**Hydrodynamic efficiency** (wave to mechanical): 20-80% depending on device type and sea state
- Point absorbers: 10-50% typical, up to 70% reported with optimal control
- OWCs: 20-45%
- Oscillating surge converters: up to 80% in controlled tests

**Power take-off efficiency**: 70-90% for well-designed systems

**Overall wave-to-wire efficiency**: Typically 10-35%

**Capture width ratio in real seas**: 5-30% annual average (much lower than monochromatic theoretical limits)

### Bandwidth Problem

A fundamental challenge is that WECs are resonant devices, most efficient at one frequency, while real seas contain a spectrum of frequencies. Strategies to broaden bandwidth include:
- Active control (adjust damping/stiffness in real-time)
- Latching control (hold device at extremes, release at optimal phase)
- Multiple resonant modes
- Arrays of devices tuned to different frequencies

Optimal control requires prediction of future wave elevation, which is only partially achievable.

## Practical Limitations

### The Survivability-Efficiency Paradox

Wave energy devices must survive 100-year storms while extracting energy from average conditions. Storm waves can be 10-20× larger than typical waves, meaning forces scale 100-400× higher. This creates a fundamental tension:

- Devices designed for efficiency in moderate waves may not survive extreme events
- Devices designed for survivability are often inefficient in normal conditions
- Storm "survival mode" (shedding load, submerging, or locking) means zero generation during the most energetic periods

The marine environment is extraordinarily harsh: saltwater corrosion, biofouling, fatigue from millions of load cycles, impacts from debris, and difficulty of access for maintenance.

### Resource Variability

::: facet geographic_constraint
**Spatial distribution:**

Wave power varies enormously by location:
:::
- Exceptional: 60-100 kW/m (Southern Ocean, exposed Atlantic coasts)
- Good: 30-60 kW/m (Northwest Europe, Pacific coasts, southern Australia)
- Moderate: 15-30 kW/m (Mediterranean, US East Coast)
- Poor: <15 kW/m (Enclosed seas, equatorial regions)

The highest resources are at latitudes 40-60° where persistent westerly winds create long-fetch waves. However, these locations often have the harshest conditions.

::: facet temporal_character
**Temporal variation:**

- Seasonal: Winter waves typically 2-3× summer waves in temperate regions
- Synoptic (weather systems): Multi-day variations of factor 5-10×
- Wave-by-wave: Factor 2-3× variation even in steady seas

Capacity factors for wave energy are typically 25-35%, comparable to wind but with different temporal patterns. Wave energy is more predictable than wind 24-48 hours ahead (waves integrate wind over time and space).
:::

### Installation and Maintenance

**Marine operations** are expensive and weather-dependent:
- Installation requires calm seas (<2m wave height for most operations)
- Maintenance windows may be limited to summer months
- Specialized vessels required (expensive day rates)
- Divers or ROVs needed for subsea work
- Grid connection via subsea cables is costly

**Mooring systems** must withstand extreme loads while allowing device motion:
- Catenary moorings: Simple but require large footprint
- Taut moorings: Compact but transmit shock loads
- Mooring failure is a common cause of device loss

### Technology Immaturity

Wave energy technology is far less mature than wind:
- No convergence on dominant design
- Limited operational experience at scale
- Manufacturing not industrialized
- Supply chain undeveloped
- Reliability unproven

Many promising concepts have failed during sea trials (Pelamis, Oyster, Ocean Power Technologies' utility-scale projects). The "valley of death" between prototype and commercial deployment has claimed numerous companies.

### Environmental Considerations

Potential impacts (generally considered manageable but requiring further study):
- Electromagnetic fields from subsea cables
- Underwater noise during operation and installation
- Collision risk for marine mammals
- Alteration of local wave patterns (reduced wave height behind devices)
- Artificial reef effects on mooring/foundations
- Entanglement risk for marine life

Environmental monitoring requirements add to project costs and timelines.

## Scaling Characteristics

### Device Scaling

::: facet scale_regime
Different WEC types scale differently:
:::

**Point absorbers**: Limited scalability. Theoretical capture width is independent of device size for a given wavelength, so making devices larger does not proportionally increase power capture. Most point absorbers remain sub-MW scale (typical: 50-500 kW).

**Attenuators**: Scalable. Capture width increases with device length. MW-scale possible with devices >100m long.

**Terminators**: Scalable. Capture width increases with device width. MW-scale requires wide structures (>100m).

**OWCs**: Scalable. Larger chambers capture more energy. Fixed OWCs can be integrated into breakwaters at significant scale.

### Array Effects

Wave farms (multiple devices) experience interactions:
- **Constructive interference**: Devices may focus wave energy toward neighbours in some configurations
- **Destructive interference**: Devices absorb energy, creating wave shadows
- **Optimal spacing**: Typically 2-5 wavelengths between devices (200-500m for ocean waves)

Array gains (power per device in array vs. isolated device) can be >1.0 with careful design, but most real arrays show modest losses.

### Power Density

Wave farms have low power density relative to offshore wind:
- Typical wave farm: 1-5 MW/km²
- Offshore wind farm: 5-10 MW/km²

This reflects the distributed nature of wave energy and required spacing for survivability and moorings.

## Current Status

### Technology Readiness Level

| Technology | TRL | Status |
|------------|-----|--------|
| Oscillating water column (fixed) | 7-8 | Operational demonstration plants |
| Point absorbers | 5-7 | Multiple sea trials, pre-commercial |
| Oscillating wave surge converters | 6-7 | Full-scale prototypes tested |
| Attenuators | 5-6 | Concepts demonstrated, limited recent activity |
| Overtopping devices | 5-6 | Full-scale tested, not commercialized |

Wave energy is 15-20 years behind offshore wind in development. Most devices remain at prototype or demonstration stage.

### Global Deployment (2024)

**Total ocean energy capacity**: ~513 MW globally, but almost entirely tidal range:
- La Rance (France): 240 MW tidal barrage (1966)
- Sihwa (South Korea): 254 MW tidal barrage (2011)

**Wave energy specifically**: ~2-3 MW total installed globally

**Notable wave energy installations**:
- Mutriku (Spain): 296 kW OWC integrated into breakwater, operational since 2011, generated 210 MWh in 2024
- Lysekil Project (Sweden): 260 kW research array of point absorbers
- EWP-EDF One (Israel): Grid-connected demonstration, Port of Jaffa, inaugurated December 2024
- Various test devices at EMEC (Scotland), PLOCAN (Canary Islands), and other test centres

**2024 new deployments**: ~1.6 MW across ocean energy (mostly tidal stream)

**Pipeline**: 165 MW of publicly funded ocean energy projects planned for deployment in Europe over next 5 years (majority is tidal stream; wave energy pipeline ~13 MW)

### Costs

**Current LCOE**: $0.30-1.00/kWh or higher for prototype/demonstration projects

**Cost breakdown challenges**:
- Structural assembly: 25-35% of LCOE
- Power take-off: 15-25%
- Mooring/foundation: 15-20%
- Operations and maintenance: 15-25%
- Installation: 10-15%

**Cost reduction pathway**:
- 2024: $300-700/MWh
- 2035 projection: <$70/MWh in good resource areas (expert estimates)
- 2040s: Potentially competitive with offshore wind

For comparison:
- Offshore wind LCOE (2024): $79/MWh average
- Onshore wind LCOE (2024): $34/MWh average

**Revenue support**:
- UK CfD Allocation Round 6 (2024): Tidal stream at £172/MWh
- EU reference price for tidal (2024): €204/MWh
- Wave energy has not yet secured significant revenue support contracts

### Leading Developers

**Wave energy**:
- CorPower Ocean (Sweden): C4 point absorber, claims 300% improvement with phase control, Saoirse project (5 MW array) received €39M EU Innovation Fund support
- Eco Wave Power (Israel/Sweden): Onshore-mounted floaters, projects in Israel, Portugal (1 MW under development), Los Angeles
- AW-Energy (Finland): WaveRoller oscillating surge converter, WaveFarm project targeting 150 MW pipeline
- Carnegie Clean Energy (Australia): CETO technology
- Ocean Energy Ltd (Ireland): OE Buoy floating OWC

**Test facilities**:
- EMEC (European Marine Energy Centre, Orkney, Scotland)
- PLOCAN (Plataforma Oceánica de Canarias, Spain)
- PacWave (Oregon, USA, under development)
- Wave Hub (Cornwall, UK)

### Research Frontiers

**Advanced control**:
- Model predictive control using wave forecasting
- Latching and declutching strategies
- Machine learning for real-time optimization
- Target: 50-100% increase in energy capture

**Novel concepts**:
- Dielectric elastomer generators (artificial muscles)
- Gyroscopic wave energy converters
- Pressure-differential devices
- Hybrid wind-wave platforms

**Materials and survivability**:
- Composite structures for fatigue resistance
- Anti-corrosion and anti-biofouling coatings
- Condition monitoring for predictive maintenance

**System integration**:
- Co-location with offshore wind (shared infrastructure, combined energy production)
- Wave-powered desalination
- Direct hydrogen production from wave energy
- Coastal protection combined with energy generation

### Market Outlook

Wave energy remains a long-term prospect rather than near-term commercial reality. Key milestones needed:
1. Multi-MW arrays operating reliably for 3-5+ years
2. LCOE demonstrated below $150/MWh
3. Private investment without grant dependency
4. Supply chain development
5. Regulatory and permitting clarity

Industry projections:
- 2030: First commercial farms (5-20 MW) if development continues
- 2035: LCOE approaching $70/MWh in best locations
- 2040s: Potential competitiveness with offshore wind
- 2050: Wave energy could provide 1-3% of global electricity in optimistic scenarios

The European pipeline of 165 MW over five years represents a critical test of commercialization potential. Success would catalyze broader deployment; further failures could set the industry back another decade.

Wave energy's ultimate role may be as a complement to wind and solar rather than a major contributor in its own right, valuable for:
- Islands and remote coastal communities
- Grid balancing (different temporal profile than wind)
- Co-location with offshore wind infrastructure
- Locations where wind/solar resources are poor but wave resources are strong