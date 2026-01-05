# Nuclear Fission

## Fundamental Principle

### The Fission Reaction

::: facet ultimate_source
Nuclear fission releases energy by splitting heavy atomic nuclei into lighter fragments. When a neutron strikes a fissile nucleus (typically uranium-235 or plutonium-239), the nucleus becomes unstable and splits into two medium-mass fragments, releasing additional neutrons and enormous energy.
:::

A typical U-235 fission reaction:

::: equation fission_reaction
$$^{235}_{92}U + ^1_0n \rightarrow ^{144}_{56}Ba + ^{90}_{36}Kr + 2^1_0n + \sim200 \text{ MeV}$$
:::

The exact fission products vary statistically, but the energy release is consistently around **200 MeV per fission event**.

### Energy Accounting

The ~200 MeV released per U-235 fission distributes approximately as:

| Component | Energy (MeV) | Recovery |
|-----------|-------------|----------|
| Kinetic energy of fission fragments | 165 | Captured as heat |
| Kinetic energy of neutrons | 5 | Captured as heat |
| Prompt gamma rays | 7 | Captured as heat |
| Beta particles from fission product decay | 7 | Captured as heat |
| Gamma rays from fission product decay | 6 | Captured as heat |
| Antineutrinos | 10 | Lost (escapes reactor) |
| **Total** | **~200** | **~190 MeV recoverable** |

Converting to macroscopic quantities:
- Energy per fission: 3.24 × 10⁻¹¹ J
- Energy per kg of U-235: **83.14 TJ/kg** (theoretical complete fission)
- Practical energy per kg of fuel: ~45 TJ/kg (accounting for incomplete burnup)

### Comparison with Chemical Energy

::: facet theoretical_limit
The energy density advantage of nuclear fuel over chemical fuels is extraordinary:
:::

| Fuel | Energy Density | Ratio to Coal |
|------|---------------|---------------|
| Coal | 24 MJ/kg | 1× |
| Natural gas | 55 MJ/kg | 2.3× |
| Gasoline | 46 MJ/kg | 1.9× |
| Uranium (LWR, once-through) | ~500,000 MJ/kg | ~20,000× |
| Uranium (breeder cycle) | ~80,000,000 MJ/kg | ~3,000,000× |

A single uranium fuel pellet (about 7 grams) contains energy equivalent to approximately:
- 17,000 cubic feet of natural gas
- 1,780 pounds of coal
- 149 gallons of oil

This extreme energy density is nuclear power's fundamental advantage: enormous energy from minimal fuel mass, minimal mining, and minimal waste volume (though waste toxicity remains a challenge).

### The Chain Reaction

For practical energy production, fission must be self-sustaining. Each fission releases 2-3 neutrons on average. If at least one neutron from each fission causes another fission, the reaction continues.

**Criticality conditions:**
- **Subcritical** (k < 1): Reaction dies out
- **Critical** (k = 1): Reaction sustains at constant rate
- **Supercritical** (k > 1): Reaction accelerates

Power reactors operate at criticality (k = 1), with the reaction rate controlled by:
1. **Control rods**: Neutron-absorbing materials (boron, cadmium, hafnium) inserted to absorb excess neutrons
2. **Moderator**: Material that slows neutrons to increase fission probability
3. **Delayed neutrons**: ~0.65% of fission neutrons are emitted with delay (seconds), providing time for control adjustments

Without delayed neutrons, reactor control would be impossible, as the neutron generation time is microseconds.

### Neutron Moderation

Fission neutrons emerge "fast" (energies >1 MeV, velocities ~10⁷ m/s), but U-235 has a much higher fission cross-section for "thermal" neutrons (energies ~0.025 eV, velocities ~2,200 m/s).

**Moderator materials** slow neutrons through elastic collisions:
- **Light water (H₂O)**: Most common; also absorbs some neutrons, requiring enriched fuel
- **Heavy water (D₂O)**: Better moderator (less absorption); allows natural uranium fuel
- **Graphite**: Solid moderator; used in some older designs

The moderation ratio (slowing power/absorption) determines how efficiently a moderator thermalizes neutrons without losing them.

## Conversion Mechanism

### Reactor Design Principles

::: facet conversion_pathway
Nuclear reactors convert fission heat to electricity through a thermodynamic cycle, typically a steam Rankine cycle:
:::

1. **Fission** releases heat in fuel
2. **Coolant** (water, gas, or liquid metal) removes heat from fuel
3. **Steam generator** (or direct boiling) produces steam
4. **Turbine** converts steam energy to mechanical rotation
5. **Generator** converts rotation to electricity
6. **Condenser** rejects waste heat to environment

The thermal efficiency is limited by the Carnot efficiency and practical temperature constraints:

::: equation carnot_efficiency
$$\eta_{Carnot} = 1 - \frac{T_{cold}}{T_{hot}}$$
:::

Nuclear plants typically operate at lower temperatures than fossil plants due to materials limitations, yielding lower thermal efficiencies.

### Major Reactor Types

**Pressurized Water Reactor (PWR)** - ~70% of global fleet
- Coolant: Light water at ~155 bar, 290-325°C
- Moderator: Same water (separate from steam cycle)
- Fuel: Low-enriched uranium (3-5% U-235), UO₂ pellets
- Steam generation: Secondary loop (steam generators)
- Thermal efficiency: ~33%
- Examples: Westinghouse AP1000, French EPR, Russian VVER

**Boiling Water Reactor (BWR)** - ~15% of global fleet
- Coolant: Light water at ~75 bar, boiling at ~285°C
- Moderator: Same water
- Fuel: Low-enriched uranium (2.5-3.5% U-235)
- Steam generation: Direct (water boils in reactor vessel)
- Thermal efficiency: ~32%
- Examples: GE-Hitachi ABWR, ESBWR

**Pressurized Heavy Water Reactor (PHWR/CANDU)** - ~5% of global fleet
- Coolant: Heavy water (D₂O) at ~100 bar
- Moderator: Heavy water (separate system)
- Fuel: Natural uranium (0.7% U-235)
- Advantage: No enrichment required; online refueling
- Thermal efficiency: ~29-31%
- Examples: CANDU-6 (Canada), Indian PHWRs

**Advanced Gas-cooled Reactor (AGR)** - UK only
- Coolant: Carbon dioxide at ~40 bar, up to 650°C
- Moderator: Graphite
- Fuel: Enriched uranium (2.5-3.5%)
- Thermal efficiency: ~41% (highest of commercial reactors)
- Limited to UK; being phased out

**Light Water Graphite Reactor (RBMK)** - Russia/former USSR
- Coolant: Light water (boiling)
- Moderator: Graphite
- Fuel: Low-enriched uranium
- Design has positive void coefficient (safety concern)
- Chernobyl was RBMK; no new construction

### Thermal Efficiency Comparison

| Reactor Type | Steam Temperature | Thermal Efficiency |
|--------------|------------------|-------------------|
| PWR | 275-290°C (saturated) | 32-34% |
| BWR | 285°C (saturated) | 32-33% |
| PHWR (CANDU) | 260-310°C | 29-31% |
| AGR | 540-640°C (superheated) | 40-41% |
| Supercritical fossil | 540-620°C | 42-45% |
| Combined cycle gas | N/A | 55-62% |

Nuclear plants have lower thermal efficiency than modern fossil plants primarily due to:
1. Fuel cladding temperature limits (zirconium alloys)
2. Reactor vessel integrity requirements
3. Safety margins for loss-of-coolant scenarios

Advanced reactor designs (Generation IV) aim for higher temperatures and efficiencies.

### Capacity Factors

::: facet temporal_character
Nuclear plants excel at baseload operation with very high capacity factors:
:::

| Technology | Typical Capacity Factor |
|------------|------------------------|
| Nuclear (US fleet 2024) | 92% |
| Nuclear (global average) | 80-82% |
| Coal | 40-50% |
| Combined cycle gas | 40-60% |
| Onshore wind | 25-35% |
| Solar PV | 10-25% |
| Hydropower | 30-50% |

The US nuclear fleet's 92% capacity factor represents decades of operational optimization. This high availability partially compensates for lower thermal efficiency in overall economics.

## Fuel Cycle

### Uranium Supply Chain

::: facet material_criticality
**Mining:**
:::
- Open pit, underground, or in-situ leaching (ISL)
- Ore grades: 0.1-20% U₃O₈ (most deposits <1%)
- Major producers: Kazakhstan (39%), Canada (24%), Namibia (12%)
- Global production (2024): ~60,000 tonnes U

**Milling:**
- Chemical extraction produces "yellowcake" (U₃O₈)
- ~85% uranium oxide content

**Conversion:**
- U₃O₈ converted to uranium hexafluoride (UF₆) for enrichment
- Gaseous UF₆ enables isotope separation

**Enrichment:**
- Natural uranium: 0.7% U-235, 99.3% U-238
- LWR fuel requires: 3-5% U-235
- Weapons grade: >90% U-235
- Methods: Gas centrifuge (dominant), gaseous diffusion (obsolete)
- Measured in Separative Work Units (SWU)

**Fuel fabrication:**
- Enriched UF₆ converted to UO₂ powder
- Pressed into ceramic pellets (~10 mm diameter, 10 mm height)
- Loaded into zirconium alloy tubes (fuel rods)
- Assembled into fuel assemblies (17×17 rod arrays typical for PWR)

### Uranium Resources

Global identified recoverable uranium resources (2023):
- **7.9 million tonnes** at <$260/kg U
- ~6 million tonnes at <$130/kg U

At current consumption (~67,000 tonnes/year):
- Known resources: ~90-120 years supply
- Including undiscovered resources: ~230 years
- With reprocessing and breeders: 3,000-30,000 years
- Seawater extraction (4.5 billion tonnes): effectively unlimited

**Top countries by uranium resources (2023):**
| Country | Resources (kt U) | Share |
|---------|-----------------|-------|
| Australia | 1,684 | 28% |
| Kazakhstan | 906 | 15% |
| Canada | 588 | 10% |
| Russia | 486 | 8% |
| Namibia | 470 | 8% |
| South Africa | 320 | 5% |
| Brazil | 277 | 5% |
| Others | 1,204 | 20% |

### Spent Fuel and Waste

::: limitation waste_management
A typical 1 GW PWR produces annually:
:::
- ~27 tonnes of spent fuel
- Containing ~250 kg plutonium, ~1 tonne fission products

**Spent fuel composition:**
- ~95% uranium (mostly U-238)
- ~1% plutonium
- ~4% fission products and minor actinides

**Waste management options:**

1. **Once-through cycle** (most countries):
   - Spent fuel stored in pools, then dry casks
   - Eventual deep geological disposal
   - US Yucca Mountain (canceled), Finland Onkalo (under construction)

2. **Closed cycle with reprocessing** (France, Russia, UK, Japan, India):
   - Separates uranium and plutonium for recycling
   - Reduces waste volume by ~75%
   - Produces MOX fuel (mixed oxide)
   - Reduces long-lived actinides

3. **Advanced fuel cycles** (future):
   - Fast reactors could "burn" transuranics
   - Thorium cycle produces less long-lived waste

**Radioactive waste categories:**
- **High-level waste (HLW)**: Spent fuel, reprocessing liquids; requires isolation for 10,000+ years
- **Intermediate-level waste (ILW)**: Reactor components, resins
- **Low-level waste (LLW)**: Clothing, tools, filters

Nuclear produces far less waste by volume than fossil fuels, but waste toxicity and longevity remain significant challenges. A lifetime's electricity for one person from nuclear produces about 40 grams of high-level waste.

## Global Status

### Installed Capacity (2024-2025)

**Global totals:**
- Operating reactors: ~440
- Operating capacity: ~395-400 GWe
- Electricity generated (2024): ~2,670 TWh (record high)
- Share of global electricity: ~10%

**Top countries by nuclear capacity:**

| Country | Reactors | Capacity (GWe) | Nuclear Share |
|---------|----------|----------------|---------------|
| United States | 94 | 97 | 19% |
| France | 57 | 63 | 65-70% |
| China | 57 | 55 | 5% |
| Russia | 36 | 27 | 20% |
| South Korea | 26 | 26 | 30% |
| Canada | 19 | 14 | 15% |
| Ukraine | 15 | 13 | ~55% |
| Japan | 12 operating | 10 | 8% |
| India | 24 | 9 | 3% |
| UK | 9 | 6 | 15% |

**Top 5 countries account for 71% of global nuclear capacity.**

### Construction and Pipeline

**Under construction (2024-2025):**
- ~63-70 reactors globally
- ~66 GWe total capacity
- Majority in China (29 units), India (6), Russia (4)

**Construction starts (2024):**
- 9 reactors began construction
- 6 in China, 1 each in Egypt, Pakistan, Russia

**Countries building first reactors:**
- Bangladesh: 2 units under construction
- Egypt: 4 units under construction
- Turkey: 4 units planned

**Construction times:**
- China average: 5-6 years
- Global average: 7-10 years
- Western projects often exceed 10 years (Vogtle, Flamanville, Olkiluoto)

### Generation Trends

Nuclear electricity generation has been relatively stable:
- 1990: 2,013 TWh
- 2000: 2,591 TWh
- 2010: 2,756 TWh
- 2019: 2,796 TWh (pre-pandemic peak)
- 2022: 2,546 TWh (post-Fukushima low)
- 2024: 2,667 TWh (new record)

The 2024 record reflects:
- French fleet recovery from maintenance issues
- Chinese capacity additions
- Return of some Japanese reactors

### Country Trajectories

**Expanding:**
- **China**: 57 operating, 29 under construction; targeting 70 GW by 2025, potentially 150 GW by 2035
- **India**: 24 operating, 6 under construction; plans for rapid expansion
- **Russia**: Domestic expansion plus major export program (Rosatom)
- **United Arab Emirates**: 4 units (5.4 GW) operational by 2024, first Arab nuclear program

**Stable/Declining:**
- **United States**: Aging fleet (average age ~42 years); some retirements offset by life extensions; Vogtle 3&4 completed 2023-2024
- **France**: Fleet aging; EPR Flamanville finally operational 2024; plans for 6 new EPR2 reactors
- **Japan**: 12 of 33 operable reactors restarted post-Fukushima; slow restart process
- **UK**: AGRs retiring; Hinkley Point C under construction (massive delays/cost overruns)

**Phased out:**
- **Germany**: Closed last 3 reactors April 2023; complete exit
- **Italy**: Exited 1990 after referendum
- **Belgium**: Phase-out extended to 2035 (from 2025)

## Economics

### Cost Components

Nuclear power costs divide into:

1. **Capital costs** (60-75% of LCOE):
   - Reactor and containment construction
   - Site preparation and grid connection
   - Financing costs (interest during construction)

2. **Operations and maintenance** (15-25%):
   - Staffing (large workforce required)
   - Maintenance and inspections
   - Regulatory compliance

3. **Fuel costs** (5-15%):
   - Uranium purchase
   - Conversion, enrichment, fabrication
   - Spent fuel management

4. **Decommissioning and waste** (5-10%):
   - End-of-life reactor dismantling
   - Long-term waste storage/disposal

### Levelized Cost of Electricity (LCOE)

LCOE estimates vary enormously depending on assumptions and location:

**New nuclear construction (2024 estimates):**

| Source | Region | LCOE ($/MWh) |
|--------|--------|--------------|
| Lazard | USA (Vogtle-based) | $142-222 |
| IEA/NEA | OECD average (7% discount) | $42-102 |
| BloombergNEF | China | $62 |
| BloombergNEF | USA | $180+ |
| IEA/NEA | Russia | $27-57 |

**For comparison (2024):**
- Onshore wind: $27-73/MWh (average ~$50)
- Utility solar: $29-92/MWh (average ~$61)
- Offshore wind: $72-140/MWh
- Natural gas combined cycle: $39-101/MWh
- Coal: $69-168/MWh

**Existing nuclear plants** (operating, depreciated) have very low marginal costs: $25-40/MWh, making continued operation economically attractive.

### The Cost Challenge

::: limitation construction_costs
Nuclear construction costs have increased dramatically in Western countries:
:::

**Overnight capital costs ($/kW):**
- 1970s-1980s: $1,000-2,000
- 2000s: $2,000-4,000
- 2020s (Western): $6,000-15,000+
- China (2020s): $2,500-3,500

**Contributing factors:**
- Increased safety requirements (post-Three Mile Island, Chernobyl, Fukushima)
- First-of-a-kind engineering for new designs
- Loss of construction expertise and supply chains
- Regulatory complexity and delays
- Quality control issues causing rework
- Single-project, custom construction vs. serial production

**Recent Western projects:**
- Vogtle 3&4 (USA): $35 billion for 2.2 GW (~$16,000/kW), 7+ year delays
- Hinkley Point C (UK): £34 billion for 3.2 GW (~$13,000/kW), years behind schedule
- Flamanville EPR (France): €19 billion for 1.6 GW (~$12,000/kW), 12+ year delay
- Olkiluoto 3 (Finland): €11 billion for 1.6 GW, 14 years construction

**China's advantage:**
- Serial construction of standardized designs
- Experienced workforce building multiple units simultaneously
- Lower labor costs
- Shorter regulatory timelines
- Result: 5-6 year construction, $2,500-3,500/kW

### Economic Outlook

Nuclear faces a challenging economic environment:
- Competes with falling renewable costs
- High capital costs and long construction times increase financing risk
- Wholesale electricity prices often too low to justify new build
- Requires policy support (capacity payments, carbon pricing, clean energy credits)

However, nuclear offers value not captured in simple LCOE:
- Dispatchable, firm capacity (available on demand)
- No storage required for continuous operation
- Very high capacity factors
- Long operating life (60-80 years with extensions)
- Low lifecycle carbon emissions

Many analysts argue that "system LCOE" including storage and grid integration costs would favor nuclear, but this remains debated.

## Advanced Reactors

### Generation III+ (Current New Builds)

::: facet scale_regime
Currently deployed advanced designs:
:::

**Westinghouse AP1000:**
- 1,117 MWe PWR
- Passive safety systems (no operator action for 72 hours)
- Modular construction
- Deployed: China (4 units), USA (Vogtle 3&4)

**EPR (European Pressurized Reactor):**
- 1,650 MWe PWR
- Four-train safety systems
- Core catcher for severe accidents
- Deployed: China (2), Finland (1), France (1 in 2024)

**Russian VVER-1200:**
- 1,200 MWe PWR
- Exported widely (Belarus, Bangladesh, Egypt, Turkey, India)
- Rosatom's export workhorse

**APR1400 (South Korea):**
- 1,400 MWe PWR
- Deployed in UAE (4 units, Barakah)
- Competitive construction costs

### Small Modular Reactors (SMRs)

SMRs are reactors under 300 MWe designed for factory fabrication and modular deployment.

**Operational SMRs (as of 2024):**

| Reactor | Country | Capacity | Status |
|---------|---------|----------|--------|
| Akademik Lomonosov | Russia | 2×35 MWe | Floating, operational 2020 |
| HTR-PM | China | 2×105 MWe | Pebble-bed, grid 2021 |
| RITM-200 | Russia | 55 MWe | Icebreakers |

**Leading SMR designs in development:**

**NuScale VOYGR (USA):**
- 77 MWe per module (up to 6 modules)
- First SMR design certified by US NRC (2022, 2025 uprate)
- First US project (UAMPS) canceled November 2023 due to cost escalation
- International projects under development (Romania, Poland, others)
- Estimated LCOE: $89-119/MWh (higher than large reactors)

**GE-Hitachi BWRX-300:**
- 300 MWe simplified BWR
- Natural circulation, passive safety
- Targeting coal plant replacement
- Projects in Poland, Canada, Romania

**Rolls-Royce SMR (UK):**
- 470 MWe PWR
- Factory-built modules
- Selected for UK Wylfa site
- Targeting mid-2030s deployment

**Terrestrial Energy IMSR (Canada):**
- 190 MWe molten salt reactor
- Higher temperature for industrial heat
- In licensing process

**SMR challenges:**
- Economies of scale work against smaller units
- First-of-a-kind costs remain high
- "Nth of a kind" savings require large order books
- NuScale UAMPS cancelation highlighted cost concerns
- CSIRO estimated SMR electricity 2.5× cost of large reactors

**SMR potential advantages:**
- Smaller upfront investment
- Faster construction
- Flexible siting (smaller footprint, lower cooling needs)
- Load-following capability
- Industrial heat applications

### Generation IV Reactors

Six advanced reactor concepts under international development:

1. **Sodium-cooled Fast Reactor (SFR)**
   - Liquid sodium coolant, fast neutron spectrum
   - Can breed fuel and burn actinides
   - TerraPower Natrium (USA) under construction
   - Russian BN-800 operational

2. **Lead-cooled Fast Reactor (LFR)**
   - Liquid lead or lead-bismuth coolant
   - High temperature capability
   - Newcleo (UK/Italy) in development

3. **Molten Salt Reactor (MSR)**
   - Fuel dissolved in molten salt coolant
   - Inherent safety (fuel drains to dump tank)
   - Can use thorium fuel cycle
   - Terrestrial Energy, Kairos Power developing

4. **Very High Temperature Reactor (VHTR)**
   - Helium coolant, graphite moderator
   - 750-1000°C outlet temperature
   - Process heat for hydrogen production
   - China HTR-PM partially demonstrates

5. **Supercritical Water-cooled Reactor (SCWR)**
   - Water above critical point (374°C, 22 MPa)
   - Higher thermal efficiency (~45%)
   - Conceptual stage

6. **Gas-cooled Fast Reactor (GFR)**
   - Helium coolant, fast spectrum
   - Conceptual stage

**Generation IV timeline:**
- Most designs remain at demonstration stage
- Commercial deployment: 2030s-2040s (optimistic)
- Key barriers: Materials qualification, licensing frameworks, economics

## Environmental Considerations

### Lifecycle Emissions

Nuclear power has very low lifecycle CO₂ emissions:

| Technology | Lifecycle Emissions (g CO₂-eq/kWh) |
|------------|-----------------------------------|
| Coal | 820 |
| Natural gas | 490 |
| Solar PV | 41 |
| Nuclear | 12 |
| Onshore wind | 11 |
| Hydropower | 24 |

Nuclear's emissions come primarily from:
- Uranium mining and milling
- Enrichment (if using fossil-powered electricity)
- Construction materials (concrete, steel)
- Decommissioning

The fuel cycle is far less carbon-intensive than any fossil fuel.

### Safety Record

::: limitation safety_concerns
**Major accidents:**
:::
- **Three Mile Island (1979)**: Partial meltdown, no deaths, minimal radiation release
- **Chernobyl (1986)**: Explosion and fire, ~30 immediate deaths, ~4,000 estimated excess cancer deaths (disputed)
- **Fukushima (2011)**: Three meltdowns following tsunami, 1 death attributed to radiation, ~2,200 evacuation-related deaths

**Deaths per TWh (all causes):**
| Energy Source | Deaths per TWh |
|---------------|---------------|
| Coal | 24.6 |
| Oil | 18.4 |
| Natural gas | 2.8 |
| Hydropower | 1.3 |
| Wind | 0.04 |
| Nuclear | 0.03 |
| Solar | 0.02 |

Nuclear is among the safest energy sources per unit of electricity generated, primarily because:
- Fuel is contained in multiple barriers
- Plants designed for beyond-design-basis accidents
- Regulatory oversight is intensive

### Land Use

::: facet geographic_constraint
Nuclear has the smallest land footprint per unit of energy:
:::

| Technology | Land Use (m²/MWh/year) |
|------------|----------------------|
| Nuclear | 0.3 |
| Natural gas | 0.4 |
| Coal | 1.0 |
| Solar PV | 5-10 |
| Wind | 70-100 (including spacing) |
| Hydropower | Variable (reservoir) |

A 1 GW nuclear plant occupies ~1-4 km². An equivalent solar farm requires ~15-25 km².

### Water Use

Nuclear plants require significant cooling water (like all thermal plants):
- Once-through cooling: 100-200 m³/MWh (returned to source, warmer)
- Cooling towers: 2-3 m³/MWh consumed (evaporated)

This can constrain siting in water-scarce regions. Some advanced designs target air cooling or reduced water use.

### Proliferation and Security

::: limitation proliferation_risk
Nuclear power creates materials (enriched uranium, plutonium) with potential weapons applications:
:::
- Power reactor fuel (3-5% enrichment) cannot be used directly for weapons
- Reprocessing separates plutonium, which is weapons-usable
- International safeguards (IAEA) monitor nuclear materials
- Proliferation risk influences fuel cycle choices (e.g., US once-through policy)

Security concerns include:
- Terrorist attacks on facilities
- Theft of nuclear materials
- Sabotage

Modern plants are designed to withstand aircraft impact and other threats.

## Strategic Outlook

### Role in Decarbonization

Nuclear's potential contribution to climate mitigation:

**IEA Net Zero Scenario:**
- Nuclear doubles by 2050 (from ~400 GW to ~800 GW)
- Requires ~30 GW/year of new construction (vs. ~5-7 GW/year currently)

**IPCC scenarios:**
- Most 1.5°C pathways include nuclear expansion
- Range from modest growth to 500% increase by 2100

**COP28 Declaration (2023):**
- 31 countries committed to tripling nuclear capacity by 2050
- Would require ~1,200 GW by 2050

### Near-Term Prospects (2025-2035)

**Likely developments:**
- China continues rapid expansion (5-8 units/year)
- Existing fleet life extensions in US, Europe, Japan
- SMR demonstration projects come online (or fail)
- Some new large reactor construction in Europe, Asia

**Challenges:**
- Cost competitiveness with renewables+storage
- Financing for capital-intensive projects
- Supply chain and workforce rebuilding in West
- Regulatory timelines

**Realistic capacity by 2035:**
- Low scenario: 420 GW (modest growth, retirements offset by new build)
- High scenario: 500 GW (successful new programs, life extensions)

### Long-Term Potential

**By 2050:**
- Capacity range: 500-1,000 GW
- Depends critically on construction costs, policy support, public acceptance
- SMRs and advanced reactors could change economics (or not)
- Fusion remains unlikely to contribute before 2050

**Key uncertainties:**
1. Can Western countries rebuild nuclear construction capability?
2. Will SMRs achieve cost reductions through serial production?
3. How will nuclear compete with renewables+storage?
4. Will public acceptance increase or decrease?
5. Can construction timelines and costs be controlled?

### Comparative Assessment

| Attribute | Nuclear | Wind+Solar+Storage |
|-----------|---------|-------------------|
| Dispatchability | Excellent | Requires storage |
| Land use | Minimal | Significant |
| Capacity factor | 80-92% | 25-35% (before storage) |
| Construction time | 5-15 years | 1-3 years |
| Capital intensity | Very high | Moderate |
| Fuel supply security | High (small volume, stockpileable) | High (no fuel) |
| Public acceptance | Contested | Generally positive |
| Waste | Long-lived, low volume | Short-lived, high volume |

Nuclear and renewables are often framed as competitors, but both are needed for deep decarbonization. Nuclear provides firm, dispatchable power that complements variable renewables.

### Conclusion

Nuclear fission offers an extraordinarily energy-dense, low-carbon power source that has operated safely and reliably for over 60 years. Its ~400 GW global capacity generates 10% of world electricity with minimal emissions, land use, and fuel requirements.

The technology faces genuine challenges:
- High capital costs and long construction times (especially in Western countries)
- Unresolved waste disposal (politically more than technically)
- Public concerns about safety and proliferation
- Competition from increasingly cheap renewables

Yet nuclear also offers unique advantages:
- Dispatchable, firm capacity requiring no storage
- Extremely high energy density and low material throughput
- Very low lifecycle emissions
- Long operating life (60-80 years)
- Minimal land footprint

The path forward likely involves:
- Continued operation and life extension of existing plants
- New construction primarily in Asia (China, India)
- SMR development (uncertain economics)
- Advanced reactor demonstration in 2030s
- Potential for significant role in decarbonization if costs can be controlled

Nuclear fission is neither the sole solution to climate change nor a technology that should be abandoned. It is a proven, scalable, low-carbon energy source whose future role will be determined by economics, policy choices, and societal preferences as much as by technical factors.