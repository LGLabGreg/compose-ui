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
