import ActionType from '../constants/AuthConstants'
import Dispatcher from '../dispatcher'

/**
 * Auth 动作
 * @type {{login: AuthAction.login, logout: AuthAction.logout}}
 */
let AuthAction = {
    login: (user)=> {
        Dispatcher.dispatch({
            actionType: ActionType.LOGIN,
            user: user
        })
    },
    logout: ()=> {
        Dispatcher.dispatch({
            actionType: ActionType.LOGOUT
        })
    }
};


export default AuthAction;
