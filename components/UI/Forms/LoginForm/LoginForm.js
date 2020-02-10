import { FormContainer } from './LoginForm.styles';
import { FormLabel, Input, FormControl } from '@material-ui/core';
import Button from '../../Button/Button';

function LoginForm({ userLabel, passLabel, user, pass, onUserChange, onPassChange, onClick}) {
  const buttonText = "Send";

  return (
    <FormContainer>
      <FormControl>
        <FormLabel>{userLabel}</FormLabel>
        <Input type="text" value={user} onChange={onUserChange} />
        <FormLabel>{passLabel}</FormLabel>
        <Input type="password" value={pass} onChange={onPassChange} />
      </FormControl>
      <Button text={buttonText} onClick={onClick} />
    </FormContainer>
  )
};

export default LoginForm;