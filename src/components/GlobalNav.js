import React from 'react'
import { Link } from 'react-router'
import {Menu,Icon,Button} from 'antd';
import cookie from 'js-cookie';

const LinkProps = {};


class GlobalNav extends React.Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { user ,history,location} = this.props;
        console.log(this.props);
        let isActive = history.isActive(location.pathname, location.query);
        console.log(isActive, location);
        let links = [
            {
                path: '/products',
                icon: 'home',
                title: '商品管理'
            }, {
                path: '/calendar',
                icon: 'calendar',
                title: '订单管理'
            }, {
                path: '/grades',
                icon: '',
                title: '促销活动'
            }, {
                path: '/user',
                icon: 'messages',
                title: '会员管理'
            }, {
                path: '/profile',
                icon: 'profile',
                title: '系统设置'
            }
        ];
        return <div><Menu mode="horizontal">
            {
                links.map(function (link) {
                    return <Menu.Item key={link.title}>
                        <Link to={link.path} {...LinkProps}><Icon type={link.icon}/>{link.title}</Link>{' '}
                    </Menu.Item>
                })
            }
        </Menu>
            <Button onClick={()=>{
cookie.remove('TOKEN');
		}}>退出登录</Button>
        </div>
    }
}

export default GlobalNav
