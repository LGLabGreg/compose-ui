# Fieldset

Groups related form fields together with an accessible legend.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { FieldsetRoot, FieldsetLegend } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { FieldControl, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { FieldsetLegend, FieldsetRoot } from '@lglab/compose-ui/fieldset'

export default function DefaultExample() {
  return (
    <FieldsetRoot>
      <FieldsetLegend>Personal Information</FieldsetLegend>
      <FieldRoot name='firstName'>
        <FieldLabel>First name</FieldLabel>
        <FieldControl placeholder='John' />
      </FieldRoot>
      <FieldRoot name='lastName'>
        <FieldLabel>Last name</FieldLabel>
        <FieldControl placeholder='Doe' />
      </FieldRoot>
    </FieldsetRoot>
  )
}
```

## Resources

- [Base UI Fieldset Documentation](https://base-ui.com/react/components/fieldset)
- [API Reference](https://base-ui.com/react/components/fieldset#api-reference)
