# Textarea

A multi-line text input element.

## Installation

```bash
npm install @lglab/compose-ui
```

## Import

```tsx
import { Textarea } from '@lglab/compose-ui'
```

## Examples

### Default

```tsx
import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Textarea } from '@lglab/compose-ui/textarea'

export default function DefaultExample() {
  return (
    <FieldRoot name='message' className='w-full max-w-md'>
      <FieldLabel>Message</FieldLabel>
      <Textarea placeholder='Enter your message' />
    </FieldRoot>
  )
}
```

## Resources

- [Base UI Textarea Documentation](https://base-ui.com/react/components/textarea)
- [API Reference](https://base-ui.com/react/components/textarea#api-reference)
