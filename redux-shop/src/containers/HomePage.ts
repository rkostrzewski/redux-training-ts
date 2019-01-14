import { connect } from 'react-redux'

import { selectCategories } from '../modules/categories/selectors'
import { AppState } from '../modules/types';

import CategoryList from '../components/CategoryList'

const mapStateToProps = (state: AppState) => {
  return {
    categories: selectCategories(state)
  }
}

export default connect(mapStateToProps)(CategoryList)