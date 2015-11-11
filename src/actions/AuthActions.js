import ActionType from '../constants/AuthConstants'
import {Dispatcher} from '../utils'


let AuthAction = {
	login:(member)=>{
		Dispatcher.dispatch({
			type:ActionType.LOGIN,
			payload:member
		})
	}
}


export default AuthAction;
