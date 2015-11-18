import ActionType from '../constants/LoginConstants';
import Dispatcher from '../dispatcher';
import {createStore} from './BaseStore';
import selectn from 'selectn';

import Cookie from 'js-cookie';

const TOKEN = 'TOKEN';
const login = {};

const LoginStore = createStore({

    getAll(){
        return login;
    },

    get(id) {
        return login[id];
    },
    isLoggedIn(){
        return !!Cookie.get(TOKEN)
    }
});

LoginStore.dispatchToken = Dispatcher.register(action => {


    switch (action.actionType) {
        case ActionType.REQUEST_LOGIN_SUCCESS:
            //TODO 设置值, 触发事件
            Cookie.set(TOKEN, 'fake token 9527', {expires: 7, path: '/'});
            LoginStore.emitChange();
            break;
        case ActionType.REQUEST_LOGOUT:
            //TODO 设置值, 触发事件
            Cookie.remove(TOKEN, {path: '/'});

            LoginStore.emitChange();
            break;
        default:
            LoginStore.emitChange();
            break;
    }

});

export default  LoginStore;

