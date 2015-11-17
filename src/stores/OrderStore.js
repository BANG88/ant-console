import ActionType from '../constants/OrderConstants';
import Dispatcher from '../dispatcher';
import {createStore} from './BaseStore';


const order = {};

const OrderStore = createStore({

    getAll(){
        return order;
    },

    get(id) {
        return order[id];
    }
});

OrderStore.dispatchToken = Dispatcher.register(action => {

    switch (action.actionType) {
        case ActionType.REQUEST_ORDER:
            //TODO 设置值, 触发事件
            OrderStore.emitChange();
            break;
        default:
            break;
    }

});

export default  OrderStore;

