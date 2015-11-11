import ActionType from '../constants/AuthConstants'
import {Dispatcher,EventEmitter} from '../utils'


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
