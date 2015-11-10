require('../middleware/api');

export const REQUEST_PRODUCTS = 'PRODUCT_REQUEST';
export const RECEIVE_PRODUCTS = 'RECEIVE_PRODUCTS';

function requestProducts(products) {
  return {
    type: REQUEST_PRODUCTS,
    products
  }
}

function receiveProducts(p, res) {
  return {
    type: RECEIVE_PRODUCTS,
    p,
    products: res
  }
}

export function fetchProducts(products) {
  return dispatch => {

    dispatch(requestProducts(products));
    return fetch('').then(res => res.json())
      .then((res) => dispatch(receiveProducts(products, res)))
  }
}
