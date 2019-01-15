import { connect } from 'react-redux'
import { withRouter } from 'react-router';

import { AppState } from '../modules/types';
import { selectProductsState } from '../modules/products/selectors';
import { loadProductsRequested } from '../modules/products/actions';

import App from '../components/App'

const mapStateToProps = (state: AppState) => {
  const products = selectProductsState(state);

  return {
    loaded: products.loaded,
    error: products.loadingError
  }
}

const mapDispathToProps = {
  loadProducts: loadProductsRequested,
}

export default withRouter(
  connect(mapStateToProps, mapDispathToProps)(App)
);