<<<<<<< HEAD
import  BaseStore from './BaseStore';
import ActionType from '../constants/ProductConstants';

class ProductStore extends BaseStore {
    constructor() {
        super();
        this.subscribe(()=>  this._registerToActions.bind(this));
        this._products = null;

    }

    _registerToActions(action) {
        switch (action.actionType) {
            case ActionType.REQUEST_PRODUCTS:
                this._products = action.products;
                this.emitChange();
                break;
            default:
                break;
        }
    }

    getAll() {
        return this._products
    }

}


export default new ProductStore();
=======
import ActionType from '../constants/ProductConstants';
import Dispatcher from '../dispatcher';
import {createStore} from './BaseStore';



let product = {};

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
          case ActionType.REQUEST_PRODUCT_SUCCESS:
               product = action.response.items;
                  //TODO 设置值, 触发事件
            ProductStore.emitChange();
            break;
    default:
     ProductStore.emitChange();
            break;
  }

});

export default  ProductStore;

>>>>>>> origin/master
