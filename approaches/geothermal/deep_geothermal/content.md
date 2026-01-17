# Deep Geothermal and Superhot Rock Energy

## Fundamental Principle

### Natural Asymmetry Exploited

::: facet ultimate_source
Deep geothermal exploits the temperature gradient between Earth's hot interior and the cool surface. Temperature increases with depth at approximately 25-30°C per kilometer on average, reaching 400-500°C at depths of 5-20 km depending on local geology. This thermal gradient represents a vast reservoir of heat energy continuously conducted toward the surface.

At supercritical conditions (>374°C, >22.1 MPa), water transitions to a state with dramatically enhanced energy density, enabling 5-10x more power extraction per well compared to conventional geothermal temperatures.
:::

### Ultimate Source

::: facet ultimate_source
Earth's internal heat derives from two sources in roughly equal proportions:

**Primordial heat (~50%):** Residual thermal energy from planetary formation 4.5 billion years ago, when gravitational collapse and accretion heated the proto-Earth to molten temperatures.

**Radiogenic heat (~50%):** Continuous radioactive decay of uranium-238, uranium-235, thorium-232, and potassium-40 in the mantle and crust, producing approximately 20 TW of thermal power.

Total heat flow through Earth's surface is approximately 47 TW. This resource is effectively inexhaustible on human timescales, with the planet cooling at less than 100°C per billion years. Local extraction causes temporary thermal drawdown, but heat is continuously replenished by conduction from surrounding rock.
:::

### Key Physics

The power output of a geothermal well depends on mass flow rate and the enthalpy difference between production and injection:

::: equation geothermal_power
$$P = \dot{m} \times (h_{production} - h_{injection}) \times \eta$$
:::

Where ṁ is mass flow rate (kg/s), h is specific enthalpy (kJ/kg), and η is conversion efficiency.

The critical point of water defines the supercritical transition:

::: equation critical_point
$$T_c = 374°C, \quad P_c = 22.1 \text{ MPa}$$
:::

Above these conditions, water exists as a single supercritical phase with properties intermediate between liquid and gas: density of 100-500 kg/m³ (vs ~1000 kg/m³ for liquid, ~1 kg/m³ for steam), very low viscosity enabling rapid flow, and dramatically enhanced heat transport capacity.

Specific enthalpy increases from ~800-1000 kJ/kg at conventional temperatures (180-200°C) to 2500-3200 kJ/kg at supercritical conditions, enabling the 5-10x power multiplier per well.

---

## Conversion Mechanism

### Energy Capture and Conversion

::: facet conversion_pathway
Heat is extracted by circulating water through hot rock at depth, either through engineered fracture networks (open-loop EGS) or sealed pipe systems (closed-loop AGS). The heated fluid returns to the surface where thermal energy is converted to electricity via steam turbines or organic Rankine cycle (ORC) systems.

At supercritical temperatures, the high-enthalpy fluid can drive conventional steam turbines similar to fossil fuel power plants, achieving higher thermodynamic efficiency than lower-temperature geothermal systems.
:::

### Physical Processes

**1. Drilling and well construction**

Deep wells (5-20 km) are drilled through sedimentary overburden and into crystalline basement rock using conventional rotary drilling or advanced techniques (millimeter wave, plasma). Wells must withstand temperatures >400°C and pressures >35 MPa for decades.

**2. Reservoir creation or access**

For open-loop systems: hydraulic or thermal stimulation creates fracture networks connecting injection and production wells. For closed-loop systems: sealed pipe loops are installed, relying on conductive heat transfer through pipe walls.

**3. Heat extraction**

Water (or working fluid) is circulated through the hot rock zone, absorbing thermal energy. At supercritical conditions, fluid properties enhance both heat absorption and transport efficiency.

**4. Power conversion**

Surface facilities convert thermal energy to electricity:
- Direct steam cycle for supercritical fluids (>400°C)
- Binary/ORC cycle for lower temperatures
- Combined heat and power for district heating applications

**5. Reinjection**

Cooled fluid is reinjected to maintain reservoir pressure and create a sustainable circulation loop.

### Conversion Chain

$$\text{Crustal heat} \xrightarrow{\text{conduction}} \text{Hot rock} \xrightarrow{\text{circulation}} \text{Supercritical fluid} \xrightarrow{\text{turbine}} \text{Electricity}$$

---

## Theoretical Limits

::: facet theoretical_limit
Maximum efficiency is governed by the Carnot limit, determined by the temperature difference between the heat source (rock) and heat sink (cooling system). For supercritical systems operating at 400-500°C with cooling at 30°C, theoretical maximum efficiency is 55-60%.

Practical conversion efficiencies of 30-45% are achievable, compared to 10-15% for conventional geothermal at 180°C.
:::

### Origin of the Limit

The Carnot efficiency sets the fundamental thermodynamic limit for heat-to-work conversion:

::: equation carnot_efficiency
$$\eta_{Carnot} = 1 - \frac{T_{cold}}{T_{hot}}$$
:::

| Source Temperature | T_cold | Carnot Efficiency | Practical Efficiency |
|--------------------|--------|-------------------|----------------------|
| 180°C (conventional) | 303 K | 33% | 10-15% |
| 250°C (EGS) | 303 K | 42% | 15-20% |
| 400°C (supercritical) | 303 K | 55% | 30-40% |
| 500°C (superhot) | 303 K | 61% | 35-45% |

Practical efficiencies are lower than Carnot limits due to:
- Heat exchanger temperature drops
- Turbine and generator losses
- Parasitic power consumption (pumping, cooling)
- Part-load operation

### Practical Efficiency

Supercritical systems achieve approximately 60-75% of theoretical Carnot efficiency, similar to modern fossil fuel plants. The primary advantage is not efficiency alone but the combination of higher efficiency AND higher enthalpy per unit mass, which together produce 5-10x more power per well.

### Key Design Tradeoffs

**Depth vs. temperature:** Deeper drilling accesses higher temperatures but increases cost exponentially. Optimal depth depends on local geothermal gradient and drilling technology.

**Flow rate vs. thermal drawdown:** Higher flow extracts more power but cools the reservoir faster. Sustainable operation requires balancing extraction with thermal recharge.

**Open-loop vs. closed-loop:** Open-loop systems achieve higher power per well but carry seismicity risk and require water. Closed-loop eliminates seismicity but produces less power per meter of wellbore.

---

## Practical Limitations

### Geographic/Resource Constraints

::: limitation geographic_constraint
At conventional drilling depths (3-5 km), supercritical temperatures are accessible only in volcanic regions: Iceland, Italy, Japan, New Zealand, western US, East African Rift, Indonesia, Philippines.

At greater depths (10-20 km), supercritical temperatures exist globally, but current drilling technology cannot economically access these resources in most locations.

Near-term deployment is constrained to regions with elevated geothermal gradients (>40°C/km) where supercritical conditions exist at <6 km depth. Long-term "geothermal everywhere" requires breakthrough drilling technology.
:::

### Material Constraints

::: limitation material_scarcity
No significant material scarcity issues for basic geothermal development. However, high-temperature applications require specialty alloys (Inconel, titanium) for well casing and valves, which are more expensive but not supply-constrained.

Advanced drilling technologies (millimeter wave) require gyrotrons, which use superconducting magnets with modest quantities of rare earth elements, but at scales that do not pose supply chain risks.
:::

::: limitation manufacturing_complexity
Deep geothermal wells require specialized drilling equipment rated for extreme temperatures and pressures. Current oil and gas drilling infrastructure can be adapted for depths to ~5 km, but deeper wells require new tool development.

Key manufacturing challenges:
- High-temperature electronics (>200°C) for downhole measurement
- Long-life drill bits for hard crystalline rock
- Corrosion-resistant casing and cement for supercritical conditions
- Seals and valves rated for continuous 400°C+ operation
:::

### Operational Challenges

::: limitation drilling_risk
Drilling to supercritical depths carries substantial technical and financial risk. Well costs increase exponentially with depth, and success rates for first-of-a-kind projects are uncertain.

Current costs: $30-100+ million per well at 6-10 km depth
Target costs: <$10 million per well for commercial viability

The Kola Superdeep Borehole (12.2 km, 1970-1992) demonstrated that extreme depths are achievable but required 22 years and encountered severe technical challenges.
:::

::: limitation induced_seismicity
Open-loop systems that inject fluid into fractured rock can induce earthquakes. Notable events:
- Basel, Switzerland (2006): M3.4, project cancelled
- Pohang, South Korea (2017): M5.4, largest EGS-induced event

Mitigation: Careful site selection, real-time seismic monitoring, traffic light protocols, pressure management. Closed-loop systems eliminate this risk entirely by avoiding fluid contact with rock formations.
:::

::: limitation thermal_drawdown
Heat extraction from a reservoir causes local cooling over time. Sustainable operation requires:
- Adequate reservoir volume relative to extraction rate
- Sufficient fracture spacing for heat exchange
- Balanced injection/production to maintain thermal mass

Well-designed systems maintain commercial temperatures for 30+ years, but oversized extraction can cause premature thermal decline.
:::

### Degradation and Lifetime

**Well life:** 30-50 years with proper design and maintenance
**Power plant life:** 30-40 years
**Failure modes:** 
- Casing corrosion from aggressive supercritical fluids
- Scaling and mineral deposition reducing flow
- Thermal stress cycling causing mechanical failure
- Reservoir thermal drawdown

IDDP experience showed corrosion is most severe during heating/cooling cycles; once fluid reaches steady supercritical state, corrosion decreases substantially.

### Temporal Characteristics

::: facet temporal_character
Deep geothermal is fully dispatchable, providing firm baseload power 24/7 regardless of weather or time of day.

**Capacity factors:** 85-95% (limited mainly by planned maintenance)
**Ramp rates:** Minutes to hours (thermal inertia limits rapid changes)
**Minimum stable generation:** Typically 30-50% of rated capacity
**Flexibility:** Can modulate output for grid services, though economics favor baseload operation

This dispatchability is a key advantage over variable renewables (solar, wind) and positions geothermal as firm clean power comparable to nuclear or fossil fuels.
:::

---

## Scaling Characteristics

### Output Scaling Behavior

::: facet scale_regime
Individual wells have characteristic output determined by reservoir temperature and flow rate. Supercritical wells can produce 30-50 MW each (vs 3-10 MW for conventional geothermal).

Power plants scale by drilling additional wells from a single pad. Economies of scale exist for surface facilities, but well costs remain roughly linear with count.

Site capacity is limited by:
- Reservoir thermal mass (prevents unlimited extraction)
- Land access and drilling pad spacing
- Grid connection capacity

Modular deployment is possible: projects can start small and expand as reservoir performance is validated.
:::

### Viable Scale Range

**Minimum:** Single well demonstration: 1-5 MW (pilot projects)

**Typical:** Commercial plants: 30-100 MW (multiple wells, single pad)

**Maximum:** Large developments: 200-500 MW (multiple pads, integrated reservoir management). The Geysers (California) demonstrates 900+ MW from a single geothermal field, though at conventional temperatures.

### Land/Resource Requirements

Geothermal has exceptionally high power density compared to other renewables:

| Scale | Surface Area | Power Density |
|-------|--------------|---------------|
| 1 MW | 0.001-0.01 km² | 100-1000 W/m² |
| 100 MW | 0.1-1 km² | 100-1000 W/m² |
| 1 GW | 1-2 km² | 500-1000 W/m² |

This is comparable to fossil fuel plants and 50-200x more compact than solar PV or wind farms.

Wells can be directionally drilled from small pads, minimizing surface footprint. Co-location with other land uses (agriculture, light industry) is feasible.

### Resource Potential

Global superhot rock resources are effectively unlimited at sufficient depth:

| Depth | Temperature | Global Potential | Accessibility |
|-------|-------------|------------------|---------------|
| 5 km | Variable | ~50 TW | Current tech (volcanic regions) |
| 7 km | >300°C most regions | ~100 TW | Near-term tech |
| 10 km | >400°C most regions | ~300 TW | Advanced tech required |
| 15 km | >500°C everywhere | >600 TW | Breakthrough tech required |

For context: Current global electricity capacity is ~8 TW. Even accessing 1% of deep geothermal potential would exceed current global electricity demand.

The 2006 MIT study estimated that extracting just 2% of thermal energy from 3-10 km depth beneath the continental US equals 2000x US annual primary energy consumption.

### Comparison to Other Sources

| Source | Power Density | Capacity Factor | Dispatchability | Global Potential |
|--------|---------------|-----------------|-----------------|------------------|
| Deep geothermal | 500-1000 W/m² | 85-95% | Yes | >100 TW |
| Solar PV | 10-20 W/m² | 15-25% | No | >100 TW |
| Onshore wind | 2-3 W/m² | 25-45% | No | ~70 TW |
| Conventional geothermal | 50-100 W/m² | 85-95% | Yes | ~0.2 TW |
| Nuclear | 500-1000 W/m² | 85-93% | Yes | Fuel-limited |

Deep geothermal uniquely combines high power density, high capacity factor, and full dispatchability with effectively unlimited resource potential.

---

## Current Status

### Technology Readiness Level

| Technology | TRL | Status |
|------------|-----|--------|
| Conventional hydrothermal | 9 | Mature, commercial |
| EGS (Fervo-style) | 7-8 | Early commercial deployment |
| Superhot EGS (volcanic) | 4-5 | Demonstrated (IDDP), pre-commercial |
| Closed-loop AGS | 6-7 | First commercial plant (Eavor, 2025) |
| Deep closed-loop (>5 km) | 3-4 | R&D, pilots planned |
| Ultra-deep MMW drilling | 2-3 | Field testing (Quaise, 100m achieved) |

### Levelised Cost of Energy

| Context | LCOE | Notes |
|---------|------|-------|
| Conventional geothermal | $50-80/MWh | Mature, site-dependent |
| Current EGS | $80-150/MWh | Early projects |
| Superhot rock (projected) | $150-300/MWh | First-of-a-kind |
| Target (2035) | $40-60/MWh | With drilling breakthroughs |
| DOE Enhanced Geothermal Shot | $45/MWh | Policy target |

Cost trajectory depends critically on drilling technology advances. Fervo has demonstrated 70% year-over-year drilling cost reductions, suggesting rapid learning is possible.

### Major Deployments

**Supercritical/superhot wells drilled:** >20 globally reaching >375°C

**Key projects:**

| Project | Location | Depth | Temperature | Status |
|---------|----------|-------|-------------|--------|
| IDDP-1 | Krafla, Iceland | 2.1 km | 900°C (magma) | 36 MWe demonstrated, well collapsed |
| IDDP-2 | Reykjanes, Iceland | 4.66 km | 427°C+ | Supercritical confirmed, casing failed |
| Quaise field test | Texas, USA | 100 m | N/A | MMW drilling demonstrated |
| Eavor Geretsried | Germany | 4.5 km | ~150°C | First closed-loop grid power (Dec 2025) |

**Notable achievements:**

- **IDDP-1 (2009-2012):** World's first magma-enhanced geothermal system, demonstrated 36 MWe potential from single well at supercritical conditions
- **IDDP-2 (2017):** First well to successfully reach and confirm active supercritical hydrothermal conditions
- **Quaise (2025):** First field demonstration of millimeter wave drilling, achieving 5 m/hr in granite (10x conventional)
- **Eavor (2025):** First closed-loop geothermal electricity delivered to grid

### Research Frontiers

**Advanced drilling technology:**
Millimeter wave (Quaise), plasma, and particle drilling systems aim to reduce deep drilling costs by 50-90%. Quaise targets commercial deployment by 2028.

**Supercritical reservoir engineering:**
Understanding fluid behavior, fracture dynamics, and heat transfer at >400°C conditions. IDDP data enabling improved models.

**High-temperature materials:**
Casing, cement, electronics, and seals capable of continuous operation at 400-500°C for 30+ years.

**Closed-loop optimization:**
Improving heat transfer in conduction-limited systems through longer laterals, working fluid optimization, and high-temperature operation.

---

## Summary

### Key Specifications

| Parameter | Value |
|-----------|-------|
| Target temperature | >400°C (supercritical) |
| Typical depth | 5-20 km (location dependent) |
| Power per well | 30-50 MW (vs 3-10 MW conventional) |
| Capacity factor | 85-95% |
| Carnot efficiency | 55-60% |
| Practical efficiency | 30-45% |
| Current LCOE | $150-300/MWh |
| Target LCOE | $40-60/MWh |
| Global potential | >100 TW (essentially unlimited) |
| Technology readiness | TRL 3-5 (demonstration phase) |
| Emissions | Near-zero (closed-loop: zero) |
| Plant lifetime | 30-50 years |

### Strengths and Limitations

**Strengths:**
- Enormous energy density (5-10x conventional geothermal)
- Firm, dispatchable, 24/7 power
- Near-zero operational emissions
- Resource available globally at sufficient depth
- Can potentially repower existing fossil fuel plants
- Very small land footprint (~1 km² per GW)
- Long asset life (30-50+ years)
- No fuel costs after construction

**Limitations:**
- Extreme drilling costs at required depths (current)
- Materials limitations at high temperatures
- Limited operational experience at supercritical conditions
- Long development timelines (5-10 years per project)
- High exploration risk for first-of-a-kind projects
- Requires breakthrough drilling technology for global deployment
- Open-loop systems carry induced seismicity risk

### Role in Energy Landscape

::: facet scale_regime
Deep geothermal and superhot rock represent the ultimate prize in clean energy: firm, dispatchable, carbon-free power accessible anywhere on Earth with sufficient depth. Unlike solar and wind, it requires no storage or backup to provide reliable 24/7 electricity.

**Near-term (2025-2035):** Demonstration projects in volcanic regions (Iceland, western US, Japan) will validate supercritical extraction at commercial scale. Closed-loop AGS provides lower-risk pathway for early deployment.

**Medium-term (2035-2050):** If drilling breakthroughs materialize (MMW or similar), costs fall to competitive levels, enabling deployment beyond volcanic regions.

**Long-term (2050+):** "Geothermal everywhere" becomes possible with mature deep drilling technology, potentially providing hundreds of GW of firm clean power globally.

Deep geothermal complements variable renewables by providing the dispatchable backbone that solar and wind cannot. It competes most directly with nuclear and natural gas with CCS for the firm power role in decarbonized grids.

The key uncertainty is drilling technology: if Quaise or similar approaches succeed, deep geothermal could become the dominant clean firm power source. If drilling costs remain prohibitive, deployment will remain limited to favorable volcanic regions.
:::