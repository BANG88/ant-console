import ActionType from '../constants/LoginConstants';
import Dispatcher from '../dispatcher';
import fetch from '../utils/WebApi';


export default {
    get: (params)=> {

        Dispatcher.dispatch({
            actionType: ActionType.REQUEST_LOGIN
        })

    }
};


