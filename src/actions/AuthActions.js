import ActionType from '../constants/AuthConstants'
import Dispatcher from '../dispatcher'


let AuthAction = {
	login:(member)=>{
		Dispatcher.dispatch({
			type:ActionType.LOGIN,
			payload:member
		})
	}
}


export default AuthAction;
