import { FieldControl, FieldLabel, FieldRoot } from '@lglab/compose-ui/field'

export default function DefaultExample() {
  return (
    <FieldRoot name='name'>
      <FieldLabel>Name</FieldLabel>
      <FieldControl placeholder='Enter your name' />
    </FieldRoot>
  )
}
