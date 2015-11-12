import ActionType from '../constants/AuthConstants'
import {EventEmitter} from '../utils'
import Dispatcher from '../dispatcher'

let AuthStore = Object.assign({},EventEmitter.prototype,{



})


AuthStore.dispatchToken = Dispatcher.register((action)=>{
	switch (action.type) {
		case ActionType.LOGIN:
			console.log(this);
			break;

		default:

	}
})


export default AuthStore;
