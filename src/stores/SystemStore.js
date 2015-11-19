import ActionType from '../constants/SystemConstants';
import Dispatcher from '../dispatcher';
import {createStore} from './BaseStore';



const system = {};

const SystemStore = createStore({

  getAll(){
    return system;
  },

  get(id) {
    return system[id];
  }
});

SystemStore.dispatchToken = Dispatcher.register(action => {

  switch(action.actionType){
          case ActionType.REQUEST_SYSTEM:
                  //TODO 设置值, 触发事件
            SystemStore.emitChange();
            break;
    default:
            break;
  }

});

export default  SystemStore;

