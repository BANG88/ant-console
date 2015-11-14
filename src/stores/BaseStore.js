/**
 * SunEee
 * @date Created on 11/12/15
 * @author YuHui(语晖)<yuhui@suneee.com>
 */

/**
 * 事件系统,提供基础事件支持
 */
import { EventEmitter } from 'events';
/**
 * dispatcher
 */
import AppDispatcher from '../dispatcher';

/**
 * 事件名称
 * @type {string}
 */
const CHANGE = 'CHANGE_EVENT';

/**
 * 基础 Store
 */
export default class BaseStore extends EventEmitter {

    constructor() {
        super();
    }

    /**
     * 注册action
     * @param actionSubscribe
     */
    subscribe(actionSubscribe) {
        this._dispatchToken = AppDispatcher.register(actionSubscribe());
    }

    /**
     * 获取 dispatch Token
     * @returns {*}
     */
    get dispatchToken() {
        return this._dispatchToken;
    }

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
    }
}