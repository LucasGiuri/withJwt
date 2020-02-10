import { connect } from 'react-redux';
import * as operations from '../store/operations';
import * as selectors from '../store/selectors';
import Login from '../components/containers/Login';

const mapStateToProps = (state) => {
  return {
    accessToken: selectors.getToken(state),
    isLogged: selectors.isLogged(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    login: (username, password) => dispatch(operations.login(username, password))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);