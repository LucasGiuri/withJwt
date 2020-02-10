import Cookies from 'universal-cookie';
import * as operations from '../../../store/operations';
import UserForm from '../../UI/Forms/UserForm/UserForm';

function Profile({getUser, user}) {
  const id = "Id";
  const username = "Username";
  const email = "Email";

  return (
    <UserForm
      idLabel={id}
      usernameLabel={username}
      emailLabel={email}
      user={user}
    />
  );
};

Profile.getInitialProps = async ({store, req}) => {
  if (req) {
    const cookies = new Cookies(req.headers.cookie);
    const cookie = cookies.get('vintraAT') ? cookies.get('vintraAT') : null;
    await store.dispatch(operations.getUserAuth(cookie));
  }
  return {};
};

export default Profile;