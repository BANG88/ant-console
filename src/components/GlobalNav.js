import React from 'react'
import { Link } from 'react-router'
import {Menu,Icon,Button} from 'antd';


const LinkProps = {};


class GlobalNav extends React.Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { user ,history,location} = this.props;
        const key = this.props.location.pathname;
        const keys = key.replace('/', '') ? [key.replace('/', '')] : ['home'];

        let links = [
            {
                path: '/products',
                icon: '',
                title: '商品管理'
            }, {
                path: '/orders',
                icon: 'book',
                title: '订单管理'
            }, {
                path: '/Promote',
                icon: 'promote',
                title: '促销活动'
            }, {
                path: '/user',
                icon: 'messages',
                title: '会员管理'
            }, {
                path: '/system',
                icon: 'system',
                title: '系统设置'
            }
        ];
        return <div>
            <Button style={{float:'right'}} onClick={this.logout}>退出登录</Button>
            <Menu mode="horizontal" selectedKeys={keys}>
                {
                    links.map(function (link) {
                        return <Menu.Item key={link.path.replace('/','')}>
                            <Link to={link.path} {...LinkProps}><Icon type={link.icon}/>{link.title}</Link>{' '}
                        </Menu.Item>
                    })
                }
            </Menu>

        </div>
    }

    logout() {

    }
}

export default GlobalNav
