import assign from 'object-assign';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';


/**
 * create store
 * @param spec
 */
export function createStore(spec) {

    const emitter = new EventEmitter();

    emitter.setMaxListeners(0);

    const store = assign({
        emitChange() {
            emitter.emit(CHANGE_EVENT);
        },

        addChangeListener(callback) {
            emitter.on(CHANGE_EVENT, callback);
        },

        removeChangeListener(callback) {
            emitter.removeListener(CHANGE_EVENT, callback);
        }
    }, spec);


    //auto bind
    for (var key in store) {
        if (store.hasOwnProperty(key) && typeof key === 'function') {
            store[key] = store[key].bind(store);
        }
    }

    return store;
}
