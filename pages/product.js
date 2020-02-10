import { connect } from 'react-redux';
import * as selectors from '../store/selectors';
import * as operations from '../store/operations';
import Product from '../components/containers/Product';

const mapStateToProps = (state) => {
  return {
    token: selectors.getToken(state)
  }
};

const mapDispatchToProps = (dispatch) => {
  return {
    createProduct: (token) => dispatch(operations.createProduct(token))
  }
};

export default connect(mapStateToProps, mapDispatchToProps)(Product);