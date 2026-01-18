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
