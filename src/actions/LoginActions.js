import ActionType from '../constants/LoginConstants';
import Dispatcher from '../dispatcher';
import fetch from '../utils/WebApi';


export default {
    login: (login)=> {

        Dispatcher.dispatchAsync(fetch({
            url: '/login.login',
            data: login
        }), {
            request: ActionType.REQUEST_LOGIN,
            success: ActionType.REQUEST_LOGIN_SUCCESS,
            failure: ActionType.REQUEST_LOGIN_ERROR
        }, {login})

    },
    logout(){
        Dispatcher.dispatch({
            actionType: ActionType.REQUEST_LOGOUT
        })
    }
};


