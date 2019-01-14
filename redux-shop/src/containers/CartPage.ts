import { connect } from 'react-redux'

import { selectCartProductsDetails } from '../modules/cart/selectors'
import { increaseProductQuantity, decreaseProductQuantity, removeProductFromCart } from '../modules/cart/actions'
import { AppState } from '../modules/types';

import Cart from '../components/Cart'

const mapStateToProps = (state: AppState) => {
  return {
    products: selectCartProductsDetails(state)
  }
}

/*
 * Same as:
 * 
 * const mapDispatchToProps = dispatch => {
 *   return {
 *     increaseQuantity: productId => dispatch(increaseProductQuantity(productId)),
 *     decreaseQuantity: productId => dispatch(decreaseProductQuantity(productId)),
 *     removeProduct: productId => dispatch(removeProductFromCart(productId))
 *   }
 * }
 */
/**
 * In case TypeScript throws an error declare interface
 * interface DispatchProps {
 *   increaseQuantity: (productId: number) => void,
 *   decreaseQuantity: (productId: number) => void,
 *   removeProduct: (productId: number) => void,
 * }
 * 
 * and define mapDispatchToProps as 
 * const mapDispatchToProps: DispatchProps = {
 *   ...
 * }
 */
const mapDispatchToProps = {
  increaseQuantity: increaseProductQuantity,
  decreaseQuantity: decreaseProductQuantity,
  removeProduct: removeProductFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(Cart)