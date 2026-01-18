import { FieldLabel, FieldRoot } from '@lglab/compose-ui/field'
import { Textarea } from '@lglab/compose-ui/textarea'

export default function DefaultExample() {
  return (
    <FieldRoot name='message'>
      <FieldLabel>Message</FieldLabel>
      <Textarea placeholder='Enter your message' />
    </FieldRoot>
  )
}
