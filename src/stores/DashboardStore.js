import ActionType from '../constants/DashboardConstants';
import Dispatcher from '../dispatcher';
import {createStore} from './BaseStore';



const dashboard = {};

const DashboardStore = createStore({

  getAll(){
    return dashboard;
  },

  get(id) {
    return dashboard[id];
  }
});

DashboardStore.dispatchToken = Dispatcher.register(action => {

  switch(action.actionType){
          case ActionType.REQUEST_DASHBOARD:
                  //TODO 设置值, 触发事件
            DashboardStore.emitChange();
            break;
    default:
            break;
  }

});

export default  DashboardStore;

