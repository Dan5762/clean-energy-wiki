# Ocean Thermal Energy Conversion (OTEC)

## Fundamental Principle

### Solar Energy Stored in Thermal Gradients

::: facet ultimate_source
OTEC exploits the temperature difference between warm surface seawater and cold deep seawater to drive a heat engine. The ocean acts as an enormous solar collector: tropical surface waters absorb solar radiation and maintain temperatures of 24-29°C year-round, while water below 800-1000m remains at 4-6°C due to the global thermohaline circulation that brings cold polar water to tropical depths.
:::

This thermal gradient represents stored solar energy of staggering scale. On an average day, tropical seas absorb solar radiation equivalent in heat content to approximately 250 billion barrels of oil. The global theoretical potential for OTEC has been estimated at 8-30 TW, with practical potential around 3-5 TW when accounting for geographic constraints and environmental limits. This exceeds current global electricity consumption (~3 TW average) and dwarfs other ocean energy sources (wave: ~0.5 TW practical, tidal: ~0.1 TW practical).

### Geographic Distribution

::: facet geographic_constraint
The necessary thermal gradient (minimum ΔT ≈ 20°C between surface and 1000m depth) exists primarily between latitudes 20°N and 20°S. Within this tropical band:

- 98 countries and territories have potential OTEC resources
- Best resources: Caribbean, Pacific islands, Southeast Asia, East African coast, northern Australia
- Ideal sites combine steep bathymetry (deep water close to shore) with consistently warm surface waters
- Islands with short distances to 1000m depth are most economically favorable
:::

::: facet temporal_character
The resource is remarkably stable compared to other renewables: the thermal gradient varies only ~20% seasonally (vs. 200-400% for solar/wind) and maintains 24/7, 365-day availability. El Niño/La Niña events can cause larger variations (up to 50%) in some Pacific locations.
:::

### Thermodynamic Constraint

::: facet theoretical_limit
OTEC operates as a heat engine between two reservoirs. The fundamental limit is the Carnot efficiency:

::: equation carnot_otec
$$\eta_{Carnot} = \frac{T_H - T_C}{T_H} = \frac{\Delta T}{T_H}$$
:::

For typical OTEC conditions (T_H = 28°C = 301 K, T_C = 4°C = 277 K, ΔT = 24 K):

$$\eta_{Carnot} = \frac{24}{301} = 7.97\%$$

This is the theoretical maximum. No OTEC system can exceed ~8% thermal efficiency regardless of engineering improvements.
:::

Compare this to:
- Coal/gas plants: Carnot limit ~60-65% (ΔT ~500-600°C)
- Geothermal: Carnot limit 15-25% (ΔT 100-200°C)
- Concentrated solar thermal: Carnot limit 50-60% (ΔT 400-500°C)

The low efficiency is not a flaw but an inherent consequence of the small temperature difference. However, the "fuel" (ocean thermal energy) is free, abundant, and renewable.

## Conversion Mechanism

### System Types

::: facet conversion_pathway
**1. Closed-Cycle OTEC**

The most common design, proposed by Jacques d'Arsonval in 1881.
:::

*Process*:
1. Warm surface seawater (~26-28°C) heats a working fluid with low boiling point
2. Working fluid vaporizes in the evaporator
3. Expanding vapor drives a turbine-generator
4. Cold deep seawater (~4-6°C) condenses the vapor in the condenser
5. Liquid working fluid returns to evaporator, repeating the cycle

*Working fluids*:
- Ammonia (NH₃): Most common, boils at -33°C at 1 atm, good heat transfer properties
- R-134a and other refrigerants: Lower toxicity, different pressure characteristics
- Propane, isobutane: Alternative options

*Advantages*: Higher pressure operation allows smaller turbines; proven Rankine cycle technology
*Disadvantages*: Requires large heat exchangers; working fluid handling

**2. Open-Cycle OTEC**

Proposed by Georges Claude in the 1920s; he built the first working plant in Cuba (1930).

*Process*:
1. Warm surface seawater enters a vacuum chamber (pressure ~2-3 kPa)
2. At this low pressure, seawater boils at ~22-26°C, producing steam
3. Low-pressure steam drives a turbine-generator
4. Cold deep seawater condenses the steam
5. Condensate is pure fresh water (desalinated)

*Advantages*: Produces desalinated water as byproduct; no working fluid needed
*Disadvantages*: Very large, low-pressure turbines required; lower power density

The 1993 NELHA open-cycle plant achieved 97% seawater-to-steam conversion efficiency and produced 7,000 gallons of fresh water per day alongside 80 kW net power.

**3. Hybrid Cycle**

Combines elements of both:
- Closed-cycle power generation for efficiency
- Open-cycle desalination stage for fresh water production
- Can optimize for local needs (power vs. water priority)

### Key Components

**Heat Exchangers**

The critical cost driver, representing 25-50% of total plant capital cost. Requirements:
- Very large surface area (temperature differences are small)
- Corrosion resistance (continuous seawater contact)
- Biofouling resistance
- High thermal conductivity

Materials: Titanium (excellent corrosion resistance, expensive), aluminum alloys (lower cost, shorter life), advanced composites.

A 100 MW plant would require approximately 200 heat exchanger units, each larger than a 20-foot shipping container.

**Cold Water Pipe (CWP)**

The engineering challenge that has historically limited OTEC development:
- Must reach 800-1000m depth for adequate cold water
- Diameter: 4-10m for large plants (enormous by offshore standards)
- Materials: High-density polyethylene (HDPE), fiber-reinforced composites, steel
- Must withstand currents, waves, marine growth, and fatigue loading

A 100 MW plant requires cold water flow of ~200-400 m³/s, necessitating massive pipes.

Recent advances: HDPE pipes now available up to 3m diameter; bundled pipe configurations for larger flows; improved deployment techniques from offshore oil/gas industry.

**Seawater Pumps**

Pumping represents the largest parasitic load:
- A 100 MW plant pumps ~12 million gallons/minute combined warm and cold water
- Pump power consumption: 20-40% of gross generation
- Net output = Gross generation - Pump power - Other auxiliaries

One Lockheed Martin design: 49.8 MW net from a system consuming 19.55 MW for pumping alone.

**Turbine-Generator**

- Closed cycle: Conventional turbomachinery adapted for ammonia or refrigerants
- Open cycle: Very large, low-pressure steam turbines (challenging to manufacture)
- Typical turbine efficiency: 85-90%
- Generator efficiency: 95-98%

### Efficiency Chain

Starting from Carnot maximum (~8%):

| Stage | Efficiency Factor | Running Total |
|-------|-------------------|---------------|
| Carnot limit (ΔT = 24°C) | 8.0% | 8.0% |
| Heat exchanger irreversibilities | ×0.7-0.8 | 5.6-6.4% |
| Turbine efficiency | ×0.85-0.90 | 4.8-5.8% |
| Generator efficiency | ×0.95-0.98 | 4.6-5.7% |
| Pump parasitic load | ×0.6-0.8 | 2.8-4.5% |
| Other auxiliaries | ×0.9-0.95 | 2.5-4.3% |

**Net thermal efficiency: 2.5-4.5% typical, up to 5.4% in optimized designs**

Early OTEC systems achieved only 1-3% efficiency. Modern designs approach 3-5%.

## Theoretical Limits

### Fundamental Carnot Constraint

The Carnot efficiency sets an absolute ceiling that no engineering can overcome:

$$\eta_{max} = \frac{T_H - T_C}{T_H}$$

For OTEC with ΔT = 20-25°C and T_H ≈ 300 K:

| Temperature Difference | Carnot Efficiency |
|-----------------------|-------------------|
| 18°C | 6.0% |
| 20°C | 6.7% |
| 22°C | 7.3% |
| 24°C | 8.0% |
| 26°C | 8.6% |

Increasing the temperature difference offers the only path to higher theoretical efficiency. Approaches include:
- Solar pre-heating of surface water
- Using warm industrial effluent (e.g., power plant cooling water discharge)
- Selecting optimal sites with maximum natural ΔT

Hybrid solar-OTEC systems can theoretically achieve higher efficiencies by boosting T_H.

### Practical Efficiency Limits

Real systems face additional constraints:

**Finite heat transfer rates**: Heat exchangers cannot achieve infinite heat transfer; some temperature difference is "lost" across exchanger surfaces.

**Pumping requirements**: Large seawater volumes must be pumped, consuming 20-40% of gross output.

**Irreversibilities**: Friction, turbulence, non-ideal expansion all reduce efficiency below Carnot.

Best demonstrated net efficiency: ~3% (various pilot plants)
Theoretical optimized designs: ~5-5.4% (not yet demonstrated at scale)
Ultimate practical ceiling: ~6% (half of Carnot, if all components optimized)

### Resource Extraction Limits

Even with unlimited OTEC deployment, there are environmental limits:

- Extracting thermal energy cools surface waters and warms deep waters
- Large-scale deployment would reduce the thermal gradient
- Studies suggest ~30 TW extraction would noticeably affect ocean thermal structure
- Practical sustainable limit: perhaps 3-10 TW globally

A University of Hawaii study estimated 15,000 plants of 1 GW each, spaced 30 km apart within 100 km of land, could sustainably generate >2 TW without large-scale disruption.

## Practical Limitations

### Engineering Challenges

**Cold water pipe**: The single greatest technical barrier. Deploying and maintaining a 1000m pipe in open ocean conditions remains difficult and expensive. Pipe failures have ended several early projects.

**Heat exchanger size and cost**: Low ΔT requires enormous heat transfer surface area. Heat exchangers represent 25-50% of plant cost.

**Biofouling**: Marine organisms colonize heat exchanger surfaces, degrading performance. Continuous cleaning systems required.

**Corrosion**: Seawater is highly corrosive. Titanium resists corrosion but costs 5-10× more than steel.

**Scale**: Small pilot plants (<1 MW) cannot demonstrate economic viability. Commercial plants need to be 10-100 MW, but no one has built at this scale.

### Economic Barriers

**Capital cost**: Current estimates range widely:
- Small demonstration plants: $15,000-40,000/kW
- First commercial plants (10 MW): $8,000-15,000/kW
- Projected mature technology (100 MW): $4,000-8,000/kW

Compare to: Solar PV ~$700-1,000/kW, onshore wind ~$1,000-1,500/kW, offshore wind ~$2,500-4,000/kW.

**LCOE** (Levelized Cost of Energy):
- Current demonstration plants: $0.30-1.00/kWh
- First commercial plants: $0.15-0.30/kWh projected
- Mature technology at scale: $0.05-0.15/kWh projected (optimistic)

For comparison: Onshore wind $0.03-0.05/kWh, solar PV $0.03-0.06/kWh, diesel generation on islands $0.20-0.40/kWh.

**Financing**: High capital cost, unproven technology at scale, and long payback periods deter commercial lenders. Most projects require government or development bank support.

### Operational Challenges

**Maintenance**: Offshore or coastal marine environments are hostile. Access for repairs is weather-dependent and expensive.

**Reliability**: Limited operational experience means reliability is unproven at commercial scale.

**Grid integration**: On small island grids, a single large OTEC plant could represent a major fraction of total capacity, creating stability challenges if it trips offline.

## Scaling Characteristics

### Scale Economics

::: facet scale_regime
OTEC exhibits strong economies of scale:
:::
- Capital cost per kW decreases approximately 20% for each doubling of plant size
- Operating costs per kWh decrease with size
- Minimum economic scale: likely 10-50 MW for islands, 100+ MW for grid-connected

| Plant Size | Estimated Capital Cost | LCOE (Concessionary Financing) |
|------------|------------------------|--------------------------------|
| 1 MW | $15,000-25,000/kW | $0.40-0.60/kWh |
| 10 MW | $8,000-12,000/kW | $0.20-0.35/kWh |
| 50 MW | $5,000-8,000/kW | $0.15-0.25/kWh |
| 100 MW | $4,000-6,000/kW | $0.09-0.18/kWh |

Japanese studies project 30% capital cost reduction for offshore OTEC as structures are optimized, potentially reaching $0.26/kWh LCOE for 50 MW plantships with concessionary loans.

### Plant Configurations

**Land-based (onshore)**:
- Requires long cold water pipe to reach depth
- Easier maintenance access
- Limited to sites with steep bathymetry close to shore
- Examples: NELHA (Hawaii), NIOT (India)

**Shelf-mounted**:
- Platform on continental shelf
- Moderate pipe length
- Power transmitted to shore by cable
- Higher construction cost

**Floating (offshore)**:
- Ship or barge-mounted plant positioned over deep water
- Shortest cold water pipe (vertical)
- Power transmitted by cable, or used for on-site hydrogen/ammonia production
- Most technically challenging (station-keeping, cable routing)
- Example: Global OTEC's proposed modular barges

### Modular Approaches

Recent development trend: smaller, modular units rather than giant plants.

Global OTEC's "OTEC Power Module": 500 kW per unit, designed for:
- Lower initial capital requirement
- Factory fabrication and standardization
- Gradual capacity addition
- Reduced technology risk

This mirrors the successful scaling approach of solar PV and wind: many small units rather than few large ones.

## Current Status

### Historical Development

**1881**: Jacques d'Arsonval proposes closed-cycle OTEC concept
**1930**: Georges Claude demonstrates first working OTEC plant (Cuba), 22 kW
**1979**: Mini-OTEC (Hawaii) produces first net positive output: 50 kW gross, 10 kW net
**1980**: OTEC-1 (Hawaii) tests 1 MW heat exchangers on converted tanker
**1993-1998**: NELHA open-cycle plant operates, 210 kW gross, 80 kW net, produces fresh water
**2013**: NIOT (India) deploys 200 kW pilot plant (subsequently lost due to pipe failure)
**2015**: Makai 105 kW closed-cycle plant connected to Hawaii grid (first US grid-connected OTEC)

### Operational Plants (2024)

Global installed OTEC capacity: <1 MW total

**Makai Ocean Engineering (Hawaii)**:
- 105 kW closed-cycle demonstration plant
- Grid-connected since 2015
- Functions primarily as heat exchanger test facility
- Largest operating OTEC plant in the world

**Kumejima (Japan)**:
- 100 kW demonstration facility
- Operated by Okinawa Prefecture and partners
- Testing advanced heat exchangers

No commercial-scale (>1 MW) OTEC plants currently operate anywhere in the world.

### Projects in Development

**Global OTEC (UK)**:
- 1.5 MW floating OTEC platform for São Tomé and Príncipe (West Africa)
- Received cold water riser installation certification (2023)
- Target deployment: 2025-2026
- Modular 500 kW units, scalable design

**KRISO (South Korea)**:
- 1 MW K-OTEC 1000 demonstration
- Tested at 338 kW output in South Korea (18.7°C ΔT, designed for 24°C)
- Planned relocation to Kiribati

**Japan (Okinawa/Kumejima)**:
- Expansion to 1 MW commercial-scale by ~2026
- Ministry of Environment funding for large-scale heat exchanger development
- Strong government support for OTEC as island energy solution

**Xenesys/Japan**:
- 100 kW pilot with advanced Uehara cycle
- Partnership with IHI Corporation

**Other announced projects** (status uncertain):
- China: 10 MW offshore plant for Hainan Island resort (Lockheed Martin/Reignwood)
- Bahamas: 5 MW facility for Baha Mar resort (on hold)
- Diego Garcia: 13 MW for US Navy (stalled)

### Technology Readiness

OTEC is rated at Technology Readiness Level (TRL) 6-7:
- Components demonstrated in relevant environment
- System prototype demonstrated
- Not yet demonstrated at commercial scale

Key remaining challenges:
1. Large-scale cold water pipe deployment and reliability
2. Cost-effective heat exchanger manufacturing at scale
3. Financing and risk mitigation for first commercial plants

### Co-Products and Applications

OTEC's value proposition improves when co-products are considered:

**Desalinated water**: Open-cycle and hybrid plants produce fresh water. The 1993 NELHA plant produced 7,000 gallons/day. A 100 MW open-cycle plant could produce millions of gallons daily.

**Seawater Air Conditioning (SWAC)**: Cold deep water can provide building cooling at 10% of the energy cost of conventional air conditioning. Already operational in some locations (e.g., Bora Bora, Honolulu) without OTEC power generation.

**Aquaculture**: Cold, nutrient-rich deep water supports cold-water species (salmon, lobster) and microalgae cultivation. NELHA hosts aquaculture companies generating ~$40 million annually from deep seawater resources.

**Hydrogen/Ammonia production**: OTEC electricity could power electrolysis for green hydrogen or ammonia production, particularly attractive for remote ocean locations.

**Mineral extraction**: Deep seawater contains valuable trace elements including lithium.

These byproducts can significantly improve project economics, potentially reducing effective LCOE by 20-40%.

### Costs Summary

| Parameter | Current | Projected (Mature) |
|-----------|---------|-------------------|
| Capital cost | $8,000-25,000/kW | $4,000-6,000/kW |
| LCOE | $0.20-0.50/kWh | $0.09-0.18/kWh |
| Capacity factor | 90-95% | 90-95% |
| Plant lifetime | 20-30 years | 30-40 years |
| O&M cost | 2-4% of CAPEX/year | 1.5-2.5% of CAPEX/year |

OTEC's high capacity factor (90-95%) is a significant advantage over intermittent renewables (solar 15-25%, wind 25-45%). This partially compensates for higher capital costs when comparing total energy delivered.

### Market Outlook

OTEC is not competitive with solar, wind, or conventional generation in most markets. However, it may find niches:

**Most promising markets**:
1. Remote tropical islands with expensive diesel generation ($0.20-0.40/kWh)
2. Island nations seeking energy independence
3. Military bases requiring resilient, fuel-independent power
4. Locations valuing co-products (water, cooling, aquaculture)

**Development pathway**:
- 2024-2027: First commercial-scale plants (1-10 MW) in island markets
- 2027-2035: Scaling to 10-50 MW if early plants succeed
- 2035+: Potential for 100+ MW plants if costs decline as projected

**Key enablers needed**:
- Successful demonstration of 1+ MW plants operating reliably
- Cost reduction through manufacturing scale and learning
- Supportive policy (feed-in tariffs, renewable mandates, carbon pricing)
- Development bank financing for early projects

**Realistic assessment**: OTEC will likely remain a niche technology for tropical islands and specialized applications rather than a major contributor to global electricity supply. Its value lies in providing baseload renewable power where alternatives are limited, and in enabling integrated ocean resource utilization (power + water + cooling + aquaculture).

The technology works. The physics is proven. The question is whether costs can decline sufficiently for OTEC to compete economically at meaningful scale, or whether solar + storage will prove a more cost-effective path even for tropical island nations.