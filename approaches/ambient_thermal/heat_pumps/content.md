# Heat Pumps (Air, Ground, and Water Source)

## Fundamental Principle

### Natural Asymmetry Exploited

::: facet ultimate_source
Heat pumps exploit the temperature difference between ambient environmental reservoirs (air, ground, or water) and the desired indoor temperature. Even when outdoor air is cold, it contains thermal energy that can be concentrated and moved indoors through thermodynamic work. The key insight is that moving existing heat requires far less energy than generating it from scratch.

At 0°C outdoor temperature, the air still contains approximately 300 kJ/kg of thermal energy. A heat pump extracts a portion of this ambient thermal energy and concentrates it to useful temperatures, delivering 2-5 units of heat for every unit of electrical work input.
:::

### Ultimate Source

::: facet ultimate_source
The thermal energy harvested by heat pumps derives from two sources, depending on configuration:

**Air-source systems:** Draw from ambient air heated primarily by solar radiation. The atmosphere acts as a vast thermal reservoir, continuously recharged by solar input (~1000 W/m² peak, averaging ~200 W/m² globally).

**Ground-source systems:** Access heat stored in shallow earth (top 100-200 m), which represents a mix of solar heating of the surface and geothermal heat flux from Earth's interior (~0.06 W/m²). Ground temperature remains relatively stable year-round at 10-15°C in temperate climates.

**Water-source systems:** Extract heat from bodies of water (lakes, rivers, aquifers), which store solar energy with high thermal mass and stability.

All sources are continuously replenished, making heat pumps effectively renewable when powered by clean electricity.
:::

### Key Physics

A heat pump operates as a reverse heat engine, using work to move heat from a cold reservoir to a hot one. The fundamental energy balance:

::: equation heat_pump_energy
$$Q_H = Q_C + W$$
:::

Where Q_H is heat delivered to the hot side (building), Q_C is heat extracted from the cold side (environment), and W is electrical work input.

The Coefficient of Performance (COP) measures efficiency:

::: equation cop_definition
$$COP_{heating} = \frac{Q_H}{W} = \frac{Q_C + W}{W}$$
:::

The theoretical maximum is set by the Carnot limit:

::: equation carnot_cop
$$COP_{Carnot} = \frac{T_H}{T_H - T_C}$$
:::

Where temperatures are in Kelvin. For heating from 0°C (273 K) outdoors to 20°C (293 K) indoors:

$$COP_{Carnot} = \frac{293}{293 - 273} = 14.65$$

Practical systems achieve 30-50% of this theoretical maximum due to irreversibilities in compression, heat exchange, and refrigerant behavior.

---

## Conversion Mechanism

### Energy Capture and Conversion

::: facet conversion_pathway
Heat pumps use the vapor-compression refrigeration cycle operating in reverse. A refrigerant fluid circulates through a closed loop, absorbing heat at low temperature (evaporator) and releasing it at high temperature (condenser). The compressor provides the work input that drives the cycle and increases refrigerant temperature.

The same thermodynamic cycle underlies air-source, ground-source, and water-source systems. The key difference is the heat source/sink that the evaporator and condenser interface with.
:::

### Physical Processes

**1. Evaporation (heat absorption)**

Low-pressure liquid refrigerant enters the evaporator coil, which is in thermal contact with the cold source (outdoor air, ground loop, or water). The refrigerant absorbs heat and evaporates into a low-pressure gas. Even at sub-freezing outdoor temperatures, the refrigerant boiling point is lower still, enabling heat extraction.

**2. Compression**

The compressor (typically scroll or rotary type) compresses the low-pressure gas, raising both its pressure and temperature. A refrigerant that absorbed heat at 0°C might exit the compressor at 60-80°C. Variable-speed (inverter-driven) compressors modulate capacity to match load, improving efficiency.

**3. Condensation (heat release)**

The hot, high-pressure gas enters the condenser coil inside the building. As heat transfers to the indoor air or water distribution system, the refrigerant condenses back to liquid. This released heat (latent heat of condensation plus sensible heat) provides space heating or hot water.

**4. Expansion**

The high-pressure liquid passes through an expansion valve, dropping pressure and temperature before returning to the evaporator. This completes the cycle.

### Conversion Chain

$$\text{Ambient heat} \xrightarrow{\text{evaporator}} \text{Refrigerant vapor} \xrightarrow{\text{compressor}} \text{Hot gas} \xrightarrow{\text{condenser}} \text{Delivered heat}$$

---

## Theoretical Limits

::: facet theoretical_limit
The Carnot COP sets the fundamental thermodynamic limit. As the temperature difference between source and sink decreases, theoretical COP increases dramatically. This is why heat pumps perform best in mild climates and why ground-source systems (with more stable source temperatures) achieve higher COPs than air-source systems in cold weather.

At typical operating conditions (7°C source to 35°C sink), Carnot COP is approximately 11. Practical systems achieve COPs of 3-5, representing 30-45% of theoretical maximum.
:::

### Origin of the Limit

The Carnot limit arises from the second law of thermodynamics. Heat cannot spontaneously flow from cold to hot; work must be expended. The minimum work required depends only on the absolute temperatures of the reservoirs:

::: equation carnot_cop_heating
$$COP_{Carnot,heating} = \frac{T_H}{T_H - T_C}$$
:::

Practical systems fall short of Carnot efficiency due to:
- Irreversible compression (friction, heat losses)
- Finite temperature differences across heat exchangers
- Pressure drops in refrigerant lines
- Non-ideal refrigerant properties
- Defrost cycles (air-source systems in humid/cold conditions)

### Practical Efficiency

| System Type | Source Temp | Sink Temp | Carnot COP | Typical COP | % of Carnot |
|-------------|-------------|-----------|------------|-------------|-------------|
| Air-source (mild) | 10°C | 35°C | 12.3 | 3.5-4.5 | 30-35% |
| Air-source (cold) | -5°C | 35°C | 7.7 | 2.0-2.5 | 26-32% |
| Air-source (very cold) | -15°C | 35°C | 6.2 | 1.5-2.0 | 24-32% |
| Ground-source | 10°C | 35°C | 12.3 | 4.0-5.0 | 32-40% |
| Water-source | 15°C | 35°C | 15.4 | 5.0-6.0 | 32-39% |

Modern cold-climate air-source heat pumps with variable-speed compressors and vapor injection technology maintain COP above 2.0 even at -20°C, a significant improvement over older designs.

### Key Design Tradeoffs

**Temperature lift vs. efficiency:** Higher delivery temperatures (for radiators vs. underfloor heating) reduce COP. Systems designed for 35°C water output are more efficient than those delivering 55°C.

**Capacity vs. efficiency:** Oversized systems short-cycle, reducing efficiency. Variable-speed compressors mitigate this by modulating capacity to match load.

**Source stability vs. cost:** Ground-source systems provide stable temperatures but cost 2-3x more to install than air-source due to drilling/trenching requirements.

**Refrigerant properties:** Lower global warming potential (GWP) refrigerants may have slightly different thermodynamic performance. R290 (propane, GWP=3) achieves excellent efficiency but requires safety measures for flammability.

---

## Practical Limitations

### Geographic/Resource Constraints

::: limitation geographic_constraint
Heat pumps work globally but with varying effectiveness:

**Favorable climates:** Mild winters (average >0°C) enable high COPs and simple air-source installations. Maritime climates, Mediterranean regions, and temperate zones are ideal.

**Moderate climates:** Cold winters (-10°C to -20°C) require cold-climate heat pump models or ground-source systems. Still economically viable with proper sizing.

**Extreme climates:** Very cold regions (<-20°C frequent) challenge air-source systems. Ground-source remains effective but costly. Hybrid systems (heat pump + backup) may be optimal.

Ground-source systems require land for horizontal trenches (600-1200 m² for typical home) or vertical boreholes (100-200 m depth). Urban properties may lack space for ground loops.

Water-source systems require suitable water bodies (lakes, ponds, rivers, or aquifers) with adequate thermal capacity and regulatory permission.
:::

### Material Constraints

::: limitation material_scarcity
No critical material constraints for basic heat pump technology. Systems use common materials:
- Copper for heat exchangers and refrigerant lines
- Aluminum for fins and housings
- Steel for compressors
- Plastics (HDPE) for ground loops

Refrigerants are the main supply chain consideration. Transition from high-GWP HFCs (R410A, GWP=2088) to lower-GWP alternatives:
- R32 (GWP=675): Widely available, efficient
- R454B (GWP=466): Emerging standard in North America
- R290 propane (GWP=3): Natural refrigerant, excellent efficiency, flammability concerns
- CO2/R744 (GWP=1): Used in some high-temperature applications

None face fundamental scarcity issues, though regulatory transitions create temporary supply chain adjustments.
:::

::: limitation manufacturing_complexity
Heat pump manufacturing is mature industrial technology:
- Scroll and rotary compressors require precision machining but are produced at scale globally
- Heat exchangers use well-established fin-and-tube or microchannel designs
- Electronics and controls are standard industrial components
- Ground loop installation requires drilling expertise but not exotic equipment

Major manufacturers (Daikin, Mitsubishi, Carrier, Bosch, LG, Panasonic) have global production capacity. The main constraint is installer workforce training, not manufacturing.
:::

### Operational Challenges

::: limitation cold_climate_performance
Air-source heat pumps lose efficiency as outdoor temperature drops:
- At 47°F (8°C): COP typically 3.5-5.0
- At 17°F (-8°C): COP typically 2.0-3.0
- At 0°F (-18°C): COP typically 1.5-2.0
- Below -15°F (-26°C): Older systems may require backup heat; modern cold-climate models maintain operation

Cold-climate heat pumps use vapor injection, enhanced compressors, and larger heat exchangers to maintain capacity. ENERGY STAR Cold Climate certification requires COP ≥ 1.75 at 5°F (-15°C) and ≥ 70% capacity retention.

Defrost cycles reduce efficiency by 10-17% in humid cold conditions when ice forms on outdoor coils.
:::

::: limitation installation_complexity
Ground-source systems require significant site work:
- Vertical boreholes: 100-200 m deep, £25-40/m drilling cost
- Horizontal trenches: 1.2-2 m deep, 600-1200 m² land area
- Installation time: 2-3 months from contract to commissioning

Air-source systems are simpler but still require:
- Proper sizing (Manual J calculations)
- Electrical service upgrades (200A typical)
- Ductwork modifications for ducted systems
- Qualified installer training

Poor installation significantly degrades performance. Studies show 20-30% efficiency loss from improper charge, airflow, or duct leakage.
:::

::: limitation electricity_cost
Heat pump economics depend heavily on electricity-to-gas price ratio:
- UK (2024): Electricity ~22p/kWh, gas ~5.5p/kWh (ratio ~4:1)
- US (2024): Electricity ~15¢/kWh, gas ~$1.20/therm (~$0.04/kWh equivalent, ratio ~4:1)

With COP of 3.0, heat pumps break even when electricity costs up to 3x gas per kWh. At COP 4.0, they break even at 4:1 price ratio.

Current price ratios in many markets make heat pumps roughly cost-neutral vs. gas boilers, with advantage shifting to heat pumps as:
- Electricity prices fall (more renewables)
- Gas prices rise (carbon pricing)
- Heat pump efficiency improves
:::

### Degradation and Lifetime

**Indoor unit:** 15-25 years typical life
**Outdoor unit (air-source):** 15-20 years
**Ground loop (GSHP):** 50+ years for HDPE piping
**Compressor:** 10-20 years depending on cycling patterns

Performance degradation is minimal with proper maintenance:
- Annual filter cleaning/replacement
- Periodic refrigerant charge verification
- Outdoor coil cleaning
- Controls calibration

Failure modes: compressor burnout (most common), refrigerant leaks, fan motor failure, control board issues.

### Temporal Characteristics

::: facet temporal_character
Heat pumps provide on-demand heating and cooling, following building thermal load. Output is dispatchable but varies with outdoor conditions.

**Heating mode:**
- Capacity and efficiency decline as outdoor temperature drops
- Defrost cycles create brief interruptions in cold/humid weather
- Variable-speed systems modulate smoothly; fixed-speed cycle on/off

**Cooling mode:**
- Efficiency relatively stable across typical cooling temperatures
- Capacity decreases at very high outdoor temperatures (>40°C)

**Grid interaction:**
- Can shift operation to off-peak hours with thermal storage (building mass or buffer tanks)
- Smart controls enable demand response
- Pre-heating/cooling during favorable conditions improves economics

Heat pumps complement variable renewables by providing flexible electric load that can absorb surplus generation.
:::

---

## Scaling Characteristics

### Output Scaling Behavior

::: facet scale_regime
Heat pumps scale linearly with capacity. Residential systems range from 2-20 kW; commercial systems reach 100s of kW; industrial heat pumps can deliver MW-scale output.

Economies of scale exist in manufacturing (larger production volumes reduce unit cost) but installation costs scale roughly linearly with capacity.

The technology is highly modular: individual buildings install appropriately sized systems, and capacity can be added incrementally. There is no minimum viable scale beyond what makes economic sense for the application.
:::

### Viable Scale Range

**Minimum:** Single-room mini-split: 2-3 kW (~$2,000-4,000 installed)

**Typical residential:** Whole-home system: 8-15 kW ($7,000-25,000 for air-source; $15,000-45,000 for ground-source)

**Commercial:** Building systems: 50-500 kW

**District heating:** Large-scale heat pumps: 1-50 MW (using waste heat, seawater, or sewage as source)

**Industrial:** High-temperature heat pumps reaching 150°C+: emerging technology for process heat

### Land/Resource Requirements

| System Type | Space Required | Notes |
|-------------|----------------|-------|
| Air-source | ~1 m² outdoor unit | Minimal footprint |
| Ground-source (vertical) | ~10 m² drill pad | 100-200 m boreholes |
| Ground-source (horizontal) | 600-1200 m² | Trenches 1.2-2 m deep |
| Water-source | Access to water body | Pipes submerged 8+ feet |

Air-source systems have minimal land requirements; ground-source requires significant land or drilling access during installation but no ongoing land use beyond small equipment footprint.

### Resource Potential

Heat pumps can serve essentially all global heating demand given sufficient electricity supply:

**Global heating demand:** ~50 EJ/year for buildings (space and water heating)

**Current heat pump coverage:** ~10% of global space heating demand

**Technical potential:** Near-universal applicability for buildings; limited primarily by electricity availability and economics rather than thermal resource

**Regional suitability:**
- Excellent: Temperate climates with mild winters
- Good: Cold climates with ground-source or cold-climate air-source
- Challenging: Extreme cold without electricity infrastructure

The ambient thermal resource (air, ground, water) is effectively unlimited. The constraint is electricity supply for the work input, which represents 25-50% of delivered heat.

### Comparison to Other Heating Sources

| Heating Source | Efficiency | CO2 (kg/kWh heat) | Running Cost (UK) |
|----------------|------------|-------------------|-------------------|
| Heat pump (COP 3.5) | 350% | 0.06-0.12 | ~6.5p/kWh |
| Gas boiler (93% eff) | 93% | 0.23 | ~6p/kWh |
| Oil boiler (85% eff) | 85% | 0.33 | ~8p/kWh |
| Electric resistance | 100% | 0.18-0.35 | ~23p/kWh |
| Hydrogen boiler | 89% | 0-0.3* | TBD |

*Hydrogen emissions depend on production method

Heat pumps deliver 3-5x more heat per unit of electricity than resistance heating and 2-4x lower emissions than gas boilers even on current grid mix.

---

## Current Status

### Technology Readiness Level

| Technology | TRL | Status |
|------------|-----|--------|
| Air-source heat pump | 9 | Mature, mass market |
| Ground-source heat pump | 9 | Mature, established market |
| Water-source heat pump | 9 | Mature, niche market |
| Cold-climate ASHP | 8-9 | Commercial, rapidly improving |
| High-temperature HP (>100°C) | 7-8 | Early commercial |
| Industrial HP (>150°C) | 5-7 | Demonstration/early commercial |

### Levelised Cost of Heating

| Context | Installation Cost | Running Cost |
|---------|-------------------|--------------|
| Air-source (UK) | £7,000-14,000 | £938/year (11,500 kWh demand) |
| Ground-source (UK) | £25,000-45,000 | £800/year (11,500 kWh demand) |
| Air-source (US) | $8,000-25,000 | ~$1,200/year |
| Ground-source (US) | $15,000-45,000 | ~$900/year |

Payback periods vs. gas boilers: 5-15 years depending on fuel prices, incentives, and installation costs.

Government incentives significantly improve economics:
- UK Boiler Upgrade Scheme: £7,500 grant
- US IRA: 30% tax credit (up to $2,000 ASHP, $8,000 GSHP)
- EU: Various national programs

### Major Deployments

**Global installed base:** ~250 million heat pump units (including reversible air conditioners used for heating)

**2024 sales:** Global sales declined 1% but recovered from 10% H1 decline

**Regional leaders:**
| Region | 2024 Sales Trend | Notes |
|--------|------------------|-------|
| China | +13% (H1) | Largest market (30% global) |
| United States | +15% | Second largest; outsold gas furnaces by 30% |
| Europe | -21% | Sharp decline from 2022-23 peak |
| Japan | +5% | Fourth largest market |

**Notable markets:**
- Norway: 632 heat pumps per 1,000 households (highest penetration)
- Sweden, Finland: >50% of new heating installations
- France: Heat pumps outsold fossil boilers in 2022

### Research Frontiers

**Cold-climate performance:**
DOE Cold Climate Heat Pump Challenge produced systems maintaining 100% capacity at -15°C with COP >2.0. Commercial rollout 2024-2025.

**Low-GWP refrigerants:**
Transition to R290 (propane), R454B, and CO2 refrigerants accelerating. EU F-gas regulations require GWP <150 for many applications by 2027-2029.

**High-temperature heat pumps:**
Systems delivering 100-150°C for industrial process heat entering commercial deployment. Steam-generating heat pumps in development.

**Smart controls and grid integration:**
AI-driven optimization achieving 10-20% efficiency gains. Demand response and thermal storage integration expanding.

**Manufacturing scale-up:**
$4+ billion in announced production capacity expansion, primarily in Europe. Target: millions of units annually.

---

## Summary

### Key Specifications

| Parameter | Air-Source | Ground-Source | Water-Source |
|-----------|------------|---------------|--------------|
| Typical COP (heating) | 2.5-4.5 | 3.5-5.0 | 4.5-6.0 |
| COP range by conditions | 1.5-5.0 | 3.0-5.5 | 4.0-6.5 |
| Installation cost (residential) | $8,000-15,000 | $20,000-45,000 | $15,000-30,000 |
| Operating cost vs. gas | ~Equal to 20% less | 20-40% less | 30-50% less |
| Equipment life | 15-20 years | 20-25 years (50+ for loop) | 20-25 years |
| Space required | Minimal | 600-1200 m² or boreholes | Water body access |
| Cold climate suitability | Good (with CCHP) | Excellent | Excellent |

### Strengths and Limitations

**Strengths:**
- 3-5x more efficient than direct electric heating
- 50-70% lower emissions than gas boilers (current grid)
- Provides both heating and cooling from single system
- Eliminates on-site combustion (safety, air quality)
- Efficiency improves as electricity grid decarbonizes
- Mature, proven technology with established supply chains
- Modular, scalable from residential to district heating
- Compatible with smart grid and demand response

**Limitations:**
- Higher upfront cost than gas boilers (2-4x)
- Performance degrades in extreme cold (air-source)
- Ground-source requires significant land or drilling
- Electricity costs often higher than gas per kWh
- May require electrical service upgrades
- Installer workforce still developing in many regions
- Lower delivery temperatures favor underfloor heating over radiators
- Refrigerant leakage contributes to emissions (declining with low-GWP transition)

### Role in Energy Landscape

::: facet scale_regime
Heat pumps are the central technology for decarbonizing building heating, which accounts for ~10% of global CO2 emissions (4 Gt/year). The IEA identifies heat pumps as critical to achieving net-zero emissions by 2050, with potential to reduce global CO2 by 500 million tonnes annually by 2030.

**Current role:** Heat pumps meet ~10% of global space heating demand, with rapid growth in Europe, China, and North America. In 2024, heat pumps outsold gas furnaces in the US for the first time (30% higher sales).

**Transition pathway:** Net-zero scenarios require 600 million heat pump units globally by 2030 (vs. ~250 million today). Current deployment is at roughly 60% of the required trajectory.

**Complementarity:** Heat pumps convert electricity to heat at 300-500% efficiency, making them ideal partners for renewable electricity. They can provide flexible demand for grid balancing and absorb surplus renewable generation. Integration with building thermal mass and hot water storage enables demand shifting.

**Competition:** Heat pumps compete primarily with:
- Gas boilers (incumbent, lower upfront cost)
- Hydrogen boilers (proposed future alternative, lower efficiency)
- District heating (where available)
- Electric resistance (simpler but 3-4x less efficient)

**Economic trajectory:** As electricity prices fall with renewable deployment and carbon pricing increases gas costs, heat pump economics improve continuously. Manufacturing scale-up is reducing equipment costs 5-10% annually.

Heat pumps represent the most practical pathway to decarbonize the majority of building heating demand globally. Their combination of mature technology, high efficiency, and compatibility with renewable electricity makes them the default choice for new heating systems in an increasing number of markets.
:::