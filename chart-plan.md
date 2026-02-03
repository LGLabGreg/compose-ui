# Compose UI Chart Component Architecture

## Deep Analysis of Recharts v3.7

### Core Philosophy

Recharts is built on **composition over configuration**. Every chart is assembled from independent, reusable components that each handle a specific concern. This aligns perfectly with Compose UI's philosophy.

### Recharts v3 Key Features

#### 1. Component Categories

**Chart Containers** (top-level orchestrators):

- `AreaChart`, `BarChart`, `LineChart`, `ComposedChart`
- `PieChart`, `RadarChart`, `RadialBarChart`
- `ScatterChart`, `FunnelChart`, `Treemap`, `Sankey`, `SunburstChart`

**Cartesian Components** (for XY-axis charts):

- `Area`, `Bar`, `Line`, `Scatter` - data visualization
- `XAxis`, `YAxis`, `ZAxis` - axes
- `CartesianGrid` - background grid
- `ReferenceLine`, `ReferenceDot`, `ReferenceArea` - annotations
- `ErrorBar`, `Brush` - additional features
- `BarStack` (v3.6+) - stacked bar groups with radius

**Polar Components** (for radial charts):

- `Pie`, `Radar`, `RadialBar`
- `PolarAngleAxis`, `PolarRadiusAxis`, `PolarGrid`

**General Components** (shared across chart types):

- `ResponsiveContainer` - responsiveness wrapper
- `Tooltip`, `Legend` - interactivity
- `Label`, `LabelList`, `Cell` - labeling
- `Text`, `Layer`, `Surface` - low-level primitives

**Shape Primitives**:

- `Rectangle`, `Sector`, `Curve`, `Cross`, `Dot`, `Polygon`, `Trapezoid`, `Symbols`

#### 2. Recharts v3 New Features

**Built-in Responsiveness** (v3.3+):

```tsx
// No more ResponsiveContainer wrapper needed!
<BarChart data={data} responsive height={300} width='100%'>
  ...
</BarChart>
```

**Custom Components Support** (v3.0):

```tsx
// Custom components can now be rendered directly in the tree
const MyCustomAxes = () => (
  <>
    <XAxis dataKey="name" />
    <YAxis tickCount={7} />
  </>
)

<BarChart data={data}>
  <Bar dataKey="uv" />
  <MyCustomAxes />  {/* Works in v3! */}
</BarChart>
```

**New Hooks** (v3.1+):

- `useXAxisDomain()` / `useYAxisDomain()` - access axis domain
- `usePlotArea()` - get plot area dimensions
- `useChartWidth()` / `useChartHeight()` - chart dimensions
- `useMargin()` / `useOffset()` - spacing info
- `useActiveTooltipDataPoints()` - tooltip data
- `useActiveTooltipLabel()` - tooltip label

**BarStack Component** (v3.6+):

- Proper grouped stacked bars with corner radius on the entire stack
- `reverseStackOrder` prop for stacking direction

**Z-Index Control** (v3.4+):

- `zIndex` prop on most chart elements
- SVG layering control without JSX order manipulation

**Axis Type Auto** (v3.7+):

- `type="auto"` automatically determines category vs number axis

#### 3. Data Flow Pattern

```
data={[...]} → Chart Container → Child Components read via context
                    ↓
              Computes scales, domains, layout
                    ↓
              Provides context to children
                    ↓
         Children render with computed positions
```

---

## shadcn/ui Chart Analysis

### What shadcn Provides

**1. ChartConfig** - Type-safe configuration object:

```tsx
type ChartConfig = {
  [key: string]: {
    label: string
    icon?: React.ComponentType
    color?: string
    theme?: { light: string; dark: string }
  }
}
```

**2. ChartContainer** - Wraps ResponsiveContainer + injects CSS variables:

- Sets `--color-{key}` CSS variables from config
- Handles responsive sizing
- Provides ChartContext

**3. ChartTooltip / ChartTooltipContent** - Styled tooltip:

- Reads from ChartConfig for labels/colors
- Props: `indicator` (dot/line/dashed), `hideLabel`, `hideIndicator`, `labelKey`, `nameKey`

**4. ChartLegend / ChartLegendContent** - Styled legend:

- Auto-generates from ChartConfig
- Props: `nameKey`

### shadcn's Philosophy

> "We do not wrap Recharts. This means you're not locked into an abstraction."

They provide thin styling layers, not abstractions. Users still compose with raw Recharts components.

---

## Compose UI Chart Architecture Proposal

### Design Principles

1. **Don't wrap Recharts** - Like shadcn, provide styling primitives, not abstractions
2. **Leverage Recharts v3** - Use native `responsive` prop, custom components, new hooks
3. **CSS Variable Theming** - Integrate with Compose UI's token system
4. **Composition First** - Every piece is independently usable
5. **AI-Friendly** - Clear, explicit primitives that AI can compose

### Proposed Primitives

#### Layer 1: Configuration & Context

```tsx
// Types
type ChartConfig = Record<
  string,
  {
    label: string
    color: string
    icon?: React.ComponentType
  }
>

// Context Provider + CSS Variable Injection
;<ChartRoot config={chartConfig}>
  {/* Injects --color-{key} CSS variables */}
  {children}
</ChartRoot>
```

#### Layer 2: Container Primitives

```tsx
// Thin wrapper that applies Compose UI styling defaults
<ChartContainer className='min-h-[200px]'>
  {/* Just handles the outer div styling */}
  <BarChart responsive data={data}>
    ...
  </BarChart>
</ChartContainer>
```

**Why separate ChartRoot and ChartContainer?**

- `ChartRoot`: Config/context/CSS variables (can wrap multiple charts)
- `ChartContainer`: Layout/sizing for individual chart

#### Layer 3: Styled Recharts Defaults

Pre-styled versions of commonly customized Recharts components:

```tsx
// Styled CartesianGrid with Compose UI tokens
<ChartGrid /> // = <CartesianGrid className="stroke-border" vertical={false} />

// Styled XAxis with sensible defaults
<ChartXAxis /> // = <XAxis tickLine={false} axisLine={false} tickMargin={8} />

// Styled YAxis with sensible defaults
<ChartYAxis /> // = <YAxis tickLine={false} axisLine={false} tickMargin={8} />
```

#### Layer 4: Interactive Components

```tsx
// Styled tooltip that reads from ChartConfig context
<ChartTooltip
  content={<ChartTooltipContent indicator="dot" />}
/>

// Styled legend that reads from ChartConfig context
<ChartLegend
  content={<ChartLegendContent />}
/>
```

#### Layer 5: Re-exports

Direct re-exports of Recharts components for convenience:

```tsx
export {
  // Chart Types
  AreaChart,
  BarChart,
  LineChart,
  ComposedChart,
  PieChart,
  RadarChart,
  RadialBarChart,
  ScatterChart,

  // Data Components
  Area,
  Bar,
  Line,
  Scatter,
  Pie,
  Radar,
  RadialBar,

  // Axes
  XAxis,
  YAxis,
  ZAxis,
  PolarAngleAxis,
  PolarRadiusAxis,

  // Grid & References
  CartesianGrid,
  PolarGrid,
  ReferenceLine,
  ReferenceDot,
  ReferenceArea,

  // Utilities
  Cell,
  Label,
  LabelList,
  Brush,

  // Hooks (v3+)
  useXAxisDomain,
  useYAxisDomain,
  usePlotArea,
  useChartWidth,
  useChartHeight,
  useActiveTooltipDataPoints,
  useActiveTooltipLabel,
} from 'recharts'
```

### File Structure

```
packages/compose-ui/src/components/chart/
├── index.ts                    # Main exports
├── primitives.tsx              # ChartRoot, ChartContainer
├── config.tsx                  # ChartConfig type + context
├── tooltip.tsx                 # ChartTooltip, ChartTooltipContent
├── legend.tsx                  # ChartLegend, ChartLegendContent
├── grid.tsx                    # ChartGrid (styled CartesianGrid)
├── axis.tsx                    # ChartXAxis, ChartYAxis (styled defaults)
└── style.tsx                   # ChartStyle component for CSS injection
```

### Usage Examples

#### Basic Bar Chart

```tsx
import {
  type ChartConfig,
  ChartContainer,
  ChartGrid,
  ChartRoot,
  ChartTooltip,
  ChartTooltipContent,
  ChartXAxis,
} from '@lglab/compose-ui/chart'
import { Bar, BarChart } from '@lglab/compose-ui/chart'

const config: ChartConfig = {
  desktop: { label: 'Desktop', color: 'var(--chart-1)' },
  mobile: { label: 'Mobile', color: 'var(--chart-2)' },
}

export function MyChart() {
  return (
    <ChartRoot config={config}>
      <ChartContainer className='min-h-[300px]'>
        <BarChart responsive data={data} accessibilityLayer>
          <ChartGrid />
          <ChartXAxis dataKey='month' />
          <ChartTooltip content={<ChartTooltipContent />} />
          <Bar dataKey='desktop' fill='var(--color-desktop)' radius={4} />
          <Bar dataKey='mobile' fill='var(--color-mobile)' radius={4} />
        </BarChart>
      </ChartContainer>
    </ChartRoot>
  )
}
```

#### Mixed Line + Area Chart

```tsx
import {
  ChartContainer,
  ChartGrid,
  ChartLegend,
  ChartLegendContent,
  ChartRoot,
  ChartTooltip,
  ChartTooltipContent,
  ChartXAxis,
  ChartYAxis,
} from '@lglab/compose-ui/chart'
import { Area, ComposedChart, Line } from '@lglab/compose-ui/chart'

export function ComposedChartExample() {
  return (
    <ChartRoot config={config}>
      <ChartContainer className='min-h-[400px]'>
        <ComposedChart responsive data={data}>
          <ChartGrid />
          <ChartXAxis dataKey='date' />
          <ChartYAxis />
          <ChartTooltip content={<ChartTooltipContent />} />
          <ChartLegend content={<ChartLegendContent />} />
          <Area
            dataKey='revenue'
            fill='var(--color-revenue)'
            fillOpacity={0.3}
            stroke='var(--color-revenue)'
          />
          <Line dataKey='profit' stroke='var(--color-profit)' strokeWidth={2} />
        </ComposedChart>
      </ChartContainer>
    </ChartRoot>
  )
}
```

#### Using Raw Recharts (escape hatch)

```tsx
// Users can always bypass our primitives and use Recharts directly
import { Bar, BarChart, Tooltip, XAxis } from 'recharts'

export function RawRechartsChart() {
  return (
    <BarChart width={500} height={300} data={data}>
      <XAxis dataKey='name' />
      <Tooltip />
      <Bar dataKey='value' fill='#8884d8' />
    </BarChart>
  )
}
```

### CSS Token Integration

```css
/* In compose-ui theme */
:root {
  --chart-1: oklch(0.646 0.222 41.116);
  --chart-2: oklch(0.6 0.118 184.704);
  --chart-3: oklch(0.398 0.07 227.392);
  --chart-4: oklch(0.828 0.189 84.429);
  --chart-5: oklch(0.769 0.188 70.08);
}

.dark {
  --chart-1: oklch(0.488 0.243 264.376);
  --chart-2: oklch(0.696 0.17 162.48);
  --chart-3: oklch(0.769 0.188 70.08);
  --chart-4: oklch(0.627 0.265 303.9);
  --chart-5: oklch(0.645 0.246 16.439);
}
```

### Key Differences from shadcn

| Aspect           | shadcn                           | Compose UI                                   |
| ---------------- | -------------------------------- | -------------------------------------------- |
| Recharts version | v2 (upgrading to v3)             | v3.7+ native                                 |
| Responsive       | ResponsiveContainer wrapper      | Native `responsive` prop                     |
| Naming           | ChartContainer (does everything) | ChartRoot (config) + ChartContainer (layout) |
| Styled defaults  | No styled axis/grid              | ChartGrid, ChartXAxis, ChartYAxis            |
| Hooks            | Not exposed                      | Re-exported from Recharts                    |

### Implementation Notes

1. **Peer Dependency**: `recharts@^3.7.0`

2. **No Animation Override**: Let Recharts handle animations natively

3. **Accessibility**: Always recommend `accessibilityLayer` prop on charts

4. **TypeScript**: Full type exports for ChartConfig and all re-exports

5. **Bundle Size**: Re-exports don't increase bundle - they're pass-through

### Open Questions

1. **Should we provide pre-composed chart examples?**
   - Pro: Faster for users to get started
   - Con: Goes against composition philosophy
   - Recommendation: Documentation examples only, not components

2. **Should ChartGrid apply stroke colors from tokens by default?**
   - Recommendation: Yes, use `stroke-border` as default

3. **Should we create CVA variants for charts?**
   - Recommendation: No - charts are too varied for meaningful variants
   - Let users compose with className

4. **Sparkline components?**
   - These are common enough to warrant dedicated primitives
   - Could be: `<Sparkline data={data} />` as a convenience wrapper

---

## Summary

The Compose UI Chart component should be:

1. **Thin** - Styling layer, not abstraction
2. **Composable** - Every piece works independently
3. **Native v3** - Leverage Recharts v3's modern features
4. **Typed** - Full TypeScript support
5. **Themed** - Integrated with Compose UI's CSS variable system
6. **Escape-hatch friendly** - Users can always drop to raw Recharts

This architecture allows AI tools to easily compose charts by combining explicit primitives, while providing sensible defaults for quick wins.
