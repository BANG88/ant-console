import ActionType from '../constants/ProductConstants';
import Dispatcher from '../dispatcher';

let actions = {
    query: (products)=> {
        Dispatcher.dispatch({
            actionType: ActionType.REQUEST_PRODUCTS,
            products: products
        })
    }
};

export  default actions;