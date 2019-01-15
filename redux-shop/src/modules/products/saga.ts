import { takeEvery, call, put } from 'redux-saga/effects';
import { LOAD_PRODUCTS_REQUESTED } from './constants';
import { LoadProductsRequested, loadProductsSuccess, loadProductsFailure } from './actions';
import { ProductDto } from '../dtos';

export default function * productsSaga () {
  yield takeEvery(LOAD_PRODUCTS_REQUESTED, loadProductsSaga)
}

function * loadProductsSaga (action: LoadProductsRequested) {
  try {
    const products = yield call(fetchProducts);

    yield put(
      loadProductsSuccess(products)
    );
  } catch (error) {
    yield put(
      loadProductsFailure(error.message)
    );
  }
}

const fetchProducts = () =>
  fetch('https://8c8mvg5amh.execute-api.eu-central-1.amazonaws.com/live/products')
    .then(r => r.json())
    .then(r => r as ProductDto[])
    .catch(e => {
      throw new Error('Failed to load data')
    })