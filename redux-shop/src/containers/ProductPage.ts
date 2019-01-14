import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router';

import { selectProductDetailsById } from '../modules/products/selectors';
import { addProductToCart } from '../modules/cart/actions'
import { AppState } from '../modules/types';

import ProductDetails from '../components/ProductDetails'
import { Dispatch } from 'redux';

const mapStateToProps = (state: AppState, props: RouteComponentProps<any>) => {
  const productId = Number(props.match.params.productId)

  return {
    product: selectProductDetailsById(state, productId),
  };
}

const mapDispatchToProps = (dispatch: Dispatch) => {
  return {
    addToCart: (productId: number, quantity: number) => {
      const action = addProductToCart(productId, quantity)

      dispatch(action)
    }
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetails)