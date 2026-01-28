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
