/**
 * SunEee
 * @date Created on 11/12/15
 * @author YuHui(语晖)<yuhui@suneee.com>
 */
import AuthActions from '../actions/AuthActions';

import fetch from './WebApi'


class AuthService {


    login(user) {

        user = JSON.stringify(user);

        return fetch({
            url: '/login.login',
            data: user
        }).then(function (res) {
            //TODO: 登录成功后api 应该给前端返回一个 token,并把用户信息返回回来.以后每次请求都带上这个 token 去验证
            AuthActions.login({
                //fixme: 假的数据
                user: JSON.parse(user),
                token: '模拟 token 真实环境需换掉'
            });
        });
    }


    logout() {

        AuthActions.logout();

    }

}


export  default new AuthService();