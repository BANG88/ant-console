import ActionType from '../constants/ProductConstants';
import Dispatcher from '../dispatcher';
<<<<<<< HEAD

let actions = {
    query: (products)=> {
        Dispatcher.dispatch({
            actionType: ActionType.REQUEST_PRODUCTS,
            products: products
        })
    }
};

export  default actions;
=======
import fetch from '../utils/WebApi';


export default {
    getAll: (params)=> {

        Dispatcher.dispatchAsync(fetch({
            url: '/iteminfo.queryItemList',
            data: {
                channelId:'0'
            }
        }), {
            request: ActionType.REQUEST_PRODUCT,
            success: ActionType.REQUEST_PRODUCT_SUCCESS,
            failure: ActionType.REQUEST_PRODUCT_ERROR
        }, {params})

    }
};


>>>>>>> origin/master
