import ActionType from '../constants/AuthConstants';
import Dispatcher from '../dispatcher';
import {createStore} from './BaseStore';
import Cookie from 'js-cookie';

const auth = {};
const TOKEN = 'TOKEN';

const AuthStore = createStore({

    getAll(){
        return auth;
    },

    get(id) {
        return auth[id];
    },
    isLoggedIn(){
        return !!Cookie.get(TOKEN)
    }
});

AuthStore.dispatchToken = Dispatcher.register(action => {

    switch (action.actionType) {
        case ActionType.REQUEST_AUTH:
            //TODO 设置值,出发事件
            AuthStore.emitChange();
            break;
        default:
            break;
    }

});

export default  AuthStore;

