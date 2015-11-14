import ActionType from '../constants/AuthConstants';
import BaseStore from './BaseStore';
import {Cookie} from '../utils';

const TOKEN = 'TOKEN';


/**
 * 继承自 BaseStore
 */
class AuthStore extends BaseStore {

    /**
     * 构造函数,注册 action 到 dispatcher
     * 初始化一些基础数据
     */
    constructor() {
        super();

        this.subscribe(()=>  this._registerToActions.bind(this));

        this._user = null;

    }


    /**
     * 注册 action 到 dispatcher
     * @param action
     * @private
     */
    _registerToActions(action) {
        switch (action.actionType) {

            //登录
            case ActionType.LOGIN:
                this._user = action.user;
                Cookie.set(TOKEN, action.user.token);
                this.emitChange();
                break;

            //退出登录
            case ActionType.LOGOUT:
                this._user = null;
                Cookie.remove(TOKEN);
                this.emitChange();
                break;
            default:
                break;

        }
    }


    /**
     * 获取当前用户信息
     * @returns {null|*}
     * @constructor
     */
    get User() {
        return this._user;
    }


    /**
     * 是否登录
     * @returns {boolean}
     */
    isLoggedIn() {
        //return true;
        return !!Cookie.get(TOKEN);
    }


}


/**
 * 导出 Store
 */
export default new AuthStore();
