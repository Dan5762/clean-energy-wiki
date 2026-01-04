# Thermophotovoltaics

## Fundamental Principle

### Natural Asymmetry Exploited

The temperature difference between a hot emitter (1000-2500°C) and a cool photovoltaic cell (~25-80°C). Hot objects emit electromagnetic radiation with a spectrum determined by their temperature according to Planck's law. A thermophotovoltaic (TPV) cell absorbs this thermal radiation and converts it to electricity via the photovoltaic effect, exactly as a solar cell converts sunlight.

The key insight is that thermal radiation is fundamentally the same phenomenon as sunlight: both are electromagnetic radiation that can excite electrons across a semiconductor bandgap. The difference is spectral: the Sun at 5800K emits primarily in the visible range (peak ~500nm), while practical thermal emitters at 1000-2400°C emit primarily in the near-infrared (peak ~1-3 μm). This shifts the optimal bandgap for TPV cells to lower energies (0.4-1.1 eV) compared to solar cells (1.1-1.4 eV).

### Ultimate Source

TPV systems can harvest thermal energy from any high-temperature source:

- **Thermal batteries**: Electricity stored as heat in graphite or other refractory materials, then reconverted to electricity on demand
- **Combustion**: Natural gas, hydrogen, or other fuels burned to heat an emitter
- **Industrial waste heat**: Steel mills, glass furnaces, cement kilns operating at 1000°C+
- **Concentrated solar**: Sunlight focused to heat an intermediate absorber-emitter
- **Nuclear decay**: Radioisotope heat sources for space applications

The application driving current development is thermal batteries for grid-scale energy storage. Excess renewable electricity heats cheap, earth-abundant materials (graphite blocks) to extreme temperatures (1500-2400°C). The heat is stored with minimal losses in heavily insulated containers, then converted back to electricity via TPV when needed. This offers a potential pathway to very low-cost long-duration energy storage.

### Key Physics

**Planck's law for thermal emission:**

A blackbody at temperature T emits spectral radiance:

$$B(\lambda, T) = \frac{2hc^2}{\lambda^5} \cdot \frac{1}{e^{hc/\lambda k_B T} - 1}$$

The peak wavelength follows Wien's displacement law:

$$\lambda_{peak} = \frac{2898 \text{ μm·K}}{T}$$

For emitter temperatures relevant to TPV:
- 1000°C (1273K): λ_peak ≈ 2.3 μm
- 1500°C (1773K): λ_peak ≈ 1.6 μm
- 2000°C (2273K): λ_peak ≈ 1.3 μm
- 2400°C (2673K): λ_peak ≈ 1.1 μm

Higher emitter temperatures shift the spectrum toward shorter wavelengths, enabling higher-bandgap cells with better voltage characteristics.

**Stefan-Boltzmann law for total radiated power:**

$$P = \sigma T^4$$

where σ = 5.67 × 10⁻⁸ W/m²K⁴. The "fourth power" in the company name Fourth Power refers to this relationship: radiated power increases dramatically with temperature, enabling high power densities from compact emitters.

At 2000°C, a blackbody emits ~1.5 MW/m². This is ~1500× the power density of unconcentrated sunlight, enabling extremely compact power generation.

**Photovoltaic conversion:**

The TPV cell operates identically to a solar cell. Photons with energy hν > E_g excite electrons across the bandgap, creating electron-hole pairs that are separated by the built-in field of a p-n junction. The key differences from solar PV are:

1. Lower optimal bandgap (0.4-1.1 eV vs 1.1-1.4 eV)
2. Different semiconductor materials (III-V compounds vs silicon)
3. Opportunity for photon recycling (sub-bandgap photons can be reflected back to the emitter)

**Photon recycling:**

A critical efficiency enhancement unique to TPV. Photons with energy below the bandgap cannot generate electron-hole pairs and would normally be wasted as heat in the cell. In TPV, a highly reflective back-surface reflector (BSR) can return these photons to the emitter, where they are reabsorbed and re-emitted. With 97-99% reflectance, this photon recycling dramatically improves system efficiency by giving sub-bandgap photons multiple chances to be emitted at useful energies.

Air-bridge cell designs achieve near-unity reflectance by incorporating a thin air gap between the active semiconductor and a gold mirror, exploiting the refractive index contrast to enhance reflection.

## Conversion Mechanism

### Energy Capture and Conversion

TPV converts thermal radiation directly to electricity with no moving parts, no working fluid, and no intermediate mechanical stage. It is a solid-state heat engine. The conversion chain is:

$$\text{Heat} \rightarrow \text{Thermal radiation} \rightarrow \text{Photon absorption} \rightarrow \text{Electron-hole pairs} \rightarrow \text{DC electricity}$$

This solid-state nature offers significant advantages over turbines and other mechanical heat engines: no moving parts to wear, no fluids to manage, silent operation, rapid response, and potential for very high operating temperatures unconstrained by material fatigue limits.

### Physical Processes

**1. Thermal emission from hot emitter**

The emitter, heated to 1000-2500°C, radiates according to its emissivity spectrum ε(λ). A blackbody has ε = 1 at all wavelengths. Real materials have wavelength-dependent emissivity that can be engineered:

- **Broadband emitters**: Graphite, silicon carbide (SiC), tungsten approximate blackbody behavior with ε ≈ 0.8-0.95 across relevant wavelengths
- **Selective emitters**: Engineered structures (photonic crystals, rare-earth oxides, metamaterials) suppress emission at wavelengths below the cell bandgap while maintaining high emission above it

Selective emitters can improve efficiency by reducing useless sub-bandgap emission, but add complexity and may degrade at high temperatures. Most practical systems use broadband emitters with photon recycling instead.

**2. Radiative heat transfer to TPV cell**

Thermal radiation propagates from emitter to cell across a gap (typically a few mm to cm). The view factor F determines what fraction of emitted radiation reaches the cell. Planar geometries with small gaps achieve F approaching unity.

The cell must be actively cooled to maintain operating temperature ~25-80°C. At higher cell temperatures, dark current increases and efficiency drops. Heat rejection is a significant engineering challenge given the high incident power densities.

**3. Photon absorption and carrier generation**

Photons with hν > E_g are absorbed in the semiconductor, exciting electrons from valence to conduction band. The quantum efficiency (fraction of above-bandgap photons generating collected carriers) approaches 90-95% in well-designed III-V cells.

Photons with hν >> E_g lose excess energy to thermalisation, just as in solar cells. This loss is less severe in TPV because thermal spectra are narrower than the solar spectrum relative to optimal bandgaps.

**4. Charge separation and current extraction**

The p-n junction separates electrons and holes. External circuit extracts current at a voltage approaching (but always less than) E_g/q. Fill factors of 70-85% are typical for high-quality TPV cells.

**5. Sub-bandgap photon recycling**

Photons with hν < E_g pass through the semiconductor. A back-surface reflector returns them toward the emitter with >95% reflectance. These photons are reabsorbed by the emitter, contributing to its thermal energy and eventually being re-emitted at possibly useful wavelengths.

This recycling is the key to high TPV efficiency. Without it, more than half of the emitted power would be lost. With 97%+ reflectance (achieved by air-bridge designs), the effective emitter spectrum seen by the cell approaches an ideal step function at the bandgap energy.

### Cell Architectures

**Single-junction cells:**
- Single absorber layer optimised for one bandgap
- Simpler fabrication, lower cost
- Limited by single bandgap: cannot efficiently convert photons at different energies
- Best single-junction efficiency: 44% (InGaAs at 1435°C, 2024)

**Tandem (multi-junction) cells:**
- Two or more absorber layers with different bandgaps stacked vertically
- High-bandgap layer on top absorbs high-energy photons; lower layers absorb transmitted light
- Better spectral utilisation, higher efficiency potential
- Best tandem efficiency: 41% (III-V tandem at 2400°C, 2022)

**Air-bridge cells:**
- Thin air gap between active layers and back reflector
- Near-unity sub-bandgap reflectance (97-99%)
- Enhanced photon recycling
- More complex fabrication but dramatically improved efficiency

## Theoretical Limits

### Primary Efficiency Limit

The theoretical efficiency of TPV conversion depends on emitter temperature, cell bandgap, and the degree of spectral control:

**Single-junction, blackbody emitter, no photon recycling:**
- Efficiency limited by Shockley-Queisser analog
- At 2000°C with optimal bandgap (~0.7 eV): ~25-30%
- Losses from thermalisation and sub-bandgap transmission

**Single-junction, blackbody emitter, perfect photon recycling:**
- Sub-bandgap photons returned to emitter
- Theoretical limit ~50-55% at optimal conditions
- 2024 air-bridge cells approaching this limit (44% demonstrated)

**Ideal selective emitter (emission only at E > E_g):**
- Eliminates sub-bandgap emission entirely
- Single-junction limit: ~54% (at 0.92 eV bandgap)
- Multi-junction with concentration: up to 85%

**Tandem cells with photon recycling:**
- Multiple bandgaps capture spectrum more efficiently
- Theoretical limit >50% with practical designs
- Ultimate thermodynamic limit approaches ~85% with infinite junctions

### Origin of the Limit

The efficiency limits arise from the same physics as the Shockley-Queisser limit for solar cells, modified for thermal spectra:

1. **Thermalisation losses**: Photons with hν >> E_g create carriers that thermalise to band edges, losing excess energy as heat. This is less severe than for solar spectra because thermal emission from finite-temperature sources is spectrally narrower.

2. **Sub-bandgap losses**: Photons with hν < E_g cannot generate carriers. Unlike solar cells (where these photons are simply lost), TPV can recycle them back to the emitter with high-reflectance back surfaces.

3. **Radiative recombination**: Fundamental requirement that any absorber must also emit. Sets minimum dark current.

4. **Voltage factor**: Operating voltage is always less than E_g/q due to entropy generation.

5. **Carnot considerations**: TPV is not a Carnot engine (it doesn't operate between two thermal reservoirs in the traditional sense), but thermodynamic limits still apply. The theoretical maximum efficiency for any heat-to-work conversion at emitter temperature T_H and sink temperature T_C approaches the Carnot limit η = 1 - T_C/T_H only with infinite stages of conversion.

### Optimal Operating Conditions

The efficiency-maximising conditions involve trade-offs:

**Emitter temperature:**
- Higher T increases power density (T⁴ scaling)
- Higher T shifts spectrum to shorter wavelengths, enabling higher-bandgap cells with better voltage
- Higher T increases Carnot limit
- But higher T stresses materials, requires better insulation, more challenging heat rejection
- Practical sweet spot: 1500-2400°C depending on application

**Cell bandgap:**
- Must match emitter temperature for spectral optimisation
- Lower E_g captures more photons but at lower voltage
- Higher E_g gives better voltage but wastes more of spectrum
- Optimal bandgap increases with emitter temperature:
  - 1200°C: ~0.5-0.6 eV (InGaAsSb)
  - 1800°C: ~0.7-0.8 eV (GaSb, InGaAs)
  - 2400°C: ~1.0-1.2 eV (higher-bandgap III-V)

**Photon recycling reflectance:**
- Every percentage point of reflectance matters
- 95% vs 99% reflectance can mean ~10% absolute efficiency difference
- Air-bridge designs achieve 97-99%

## Practical Limitations

### Material Constraints

**TPV cell materials:**

TPV requires narrow-bandgap semiconductors with high-quality p-n junctions. The dominant materials are III-V compounds:

| Material | Bandgap (eV) | Optimal emitter T | Notes |
|----------|--------------|-------------------|-------|
| InGaAsSb | 0.50-0.55 | 1000-1500°C | Quaternary, tunable, complex growth |
| InGaAs | 0.60-0.74 | 1200-1800°C | Ternary, mature technology |
| GaSb | 0.72 | 1500-2000°C | Binary, well-developed |
| Ge | 0.66 | 1200-1800°C | Elemental, cheaper, lower efficiency |
| InGaAsP | 0.74-1.1 | 1400-2400°C | Used in air-bridge cells |

Silicon (E_g = 1.1 eV) can work with very high temperature emitters (>2200°C) but requires materials that are stable at such extreme temperatures.

These III-V materials are grown by molecular beam epitaxy (MBE) or metal-organic chemical vapour deposition (MOCVD), which are expensive batch processes. Manufacturing cost is a primary barrier to deployment.

**Emitter materials:**

Must withstand extreme temperatures (1500-2500°C) with stable optical properties:

- **Graphite**: Stable to 3500°C (sublimation), high emissivity, earth-abundant, very low cost. Primary choice for thermal batteries.
- **Silicon carbide (SiC)**: Stable to ~2700°C, good emitter, used in some designs.
- **Tungsten**: High melting point (3422°C), well-characterised optical properties, used in combustion TPV and lab demonstrations.
- **Refractory ceramics**: Various options for specific applications.

For thermal battery applications, graphite is strongly favoured due to its extreme thermal stability, high thermal conductivity (enabling fast charging), and very low cost (~$1-5/kg).

**Insulation:**

Containing heat at 1500-2500°C requires excellent insulation:

- High-temperature ceramic fibre
- Vacuum gaps
- Multiple radiation shields
- Refractory bricks

Thermal losses determine storage efficiency. State-of-the-art designs lose ~1% of stored energy per day.

### Manufacturing Constraints

III-V TPV cell fabrication uses the same epitaxial growth techniques as multi-junction solar cells and high-performance LEDs. These processes are:

- Capital-intensive (MOCVD reactors cost $1-10M each)
- Slow (epitaxial growth is a batch process)
- Require high-purity precursors
- Have significant yield losses

As of 2024, Antora Energy operates the world's first dedicated TPV manufacturing line with 2 MW/year capacity. Scaling to GW-scale production will require substantial investment and manufacturing learning curves similar to those that drove down solar PV costs.

### Thermal Management

The TPV cell must reject all incident radiation that isn't converted to electricity. At 40% efficiency with 1 MW/m² incident power, this means rejecting 600 kW/m² of heat while maintaining cell temperature below ~80°C.

This requires:
- Active liquid cooling
- Microchannel heat exchangers
- Large thermal mass or external heat rejection systems

Heat rejection is a significant fraction of system complexity and cost, particularly for high-power-density designs.

### System Integration

Complete TPV systems require:
- Emitter/heat source at controlled high temperature
- Insulation and containment
- TPV cell arrays with cooling
- Power electronics (DC-DC conversion)
- Control systems
- For thermal batteries: charging infrastructure (electric heaters)

The system complexity is substantial but involves no moving parts in the core power conversion, which is the key advantage over turbines.

## Scaling Characteristics

### Output Scaling Behaviour

TPV power output scales with cell area. Like photovoltaics, this is essentially linear: twice the cell area produces twice the power (given adequate emitter area and thermal management).

Power density depends on:
- Emitter temperature (P ∝ T⁴)
- View factor (approaching unity in optimised geometries)
- Cell efficiency

At 2000°C emitter temperature with ~40% efficiency, power densities of 50-100 W/cm² are achievable. A living-room-sized array (~20 m²) could produce ~1 MW. This is far more compact than any other form of renewable electricity generation.

### Viable Scale Range

**Minimum scale:**
- Milliwatt to watt scale for radioisotope generators (space applications)
- Kilowatt scale for micro-CHP or portable generators
- No fundamental minimum; economics favour larger scale

**Target scale for grid storage:**
- Modules: 1-10 MW per unit
- Plants: 10-500 MW, 5-500 hours duration
- Modular design enables scaling by replication

**Maximum scale:**
- No fundamental maximum
- Ultimately limited by manufacturing capacity for TPV cells
- Thermal storage can scale to very large capacities using cheap graphite

### Cost Scaling

The dominant cost driver is TPV cell manufacturing. Current cells are expensive due to:
- III-V semiconductor costs
- Epitaxial growth costs
- Small production volumes

Cost reduction pathways:
- Manufacturing scale-up (learning curves)
- Simplified cell architectures
- Higher efficiency (more power per cell area)
- Alternative materials (if performance can be maintained)

Thermal storage medium (graphite) is already very cheap. Balance of system costs should follow conventional industrial equipment learning curves.

Target economics for thermal batteries:
- Storage cost: <$25/kWh (vs ~$150-300/kWh for lithium-ion)
- Round-trip efficiency: ~50% (lower than Li-ion's ~85%, but cost advantage compensates)
- Duration: 10-500 hours (far beyond Li-ion's economic range)

## Current Status

### Technology Readiness Level

| Technology | TRL | Status |
|------------|-----|--------|
| III-V TPV cells (GaSb, InGaAs) | 7-8 | Demonstrated in systems, early manufacturing |
| Tandem TPV cells | 6-7 | Lab records, pilot production starting |
| Air-bridge TPV cells | 5-6 | Lab demonstration, manufacturing development |
| Thermal battery + TPV systems | 6-7 | First commercial-scale demonstration (Antora) |
| Radioisotope TPV | 8-9 | Flight heritage (space applications) |
| Combustion TPV | 5-6 | Demonstrated, limited commercial traction |

TPV for thermal batteries is the application driving current development. The technology has advanced rapidly since 2020, with efficiency records broken multiple times and the first commercial manufacturing now operational.

### Efficiency Records

| Configuration | Efficiency | Emitter T | Year | Organisation |
|---------------|------------|-----------|------|--------------|
| Single-junction air-bridge | 44% | 1435°C | 2024 | University of Michigan |
| Tandem III-V | 41.1% | 2400°C | 2022 | MIT/NREL |
| Single-junction (previous) | 32% | Various | 2020 | Various |
| Commercial target | >40% | 1500-2000°C | 2024 | Antora Energy |

The jump from ~32% to >40% represents a fundamental breakthrough enabling thermal batteries to compete with turbines on efficiency while offering solid-state simplicity.

### Commercial Development

**Antora Energy** (Sunnyvale, CA):
- Opened world's first TPV manufacturing facility (2 MW/year capacity, 2024)
- Demonstrated >40% TPV efficiency
- First commercial-scale thermal battery deployed at industrial site near Fresno, CA
- Raised $150M+ from Breakthrough Energy Ventures, Shell Ventures, and others
- Product: Industrial heat and power from thermal batteries charged by renewable electricity

**Fourth Power** (Boston):
- Developing thermal battery with TPV for grid-scale storage
- Uses liquid tin heat transfer at extreme temperatures (Guinness World Record: pumped tin at 1200°C)
- Co-founded by Asegun Henry (MIT professor, co-author of 41% efficiency paper)
- Targeting 50% round-trip efficiency, <$25/kWh storage cost
- 1 MWh prototype planned for 2026

**Other players:**
- JX Crystals: Long-standing TPV developer, GaSb cells
- NASA/DOE: Radioisotope TPV for space applications
- Various academic groups worldwide

### Research Frontiers

**Higher efficiency cells:**
- Tandem architectures with >50% potential
- Improved photon recycling (approaching 99%+ reflectance)
- Hot carrier concepts to reduce thermalisation losses

**Lower-cost manufacturing:**
- Simplified growth processes
- Alternative substrates (GaAs instead of expensive GaSb/InP)
- High-throughput epitaxy

**System integration:**
- Optimised thermal management
- Improved insulation for multi-day storage
- Integration with industrial processes

**Alternative applications:**
- Waste heat recovery from industrial processes
- Hybrid solar-thermal systems
- Distributed combined heat and power

### Potential Impact

If thermal battery + TPV systems achieve their cost targets (<$25/kWh, >40% round-trip efficiency), they could address critical gaps in the clean energy transition:

**Long-duration storage:**
- Lithium-ion batteries are economical for ~4 hours
- Thermal batteries could be economical for 10-500 hours
- Enables very high renewable penetration (approaching 100%)

**Industrial decarbonisation:**
- Industry accounts for ~30% of global emissions
- Much of this is high-temperature heat (>400°C)
- Thermal batteries can deliver heat at any temperature up to 1500°C+
- First practical pathway to decarbonise steel, cement, glass, chemicals

**Grid flexibility:**
- Solid-state, no moving parts
- Fast response (seconds)
- No geographic constraints (unlike pumped hydro)
- Uses abundant, non-toxic materials (graphite, tin)

The combination of TPV and thermal storage represents one of the most significant recent developments in energy technology, potentially unlocking both long-duration grid storage and industrial heat decarbonisation with a single system architecture.