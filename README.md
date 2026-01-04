# Clean Energy from First Principles

A wiki examining clean energy technologies through the lens of fundamental physics. Rather than comparing technologies by cost or deployment status alone, this project analyzes each approach based on the physical principles that govern its efficiency, scalability, and limitations.

## Philosophy

Every energy technology exploits some natural asymmetry or gradient:
- **Solar** technologies capture photons from the Sun's 5800K surface
- **Wind** extracts kinetic energy from atmospheric circulation driven by differential heating
- **Tidal** harnesses gravitational interactions between Earth, Moon, and Sun
- **Geothermal** taps heat from radioactive decay and primordial planetary formation

By understanding these fundamentals, we can reason about theoretical limits, identify genuine constraints versus engineering challenges, and compare technologies on a level playing field.

## Structure

Each technology article follows a consistent framework:

1. **Fundamental Principle** - What physical asymmetry is exploited? What is the ultimate energy source?
2. **Conversion Mechanism** - How is the energy captured and converted to useful form?
3. **Theoretical Limits** - What physics constrains maximum efficiency?
4. **Practical Limitations** - What engineering and material challenges exist?
5. **Scaling Characteristics** - How does the technology scale from small to large?
6. **Current Status** - Where is deployment today and what's the trajectory?

## The Facet System

Technologies are classified along seven dimensions (facets) that enable structured comparison:

| Facet | Question |
|-------|----------|
| **Ultimate Source** | Where does the energy originate? (solar, gravitational, nuclear, etc.) |
| **Conversion Pathway** | How is it converted? (direct electrical, thermal intermediate, mechanical, chemical) |
| **Theoretical Limit** | What physics constrains efficiency? (Carnot, Betz, Shockley-Queisser, etc.) |
| **Temporal Character** | When is it available? (diurnal, weather-driven, dispatchable, etc.) |
| **Geographic Constraint** | Where can it be deployed? (global, coastal, latitude-dependent, etc.) |
| **Scale Regime** | What sizes are viable? (modular, threshold scale, site-limited) |
| **Material Criticality** | What materials might limit deployment? (abundant, critical minerals, etc.) |

## Technologies Covered

### Solar Radiation - Direct
- **Photovoltaics** - Direct conversion of photons to electricity via semiconductors
- **Concentrated Solar Thermal** - Mirrors focus sunlight to drive heat engines
- **Solar Heating** - Direct thermal capture for hot water and space heating
- **Thermophotovoltaics** - Conversion of thermal radiation to electricity

### Solar Radiation - Indirect
- **Wind** - Kinetic energy from atmospheric circulation
- **Hydropower** - Gravitational potential from the water cycle
- **Wave** - Ocean surface energy from wind-driven waves
- **OTEC** - Ocean thermal gradients in tropical waters
- **Biomass** - Chemical energy stored via photosynthesis

### Gravitational
- **Tidal Barrage** - Potential energy from tidal range

## Quick Start

### Prerequisites
- Node.js 18+

### Development

```bash
# Install dependencies
npm install

# Start development server with hot reload
npm run dev

# Build static site
npm run build

# Validate content (check facets, sources, formatting)
npm run validate

# Preview built site
npm run preview
```

### File Structure

```
├── approaches/              # Technology articles
│   ├── solar_radiation_direct/
│   │   ├── photovoltaics/
│   │   │   ├── meta.yaml    # Structured data
│   │   │   └── content.md   # Prose with annotations
│   │   └── ...
│   ├── solar_radiation_indirect/
│   └── gravitational/
├── templates/               # Starter templates for new articles
├── facets.yaml              # Facet definitions and valid values
├── sources.yaml             # Central bibliography
├── CONTRIBUTING.md          # Detailed guide for contributors
└── public/                  # Static assets and build output
```

## Contributing

See [CONTRIBUTING.md](CONTRIBUTING.md) for detailed guidelines on:
- Writing new technology articles
- The meta.yaml and content.md formats
- Annotation syntax for facets, equations, and limitations
- Adding sources and citations
- Validation and building

## Key Features

### Structured Comparison Data
Each technology's `meta.yaml` includes standardized comparison data:
- Theoretical efficiency limits and best achieved values
- Power density (W/m²) at peak, average, and delivered levels
- Current status: TRL, LCOE range, global capacity, growth rate
- Temporal characteristics: diurnal, seasonal, predictability

### Annotated Content
Content files use lightweight annotations that connect prose to structured data:
```markdown
::: facet ultimate_source
The temperature difference between the Sun's surface (~5800K) and Earth...
:::

::: equation carnot_efficiency
$$\eta_{Carnot} = 1 - \frac{T_C}{T_H}$$
:::

::: limitation material_scarcity
Tellurium availability limits CdTe deployment at scale...
:::
```

### Living Margins
The reader interface shows facet relationships in the margin, enabling navigation from reading about one technology to comparing it with others that share characteristics.

## License

MIT
