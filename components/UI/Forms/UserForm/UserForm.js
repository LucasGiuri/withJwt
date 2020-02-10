import { FormContainer } from './userForm.styles';
import { FormLabel } from '@material-ui/core';

function LoginForm({ idLabel, usernameLabel, emailLabel, user}) {
  return (
    <FormContainer>
      <FormLabel>{idLabel}</FormLabel>
      <h1>{user.id}</h1>
      <FormLabel>{usernameLabel}</FormLabel>
      <h1>{user.username}</h1>
      <FormLabel>{emailLabel}</FormLabel>
      <h1>{user.email}</h1>
    </FormContainer>
  )
};

export default LoginForm;