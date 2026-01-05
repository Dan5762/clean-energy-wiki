# Nuclear Fusion

## Fundamental Principle

### The Fusion Reaction

::: facet ultimate_source
Nuclear fusion releases energy by combining light atomic nuclei into heavier ones. This is the process that powers the Sun and all stars, where hydrogen nuclei fuse into helium under extreme temperature and pressure, releasing vast amounts of energy.
:::

The most accessible fusion reaction for terrestrial energy production is deuterium-tritium (D-T) fusion:

::: equation dt_fusion_reaction
$$^2_1D + ^3_1T \rightarrow ^4_2He + ^1_0n + 17.6 \text{ MeV}$$
:::

A deuterium nucleus (one proton, one neutron) fuses with a tritium nucleus (one proton, two neutrons) to produce a helium-4 nucleus (alpha particle) and a high-energy neutron.

**Energy distribution:**
- Neutron kinetic energy: 14.1 MeV (80%)
- Alpha particle kinetic energy: 3.5 MeV (20%)

The alpha particle remains in the plasma, providing self-heating, while the neutron escapes and deposits its energy in the surrounding blanket structure.

### Why Fusion is Difficult

::: limitation coulomb_barrier
Atomic nuclei are positively charged and repel each other via the Coulomb force. To fuse, nuclei must overcome this repulsion and approach close enough for the short-range strong nuclear force to take over.
:::

**The Coulomb barrier** for D-T fusion is approximately 0.1 MeV. To overcome this barrier, the fuel must be heated to extreme temperatures where particles have sufficient kinetic energy to collide and fuse.

**Required conditions:**
- Temperature: ~100 million °C (10 keV) or higher
- At these temperatures, matter exists as plasma (ionized gas)
- Plasma must be confined long enough for sufficient fusion reactions to occur

For comparison, the Sun's core temperature is only 15 million °C, but fusion occurs there because of the enormous gravitational pressure (250 billion atmospheres) and the Sun's vast size, giving particles many opportunities to fuse over billions of years.

### The Lawson Criterion

::: facet theoretical_limit
British physicist John Lawson showed in 1955 that achieving net energy from fusion requires satisfying a condition involving temperature, plasma density, and confinement time.
:::

The **triple product** (fusion product) must exceed a threshold:

::: equation lawson_criterion
$$n \cdot \tau_E \cdot T \geq 5 \times 10^{21} \text{ m}^{-3} \cdot \text{s} \cdot \text{keV}$$
:::

Where:
- n = plasma density (particles per m³)
- τ_E = energy confinement time (seconds)
- T = temperature (keV; 1 keV ≈ 11.6 million K)

**Physical interpretation:**
- Higher density means more collisions and fusion events
- Longer confinement means more time for reactions to occur
- Higher temperature means higher reaction rate (up to an optimum)

At **ignition**, fusion self-heating from alpha particles equals all energy losses, and external heating can be turned off. The reaction becomes self-sustaining.

### Energy Gain Factor (Q)

The ratio of fusion power output to heating power input:

::: equation energy_gain_factor
$$Q = \frac{P_{fusion}}{P_{heating}}$$
:::

**Milestones:**
- Q = 1: "Breakeven" (fusion output equals heating input)
- Q = 5-10: Self-heating begins to dominate
- Q = ∞: Ignition (no external heating required)
- Q ≥ 20-30: Minimum for practical power plant (accounting for conversion efficiencies)

**Historical records:**
- JET tokamak (1997): Q = 0.67 (D-T plasma)
- NIF laser fusion (Dec 2022): Q = 1.54 (first scientific breakeven)
- NIF (April 2025): Q = 4.13 (8.6 MJ output from 2.08 MJ input)

### Energy Density

Fusion fuel has extraordinary energy density:

| Fuel | Energy Density | Ratio to Coal |
|------|---------------|---------------|
| Coal | 24 MJ/kg | 1× |
| Uranium (fission, LWR) | 500,000 MJ/kg | 20,000× |
| D-T fusion | 340,000,000 MJ/kg | 14,000,000× |

One gram of D-T fuel releases as much energy as 8 tonnes of oil. A 1 GW fusion plant would consume approximately 100 kg of deuterium and 3 tonnes of natural lithium (for tritium breeding) per year.

### Alternative Fusion Reactions

**Deuterium-Deuterium (D-D):**

Two branches with roughly equal probability:
- D + D → T + p + 4.0 MeV
- D + D → ³He + n + 3.3 MeV

Advantages: Deuterium abundant (no tritium needed)
Disadvantages: Requires higher temperature (~300 million °C), lower reaction rate

**Deuterium-Helium-3 (D-³He):**

$$D + ^3He \rightarrow ^4He + p + 18.3 \text{ MeV}$$

Advantages: Aneutronic (products are charged particles, directly convertible to electricity)
Disadvantages: Requires very high temperature (~500 million °C), ³He extremely rare on Earth

**Proton-Boron-11 (p-¹¹B):**

$$p + ^{11}B \rightarrow 3 \alpha + 8.7 \text{ MeV}$$

Advantages: Fully aneutronic, abundant fuels
Disadvantages: Requires extreme temperatures (~1 billion °C), very low reaction rate

D-T remains the only practical near-term fusion fuel due to its high reaction rate at achievable temperatures.

## Confinement Approaches

### Magnetic Confinement Fusion (MCF)

::: facet conversion_pathway
Since plasma cannot touch material walls (it would instantly cool), magnetic fields confine the charged particles.
:::

**Tokamak:**
The leading magnetic confinement concept, invented in the Soviet Union in the 1950s.

Configuration:
- Toroidal (doughnut-shaped) vacuum vessel
- Strong toroidal magnetic field (10-15 T) from external coils
- Plasma current (millions of amperes) creates poloidal field
- Combined fields create helical field lines that confine particles

Key parameters:
- Major radius: 2-6 m (distance from center to plasma center)
- Minor radius: 0.5-2 m (plasma cross-section radius)
- Plasma volume: 100-1000 m³
- Magnetic field strength: 5-15 T

Advantages: Well-understood physics, highest confinement achieved
Disadvantages: Pulsed operation (current must be driven), disruption risk, complex engineering

**Stellarator:**
Uses external coils alone to create the confining magnetic field, without relying on plasma current.

Configuration:
- Twisted, three-dimensional coil geometry
- Complex magnetic field structure computed precisely

Advantages: Inherently steady-state, no disruption risk
Disadvantages: More complex engineering, historically lower confinement

Leading example: Wendelstein 7-X (Germany), the world's largest stellarator

**Other magnetic concepts:**
- **Spherical tokamak**: More compact, higher beta (ratio of plasma pressure to magnetic pressure)
- **Field-reversed configuration (FRC)**: Compact, high beta, used by TAE Technologies and Helion
- **Magnetic mirror**: Open-ended; largely abandoned for power production

### Inertial Confinement Fusion (ICF)

Instead of holding plasma for seconds, ICF compresses fuel to extreme density for nanoseconds, relying on the fuel's own inertia to confine it long enough for fusion.

**Laser-driven indirect drive (NIF approach):**
1. 192 laser beams deliver ~2 MJ of UV light to a cylindrical "hohlraum"
2. Hohlraum walls emit X-rays that ablate the surface of a pea-sized fuel capsule
3. Ablation creates rocket-like implosion, compressing fuel to 100× solid density
4. Central "hot spot" reaches 100 million °C, initiating fusion
5. Alpha particles heat surrounding cold fuel, propagating burn outward

**Laser-driven direct drive:**
Lasers strike the fuel capsule directly, requiring more uniform illumination but potentially more efficient energy coupling.

**Pulsed power (Z-pinch):**
Massive electrical currents create magnetic fields that implode fuel. Sandia National Laboratories' Z Machine explores this approach.

**Advantages of ICF:**
- High gain potential (Q >> 100 theoretically possible)
- Compact reaction zone
- No need for superconducting magnets

**Disadvantages:**
- Extremely low driver efficiency (lasers ~1-10% efficient)
- Requires new target for each shot
- High repetition rate challenging (NIF fires ~1 shot/day; power plant needs 10-20 Hz)

### Magnetized Target Fusion (MTF)

Hybrid approach combining elements of MCF and ICF. A magnetized plasma is compressed mechanically or with pulsed power. General Fusion pursues this approach using pistons to compress plasma.

## Current Status

### ITER (International Thermonuclear Experimental Reactor)

The world's largest fusion experiment, under construction in Cadarache, France.

**Project overview:**
- 35 nations collaborating (EU, USA, Russia, China, Japan, South Korea, India)
- Total cost: €20+ billion (original estimate ~€5 billion)
- Construction began: 2010
- Site: 180 hectares

**Technical specifications:**
- Tokamak type: Conventional
- Major radius: 6.2 m
- Plasma volume: 840 m³
- Magnetic field: 5.3 T (toroidal), 11.8 T (peak)
- Plasma current: 15 MA
- Fusion power target: 500 MW thermal
- Q target: ≥10 (500 MW fusion from 50 MW heating)
- Pulse duration: 400-600 seconds
- Superconducting coils: Nb₃Sn and NbTi at 4 K

**Timeline (as of July 2024 baseline):**
- ~~First plasma: December 2025~~ → Now targeting 2033-2034
- Full plasma current: 2034
- D-D operations: 2035
- D-T operations (burning plasma): 2039

**Delays and cost overruns:**
- Original first plasma target: 2018-2020
- €5 billion additional costs announced July 2024
- Causes: COVID-19 supply chain disruption, quality control issues with components (thermal shields, vacuum vessel), complexity of first-of-a-kind engineering

**Key challenges:**
- Thermal shield cooling pipe defects (23 km of pipes need replacement)
- Vacuum vessel sector manufacturing issues
- Material change from beryllium to tungsten for first wall

Despite delays, ITER remains essential for demonstrating:
- Sustained burning plasma operation
- Tritium breeding blanket technology
- Superconducting magnet systems at scale
- Plasma-material interactions in reactor conditions

### National Ignition Facility (NIF)

The world's most powerful laser, at Lawrence Livermore National Laboratory, California.

**Facility specifications:**
- 192 laser beams
- 1.8-2.2 MJ UV laser energy
- Primary mission: Nuclear weapons stockpile stewardship
- Secondary goal: Inertial fusion energy research

**Historic achievements:**

| Date | Laser Energy | Fusion Yield | Q |
|------|-------------|--------------|---|
| Aug 2021 | 1.9 MJ | 1.35 MJ | 0.71 |
| Dec 5, 2022 | 2.05 MJ | 3.15 MJ | 1.54 (first ignition) |
| Jul 30, 2023 | 2.05 MJ | 3.88 MJ | 1.89 |
| Oct 30, 2023 | 2.2 MJ | 3.4 MJ | 1.55 |
| Feb 12, 2024 | 2.2 MJ | 5.2 MJ | 2.36 |
| Apr 7, 2025 | 2.08 MJ | 8.6 MJ | 4.13 (record) |

**Significance of ignition:**
- First controlled fusion experiment to exceed scientific breakeven
- Demonstrates fundamental physics of thermonuclear burn
- Validates decades of ICF research

**Important caveats:**
- "Wall-plug" efficiency is very low: NIF uses ~400 MJ of electricity to produce 2 MJ of laser light
- Net energy gain relative to total facility input: ~1%
- Cannot operate at power-plant repetition rates (fires once per day maximum)
- Purpose is primarily scientific, not energy production

### Other Major Facilities

**JET (Joint European Torus), UK:**
- World's largest operating tokamak until ITER
- Achieved Q = 0.67 in 1997 (record for MCF)
- Final D-T campaign 2021-2023 produced 69 MJ over 5 seconds
- Shut down December 2023 after 40 years

**JT-60SA (Japan):**
- Largest superconducting tokamak operating
- First plasma: October 2023
- Supports ITER physics research

**EAST (China):**
- "Experimental Advanced Superconducting Tokamak"
- Achieved 100 million °C for 10 seconds (2018)
- Record confinement times (1,000+ seconds at lower temperatures)

**KSTAR (South Korea):**
- Superconducting tokamak
- High-performance plasma confinement experiments

**Wendelstein 7-X (Germany):**
- World's largest stellarator
- Demonstrates stellarator optimization
- First plasma 2015; ongoing experiments

### Private Fusion Industry

A dramatic shift has occurred since ~2015, with private companies raising billions to develop fusion faster than government programs.

**Total private investment (as of mid-2025):**
- Cumulative: ~$9.7-10 billion
- 2024 alone: ~$2.6 billion
- Companies: 50+ worldwide

**Leading private companies:**

**Commonwealth Fusion Systems (CFS)** - Cambridge, MA
- Technology: Compact tokamak with high-temperature superconducting (HTS) magnets
- Funding: ~$3 billion total (including $863M in August 2025)
- Key innovation: HTS magnets enable smaller, cheaper tokamaks
- Status: SPARC demonstration device ~65% complete; first plasma targeted 2026
- Target: Q > 2 in SPARC; commercial ARC plant (400 MW) in Virginia
- Partners: MIT, Google (200 MW purchase agreement)

**Helion Energy** - Everett, WA
- Technology: Field-reversed configuration (FRC), pulsed fusion
- Funding: ~$1 billion
- Fuel: D-He³ (deuterium-helium-3), with He³ bred from D-D reactions
- Innovation: Direct electricity generation via electromagnetic induction (no steam turbine)
- Status: Polaris (7th prototype) complete; first electricity expected 2025
- Target: Commercial power by 2028 (50 MW Orion plant for Microsoft)
- Investors: Sam Altman, OpenAI, Microsoft

**TAE Technologies** - Foothill Ranch, CA
- Technology: Field-reversed configuration, advanced fuel cycles
- Funding: ~$1.3 billion
- Target fuel: p-¹¹B (proton-boron), aneutronic
- Status: Copernicus device under construction
- Partners: Google (AI for plasma control)
- Timeline: Grid-ready Da Vinci plant early 2030s

**General Fusion** - Canada
- Technology: Magnetized target fusion (MTF)
- Approach: Pistons compress magnetized plasma
- Status: LM26 machine achieved first plasma compression April 2025
- Investor: Cenovus Energy

**Tokamak Energy** - UK
- Technology: Spherical tokamak with HTS magnets
- Funding: ~$336 million
- Status: Demo 4 device under development

**Pacific Fusion** - USA
- Technology: Inertial confinement with electromagnetic compression
- Funding: $900 million Series A (2024)
- Leadership: Eric Lander (Human Genome Project)

**Focused Energy** - Germany/USA
- Technology: Laser-driven inertial fusion
- Staff: Includes former NIF ignition team members

### Geographic Distribution

**Fusion leadership by region:**

| Region | Approach | Investment | Status |
|--------|----------|------------|--------|
| USA | Private MCF, NIF ICF | ~$6+ billion private | Leading private sector |
| EU | ITER (host), stellarators | ~€10 billion public | Largest public program |
| China | Tokamaks, laser fusion | ~$3 billion/year public | Fastest construction |
| UK | Spherical tokamaks, SMRs | £2.5 billion committed | Strong private sector |
| Japan | JT-60SA, ITER partner | Significant public | Technology contributor |
| South Korea | KSTAR, ITER partner | Growing | Technology contributor |

China is building multiple fusion facilities and graduating more fusion PhDs than any other country, positioning for future leadership.

## Technical Challenges

### Plasma Stability

::: limitation plasma_instability
Plasmas are inherently unstable. Various instabilities can cause:
:::
- **Disruptions**: Sudden loss of plasma confinement, dumping gigajoules of energy onto vessel walls
- **Edge-localized modes (ELMs)**: Periodic bursts of particles and energy
- **Kink and ballooning instabilities**: Distortions of plasma shape

Mitigation strategies:
- Real-time plasma control (feedback systems, AI/ML increasingly used)
- Shaping plasma cross-section (elongated, D-shaped)
- Active suppression (pellet injection, magnetic perturbations)

### Plasma-Material Interactions

::: limitation materials_challenge
The "first wall" and "divertor" must withstand:
:::
- Heat fluxes up to 10-20 MW/m² (10× reentry vehicle levels)
- Intense neutron bombardment (14 MeV neutrons damage materials)
- Erosion from plasma particles
- Tritium retention and permeation

**Materials under development:**
- Tungsten: High melting point, low erosion; baseline for ITER divertor
- Reduced-activation ferritic-martensitic (RAFM) steels: For structural components
- Silicon carbide composites: For advanced blankets
- Oxide-dispersion-strengthened (ODS) alloys: Radiation resistant

No material exists today that can withstand 20 years of fusion neutron exposure. Materials development is a critical path item.

### Tritium

::: facet material_criticality
Tritium is essential for D-T fusion but presents challenges:
:::

**Supply:**
- Global inventory: ~25 kg (mostly from CANDU reactors)
- ITER will consume significant fraction
- Half-life: 12.3 years (decays to ³He)
- Natural production: Negligible

**Tritium breeding:**
Fusion plants must breed their own tritium using lithium blankets:
- ⁶Li + n → T + ⁴He + 4.8 MeV (thermal neutrons)
- ⁷Li + n → T + ⁴He + n - 2.5 MeV (fast neutrons)

The **tritium breeding ratio (TBR)** must exceed 1.0 to be self-sustaining. Target: TBR ≥ 1.05-1.10 (margin for losses and decay).

ITER will test breeding blanket modules but will not achieve tritium self-sufficiency.

**Safety:**
- Tritium is radioactive (beta emitter) and highly mobile
- Readily absorbed biologically
- Containment and accounting systems essential

### Superconducting Magnets

Large tokamaks require superconducting magnets for efficiency:

**ITER magnets:**
- Nb₃Sn and NbTi superconductors
- Operating temperature: 4 K (liquid helium)
- Toroidal field: 11.8 T peak
- Stored energy: 41 GJ total
- 19 toroidal field coils, each 17 m tall, 360 tonnes

**High-temperature superconductors (HTS):**
- REBCO (Rare Earth Barium Copper Oxide) tapes
- Operating temperature: 20 K (easier cooling)
- Higher field strength possible (20+ T)
- CFS demonstrated 20 T magnet in 2021
- Enables smaller, potentially cheaper reactors

### Energy Capture and Conversion

**For D-T fusion:**
- 80% of energy carried by 14 MeV neutrons
- Neutrons captured in lithium blanket, producing heat and tritium
- Heat drives conventional steam cycle (~33-40% thermal efficiency)
- Alpha particles (20%) heat plasma directly

**For aneutronic fuels (D-He³, p-¹¹B):**
- Energy carried by charged particles
- Potential for direct energy conversion (60-80% efficiency)
- But these reactions are much harder to achieve

## Economics and Timeline

### Cost Projections

::: facet scale_regime
Fusion power plant costs are highly uncertain since none exist:
:::

**Capital cost estimates:**
- Early studies: $5,000-10,000/kW (comparable to fission)
- Recent analyses: Highly variable
- CFS target: Competitive with other clean energy by 2030s
- ITER-based extrapolation: Potentially $15,000+/kW initially

**Key cost drivers:**
- Superconducting magnets (HTS could reduce costs)
- Vacuum vessel and first wall
- Tritium handling systems
- Balance of plant (conventional)

**Learning curve potential:**
- First plants will be expensive (first-of-a-kind)
- Nth-of-a-kind costs could fall 50-80%
- Modular designs (CFS ARC, Helion) may enable faster learning

### Electricity Cost

**Optimistic projections:** $50-100/MWh initially, falling with learning
**Pessimistic projections:** $150-300/MWh, struggling to compete
**Target for competitiveness:** <$80/MWh (comparable to new nuclear fission)

### Timeline Projections

**Government programs:**
- ITER burning plasma: 2039
- DEMO (EU demonstration plant): 2050s
- Commercial fusion: 2060s+

**Private company targets:**
- CFS: First electricity 2027, commercial plant 2030s
- Helion: Electricity 2025, commercial 2028
- TAE: Commercial early 2030s

**Reality check:**
- Private timelines are aggressive and may slip
- No private company has demonstrated Q > 1
- Critical engineering challenges remain unsolved
- History suggests fusion timelines are often optimistic

**Fusion is always 20-30 years away?**

This joke reflects decades of overpromising. However:
- NIF achieved ignition (2022) - first time ever
- HTS magnets are a genuine breakthrough (2021)
- Private investment is unprecedented
- AI/ML accelerating plasma physics research

Something has changed, but commercial fusion power remains genuinely difficult and uncertain.

## Environmental and Safety Considerations

### Advantages

::: facet temporal_character
**No greenhouse gas emissions:**
:::
- Zero CO₂ from operation
- Low lifecycle emissions (construction, fuel processing)

**Abundant fuel:**
- Deuterium: 1 in 6,500 hydrogen atoms in seawater; effectively unlimited
- Lithium: Abundant in Earth's crust and seawater; centuries of supply
- No mining comparable to uranium or fossil fuels

**No meltdown risk:**
- Fusion plasma contains only grams of fuel at any time
- If confinement lost, reaction stops immediately
- No chain reaction to control
- Fundamentally different safety profile from fission

**No long-lived radioactive waste:**
- Fusion products (helium) are not radioactive
- Activated structural materials: centuries of storage, not millennia
- No plutonium or other weapons-usable materials produced

### Challenges

::: limitation safety_challenges
**Tritium handling:**
:::
- Radioactive (half-life 12.3 years)
- Mobile and biologically active
- Containment essential
- Inventory of several kg in a power plant

**Neutron activation:**
- 14 MeV neutrons activate structural materials
- Components become radioactive waste
- Lower activity and shorter half-lives than fission waste
- Still requires careful decommissioning

**Resource requirements:**
- Large quantities of special materials (beryllium, tungsten, superconductors)
- Helium for cryogenics (potential supply constraints)
- Lithium for tritium breeding

### Waste Comparison

| Waste Type | Fission (per GWe-year) | Fusion (projected) |
|------------|------------------------|-------------------|
| High-level (>10,000 years) | ~3 m³ | 0 |
| Intermediate (100-1000 years) | ~100 m³ | ~10-50 m³ |
| Low-level (<100 years) | Variable | Majority |
| Total volume | Smaller | Larger |
| Radiotoxicity duration | 100,000+ years | ~100 years |

Fusion produces more activated material by volume but with far shorter hazardous lifetimes.

## Strategic Outlook

### Realistic Assessment

::: facet geographic_constraint
**What fusion offers:**
:::
- Potentially unlimited clean energy
- Baseload power without intermittency
- Small land and fuel footprint
- Favorable safety and waste profile

**What remains uncertain:**
- Can engineering challenges be solved economically?
- Will fusion compete with improving renewables + storage?
- When will first commercial plants operate?
- What will electricity actually cost?

### Scenarios

**Optimistic (private-led breakthrough):**
- CFS, Helion, or another company achieves Q > 10 by late 2020s
- First commercial plants 2035
- Costs competitive with nuclear fission by 2040
- Rapid deployment 2040-2060

**Moderate (ITER-led development):**
- ITER demonstrates burning plasma 2039
- DEMO plant 2050s
- Commercial plants 2060s
- Significant but not dominant role by 2070

**Pessimistic (continued delays):**
- Technical or economic barriers prove intractable
- Fusion remains perpetually 20 years away
- Renewables + storage dominate decarbonization
- Fusion becomes niche or abandoned

### Role in Energy Transition

**Near-term (2025-2040):**
- Fusion contributes zero to grid
- Demonstration plants under construction
- R&D investment increasing

**Medium-term (2040-2060):**
- First commercial plants possible (optimistic)
- Early adopters: wealthy nations, specific applications
- Still small fraction of global electricity

**Long-term (2060+):**
- Potential for significant scale-up if economics proven
- Could provide baseload for deep decarbonization
- Especially valuable if renewables + storage prove insufficient

### Investment Thesis

**Arguments for fusion investment:**
- Potentially transformative technology
- Improving odds of success (NIF ignition, HTS magnets, private capital)
- Long development timeline means starting now is essential
- Portfolio approach to climate solutions

**Arguments for caution:**
- No commercial plant demonstrated
- Competing technologies (fission, renewables) advancing rapidly
- Historical pattern of missed timelines
- Very capital-intensive with uncertain returns

**Current reality:**
- Governments: ~$5-6 billion/year globally (mostly ITER)
- Private sector: ~$2-3 billion/year (accelerating)
- Total: Modest compared to other energy R&D

### Conclusion

Nuclear fusion represents humanity's most ambitious energy technology: recreating stellar conditions on Earth to unlock virtually unlimited clean power. After 70 years of research, fusion has achieved genuine milestones. NIF demonstrated ignition in 2022. ITER, despite delays, will test burning plasma in the late 2030s. Private companies have raised $10 billion betting on faster, cheaper approaches.

Yet fusion remains unproven as an energy source. No one has built a reactor that produces more electricity than it consumes. Materials that can withstand decades of neutron bombardment do not exist. Tritium supply is limited. And fusion must ultimately compete economically with fission, renewables, and storage technologies that continue to improve.

The honest assessment is that commercial fusion power is still 15-30 years away under optimistic scenarios, and may never prove economically competitive under pessimistic ones. But the potential prize - clean, safe, abundant energy for civilization - justifies continued investment and research.

Fusion is no longer a matter of "if" regarding physics. The question now is "when" and "how much will it cost" - questions that the next decade of experiments and demonstration plants may finally answer.