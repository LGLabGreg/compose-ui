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
