import ActionType from '../constants/DashboardConstants';
import Dispatcher from '../dispatcher';
import fetch from '../utils/WebApi';


export default {
    get: (params)=> {

        Dispatcher.dispatch({
            actionType: ActionType.REQUEST_DASHBOARD
        })

    }
};


