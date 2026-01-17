# Meter

A graphical display of a numeric value within a defined range.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { MeterRoot, MeterTrack, MeterIndicator, MeterValue, MeterLabel } from '@lglab/compose-ui'
```

## Examples

### Basic

```tsx
import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from '@lglab/compose-ui/meter'

export default function BasicExample() {
  return (
    <div className='space-y-6 md:w-3/4 mx-auto'>
      <MeterRoot value={24}>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Storage Used</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot value={65}>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>CPU Usage</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot value={90}>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Memory Usage</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>
    </div>
  )
}
```

### Animated

```tsx
import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from '@lglab/compose-ui/meter'

export default function AnimatedExample() {
  return (
    <div className='space-y-6 md:w-3/4 mx-auto'>
      <MeterRoot value={24} animated>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Storage Used</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot value={65} animated>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>CPU Usage</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot value={90} animated>
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Memory Usage</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>
    </div>
  )
}
```

### Custom Format

```tsx
import {
  MeterIndicator,
  MeterLabel,
  MeterRoot,
  MeterTrack,
  MeterValue,
} from '@lglab/compose-ui/meter'

export default function CustomFormatExample() {
  return (
    <div className='space-y-6 md:w-3/4 mx-auto'>
      <MeterRoot
        value={2500}
        min={0}
        max={5000}
        format={{ style: 'currency', currency: 'USD', maximumFractionDigits: 0 }}
      >
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Budget Used</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot
        value={3.5}
        min={0}
        max={5}
        format={{ style: 'decimal', minimumFractionDigits: 1, maximumFractionDigits: 1 }}
      >
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Rating</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>

      <MeterRoot
        value={75}
        min={0}
        max={100}
        getAriaValueText={(formattedValue, value) => `${value}% complete`}
      >
        <div className='flex items-center justify-between mb-2'>
          <MeterLabel>Progress</MeterLabel>
          <MeterValue />
        </div>
        <MeterTrack>
          <MeterIndicator />
        </MeterTrack>
      </MeterRoot>
    </div>
  )
}
```

## Resources

- [Base UI Meter Documentation](https://base-ui.com/react/components/meter)
- [API Reference](https://base-ui.com/react/components/meter#api-reference)
