# Photovoltaics

## Fundamental Principle

### Natural Asymmetry Exploited

::: facet ultimate_source
The temperature difference between the Sun's surface (~5800K) and the Earth (~300K). This gradient means photons arriving at the Earth carry far more energy per quantum than would be exchanged at thermal equilibrium with our environment. A photon of visible light carries ~2 eV, while thermal energy at 300K is only ~0.026 eV (kT). Photovoltaics exploit this by using photon absorption to drive electrons into excited states that would be vanishingly improbable thermally.
:::

### Ultimate Source

::: facet ultimate_source
Nuclear fusion in the Sun's core. Hydrogen nuclei fuse to form helium, releasing energy as the system moves toward the minimum of the nuclear binding energy curve. This energy thermalises through the solar interior and radiates from the photosphere as an approximate blackbody spectrum at 5778K. At Earth's orbital distance, this delivers the solar constant of ~1361 W/m² above the atmosphere, reduced to roughly 1000 W/m² at the surface under clear skies after atmospheric absorption and scattering.
:::

### Key Physics

Photon energy is quantised:

::: equation photon_energy
$$E = h\nu = \frac{hc}{\lambda}$$
:::

where h = 6.63 × 10⁻³⁴ J·s and c = 3 × 10⁸ m/s. For a 500nm photon (green light), E ≈ 2.5 eV.

The solar spectrum peaks at ~500nm, set by Wien's displacement law:

::: equation wien_displacement
$$\lambda_{\text{max}} = \frac{b}{T}$$
:::

where b = 2.898 × 10⁻³ m·K.

In a semiconductor, electrons occupy bands separated by a bandgap E_g. Photons with energy hν > E_g can excite an electron from the valence band to the conduction band, creating an electron-hole pair. For silicon, E_g ≈ 1.1 eV, meaning photons with wavelength shorter than ~1100nm can be absorbed.

Two loss mechanisms are inherent to this process:

- Photons with hν < E_g pass through unabsorbed
- Photons with hν > E_g lose the excess (hν − E_g) as heat within picoseconds as the excited electron thermalises to the band edge

These two losses, plus blackbody re-radiation from the cell itself, are the origin of the Shockley-Queisser limit.

---

## Conversion Mechanism

### Energy Capture and Conversion

::: facet conversion_pathway
Photovoltaics convert photon energy directly to electrical work, with no intermediate thermal or mechanical stage. This is unusual among energy technologies and is why PV isn't subject to Carnot efficiency limits (though it has its own, related limits). The output is DC electricity at a voltage determined by the bandgap and operating conditions, typically 0.5-0.7V per silicon cell.
:::

### Physical Processes

**1. Photon absorption and carrier generation**

A photon with hν > E_g is absorbed, promoting an electron from the valence band to the conduction band. This creates a mobile electron and a mobile "hole" (the vacancy left behind, which behaves as a positive charge carrier). The pair is initially bound by Coulomb attraction (an exciton), but in most inorganic semiconductors the binding energy is small enough that thermal energy at room temperature dissociates them into free carriers almost immediately.

**2. Charge separation via the p-n junction**

The key problem: electrons and holes will recombine within microseconds, releasing their energy as heat or light. To extract work, they must be spatially separated before recombination.

This is achieved using a p-n junction. One region of the semiconductor is doped with electron donors (n-type), another with electron acceptors (p-type). At the interface, electrons diffuse from n to p and holes from p to n, leaving behind fixed ionised dopant atoms. This creates a depletion region with a built-in electric field (typically ~0.6-0.7V across a few hundred nanometres for silicon).

When an electron-hole pair is generated within or near the depletion region, the built-in field sweeps electrons toward the n-side and holes toward the p-side. This spatial separation is what converts the photon's energy into electrical potential energy.

**3. Current extraction**

The separated charges accumulate: excess electrons on the n-side, excess holes on the p-side. This establishes a voltage across the cell. When an external circuit is connected, electrons flow from n-side through the load to p-side, recombining with holes and doing electrical work in the process. The current is proportional to the photon flux (generation rate), while the voltage is set by the bandgap and recombination dynamics.

### Conversion Chain

$$\text{Photon} \rightarrow \text{electron-hole pair} \rightarrow \text{charge separation (p-n field)} \rightarrow \text{DC electricity}$$

No moving parts, no working fluid, no thermal intermediate. This directness is both a strength (simplicity, low maintenance) and a constraint (the physics of the semiconductor sets hard limits on what fraction of incident energy can be extracted).

---

## Theoretical Limits

::: facet theoretical_limit
For a single-junction solar cell under unconcentrated sunlight, the maximum theoretical efficiency is approximately **33%**, known as the **Shockley-Queisser limit**. This was derived by William Shockley and Hans Queisser in 1961 and arises from fundamental thermodynamic and quantum mechanical constraints, not engineering limitations.
:::

### Origin of the Limit

**1. Transmission losses**

Photons with hν < E_g cannot excite electrons across the bandgap. They pass through the material or are absorbed without generating carriers. For silicon (E_g = 1.1 eV), this means infrared photons beyond ~1100nm are lost. This accounts for roughly 20% of incident solar energy.

**2. Thermalisation losses**

Photons with hν > E_g create electron-hole pairs, but the excess energy (hν − E_g) is lost as heat within picoseconds as carriers relax to the band edges. A 3 eV photon absorbed by silicon still only contributes 1.1 eV of useful energy. This accounts for roughly 30% of incident solar energy.

**3. Blackbody emission from the cell**

The cell itself is a warm object (~300K) and must radiate according to Stefan-Boltzmann. More fundamentally, Kirchhoff's law requires that any material capable of absorbing photons above the bandgap must also emit them. This radiative recombination represents an unavoidable loss channel.

**4. Voltage factor**

The operating voltage is always less than E_g/q due to entropy generation. Excited carriers have configurational entropy (they could be anywhere in the conduction band), and extracting work from them requires accepting some voltage loss. The maximum power point voltage is typically 0.75-0.85 × E_g/q.

### Key Design Tradeoffs

These losses create an optimisation problem. A small bandgap captures more photons but loses more to thermalisation and operates at lower voltage. A large bandgap operates at higher voltage but transmits more of the spectrum. The optimum for the AM1.5 solar spectrum is E_g ≈ 1.34 eV, yielding the 33% limit. Silicon at 1.1 eV has a theoretical maximum of ~29%.

### Relation to Thermodynamic Bounds

The Carnot efficiency between 5800K and 300K is:

::: equation carnot_efficiency
$$\eta_{\text{Carnot}} = 1 - \frac{T_{\text{cold}}}{T_{\text{hot}}} \approx 95\%$$
:::

The Shockley-Queisser limit is far below this because a single-junction cell is a highly constrained heat engine: it can only interact with the radiation field at one energy threshold, discarding information about photon energies above and below the bandgap. More sophisticated approaches (multi-junction cells, hot carrier extraction, spectral splitting) attempt to recover some of this lost potential.

---

## Practical Limitations

### Material Constraints

::: limitation manufacturing_complexity
**Silicon:** The dominant technology. Silicon is the second most abundant element in Earth's crust, so raw material scarcity is not a concern. The constraint is manufacturing energy intensity: producing solar-grade polysilicon requires reduction of silica at ~2000°C, and the Czochralski process for monocrystalline ingots is slow and energy-intensive. Energy payback time for modern silicon PV is 1-2 years depending on location and manufacturing source.
:::

::: limitation material_scarcity
**Thin-film alternatives:** Cadmium telluride (CdTe) and copper indium gallium selenide (CIGS) use less material but face elemental constraints. Tellurium is genuinely scarce (~1 ppm in crust, byproduct of copper refining). Indium is similarly limited. These technologies can serve niche roles but likely cannot scale to tens of TW.
:::

**Perovskites:** Use abundant elements (lead, iodine, organic cations) but currently degrade within months to years under real-world conditions. Stability under moisture, heat, and UV remains the primary barrier. Lead toxicity is a secondary concern for large-scale deployment.

::: limitation material_scarcity
**Silver:** Often overlooked. Conventional silicon cells use silver paste for contacts. At current loadings (~10-20 mg/W), scaling PV to tens of TW would consume a significant fraction of annual silver production. Copper and aluminium alternatives are being developed.
:::

### Degradation and Lifetime

Silicon modules degrade at ~0.3-0.5% per year, giving 25-30 year operational lifetimes with ~80% of original output. This is well-characterised and warranties reflect it. Perovskites and some thin films degrade faster, though improving.

### Geographic and Resource Constraints

::: facet geographic_constraint
Solar resources vary roughly 3× between equatorial deserts (~2500 kWh/m²/year) and northern Europe (~800-1000 kWh/m²/year). PV works everywhere but economics differ substantially.

No fuel supply chain is required, which is a major advantage. Manufacturing is concentrated in China (~80% of global module production), creating supply chain dependencies rather than resource dependencies.
:::

### Power Density

Incident solar flux at surface: ~1000 W/m² peak, ~150-250 W/m² average depending on location.

At 20% module efficiency and accounting for spacing, inverters, and other balance-of-system losses, utility-scale solar delivers roughly **5-10 W/m² averaged over a year**, or 50-100 kWh/m²/year.

This is lower than fossil fuel plants (which import energy-dense fuel) but higher than wind and substantially higher than biomass.

### Temporal Characteristics

::: facet temporal_character
Solar output varies on three timescales:

**Diurnal:** Zero output at night. Predictable and unavoidable. Creates a daily storage requirement for high-penetration systems.

**Weather:** Cloud cover causes rapid fluctuations (seconds to hours) and multi-day reductions during overcast periods. Partially predictable via weather forecasting. Geographic aggregation smooths local variability.

**Seasonal:** At high latitudes, winter output can be 10-20% of summer output. This creates the hardest storage problem: seasonal energy transfer is far more expensive than daily cycling.

Solar is more predictable than wind on timescales of hours to days, but the diurnal cycle is a harder constraint since it's absolute rather than statistical.
:::

### Dispatchability and System Role

::: limitation intermittency
Without storage, PV is non-dispatchable. It generates when the sun shines, not when demand peaks (though in many grids, daytime solar now correlates reasonably well with air conditioning load).

At low grid penetration (<20%), intermittency is absorbed by existing dispatchable generation. At high penetration, storage or demand flexibility becomes essential. The cost and scalability of storage is arguably now the binding constraint on solar deployment, not PV costs themselves.

Lithium-ion batteries handle daily cycling economically at current prices. Seasonal storage remains unsolved at scale; candidates include hydrogen, pumped hydro, and compressed air, but all have significant efficiency losses or geographic constraints.
:::

---

## Scaling Characteristics

### Output Scaling Behaviour

::: facet scale_regime
PV is nearly perfectly modular. Output scales linearly with area, with no minimum efficient scale. A 1 m² panel produces roughly the same energy per unit area as a 10 km² installation. This is unusual among energy technologies; most (turbines, nuclear, thermal plants) have minimum scales below which efficiency drops sharply.
:::

Minor economies of scale exist in balance-of-system components. Larger inverters are more efficient (98-99% vs 95-97% for small string inverters). Installation labour costs per watt decrease with system size. Grid connection costs are amortised over more output. But these are incremental; the core physics is scale-invariant.

### Viable Scale Range

**Minimum:** Effectively none. Milliwatt-scale cells power calculators. Residential rooftop systems (3-15 kW) are economically mature. Off-grid systems at the watt to kilowatt scale serve remote applications.

**Maximum:** No fundamental upper limit. The largest operational plants are now in the 1-2 GW range (Bhadla, India; Golmud, China). Plants of 5-10 GW are under construction. The constraint is land availability and grid interconnection capacity, not PV physics.

This scale flexibility is a major practical advantage: deployment can proceed incrementally, matching demand growth and capital availability without the large upfront commitments required for nuclear or hydro.

### Land/Resource Requirements

::: limitation land_intensity
At 5-10 W/m² average delivered output, the land requirements are:

| Scale | Area Required |
|-------|---------------|
| 1 GW average output | 100-200 km² |
| UK electricity demand (~35 GW avg) | 3,500-7,000 km² |
| Global electricity demand (~3 TW avg) | 300,000-600,000 km² |

For context, 600,000 km² is roughly the area of France, or 0.4% of Earth's land surface. This is large but not prohibitive, particularly since:

- Deserts with high irradiance and low land value are well-suited
- Rooftop and building-integrated PV uses otherwise unproductive space (estimated 0.3-0.5 TW potential for rooftops in the US alone)
- Agrivoltaics (co-locating PV with agriculture) shows promising results for certain crops that benefit from partial shading, though this remains early-stage
:::

### Comparison to Other Sources

| Source | Average Power Density (W/m²) |
|--------|------------------------------|
| Solar PV | 5-10 |
| Wind | 1-3 |
| Biomass | 0.1-0.5 |
| Hydro | 1-10 (highly variable) |
| Natural gas plant (excluding fuel extraction) | 100-1000 |
| Nuclear plant (excluding mining) | 100-500 |

Fossil and nuclear plants have high on-site power density because energy arrives as fuel from elsewhere; the land use for extraction, mining, and transport is externalised. When full lifecycle land use is considered, the gap narrows but solar and wind remain more land-intensive per unit energy.

### Variant Configurations

Floating PV on reservoirs, lakes, and calm coastal waters is emerging as a way to access space without land competition. Co-benefits include reduced evaporation and cooler panel operating temperatures (improving efficiency slightly). Current deployments are small but growing, particularly in land-constrained countries like Japan, South Korea, and the Netherlands.

---

## Current Status

### Technology Readiness Level

| Technology | TRL | Status |
|------------|-----|--------|
| Crystalline silicon | 9 | Mature, dominant (>95% of market) |
| CdTe thin film | 9 | Mature, niche (~5% of market, mostly First Solar) |
| CIGS thin film | 8-9 | Commercial but marginal market share |
| Perovskite single junction | 5-6 | Lab-scale, stability issues unresolved |
| Perovskite-silicon tandem | 6-7 | Pilot production beginning, intense R&D focus |
| III-V multi-junction | 9 | Mature for space and concentrated PV, too expensive for flat-plate terrestrial |

Silicon PV is one of the most mature renewable technologies. Manufacturing processes are highly optimised, supply chains are deep, and performance is well-characterised over multi-decade timescales.

### Levelised Cost of Energy

LCOE has fallen roughly 90% since 2010, one of the fastest cost declines of any energy technology in history.

| Context | LCOE (2024) |
|---------|-------------|
| Utility-scale, excellent resource (Middle East, Chile, Australia) | $15-25/MWh |
| Utility-scale, good resource (southern US, Spain) | $25-40/MWh |
| Utility-scale, moderate resource (northern Europe) | $40-60/MWh |
| Residential rooftop | $50-150/MWh (highly variable) |

For comparison, new-build gas combined cycle is typically $40-70/MWh depending on gas prices; new-build coal is $65-150/MWh; onshore wind is $25-50/MWh.

In high-irradiance locations, solar is now the cheapest source of electricity in history, though this comparison excludes integration costs (storage, grid reinforcement) which become significant at high penetration.

### Major Deployments

Global installed capacity crossed **1.5 TW in 2024**, generating roughly 5-6% of global electricity. Growth is approximately 25-30% annually.

**Largest utility-scale plants:**

- Bhadla Solar Park, India: 2.7 GW
- Huanghe Hydropower Golmud Solar Park, China: 2.2 GW
- Several plants in the 1-2 GW range across China, Middle East, and US

Manufacturing is concentrated in China, which produces ~80% of global modules and controls much of the polysilicon and wafer supply chain. This concentration is a supply security concern for other regions, driving efforts to reshore manufacturing in the US and EU.

### Research Frontiers

**Tandems:** The most promising near-term route to breaking the single-junction limit. Perovskite-on-silicon tandems have reached 34.6% efficiency in the lab (above the single-junction limit) and are the focus of major commercialisation efforts. The perovskite top cell captures blue/green light while silicon captures red/infrared.

**Perovskite stability:** Solving degradation under moisture, heat, and illumination is the critical barrier. Encapsulation helps but adds cost and complexity. Compositional engineering (mixed halides, 2D/3D structures) is showing progress.

**Bifacial modules:** Capturing reflected light from the ground surface on the rear side. Now mainstream for utility-scale, adding 5-15% output depending on ground albedo and mounting height.

**Hot carrier and multiple exciton generation:** Concepts to capture thermalisation losses by extracting carriers before they cool, or generating multiple electron-hole pairs from high-energy photons. Still largely theoretical with no clear path to practical devices.

**Building-integrated PV:** Solar facades, windows, roof tiles. Higher cost per watt but accesses surfaces not otherwise used for generation. Aesthetic and architectural constraints drive different optimisation than utility-scale.
