import assign from 'object-assign';
import {EventEmitter} from 'events';

const CHANGE_EVENT = 'change';

<<<<<<< HEAD
/**
 * 事件名称
 * @type {string}
 */
const CHANGE = 'CHANGE_EVENT';
=======
>>>>>>> origin/master

/**
 * create store
 * @param spec
 */
export function createStore(spec) {

    const emitter = new EventEmitter();

<<<<<<< HEAD
    /**
     * 注册action
     * @param actionSubscribe
     */
    subscribe(actionSubscribe) {
        this._dispatchToken = AppDispatcher.register(actionSubscribe());
    }
=======
    emitter.setMaxListeners(0);
>>>>>>> origin/master

    const store = assign({
        emitChange() {
            emitter.emit(CHANGE_EVENT);
        },

<<<<<<< HEAD
    /**
     * 触发事件
     */
    emitChange() {
        console.log(` 执行事件=> ${CHANGE}`);
        this.emit(CHANGE);
    }

    /**
     * 注册事件
     * @param cb
     */
    addChangeListener(cb) {
        console.log(` 注册事件=> ${cb}`);
        this.on(CHANGE, cb)
    }

    /**
     * 移除事件
     * @param cb
     */
    removeChangeListener(cb) {
        console.log(` 移除事件=> ${cb}`);
        this.removeListener(CHANGE, cb);
=======
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
>>>>>>> origin/master
    }

    return store;
}
