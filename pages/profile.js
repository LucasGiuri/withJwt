import { connect } from 'react-redux';
import * as operations from '../store/operations';
import * as selectors from '../store/selectors';
import Profile from '../components/containers/Profile';

const mapStateToProps = (state) => {
  return {
    user: selectors.getUser(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    getUser: (token) => dispatch(operations.getUserAuth(token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);