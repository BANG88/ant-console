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