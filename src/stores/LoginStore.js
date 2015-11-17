import ActionType from '../constants/LoginConstants';
import Dispatcher from '../dispatcher';
import {createStore} from './BaseStore';



const login = {};

const LoginStore = createStore({

  getAll(){
    return login;
  },

  get(id) {
    return login[id];
  }
});

LoginStore.dispatchToken = Dispatcher.register(action => {

  switch(action.actionType){
          case ActionType.REQUEST_LOGIN:
                  //TODO 设置值, 触发事件
            LoginStore.emitChange();
            break;
    default:
            break;
  }

});

export default  LoginStore;

