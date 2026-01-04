# Solar Heating

## Fundamental Principle

### Natural Asymmetry Exploited

The temperature difference between the Sun's surface (~5800K) and the Earth (~300K), exploited at the low-temperature end of the thermal spectrum. Solar heating systems absorb solar radiation and convert it directly to thermal energy at temperatures suitable for domestic hot water (40-80°C), space heating (30-60°C), and low-temperature industrial processes (up to ~150°C).

The physical quantity out of equilibrium is the radiative flux from the Sun. A surface at ambient temperature (~300K) would emit ~450 W/m² according to Stefan-Boltzmann, but receives ~1000 W/m² of solar irradiance at midday, creating a net energy gain that can be captured as useful heat.

Unlike concentrated solar thermal (which achieves high temperatures via optical concentration for electricity generation) or photovoltaics (which extract electrical work via the photovoltaic effect), solar heating systems operate without concentration or electrical conversion. They accept the full solar spectrum and convert it to low-grade heat through straightforward absorption. This simplicity is both a strength (low cost, high reliability) and a limitation (the heat is useful only for thermal loads, not electricity).

### Ultimate Source

Nuclear fusion in the Sun's core, identical to all solar technologies. The solar constant of ~1361 W/m² above Earth's atmosphere is reduced to ~1000 W/m² at the surface under clear skies, with further reductions from clouds, atmospheric scattering, and collector orientation.

For solar heating, the relevant quantity is Global Horizontal Irradiance (GHI) or Global Tilted Irradiance (GTI), which includes both direct and diffuse radiation. Unlike concentrated solar thermal and concentrated photovoltaics, flat-plate solar heating collectors can utilise diffuse radiation (scattered by clouds and atmosphere), making them effective in a wider range of climates including temperate and partly cloudy regions.

The source is effectively inexhaustible. Global solar thermal heating capacity could expand by orders of magnitude without approaching any resource limit. The constraint is economics and competition from other heating technologies, not fundamental energy availability.

### Key Physics

**Radiation absorption:**

A solar collector absorbs incident radiation according to its absorptivity α. For a selective absorber coating (high absorptivity in the visible/near-IR, low emissivity in the thermal IR):

$$Q_{absorbed} = \alpha \cdot G \cdot A_c$$

where G is incident irradiance (W/m²) and A_c is collector area (m²). Modern selective coatings achieve α ≈ 0.92-0.96 in the solar spectrum.

**Thermal losses:**

The collector loses heat to the environment via:

1. **Radiation**: Proportional to (T_c⁴ - T_amb⁴), reduced by low-emissivity coatings
2. **Convection**: Proportional to (T_c - T_amb), reduced by glazing and vacuum insulation
3. **Conduction**: Through collector edges and back, reduced by insulation

The overall heat loss coefficient U_L (W/m²K) characterises total losses per unit area per degree temperature difference:

$$Q_{loss} = U_L \cdot A_c \cdot (T_c - T_{amb})$$

Typical values:
- Unglazed collector: U_L ≈ 15-25 W/m²K
- Single-glazed flat plate: U_L ≈ 4-8 W/m²K
- Double-glazed flat plate: U_L ≈ 2.5-4 W/m²K
- Evacuated tube: U_L ≈ 0.5-2 W/m²K

**Hottel-Whillier-Bliss equation:**

The useful heat extracted from a solar collector is given by:

$$Q_u = F_R \cdot A_c \cdot [\tau\alpha \cdot G - U_L \cdot (T_i - T_{amb})]$$

where F_R is the heat removal factor (ratio of actual heat removal to maximum possible), τα is the transmittance-absorptance product of the glazing and absorber, T_i is the inlet fluid temperature, and T_amb is ambient temperature.

This can be rewritten as collector efficiency:

$$\eta = \frac{Q_u}{G \cdot A_c} = F_R \cdot \tau\alpha - F_R \cdot U_L \cdot \frac{(T_i - T_{amb})}{G}$$

This linear relationship (efficiency decreasing with temperature rise above ambient, normalised by irradiance) is the fundamental performance characteristic of non-concentrating solar thermal collectors.

**Stagnation temperature:**

When no heat is extracted (Q_u = 0), the collector reaches stagnation temperature:

$$T_{stag} = T_{amb} + \frac{\tau\alpha \cdot G}{U_L}$$

For a flat-plate collector with U_L = 4 W/m²K, τα = 0.8, and G = 1000 W/m²:

$$T_{stag} = T_{amb} + \frac{0.8 \times 1000}{4} = T_{amb} + 200°C$$

Evacuated tubes can reach stagnation temperatures exceeding 300°C, creating overheat protection challenges.

## Conversion Mechanism

### Energy Capture and Conversion

Solar heating systems capture solar radiation and convert it to thermal energy in a heat transfer fluid (water, water-glycol mixture, or air). This is the simplest and most direct solar energy conversion: photons are absorbed by a dark surface, their energy thermalises immediately, and the resulting heat is transferred to a working fluid.

The primary physical interaction is absorption of electromagnetic radiation by the collector surface, followed by heat conduction to the fluid and convective heat transfer within the fluid.

### Physical Processes

**1. Optical absorption**

Solar radiation passes through transparent glazing (glass or polymer) and strikes the absorber surface. The absorber is typically a metal sheet (copper or aluminium) with a selective coating that:
- Absorbs strongly at solar wavelengths (0.3-2.5 μm)
- Emits weakly at thermal wavelengths (>2.5 μm at typical operating temperatures)

This selectivity is achieved through thin-film coatings (e.g., black chrome, cermet coatings, titanium nitride oxide) that exploit the wavelength dependence of optical properties. Typical selective surfaces achieve solar absorptance α_s ≈ 0.92-0.96 and thermal emittance ε ≈ 0.05-0.15.

**2. Heat conduction**

Heat conducts from the absorber surface through the metal sheet to fluid channels (typically copper tubes soldered or welded to the absorber). The thermal resistance of this path depends on:
- Absorber material thermal conductivity (copper ~400 W/mK, aluminium ~200 W/mK)
- Sheet thickness and tube spacing
- Quality of thermal bond between sheet and tubes

The collector efficiency factor F' characterises how close the mean absorber temperature is to the fluid temperature; well-designed collectors achieve F' > 0.9.

**3. Convective heat transfer to fluid**

Heat transfers from the tube wall to the flowing fluid. The heat transfer coefficient depends on:
- Fluid properties (thermal conductivity, viscosity, specific heat)
- Flow regime (laminar or turbulent)
- Tube geometry

Water and water-glycol mixtures have good heat transfer properties. Typical flow rates are 0.01-0.02 kg/s per m² of collector area.

**4. Heat loss suppression**

Losses are minimised by:
- **Glazing**: One or two layers of low-iron glass reduce convective and radiative losses from the absorber to ambient. Glazing transmittance is typically 0.88-0.92 per layer.
- **Vacuum** (evacuated tubes): Eliminating air between absorber and outer glass envelope stops convection and conduction entirely, leaving only radiation losses.
- **Insulation**: Back and edge insulation (mineral wool, polyurethane foam) reduces conductive losses.

### Collector Types

**Unglazed collectors:**
- Simple black polymer or metal absorber, no glazing
- Low cost, low efficiency at elevated temperatures
- Suitable for pool heating (operating temperature near ambient)
- U_L ≈ 15-25 W/m²K; peak efficiency ~80% at T_i = T_amb, dropping rapidly with temperature rise

**Glazed flat-plate collectors:**
- Absorber with selective coating in insulated box behind glass cover
- Workhorse technology for domestic hot water and space heating
- Operating temperature 40-80°C typical
- U_L ≈ 3-6 W/m²K; peak efficiency ~75-80%, moderate temperature dependence
- Absorber area ratio >90% of gross area

**Evacuated tube collectors:**
- Absorber enclosed in vacuum-sealed glass tube
- Very low heat losses enable higher operating temperatures (up to 150°C+)
- Better performance in cold climates and at high temperature differences
- U_L ≈ 0.5-2 W/m²K; peak efficiency ~65-75%, very low temperature dependence
- Absorber area ratio typically 60-80% of gross area (tubes must be spaced apart)
- Individual tubes replaceable if damaged

**Evacuated flat-plate collectors:**
- Flat absorber in vacuum-sealed flat envelope
- Combines advantages of flat plates (high absorber area ratio) and evacuated tubes (low heat loss)
- Highest efficiency but most expensive and complex to manufacture
- Emerging technology, limited deployment

### Conversion Chain

$$\text{Solar radiation} \xrightarrow{\text{glazing}} \text{Transmitted light} \xrightarrow{\text{absorber}} \text{Surface heat} \xrightarrow{\text{conduction}} \text{Fluid heat} \xrightarrow{\text{storage/use}} \text{Useful thermal energy}$$

Principal losses occur at:

1. **Optical stage** (~10-20%): Glazing reflection and absorption, absorber reflectance
2. **Thermal stage** (highly variable): Radiation, convection, and conduction losses; depends strongly on operating temperature and collector type
3. **System stage** (~5-15%): Pipe losses, storage tank losses, heat exchanger losses (for indirect systems)

Overall system efficiency (useful heat delivered / incident solar energy) ranges from 30-60% depending on application, climate, and system design.

## Theoretical Limits

### Primary Efficiency Limit

For a non-concentrating solar thermal collector, the maximum instantaneous efficiency approaches the optical efficiency τα when operating at ambient temperature (no thermal losses). This limit is typically 75-85% for glazed collectors.

However, the useful efficiency falls as operating temperature increases. The fundamental trade-off is:
- Higher temperatures are more useful (higher exergy content)
- Higher temperatures incur greater thermal losses

For domestic hot water at 60°C and ambient at 20°C, achievable efficiencies are:
- Flat-plate collector: 40-60%
- Evacuated tube: 50-70%

For space heating at 40°C, efficiencies can reach 50-70% for flat plates.

### Origin of the Limit

The limit arises from the second law of thermodynamics applied to heat transfer:

1. **Thermal losses scale with temperature**: Heat flows from hot to cold. A collector at temperature T_c in ambient T_amb loses heat at rate proportional to (T_c - T_amb) for convection/conduction, and (T_c⁴ - T_amb⁴) for radiation.

2. **No concentration means no temperature boost**: Without optical concentration, the maximum absorber temperature is limited by the balance between absorbed solar flux (~800-1000 W/m² at most) and thermal losses. This caps achievable temperatures at ~150-200°C for evacuated collectors, ~100-150°C for flat plates.

3. **Carnot considerations**: If the collected heat were used to drive a heat engine (as in solar thermal electricity), the Carnot efficiency at these temperatures would be very low (15-30%). This is why solar heating is used for thermal loads directly rather than electricity generation.

The Hottel-Whillier-Bliss equation captures these physics exactly: efficiency is linear in the reduced temperature (T_i - T_amb)/G, with slope determined by thermal losses and intercept determined by optical efficiency.

### Key Design Tradeoffs

**Glazing layers:**
- More glazing reduces heat loss but also reduces optical transmission
- Single glazing optimal for most domestic applications
- Double glazing beneficial in very cold climates or for higher temperatures

**Selective coatings:**
- Higher selectivity (high α_s, low ε) improves high-temperature performance
- Adds manufacturing cost and complexity
- Essential for evacuated tubes; valuable for flat plates in demanding applications

**Collector area vs. storage:**
- Larger collector area captures more energy on sunny days
- Without adequate storage, excess heat is wasted (or causes overheating)
- Optimal sizing depends on load profile and climate

**Operating temperature:**
- Higher temperatures increase thermal losses but may be required for the application
- Matching collector temperature to load temperature maximises efficiency
- Stratified storage tanks help by extracting heat at appropriate temperatures

### Relation to Thermodynamic Bounds

The Carnot efficiency between the Sun (5800K) and ambient (300K) is ~95%, but this is irrelevant for solar heating because:

1. Solar heating collectors do not concentrate sunlight and cannot approach solar temperatures
2. The goal is thermal energy delivery, not work extraction
3. The relevant comparison is to the fuel displaced, not to theoretical maximum work

For heating applications, the appropriate figure of merit is the solar fraction: the fraction of heating load met by solar energy. Well-designed systems achieve solar fractions of 50-80% for domestic hot water and 20-50% for space heating in temperate climates.

Compared to the alternative of using PV electricity to drive a heat pump:
- Solar thermal: ~50% solar-to-heat efficiency
- PV + heat pump: ~20% (PV) × 300% (heat pump COP) = ~60% solar-to-heat efficiency

This comparison has shifted in favour of PV + heat pump as PV costs have fallen, though solar thermal retains advantages in specific applications.

## Practical Limitations

### Material Constraints

**Absorber materials:**
- Copper: Excellent thermal conductivity (400 W/mK), corrosion resistant, moderate cost
- Aluminium: Good conductivity (200 W/mK), lower cost, corrosion concerns with some fluids
- Stainless steel: Corrosion resistant, lower conductivity, used in evacuated tubes

**Selective coatings:**
- Black chrome: Electroplated, durable, moderate selectivity
- Titanium nitride oxide (TiNOX): Sputtered, high selectivity, widely used
- Cermet coatings: Metal-ceramic composites, various compositions

**Glazing:**
- Low-iron tempered glass: Standard for flat plates, τ ≈ 0.91
- Borosilicate glass: Used for evacuated tubes, withstands high temperatures
- Anti-reflective coatings can increase transmittance to ~0.96

**Insulation:**
- Mineral wool: Up to 150°C, non-flammable
- Polyurethane foam: Better insulation, limited temperature (~100°C)
- Vacuum: Best insulation but complex and expensive

None of these materials are scarce. Scaling to hundreds of GW_th is not constrained by material availability.

### Degradation and Lifetime

**Typical lifetimes:**
- Flat-plate collectors: 25-30 years
- Evacuated tube collectors: 15-25 years
- Storage tanks: 10-20 years
- Pumps and controls: 10-15 years

**Degradation mechanisms:**
- Selective coating degradation from UV exposure and oxidation (1-2% efficiency loss over lifetime)
- Glazing soiling and weathering
- Vacuum loss in evacuated tubes (individual tube failure)
- Corrosion of absorber and piping (if fluid chemistry not maintained)
- Seal and gasket degradation
- Pump and valve wear

**Maintenance requirements:**
- Annual inspection recommended
- Glycol replacement every 3-5 years (closed-loop systems)
- Occasional tube replacement (evacuated tubes)
- Low overall maintenance burden

Solar thermal systems have excellent reliability when properly installed. The main failure modes are freeze damage (if glycol not maintained), overheating (inadequate load), and component wear.

### Geographic and Resource Constraints

Solar heating is viable across a wide range of climates:

**Excellent resources** (>1800 kWh/m²/year GHI):
- Mediterranean, Middle East, Australia, Southwest US
- Solar fractions of 70-90% for hot water achievable

**Good resources** (1200-1800 kWh/m²/year):
- Central Europe, Northern US, Japan, China
- Solar fractions of 50-70% for hot water typical

**Marginal resources** (<1200 kWh/m²/year):
- Northern Europe, Canada, Northern Russia
- Solar fractions of 30-50%; larger collector areas needed; seasonal storage may help

Unlike CSP, solar heating collectors can use diffuse radiation, making them effective even in cloudy climates. However, seasonal mismatch is a challenge: solar availability peaks in summer when heating demand is lowest.

**Site requirements:**
- South-facing roof or ground area (northern hemisphere)
- Minimal shading, especially during winter months
- Structural capacity for collector weight
- Proximity to storage tank and heating system

### Power and Energy Density

**Instantaneous flux:**
- Incident solar: ~1000 W/m² peak
- Useful heat extracted: 400-700 W/m² at typical operating conditions

**Annual energy density:**
- Flat-plate collector: 400-800 kWh/m²/year depending on climate and application
- Evacuated tube: 500-1000 kWh/m²/year

**Land use:**
- Rooftop installations have zero additional land footprint
- Ground-mounted: ~2-3 m² land per m² collector (including access and spacing)

**System sizing (domestic hot water):**
- Typical household (4 persons, 200 L/day): 4-6 m² collector, 200-300 L storage tank
- Annual output: ~2000-3000 kWh thermal

### Temporal Characteristics

**Diurnal variation:**
- Output follows solar irradiance with thermal lag
- Storage tanks (typically 50-100 L per m² of collector) buffer daily variations
- Hot water available morning and evening from previous day's collection

**Weather variation:**
- Cloudy days reduce output significantly (50-80% reduction)
- 1-2 days of storage sufficient for most weather patterns
- Backup heating (gas, electric, heat pump) covers extended cloudy periods

**Seasonal variation:**
- Summer output 2-5× winter output depending on latitude
- Space heating demand inversely correlated with solar availability
- Seasonal storage (large water tanks, underground thermal storage) can shift summer excess to winter, but is expensive and primarily used in district heating

**Predictability:**
- Solar resource highly predictable day-ahead
- System output can be forecast accurately for demand planning

### System Role and Integration

**Applications:**

1. **Domestic hot water (DHW)**: Primary application globally. Solar preheats water, backup system boosts to delivery temperature. Solar fraction typically 50-70%.

2. **Space heating (combi-systems)**: Combined DHW and space heating. Requires larger collector area and storage. Solar fraction for heating load typically 20-40%.

3. **Pool heating**: Unglazed collectors operate near ambient temperature with high efficiency. Can provide 100% of heating load in summer.

4. **District heating**: Large collector fields (>1000 m²) feed into district heating networks. Seasonal storage enables high solar fractions (>50%). Growing market in Denmark, Germany, Austria.

5. **Industrial process heat**: Solar heat for processes requiring temperatures up to 150°C (washing, drying, preheating). Emerging market with large potential.

**Integration with other systems:**

- **Heat pumps**: Solar collectors can preheat heat pump source (improving COP) or provide direct heat when solar sufficient
- **Biomass boilers**: Solar reduces biomass consumption in summer
- **PV**: Hybrid PVT collectors generate both electricity and heat; alternatively, PV can drive heat pumps for combined system

**Complementary infrastructure:**
- Storage tanks (standard hot water cylinders to large buffer tanks)
- Backup heating system (almost always required)
- Controls and pumps (for active systems)
- Heat exchangers (for indirect systems using glycol)

## Scaling Characteristics

### Output Scaling Behaviour

Solar thermal collectors are modular. Output scales linearly with area from residential (4-10 m²) to district heating (10,000-100,000 m²+). No minimum efficient scale exists; no maximum scale has been reached.

Economies of scale are modest:
- Larger collectors have slightly better edge-to-area ratios
- Installation costs per m² decrease with system size
- Large district heating systems benefit from centralised storage and controls

Diseconomies can emerge from:
- Long pipe runs in large systems (thermal losses, pumping energy)
- Shading between collector rows (ground-mounted systems)

### Viable Scale Range

**Minimum:** Single-collector systems (2 m²) for individual households. Even smaller systems exist for remote applications.

**Maximum:** The largest solar district heating plants exceed 150,000 m² (>100 MW_th):
- Silkeborg, Denmark: 157,000 m², 110 MW_th
- Several 30-50 MW_th systems in Denmark, Germany, China

No fundamental limit to scaling. District heating networks can aggregate multiple large solar fields with seasonal storage.

### Land/Area Requirements

**Rooftop systems:**
- 4-8 m² per person for DHW
- 10-20 m² per person for DHW + space heating
- Zero additional land use

**Ground-mounted systems:**
- Collector spacing required to avoid shading (varies with latitude)
- Typical ground coverage ratio: 30-50%
- 2-3 m² land per m² collector

**District heating scale:**
- 100 MW_th solar field: ~200,000-300,000 m² land
- Can co-locate with other land uses (parking lots, agricultural land, industrial sites)

## Current Status

### Technology Readiness Level

| Technology | TRL | Status |
|------------|-----|--------|
| Flat-plate collectors (glazed) | 9 | Mature, mass-produced |
| Evacuated tube collectors | 9 | Mature, dominated by Chinese manufacturing |
| Unglazed collectors | 9 | Mature, simple technology |
| Large-scale district heating | 9 | Commercial, especially in Denmark/Germany |
| Evacuated flat-plate | 7-8 | Commercial but limited deployment |
| PVT (hybrid PV-thermal) | 8 | Growing market, ~30 manufacturers globally |

Solar thermal heating is a mature technology with over 100 years of development and 40+ years of mass deployment. Manufacturing processes are well-established and reliable performance is demonstrated over multi-decade timescales.

### Installed Capacity and Market

**Global capacity (end of 2024):**
- Total: ~544 GW_th (777 million m² collector area)
- Annual heat production: ~443 TWh_th (equivalent to ~261 million barrels of oil)
- Serving ~122 million systems in 134+ countries

**Market trends:**
- Global market has contracted since 2013 peak (~50% decline in annual installations)
- China dominates with ~72% of global capacity; Chinese market contracting due to real estate slowdown and competition from heat pumps and PV
- Growth in Latin America (Brazil, Mexico), Turkey, some European markets
- District heating and industrial applications growing while residential market shrinks

**Leading countries by installed capacity:**
1. China: ~392 GW_th
2. European Union: ~41 GW_th (led by Germany, Austria, Greece, Spain)
3. Brazil: ~18 GW_th
4. India: ~11 GW_th
5. United States: ~8 GW_th
6. Turkey: ~7 GW_th
7. Australia: ~6 GW_th

**Annual installations (2024):**
- Global: ~17.8 GW_th (25.4 million m²)
- China: ~11.4 GW_th (down 17% from 2023)
- Brazil: ~1.4 GW_th (up 11%)
- India: ~1.0 GW_th
- Germany: ~0.5 GW_th

### Levelised Cost of Heat

Cost varies significantly by application, scale, and location:

| Application | Installed Cost | LCOH |
|-------------|---------------|------|
| Residential DHW (small system) | $500-1500/m² | $0.05-0.15/kWh |
| Residential DHW (larger system) | $300-800/m² | $0.03-0.10/kWh |
| Commercial/industrial | $200-500/m² | $0.02-0.06/kWh |
| District heating (large scale) | $150-350/m² | $0.02-0.05/kWh |

For comparison:
- Natural gas heating: $0.03-0.08/kWh (highly dependent on gas prices)
- Electric resistance: $0.08-0.20/kWh
- Heat pump: $0.02-0.06/kWh (depending on electricity price and COP)

Solar thermal is competitive with gas in high-irradiance regions and expensive gas markets. It struggles against cheap natural gas and modern heat pumps in many markets.

### Major Deployments

**Large-scale solar district heating:**

| Plant | Location | Capacity | Storage |
|-------|----------|----------|---------|
| Silkeborg | Denmark | 110 MW_th (157,000 m²) | Pit storage |
| Vojens | Denmark | 50 MW_th (70,000 m²) | 200,000 m³ pit |
| Groningen | Netherlands | 34 MW_th (48,800 m²) | 2024 |
| Graz | Austria | 5.6 MW_th | District heating |

Denmark leads with >100 large solar district heating systems, enabled by district heating infrastructure and carbon taxes on fossil fuels.

**Industrial process heat:**
- ~1,315 SHIP (Solar Heat for Industrial Processes) plants operating globally
- 106 new plants commissioned in 2024
- Applications: food processing, textiles, chemicals, mining
- Largest planned: 1.5 GW_th for aluminium refinery in Saudi Arabia

### Research Frontiers

**Advanced collectors:**
- Improved selective coatings with higher selectivity and durability
- Polymer collectors for cost reduction
- Concentrating collectors for higher temperatures (parabolic trough, linear Fresnel) for industrial heat

**Hybrid PVT systems:**
- Combined PV and thermal collectors sharing the same area
- PV cooled by thermal system (improving electrical efficiency)
- Market growing at ~15-20% annually

**Seasonal thermal storage:**
- Pit storage, borehole thermal energy storage, aquifer storage
- Enables shifting summer surplus to winter demand
- Key enabler for high solar fractions in space heating

**Solar cooling:**
- Absorption chillers driven by solar heat
- Attractive where cooling demand correlates with solar availability
- Limited deployment due to cost competition with electric air conditioning

**Process heat integration:**
- Medium-temperature collectors (150-400°C) using concentration
- Integration with industrial processes at appropriate temperature levels
- Significant potential for industrial decarbonisation

**Cost reduction:**
- Automated manufacturing and installation
- Simplified system designs
- Integration with heat pump systems for improved year-round performance