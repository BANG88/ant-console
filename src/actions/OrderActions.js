import ActionType from '../constants/OrderConstants';
import Dispatcher from '../dispatcher';
import fetch from '../utils/WebApi';


export default {
    get: (params)=> {

        Dispatcher.dispatch({
            actionType: ActionType.REQUEST_ORDER
        })

    }
};


