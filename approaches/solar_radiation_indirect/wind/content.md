# Wind Energy

## Fundamental Principle

### Natural Asymmetry Exploited

::: facet ultimate_source
The differential heating of Earth's surface by the Sun creates pressure gradients that drive atmospheric circulation. Approximately 2% of the solar energy reaching Earth's surface is converted to kinetic energy in the wind. Wind turbines extract a fraction of this kinetic energy from moving air masses and convert it to rotational mechanical energy, then to electricity.

The fundamental energy source is ultimately solar: equatorial regions receive more solar radiation per unit area than polar regions, creating temperature differentials that drive large-scale atmospheric circulation (Hadley cells, Ferrel cells, polar cells). Superimposed on this are pressure systems, the Coriolis effect from Earth's rotation, and local effects from topography, land-sea temperature contrasts, and surface friction.
:::

### Ultimate Source

::: facet ultimate_source
Solar radiation creates the temperature gradients that drive winds. The total kinetic energy dissipated in Earth's atmosphere is approximately 1000 TW, of which a small fraction flows through altitudes accessible to wind turbines. Global technical wind potential at hub heights of 80-150m is estimated at 70-450 TW, far exceeding current human energy demand (~18 TW primary energy).
:::

### Key Physics

**Kinetic energy flux in wind:**

The power available in wind flowing through a cross-sectional area A is:

::: equation wind_power
$$P_{wind} = \frac{1}{2} \rho A v^3$$
:::

where ρ is air density (~1.225 kg/m³ at sea level, 15°C) and v is wind speed.

The **cubic relationship** with wind speed is critical: doubling wind speed increases available power eightfold. This explains why:
- Site selection is paramount (small differences in average wind speed translate to large differences in energy production)
- Taller towers are valuable (wind speed increases with height above ground)
- Offshore sites are attractive (higher, more consistent winds over water)

**Wind shear (variation with height):**

Wind speed increases with altitude due to reduced surface friction. The power law approximation:

::: equation wind_shear
$$v(z) = v_{ref} \left(\frac{z}{z_{ref}}\right)^\alpha$$
:::

where α is the wind shear exponent (typically 0.1-0.25 depending on terrain roughness and atmospheric stability). Over open water α ≈ 0.1; over rough terrain α ≈ 0.25.

This drives the trend toward taller turbines: a 150m hub height captures significantly more energy than 80m, particularly in areas with high surface roughness.

**Air density effects:**

Power scales linearly with air density. At higher altitudes (lower pressure) or higher temperatures (lower density), power output decreases. A turbine at 1000m elevation produces ~10% less power than at sea level in the same wind conditions.

---

## Conversion Mechanism

### Energy Capture and Conversion

::: facet conversion_pathway
Modern wind turbines convert wind's kinetic energy to electricity through a multi-stage process:

$$\text{Wind kinetic energy} \rightarrow \text{Rotor rotation} \rightarrow \text{Gearbox (optional)} \rightarrow \text{Generator} \rightarrow \text{AC electricity}$$

Unlike thermal power plants, wind turbines require no fuel combustion, no working fluid, and no thermal cycle. The conversion is purely mechanical-to-electrical.
:::

### Physical Processes

**1. Aerodynamic lift on rotor blades**

Wind turbine blades are airfoils, shaped to generate lift when air flows over them. The lift force perpendicular to the relative airflow creates a torque that rotates the rotor. Modern turbines operate primarily via lift (like aircraft wings), not drag (like simple paddle wheels). This is far more efficient.

The blade pitch (angle of attack) is actively controlled to:
- Optimize energy capture across varying wind speeds
- Limit power in high winds to protect the turbine
- Enable shutdown by feathering blades parallel to wind

**2. Rotor rotation**

Three-bladed horizontal-axis wind turbines (HAWTs) dominate utility-scale applications. The three-blade design balances:
- Aerodynamic efficiency (more blades capture marginally more energy but add cost and weight)
- Structural loads (three blades provide smoother rotation than two)
- Visual aesthetics and noise

Rotor speeds are typically 6-20 rpm for large turbines. Tip speeds reach 70-90 m/s (250-320 km/h) at the blade tips.

**3. Mechanical power transmission**

Most turbines use a gearbox to increase rotational speed from the slow rotor (~10-20 rpm) to the fast generator (~1000-2000 rpm). The gearbox is a complex, high-maintenance component.

Direct-drive designs (used by Siemens Gamesa, Enercon, and others) eliminate the gearbox by using large-diameter, low-speed permanent magnet generators. This reduces mechanical complexity and maintenance but requires more generator material (rare earth magnets).

**4. Electrical generation**

The generator converts mechanical rotation to AC electricity. Most modern turbines use:
- **Doubly-fed induction generators (DFIG)**: Partial power electronics, variable speed operation
- **Permanent magnet synchronous generators (PMSG)**: Full power electronics, higher efficiency, common in direct-drive designs

Power electronics convert the variable-frequency output to grid-compatible AC (50 or 60 Hz).

**5. Grid connection**

Turbine output is stepped up via transformers (typically to 33-66 kV within the wind farm, then to transmission voltage for export). Modern turbines provide grid services including reactive power control, frequency response, and fault ride-through.

### Turbine Architectures

**Horizontal-axis wind turbines (HAWT):**
- Dominant design for utility scale
- Rotor axis parallel to wind direction
- Requires yaw mechanism to track wind direction
- Three blades nearly universal

**Vertical-axis wind turbines (VAWT):**
- Rotor axis perpendicular to ground
- Omnidirectional (no yaw needed)
- Lower efficiency than HAWTs
- Limited to small-scale applications

**Offshore variants:**
- Fixed-bottom: Monopile, jacket, gravity-based foundations (water depths <60m)
- Floating: Spar, semi-submersible, tension-leg platforms (water depths 60-1000m)

---

## Theoretical Limits

### Primary Efficiency Limit: The Betz Limit

::: facet theoretical_limit
The Betz limit (also Betz-Joukowsky limit) establishes the maximum fraction of wind power that can be extracted by an ideal wind turbine:

::: equation betz_limit
$$C_{p,max} = \frac{16}{27} \approx 59.3\%$$
:::

This limit was derived independently by Lanchester (1915), Betz (1919), and Joukowsky (1920).
:::

### Derivation of the Limit

Consider wind approaching a turbine at velocity v₁ and leaving at velocity v₂. Conservation of mass requires the airstream to expand as it slows:

$$\rho A_1 v_1 = \rho A_2 v_2$$

The power extracted equals the change in kinetic energy flux:

$$P = \frac{1}{2} \rho A v_1 (v_1^2 - v_2^2)$$

where A is the rotor swept area and v is the velocity at the rotor (v = (v₁ + v₂)/2 by momentum theory).

Defining the axial induction factor a = (v₁ - v)/v₁, the power coefficient becomes:

$$C_p = 4a(1-a)^2$$

Maximizing with respect to a gives a = 1/3, hence v₂ = v₁/3, and:

$$C_{p,max} = \frac{16}{27} \approx 0.593$$

### Physical Interpretation

The Betz limit arises because:

1. **If you extract all the energy** (v₂ = 0), no air flows through the turbine, so no power can be extracted.

2. **If you extract no energy** (v₂ = v₁), the turbine does no work.

3. **The optimum** occurs when downstream velocity is 1/3 of upstream velocity, which requires the airstream to expand to 3× its upstream area.

The limit assumes:
- Uniform, steady flow
- No rotational component in wake
- Infinite number of infinitely thin blades
- No losses

Real turbines face additional losses not captured in the Betz analysis:
- Wake rotation (angular momentum imparted to air)
- Tip losses (vortices at blade tips)
- Hub losses (no extraction at rotor center)
- Profile drag on blades
- Mechanical and electrical losses

### Practical Efficiencies

The Glauert limit refines Betz by accounting for wake rotation, giving an efficiency that depends on tip-speed ratio (blade tip speed / wind speed). At typical tip-speed ratios of 7-10, the Glauert limit is ~53-57%.

Real utility-scale turbines achieve:
- Peak power coefficient (Cp): 0.45-0.50 (75-85% of Betz limit)
- Average Cp across operating range: 0.35-0.45
- Overall efficiency (wind to grid): ~40-47%

This is remarkably close to theoretical limits, reflecting mature aerodynamic design.

### Comparison with Other Energy Sources

Wind's theoretical limit (59.3%) is lower than:
- Carnot efficiency for high-temperature thermal cycles (>60% for T_hot > 500°C)
- Photovoltaic thermodynamic limits (~85% with concentration)

But higher than:
- Practical single-junction PV (Shockley-Queisser ~33%)
- Practical thermal power plants (~35-60%)

Wind turbines are among the most efficient energy conversion devices in widespread use.

---

## Practical Limitations

### Wind Resource Variability

::: facet temporal_character
**Spatial variation:**

Wind resources vary enormously by location. Average wind power density ranges from <100 W/m² (poor sites) to >1200 W/m² (exceptional offshore locations). Commercially viable sites typically require mean wind speeds of ≥6.5 m/s at hub height.

The best onshore resources are found in:
- Great Plains of North America
- Northern Europe (especially coastal)
- Patagonia
- Inner Mongolia and northwest China
- Parts of Australia

Offshore resources are generally superior (stronger, more consistent winds) but at higher cost.

**Temporal variation:**

Wind output varies on multiple timescales:
- **Seconds to minutes**: Turbulence, gusts
- **Hours**: Diurnal patterns, weather fronts
- **Days to weeks**: Synoptic weather systems
- **Seasonal**: Many regions have stronger winds in winter
- **Annual**: Year-to-year variation of 10-15% is common

This variability means wind turbines operate at a fraction of rated capacity. Capacity factors (actual output / rated capacity) are:
- Onshore: 25-45% (global average ~36%)
- Offshore: 35-55% (global average ~41%)
- Best sites: >50% (some offshore locations reach 60%)
:::

::: limitation intermittency
**Intermittency implications:**

Unlike dispatchable generators, wind output cannot be scheduled. High wind penetration requires:
- Grid flexibility (fast-ramping backup, interconnection, demand response)
- Energy storage (increasingly economic at high penetration)
- Geographic diversification (wind correlation decreases with distance)
- Accurate forecasting (now quite good at 24-48 hour horizons)
:::

### Material Requirements

**Structural materials:**

Wind turbines require large quantities of:
- Steel: Tower, foundation, nacelle components (~120-180 tonnes per MW)
- Concrete: Foundations, especially onshore (~400-700 m³ per MW onshore)
- Fiberglass/carbon fiber: Blades (~10-15 tonnes per MW)
- Copper: Generator windings, cables (~3-5 tonnes per MW)

These materials are abundant and recyclable (except composite blades, which present end-of-life challenges).

::: limitation material_scarcity
**Critical materials:**

Permanent magnet generators (increasingly common) use neodymium and dysprosium:
- ~200-600 kg rare earth elements per MW for direct-drive designs
- Supply concentration in China creates supply chain risk
- Alternatives exist (electromagnets, different generator designs) at some efficiency cost
:::

### Land and Sea Use

::: limitation land_intensity
**Onshore wind:**

Wind farms have low power density compared to thermal plants:
- Installed capacity density: 3-20 MW/km² (typically 5-10 MW/km²)
- Output power density: 1-7 W/m² (average ~2-3 W/m²)

However, direct land use (turbine foundations, access roads, substations) is only 1-3% of total wind farm area. The remaining 97-99% can be used for agriculture, grazing, or left as natural habitat. Wind turbines are highly compatible with farming.

For perspective: supplying 20% of global electricity (~6,000 TWh/year) would require roughly 500,000-1,000,000 km² of wind farm area (0.3-0.7% of global land area), of which only 1-3% is actually occupied by infrastructure.

**Offshore wind:**

Offshore turbines are spaced further apart (7-10 rotor diameters) due to wake effects:
- Installed capacity density: 3-10 MW/km² (lower than onshore due to spacing)
- Output power density: 1.5-4 W/m² (higher capacity factors offset lower density)

Offshore wind farms create de facto marine protected areas (exclusion of fishing trawlers) with potential biodiversity benefits.
:::

### Turbine Lifetime and Degradation

Modern wind turbines are designed for 20-25 year lifetimes, increasingly extended to 30+ years.

Degradation sources:
- Blade erosion (leading edge damage from rain, insects, particles)
- Gearbox wear
- Generator demagnetization (for permanent magnet designs)
- Foundation settlement or corrosion (offshore)

Annual production decline is typically 0.5-1.5%/year. Major component replacement (gearbox, blades) may be required during lifetime.

End-of-life options:
- Repowering (replace turbines with larger, more efficient units)
- Lifetime extension (refurbishment and continued operation)
- Decommissioning (removal and site restoration)

Blade recycling remains challenging due to composite materials, though chemical and mechanical recycling processes are developing.

### Environmental and Social Factors

::: limitation public_acceptance
**Bird and bat mortality:**

Wind turbines kill birds and bats through collision. Estimates for the US are 100,000-500,000 birds/year from wind turbines, compared to ~1-4 billion from building windows and 1-4 billion from cats. Mortality is highly site-specific; careful siting and operational curtailment during migration periods can reduce impacts by 50-90%.

**Noise:**

Modern turbines produce ~100-105 dB at the source (nacelle), attenuating to 35-45 dB at typical setback distances (500-1000m). This is comparable to a quiet office or library. Low-frequency noise and amplitude modulation ("swoosh") can be annoying to some residents. Setback requirements vary by jurisdiction.

**Visual impact:**

Wind turbines are visible over large distances (especially offshore). Visual impact is subjective; surveys show mixed public responses. Proper siting and community engagement are essential.

**Radar interference:**

Large rotating blades can interfere with aviation and weather radar. Mitigation includes radar modifications, stealth blade coatings, and curtailment agreements near airports.
:::

---

## Scaling Characteristics

### Output Scaling Behaviour

Wind turbine power output scales with:
- Swept area (∝ rotor diameter²)
- Wind speed cubed (∝ v³)

Larger rotors capture more energy. A turbine with 2× rotor diameter captures 4× the power in the same wind.

This drives the relentless trend toward larger turbines:

| Era | Typical onshore | Typical offshore |
|-----|----------------|------------------|
| 1990s | 0.5 MW, 40m rotor | - |
| 2000s | 1.5 MW, 70m rotor | 3 MW, 90m rotor |
| 2010s | 2-3 MW, 100m rotor | 6-8 MW, 160m rotor |
| 2024 | 4-6 MW, 150-170m rotor | 12-15 MW, 220-240m rotor |
| Prototype | 6-8 MW (onshore) | 20-26 MW, 260-310m rotor |

The largest turbines (Dongfang 26 MW, Mingyang 22 MW, Siemens Gamesa 21 MW) have rotors spanning >260m, sweeping areas of 50,000-77,000 m². A single such turbine can power 20,000+ homes.

### Economies of Scale

Larger turbines reduce cost per kWh through:
- Higher capacity factors (taller towers reach faster winds)
- Lower installation cost per MW (fewer foundations, cables, grid connections)
- Lower O&M cost per MW (fewer turbines to maintain)

Wind farm scale also provides economies:
- Bulk procurement
- Shared infrastructure (substations, grid connection)
- Optimized logistics

Typical project sizes:
- Small: <50 MW
- Medium: 50-200 MW
- Large: 200-1000 MW
- Very large: >1 GW (e.g., Dogger Bank 3.6 GW, Hornsea projects)

### Viable Scale Range

::: facet scale_regime
**Minimum scale:**
- Residential: 1-10 kW (poor economics, limited sites)
- Community: 100 kW - 10 MW
- Utility: >10 MW (typically 50 MW+)

**Practical maximum:**
- Individual turbines: Currently 26 MW (prototype); 15 MW commercially available
- Wind farms: No fundamental limit; largest projects exceed 1 GW
- Regional scale: Wake effects and atmospheric energy limits become relevant above ~30 km scale

At very large scales (>30-50 km), wind farm power density drops toward ~1 W/m² as turbines compete for atmospheric kinetic energy that must be replenished from above.
:::

---

## Current Status

### Technology Readiness Level

| Technology | TRL | Status |
|------------|-----|--------|
| Onshore wind (fixed-speed) | 9 | Mature, fully commercial |
| Onshore wind (variable-speed) | 9 | Dominant technology |
| Fixed-bottom offshore | 9 | Mature, scaling rapidly |
| Floating offshore | 7-8 | Commercial projects beginning |
| Direct-drive generators | 9 | Commercial, ~30% market share |
| Large rotors (>200m) | 8-9 | Commercial deployment starting |

Wind is a mature technology with continued incremental improvements in efficiency, reliability, and scale.

### Global Deployment (2024)

**Capacity:**
- Total global: 1,136 GW (of which 83 GW offshore)
- Onshore: 1,053 GW
- Offshore: 83 GW

**2024 installations:**
- Total new: 117 GW (record year)
- Onshore: 109 GW
- Offshore: 8 GW

**Generation:**
- Annual generation: ~2,300 TWh (2023)
- Share of global electricity: ~8-10%
- Countries with >20% wind share: Denmark (57%), Ireland, Portugal, Spain, UK, Germany, and others

**Geographic distribution:**
| Country | Capacity (GW) | Share |
|---------|--------------|-------|
| China | 470+ | 41% |
| United States | 155 | 14% |
| Germany | 73 | 6% |
| India | 47 | 4% |
| Brazil | 30 | 3% |
| UK | 32 | 3% |
| Spain | 32 | 3% |
| Others | ~300 | 26% |

China dominates both capacity and manufacturing, accounting for 70% of 2024 installations.

### Costs

**Levelized cost of energy (LCOE):**

| Type | Global average | Best sites |
|------|---------------|------------|
| Onshore wind | $34/MWh | $20-25/MWh |
| Offshore wind (fixed) | $79/MWh | $50-60/MWh |
| Offshore wind (floating) | $150-300/MWh | Declining rapidly |

Onshore wind is now the cheapest source of new electricity generation in most of the world, competitive with or cheaper than existing coal and gas plants in many regions.

**Cost trends:**

Since 2010, onshore wind LCOE has fallen ~70% and offshore wind LCOE has fallen ~60%. Cost reductions come from:
- Larger turbines (higher capacity factors)
- Manufacturing scale and learning
- Improved reliability (lower O&M costs)
- Lower financing costs (reduced risk perception)
- Competitive auctions

**Capital costs (2024):**
- Onshore: $1,000-1,700/kW
- Offshore (fixed): $2,500-4,000/kW
- Offshore (floating): $4,000-6,000/kW

### Turbine Technology

**Current commercial turbines:**

*Onshore:*
- Typical capacity: 3-6 MW
- Typical rotor: 130-170m diameter
- Typical hub height: 100-170m
- Average size installed (2024): 3.4 MW (US)

*Offshore:*
- Typical capacity: 10-15 MW
- Typical rotor: 200-240m diameter
- Typical hub height: 130-150m
- Largest deployed: Vestas V236-15.0 MW (236m rotor)

**Prototype turbines (2024-2025):**
- Dongfang DEC 26 MW: 310m rotor, 77,000 m² swept area
- Mingyang MySE 22 MW: 310m rotor
- Siemens Gamesa 21 MW: 276m rotor

A single 15 MW turbine produces ~80 GWh/year, enough to power 20,000 European homes.

### Research Frontiers

**Larger turbines:**
- 20+ MW offshore turbines in development
- Longer, lighter blades using advanced composites and segmented designs
- Higher towers using concrete-steel hybrids

**Floating offshore:**
- Opens vast deep-water resources (58% of US offshore potential is in >60m depth)
- Multiple platform concepts (spar, semi-submersible, tension-leg)
- 278 MW deployed globally (end 2024), rapid growth expected
- Target LCOE: $45/MWh by 2035 (DOE Floating Offshore Wind Shot)

**Advanced controls:**
- Lidar-based preview control (detect gusts before they hit)
- Wake steering (yaw turbines to redirect wakes)
- Coordinated wind farm control

**Grid integration:**
- Grid-forming inverters (wind providing grid stability)
- Hybrid wind-storage projects
- Green hydrogen production from offshore wind

**Sustainability:**
- Recyclable blade designs
- Reduced rare earth content or rare-earth-free generators
- Longer lifetimes (30+ years)

### Market Outlook

GWEC forecasts ~980 GW of new wind capacity 2025-2030 under current policies, averaging 164 GW/year. This would bring total global capacity to ~2,100 GW by 2030.

Offshore wind is expected to grow fastest, with annual installations rising from 8 GW (2024) to 34 GW (2030), driven by:
- European offshore expansion
- China's continued dominance
- Emerging markets (Japan, South Korea, Taiwan, Vietnam, Brazil)
- US market (if policy stabilizes)

Wind is on track to provide 15-20% of global electricity by 2030 and potentially 30-35% by 2050 in net-zero scenarios.
