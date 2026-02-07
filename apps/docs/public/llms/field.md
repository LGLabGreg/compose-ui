# Field

Provides accessible labeling and validation for form controls.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { FieldRoot, FieldLabel, FieldControl, FieldDescription, FieldError, FieldItem, FieldValidity } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { FieldControl, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'

export default function DefaultExample() {
  return (
    <FieldRoot name='name'>
      <FieldLabel>Name</FieldLabel>
      <FieldControl placeholder='Enter your name' />
    </FieldRoot>
  )
}
```

### With Description

```tsx
import {
  FieldControl,
  FieldDescription,
  FieldLabel,
  FieldRoot,
} from '@lglab/compose-ui/field'

export default function WithDescriptionExample() {
  return (
    <FieldRoot name='email'>
      <FieldLabel>Email</FieldLabel>
      <FieldControl type='email' placeholder='Enter your email' />
      <FieldDescription>We will never share your email with anyone.</FieldDescription>
    </FieldRoot>
  )
}
```

### With Error

```tsx
import { FieldControl, FieldError, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'

export default function WithErrorExample() {
  return (
    <FieldRoot name='username' invalid>
      <FieldLabel>Username</FieldLabel>
      <FieldControl defaultValue='@ComposeUI' placeholder='Enter username' />
      <FieldError match={true}>Username is already taken.</FieldError>
    </FieldRoot>
  )
}
```

## Resources

- [Base UI](https://base-ui.com/react/components/field)
