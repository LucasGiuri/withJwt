import Router from 'next/router';
import { useState } from 'react';
import LoginForm from '../../UI/Forms/LoginForm/LoginForm';


// interface UserProps {
//   user: string;
//   setUser: () => string;
// };

// interface PassProps {
//   pass: string;
//   setPass: () => string;
// };

interface LoginProps {
  isLogged: boolean;
  login: (user: string, pass: string) => void;
}

function Login(props: LoginProps) {
  const { isLogged, login } = props;

  if (isLogged) {
    Router.push("/", "/");
  }

  const userText = "User";
  const passwordText = "Password";
  const [user, setUser] = useState("");
  const [pass, setPass] = useState("");

  function onPassChange(e: any): void {
    setPass(e.target.value);
  };

  function onUserChange(e: any): void {
    setUser(e.target.value);
  };

  function onClick(): void {
    login(user, pass);
  };
  
  return (
    <LoginForm 
      userLabel={userText}
      passLabel={passwordText}
      user={user} 
      pass={pass}
      onUserChange={onUserChange}
      onPassChange={onPassChange}
      onClick={onClick} />
  )
};

export default Login;