import ActionType from '../constants/ProductConstants';
import Dispatcher from '../dispatcher';
import {createStore} from './BaseStore';



const product = {};

const ProductStore = createStore({

  getAll(){
    return product;
  },

  get(id) {
    return product[id];
  }
});

ProductStore.dispatchToken = Dispatcher.register(action => {

  switch(action.actionType){
          case ActionType.REQUEST_PRODUCT:
                  //TODO 设置值, 触发事件
            ProductStore.emitChange();
            break;
    default:
            break;
  }

});

export default  ProductStore;

