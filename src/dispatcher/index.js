/**
 * dispatcher
 */
import {Dispatcher} from 'flux';


let AppDispatcher = new Dispatcher();


/**
 * Dispatches a single action.
 */
function dispatch(actionType, action = {}) {
    if (!actionType) {
        throw new Error('You forgot to specify type.');
    }

    // In production, thanks to DefinePlugin in webpack.config.production.js,
    // this comparison will turn `false`, and UglifyJS will cut logging out
    // as part of dead code elimination.
    if (process.env.NODE_ENV !== 'production') {
        // Logging all actions is useful for figuring out mistakes in code.
        // All data that flows into our application comes in form of actions.
        // Actions are just plain JavaScript objects describing “what happened”.
        // Think of them as newspapers.
        if (action.error) {
            console.error(actionType, action);
        } else {
            console.log(actionType, action);
        }
    }

    AppDispatcher.dispatch({actionType, ...action});
}


/**
 * Dispatches three actions for an async operation represented by promise.
 */
AppDispatcher.dispatchAsync = (promise, types, action = {})=> {
    const { request, success, failure } = types;

    dispatch(request, action);

    promise.then(
        response => dispatch(success, {...action, response}),
        error => dispatch(failure, {...action, error})
    );
};


export default AppDispatcher;
