import ActionType from '../constants/PromotionConstants';
import Dispatcher from '../dispatcher';
import {createStore} from './BaseStore';



const promotion = {};

const PromotionStore = createStore({

  getAll(){
    return promotion;
  },

  get(id) {
    return promotion[id];
  }
});

PromotionStore.dispatchToken = Dispatcher.register(action => {

  switch(action.actionType){
          case ActionType.REQUEST_PROMOTION:
                  //TODO 设置值, 触发事件
            PromotionStore.emitChange();
            break;
    default:
            break;
  }

});

export default  PromotionStore;

