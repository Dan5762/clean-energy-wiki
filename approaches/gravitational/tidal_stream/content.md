# Tidal Stream Energy

## Fundamental Principle

### Kinetic Energy Extraction

::: facet ultimate_source
Tidal stream energy extracts kinetic energy from the horizontal flow of water driven by tidal cycles. Unlike tidal barrages (which exploit potential energy from vertical head differences), tidal stream turbines work like underwater wind turbines, converting the kinetic energy of moving water directly into rotational mechanical energy and then electricity.
:::

The fundamental physics is identical to wind energy: a fluid flows through a rotor, momentum is transferred to the blades, and the rotor spins a generator. The key equation for power available in a flowing fluid is:

::: equation kinetic_power_fluid
$$P = \frac{1}{2} \rho A V^3$$
:::

Where:
- P = power (W)
- ρ = fluid density (kg/m³)
- A = swept area of rotor (m²)
- V = fluid velocity (m/s)

The critical insight is the **cubic relationship** with velocity: doubling flow speed increases available power eightfold. This makes site selection paramount, as small differences in current speed translate to large differences in energy yield.

### Water vs. Wind: The Density Advantage

Seawater is approximately 800 times denser than air:
- Seawater: ~1,025 kg/m³
- Air at sea level: ~1.225 kg/m³

This density ratio means that for identical swept areas and velocities, a tidal turbine can extract roughly 800 times more power than a wind turbine. In practice, tidal currents are much slower than wind speeds, but the net result is still favorable:

| Fluid | Typical Speed | Density | Power Density at Speed |
|-------|---------------|---------|------------------------|
| Wind | 12 m/s | 1.225 kg/m³ | 1,058 W/m² |
| Tidal current | 2.5 m/s | 1,025 kg/m³ | 8,008 W/m² |
| Tidal current | 3.0 m/s | 1,025 kg/m³ | 13,838 W/m² |

At typical operating speeds, a tidal turbine accesses 4-8 times more power per square meter of swept area than a wind turbine, allowing much smaller, more compact devices for equivalent power output.

**Rule of thumb**: A tidal current of ~1/10th wind speed delivers comparable power density. A 3 m/s tidal current is roughly equivalent to a 30 m/s wind (hurricane force) in terms of energy flux.

### Tidal Current Origins

::: facet geographic_constraint
Tidal currents arise from the horizontal movement of water responding to tidal range changes. As the tide rises and falls, water must flow into and out of bays, estuaries, and channels. Where geography constricts this flow, currents accelerate:
:::

**Flow acceleration mechanisms:**
- **Straits and channels**: Water squeezed between landmasses (Pentland Firth, Cook Strait)
- **Headlands**: Flow accelerates around coastal promontories
- **Estuary entrances**: Tidal prism forces water through narrow mouths
- **Between islands**: Natural channels with amplified flow

The strongest tidal currents occur where large tidal ranges combine with constrained geography. The Pentland Firth between mainland Scotland and Orkney experiences currents exceeding 5 m/s (10 knots), making it one of the world's premier tidal stream sites.

**Tidal current characteristics:**
- Bidirectional: Flow reverses approximately every 6 hours
- Predictable: Current speeds can be forecast years in advance
- Variable: Speed varies sinusoidally within each tidal cycle
- Asymmetric: Flood and ebb currents may differ in magnitude and direction

## Conversion Mechanism

### Turbine Types

::: facet conversion_pathway
The European Marine Energy Centre (EMEC) recognizes six principal tidal energy converter types:
:::

**1. Horizontal Axis Turbines (HAT)**

Most common design, analogous to wind turbines. Rotor axis aligned with flow direction. Examples: Atlantis AR1500, Andritz Hydro Hammerfest AH1000, Orbital O2.

Characteristics:
- Mature technology leveraging wind turbine experience
- Rotor diameters typically 10-25 m
- Fixed or yawing nacelle to handle bidirectional flow
- Seabed-mounted (gravity base, monopile) or floating

**2. Vertical Axis Turbines (VAT)**

Rotor axis perpendicular to flow. Accepts flow from any horizontal direction without yawing.

Characteristics:
- Simpler mechanically (no yaw system needed)
- Lower efficiency than horizontal axis designs
- Easier maintenance (generator can be above water)
- Examples: Gorlov helical turbine, Darrieus-type devices

**3. Oscillating Hydrofoils**

Hydrofoil attached to oscillating arm; lift forces cause reciprocating motion converted to rotary motion or hydraulic pressure.

Characteristics:
- Can operate in shallower water
- Lower blade tip speeds (reduced marine life impact)
- More complex power take-off
- Example: Stingray (now discontinued)

**4. Ducted/Venturi Devices**

Turbine housed in a duct that concentrates flow, increasing velocity through the rotor.

Characteristics:
- Higher power coefficient possible (duct creates partial blockage)
- Increased structural complexity and cost
- Enhanced performance in lower-speed currents
- Example: OpenHydro (now defunct)

**5. Archimedes Screws**

Helical screw that rotates as water flows through it.

Characteristics:
- Very low speed rotation
- Fish-friendly (low blade strike risk)
- Limited to lower power applications
- Used more commonly in river applications

**6. Tidal Kites**

Underwater "kite" carrying a small turbine, tethered to seabed, flying figure-eight patterns through the water to amplify relative velocity.

Characteristics:
- Can operate in slower currents (1.2-2.5 m/s)
- Small turbine experiences high apparent velocity
- Complex control systems required
- Example: Minesto Deep Green, Dragon 12

### Power Take-Off Systems

**Direct drive**: Rotor directly coupled to permanent magnet generator. Eliminates gearbox but requires large, slow-speed generator. Reduces maintenance but increases generator cost.

**Geared systems**: Gearbox steps up rotor speed (typically 10-20 rpm) to generator speed (hundreds to thousands of rpm). Standard approach but gearbox is a maintenance concern in marine environment.

**Hydraulic**: Rotor drives hydraulic pump; hydraulic fluid powers generator. Allows flexible placement of generator (potentially above water). Higher losses but easier maintenance.

### Mounting Configurations

**Seabed-mounted (gravity base)**:
- Heavy foundation sits on seabed
- No drilling required
- Suitable for hard seabed
- Example: MeyGen AR1500 turbines use 350-tonne gravity bases with 200-tonne ballast blocks

**Seabed-mounted (monopile/pin-pile)**:
- Steel pile driven or drilled into seabed
- Higher structural loads possible
- More expensive installation
- Example: SeaGen (now decommissioned)

**Floating**:
- Platform moored to seabed
- Turbines suspended below waterline
- Easy installation (tow to site)
- Surface access for maintenance
- Example: Orbital O2 (72 m floating platform with retractable turbine legs)

Floating systems offer significant advantages: installation without heavy-lift vessels, maintenance without diving or ROVs, and flexibility to relocate. The Orbital O2 demonstrated that its turbines can be raised above water for inspection without specialized equipment.

## Theoretical Limits

### The Betz Limit and Its Application

::: facet theoretical_limit
The Betz limit (59.3% or 16/27) represents the maximum fraction of kinetic energy that an ideal turbine can extract from an unbounded flow. Derived from conservation of mass and momentum, it applies when flow is steady and uniform, the turbine operates in open (unbounded) flow, and there are no energy losses.
:::

**Wind turbines** typically achieve 75-80% of the Betz limit in practice, giving power coefficients (Cp) of 0.45-0.50.

**Tidal turbines** in unbounded flow face similar constraints. However, tidal channels present a fundamentally different situation: flow is bounded by the seabed, surface, and often by channel walls. This confinement enables power coefficients **exceeding** the classical Betz limit.

### Channel Blockage Effects

When turbines occupy a significant fraction of a channel's cross-section (high "blockage ratio"), the flow cannot simply divert around them. The partial ducting effect forces more water through the turbine plane, increasing the effective power coefficient.

Research by Vennell (2013) showed that tidal turbines in channels can theoretically achieve Cp values several times higher than 16/27. However, this comes with complications:
- Extracting power reduces the overall flow through the channel
- At high extraction rates, the resource itself diminishes
- Structural loads on turbines increase with blockage

The optimal extraction from a tidal channel is typically 10-25% of the undisturbed kinetic energy flux. Extracting more degrades the resource faster than power increases.

### Practical Power Coefficients

Real-world tidal turbines achieve:
- Single turbine in open flow: Cp ≈ 0.35-0.45
- Turbine in array (moderate blockage): Cp ≈ 0.40-0.50
- Ducted turbine: Cp ≈ 0.50-0.60 (relative to duct inlet area)

The Orbital O2 achieves rated power (2 MW) at a current speed of 2.5 m/s. For 20 m diameter rotors (628 m² total swept area):

Theoretical power at 2.5 m/s = ½ × 1,025 × 628 × 2.5³ = 5.03 MW

Actual power = 2 MW

Implied Cp = 2.0 / 5.03 = 0.40

This is consistent with well-designed horizontal axis turbines operating near their design point.

## Practical Limitations

### Site Constraints

Economically viable tidal stream sites require:

**Minimum current speed**: >2 m/s mean spring peak current (ideally >2.5 m/s)
- Below 1.5 m/s: Insufficient energy density
- 1.5-2.0 m/s: Marginal; requires kite-type devices
- 2.0-3.0 m/s: Good resource; conventional turbines viable
- >3.0 m/s: Excellent resource but structural challenges

**Appropriate water depth**: 25-50 m typical
- <20 m: Insufficient depth for turbine clearance and vessel access
- 25-50 m: Optimal for seabed-mounted and floating devices
- >80 m: Installation and maintenance become expensive

**Seabed conditions**: Stable substrate for foundations
- Hard rock or consolidated sediment preferred
- Mobile sand/gravel problematic for gravity bases
- Cable routing must avoid sensitive areas

**Grid access**: Reasonable distance to onshore connection
- Subsea cable costs scale with distance
- Grid infrastructure must handle variable generation

**Environmental constraints**: Avoiding sensitive habitats
- Marine mammal migration routes
- Fish spawning areas
- Protected seabed habitats

These constraints dramatically limit suitable sites. A comprehensive 2024 review identified only 426 potentially suitable sites globally, concentrated in:
- UK (especially Scotland): Pentland Firth, Orkney waters, Welsh coast
- France: Raz Blanchard (Alderney Race), Fromveur Strait
- Canada: Bay of Fundy (Minas Passage), British Columbia
- Indonesia: Strait of Larantuka, Lombok Strait
- New Zealand: Cook Strait, Kaipara Harbour
- South Korea: Uldolmok Strait
- USA: Puget Sound, East River (NYC), Cook Inlet (Alaska)

### Intermittency Pattern

::: facet temporal_character
Tidal stream generation is **predictable but intermittent**. Unlike solar or wind, the pattern is known precisely:
:::

**Within each tidal cycle** (~12.4 hours):
- Generation occurs during flood and ebb when current exceeds cut-in speed
- Slack water periods (tide turn) produce no power: typically 2-4 hours/cycle
- Peak power occurs at mid-tide when current is strongest

**Daily pattern**:
- Two flood and two ebb cycles per day
- Four generation periods, four slack periods
- Total generation window: ~16-20 hours/day

**Spring-neap cycle** (~14 days):
- Spring tides (new/full moon): Maximum currents, maximum generation
- Neap tides (quarter moon): Currents 50-60% of spring, generation reduced proportionally
- Power varies by factor of ~2-4 between spring and neap

**Annual variation**:
- Equinoctial springs (March, September): Highest tides
- Solstice neaps: Lowest tides
- Modest variation (~10-20%) in annual energy yield

**Capacity factors**: Due to these patterns, tidal stream capacity factors are typically:
- 25-35% for well-sited projects
- MeyGen Phase 1: ~25% observed capacity factor
- Orbital O2: Targeting 30%+ capacity factor

For comparison: onshore wind 25-35%, offshore wind 35-50%, solar PV 10-25%, nuclear 85-95%.

### Environmental Considerations

::: limitation environmental_impact
Tidal stream devices have lower environmental impact than barrages but still raise concerns:
:::

**Collision risk**: Marine mammals and fish may collide with rotating blades
- Blade tip speeds: 10-12 m/s for large turbines
- Studies at MeyGen show marine mammals generally avoid turbines
- Monitoring ongoing; mitigation may include shut-down protocols

**Electromagnetic fields (EMF)**: Subsea cables produce EMFs that may affect fish navigation
- Particularly relevant for elasmobranchs (sharks, rays) using electroreception
- Cable burial reduces exposure
- Research suggests effects are localized

**Acoustic emissions**: Operational noise may disturb marine life
- Lower frequency than vessel traffic
- Potential masking of marine mammal communication
- Generally considered lower concern than construction noise

**Habitat alteration**: Foundations and cables change local seabed
- Hard structures may provide artificial reef habitat
- Scour protection alters sediment dynamics
- Cable installation causes temporary disturbance

**Flow modification**: Large arrays may alter local hydrodynamics
- Reduced current speeds downstream of turbines
- Potential changes to sediment transport
- Modeling suggests 10-20% extraction limits minimize impacts

Overall, tidal stream has significantly lower environmental impact than tidal barrages, which is why development focus has shifted to stream technology despite higher per-MW costs.

### Installation and Maintenance Challenges

::: limitation marine_operations
The marine environment presents formidable operational challenges:
:::

**Installation**:
- Work windows limited to slack water (~30 min every 6 hours)
- Weather windows required (sea states <1.5-2 m significant wave height)
- Heavy-lift vessels expensive (>£100k/day)
- Seabed-mounted turbines may weigh 100-400 tonnes

**Maintenance**:
- Subsea access requires ROVs, divers, or device retrieval
- Biofouling requires regular cleaning
- Corrosion in saltwater environment
- Long-term reliability unproven at scale

**Floating systems** (like Orbital O2) address many challenges:
- Tow to site without heavy-lift vessels
- Surface access for routine maintenance
- Turbines can be raised above water for inspection
- Can be towed to port for major repairs

MeyGen achieved a milestone in 2025 when one turbine operated for 6.5 years without unplanned maintenance, demonstrating that reliability targets are achievable.

## Scaling Characteristics

### Cost Reduction Trajectory

::: facet scale_regime
Tidal stream energy has demonstrated rapid cost reduction:
:::

| Year | Representative LCOE | Notes |
|------|---------------------|-------|
| 2016-2018 | £300+/MWh | Early demonstration projects |
| 2018 | £359/MWh | ORE Catapult estimate |
| 2022 | £213/MWh | UK CfD AR4 strike price |
| 2023 | £198/MWh | UK CfD AR5 strike price |
| 2024 | £178/MWh | UK CfD AR6 strike price |
| Target 2030 | £90-150/MWh | Industry projections |

This represents >40% cost reduction in 6 years with minimal deployment. The trajectory mirrors early offshore wind, which achieved 60%+ cost reduction from 2012 to 2020 as deployment scaled from GW to tens of GW.

### Economies of Scale

Cost reduction pathways include:

**Device scaling**: Larger turbines reduce cost per MW
- Rotor diameter increase from 16 m to 20 m increases swept area by 56%
- Orbital planning 26 m rotors with >1,000 m² swept area
- Larger devices amortize fixed costs (foundation, cable) over more capacity

**Array effects**: Multi-turbine projects reduce per-unit costs
- Shared grid connection and cable infrastructure
- Learning and efficiency in installation
- Bulk procurement of components

**Supply chain maturation**: Volume enables specialization
- Dedicated installation vessels
- Standardized components
- Reduced development and consenting costs

**Technology improvement**:
- Higher efficiency drivetrains
- Improved blade materials and designs
- Better control systems for variable flow

ORE Catapult projects 70% cost reduction from current levels to 1 GW installed capacity, bringing LCOE to ~£90/MWh, competitive with offshore wind a decade ago.

### Comparison with Wind Energy Development

Tidal stream in 2024 is roughly where offshore wind was in 2008-2010:
- Similar installed capacity (~10-20 MW operational)
- Similar LCOE (~£200-300/MWh)
- Similar technical challenges (marine installation, reliability)
- Similar policy support mechanisms (feed-in tariffs, CfDs)

Offshore wind subsequently achieved:
- 90% cost reduction over 15 years
- 75 GW global installed capacity by 2023
- LCOE competitive with fossil generation

If tidal stream follows a similar trajectory (uncertain but plausible given the technology similarities), it could achieve competitive costs by the mid-2030s with appropriate policy support.

## Current Status

### Global Installed Capacity

Tidal energy total installed capacity (including barrages): ~530 MW globally

**Tidal barrage capacity**: ~520 MW
- La Rance (France): 240 MW (1966)
- Sihwa Lake (South Korea): 254 MW (2011)
- Annapolis Royal (Canada): 20 MW (decommissioned 2019)
- Small Chinese and Russian plants: ~6 MW

**Tidal stream capacity**: ~10-15 MW operational (as of late 2024)

Tidal stream represents <3% of total tidal capacity but >90% of current development activity.

### Major Tidal Stream Projects

**MeyGen (Scotland)** - World's largest tidal stream project
- Location: Pentland Firth, Inner Sound
- Phase 1: 6 MW operational (4 × 1.5 MW turbines since 2016-2017)
- Phase 2: 59 MW awarded CfD funding (target 2027-2029)
- Ultimate potential: 398 MW (lease area)
- Cumulative generation: >80 GWh (as of August 2025)
- Technology: Seabed-mounted horizontal axis turbines (Atlantis AR1500, Andritz AH1000)
- Key achievement: Generated >60% of all tidal stream power globally

**Orbital O2 (Scotland)** - Most powerful single tidal turbine
- Location: EMEC Fall of Warness, Orkney
- Capacity: 2 MW (2 × 1 MW rotors)
- Operational: July 2021
- Technology: Floating platform with retractable turbine legs
- Annual output: ~4 GWh (estimated)
- Key innovation: Surface maintenance access without diving

**Nova Innovation Shetland Tidal Array (Scotland)**
- Location: Bluemull Sound, Shetland
- Capacity: ~0.5 MW
- Operational: 2016 onwards
- Technology: Seabed-mounted small turbines (100 kW each)
- Key achievement: >80,000 cumulative turbine operating hours
- 6 MW expansion awarded CfD in 2024

**Sabella D10 (France)**
- Location: Fromveur Strait, Brittany
- Capacity: 1 MW
- Technology: Seabed-mounted horizontal axis
- Status: Periodic deployment for testing/demonstration

**FloWatt (France)** - Under development
- Location: Raz Blanchard (Alderney Race)
- Capacity: 17.5 MW (planned)
- Developer: HydroQuest/Qair
- Status: Targeting commissioning 2026
- Funding: €51 million EU Innovation Fund + French government support

**Normandie Hydroliennes NH1 (France)** - Under development
- Location: Raz Blanchard
- Capacity: 12 MW (planned)
- Technology: 4 × 3 MW Proteus AR3000 turbines
- Status: In development

**Minesto Dragon (Faroe Islands)**
- Location: Vestmanna
- Capacity: 1.2 MW (Dragon 12 kite system)
- Technology: Underwater tidal kite
- Status: Commercial demonstration ongoing
- Key innovation: Operates in slower currents (1.2-2.4 m/s)

### Pipeline and Projections

**UK tidal stream pipeline**: 121 MW contracted under CfD (AR4-AR6) for delivery by 2029
- AR4 (2022): 41 MW at £178/MWh
- AR5 (2023): 53 MW at £198/MWh
- AR6 (2024): 28 MW at £178/MWh

**European pipeline**: 165 MW of publicly funded projects planned over next 5 years (152 MW tidal stream)

**Global projections**:
- 2030: 500-1,000 MW installed (optimistic scenarios)
- 2050: 10-50 GW installed (highly uncertain)

### Market and Investment

**Market size**: ~$1.8 billion (2024), projected to reach $10-14 billion by 2030s

**Investment trends**:
- EU Horizon 2020/Europe: >€300 million committed to ocean energy 2021-2027
- UK government: £160 million for tidal and wave energy development
- French government: €75 million for FloWatt and related projects
- Private investment increasing as technology matures

**Key policy mechanisms**:
- UK Contracts for Difference with dedicated tidal stream pot
- French preferential feed-in tariffs
- EU Innovation Fund grants
- National innovation grants (Scotland, France, Canada)

### Technology Readiness

Tidal stream technology has reached TRL 7-8 (system prototype demonstration in operational environment), transitioning toward TRL 9 (commercial operation):

| Technology Aspect | Status |
|-------------------|--------|
| Horizontal axis turbines | TRL 8-9 (multiple operational systems) |
| Floating platforms | TRL 8 (Orbital O2 operational) |
| Seabed foundations | TRL 9 (proven at MeyGen) |
| Tidal kites | TRL 7-8 (Minesto Dragon operational) |
| Multi-turbine arrays | TRL 7 (MeyGen Phase 1, limited scale) |
| Large-scale arrays (>50 MW) | TRL 5-6 (designed, not deployed) |

## Global Resource Potential

### Theoretical Resource

Global tidal stream theoretical resource estimates vary widely:
- Conservative: 800-1,000 TWh/year
- Moderate: 1,200 TWh/year
- Optimistic: 3,000 TWh/year

For context, global electricity consumption is ~30,000 TWh/year. Even optimistic estimates suggest tidal stream could supply at most 10% of global demand.

### Practical/Technical Resource

After accounting for depth constraints, minimum current speeds, and environmental exclusions:

| Region | Practical Resource Estimate |
|--------|---------------------------|
| UK | 34 TWh/year (10% of theoretical) |
| France | 10-20 TWh/year |
| Canada | 17-25 TWh/year (Minas Passage alone: 11 TWh/year) |
| Indonesia | 10-20 TWh/year |
| New Zealand | 5-10 TWh/year |
| USA | 5-15 TWh/year |
| **Global total** | 100-150 TWh/year |

This practical resource represents <1% of global electricity demand. Tidal stream will remain a niche technology, valuable in specific locations but not a major contributor to global decarbonization.

### UK Potential

The UK has the best tidal stream resource in Europe:
- Theoretical: ~50% of European tidal stream potential
- Practical: ~34 TWh/year
- Pentland Firth alone: Could deliver 1-4 GW

Scotland's target of sourcing significant electricity from tidal stream is technically achievable. The Pentland Firth could "provide half of Scotland's electricity" according to Oxford University studies, though this would require tens of GW of installed capacity and significant cost reduction.

## Strategic Outlook

### Near-term (2025-2030)

**Expected developments**:
- MeyGen Phase 2 completion (59 MW by 2029)
- French Raz Blanchard projects operational (~30 MW)
- UK tidal stream pipeline deployed (121 MW)
- Total global tidal stream capacity: 200-300 MW

**Key milestones needed**:
- Demonstration of 50+ MW array operation
- LCOE reduction toward £150/MWh
- Multi-year reliability data from larger arrays
- Standardized turbine designs enabling volume manufacturing

### Medium-term (2030-2040)

**Possible trajectory**:
- If cost reduction continues, deployment could accelerate rapidly
- 1-5 GW global capacity achievable
- Focus sites: Pentland Firth, Raz Blanchard, Minas Passage
- Technology likely to standardize around 2-3 proven designs

**Barriers**:
- Financing remains challenging (high CAPEX, limited track record)
- Environmental consenting for large arrays uncertain
- Grid integration in remote locations
- Competition from continuing cost reduction in offshore wind and solar

### Long-term Potential

Tidal stream's ultimate role depends on:

1. **Cost trajectory**: If costs reach £80-100/MWh, tidal stream becomes competitive in suitable locations. If costs stall at £150+/MWh, deployment will remain limited to subsidized projects.

2. **Value of predictability**: Tides are perfectly predictable, unlike wind and solar. As grids incorporate more variable renewables, the value of predictable generation may increase, providing additional revenue streams.

3. **Complementarity**: Tidal generation often peaks when wind is weak (calm weather often correlates with strong tides). This complementarity could enhance system value.

4. **Geographic concentration**: Benefits will be concentrated in a few favorable locations. Countries like UK, France, Canada, and Indonesia stand to gain most.

**Realistic long-term contribution**:
- Global: 10-50 GW by 2050 (~0.1-0.5% of projected electricity supply)
- UK: 1-5 GW by 2050 (~1-5% of UK electricity)
- Niche but valuable in locations with excellent resources

### Comparison with Other Marine Energy

| Technology | Global Potential | Current Status | Outlook |
|------------|-----------------|----------------|---------|
| Tidal barrage | 100-200 GW | 520 MW installed | Limited by site constraints and environmental impact |
| Tidal stream | 50-150 GW | 10-15 MW installed | Best prospects; technology maturing |
| Wave energy | 500-2,000 GW | <5 MW installed | Earlier stage; higher technical challenges |
| OTEC | 10-80 GW | <1 MW operational | Very early stage; limited to tropics |

Tidal stream is the most promising marine energy technology for near-term deployment, combining:
- Proven technology building on wind energy experience
- Predictable resource
- Lower environmental impact than barrages
- Clear cost reduction pathway

The technology has moved beyond "promising concept" to "early commercial deployment." Whether it scales to meaningful contribution depends on sustained policy support through the critical next decade of development.