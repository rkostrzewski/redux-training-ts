import { connect } from 'react-redux';
import { withRouter, matchPath, RouteComponentProps } from 'react-router';

import { selectCategories, selectProductDetailsById } from '../modules/shop/selectors';
import { AppState } from '../modules/types';
import routes from '../routes';

import NavigationMenu from '../components/NavigationMenu';
import { History } from 'history';

const mapStateToProps = (state: AppState, props: RouteComponentProps<any>) => {
  const activeCategoryId = getActiveCategoryForRoute(state, props.history)
  const backNavigationLink = getBackNavigationLinkForRoute(state, props.history)

  return {
    categories: selectCategories(state),
    activeCategoryId: activeCategoryId,
    backNavigationLink: backNavigationLink
  }
}

export default withRouter(connect(mapStateToProps)(NavigationMenu))

const getActiveCategoryForRoute = (state: AppState, history: History) => {
  const { pathname } = history.location;
  const categoryMatch = matchPath<any>(pathname, {
    path: routes.category,
  });

  if (categoryMatch) {
    return Number(categoryMatch.params.categoryId)
  }

  const productMatch = matchPath<any>(pathname, {
    path: routes.product,
  });

  if (productMatch) {
    const productId = Number(productMatch.params.productId)
    const product = selectProductDetailsById(state, productId)

    return product && product.category.id
  }

  return undefined;
}

const getBackNavigationLinkForRoute = (state: AppState, history: History) => {
  const { pathname } = history.location;
  const productMatch = matchPath<any>(pathname, {
    path: routes.product
  });

  if (productMatch) {
    const productId = Number(productMatch.params.productId)
    const product = selectProductDetailsById(state, productId)

    return product ? `/category/${product.category.id}` : '/'
  }

  return undefined;
}