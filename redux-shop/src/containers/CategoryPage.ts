import { connect } from 'react-redux'
import { RouteComponentProps } from 'react-router';

import { selectCategoryById, selectProductsByCategory } from '../modules/shop/selectors'
import { AppState } from '../modules/types';

import ProductList from '../components/ProductList'

const mapStateToProps = (state: AppState, props: RouteComponentProps<any>) => {
  const categoryId = Number(props.match.params.categoryId)

  return {
    category: selectCategoryById(state, categoryId),
    products: selectProductsByCategory(state, categoryId)
  }
}

export default connect(mapStateToProps)(ProductList)