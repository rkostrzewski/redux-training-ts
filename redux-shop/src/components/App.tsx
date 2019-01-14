import React, { Component } from 'react'
import { Switch, Route, RouteComponentProps } from 'react-router'
import Header from './Header'
import PageNavigation from '../containers/PageNavigation'
import HomePage from '../containers/HomePage'
import CategoryPage from '../containers/CategoryPage'
import ProductPage from '../containers/ProductPage'
import CartPage from '../containers/CartPage'
import routes from '../routes';

export interface AppProps extends RouteComponentProps {
  loaded: boolean;
  error?: string;
  loadProducts: () => void; 
}

class App extends Component<AppProps> {
  componentDidMount () {
    const { loaded, loadProducts } = this.props;

    if (!loaded) {
      loadProducts()
    }
  }

  render() {
    const { loaded, error } = this.props;

    if (error || !loaded) {
      return (
        <div className="App">
          <Header />
          {error && (
            <h1 style={{ textAlign: 'center' }}>
              {error}
            </h1>
          )}
        </div>
      )
    }

    return (
      <div className="App">
        <Header />
        <PageNavigation />
        <Switch>
          <Route exact path={routes.home} component={HomePage} />
          <Route path={routes.category} component={CategoryPage} />
          <Route path={routes.product} component={ProductPage} />
          <Route path={routes.cart} component={CartPage} />
        </Switch>
      </div>
    );
  }
}

export default App
