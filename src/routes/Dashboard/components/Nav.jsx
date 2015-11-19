import React from 'react'
import { Link } from 'react-router'
import {Dropdown,Menu,Icon,Button} from 'antd';

import LoginStore from 'stores/LoginStore';
import LoginActions from 'actions/LoginActions';


import './Nav.less';


const LinkProps = {};


class GlobalNav extends React.Component {

    constructor(props, context) {
        super(props, context)
    }

    render() {
        const { user ,history,location} = this.props;
        const key = this.props.location.pathname;
        const keys = key.replace('/', '') ? [key.replace('/', '')] : ['home'];

        const links = [
            {
                path: '/products',
                icon: 'appstore',
                title: '商品管理'
            }, {
                path: '/orders',
                icon: 'book',
                title: '订单管理'
            }, {
                path: '/system',
                icon: 'setting',
                title: '系统设置'
            }
        ];
        
        const accountMenu = <Menu>
  <Menu.Item>
    <Link to='/user'> <Icon type="user" />  账号管理</Link>
  </Menu.Item>
  <Menu.Item>
    <Link to='/user/updatePassword'> <Icon type="lock" /> 修改密码</Link>
  </Menu.Item>
  <Menu.Item>
    <Link to='/logout'> <Icon type="logout" /> 退出系统</Link>
  </Menu.Item>
</Menu>;
        
        return  (<div className="ant-layout-topaside">
      <div className="ant-layout-header">
        <div className="ant-layout-wrapper">
          <div className="ant-layout-right-menu">
           <Dropdown overlay={accountMenu}>
            <Button type="ghost" shape="circle-outline" size="large">
                            <Icon type="user" /> 
            </Button>                        
           </Dropdown>
           
             
          </div>
          <div className="ant-layout-logo">
          <Link to='/'>LOGO</Link>
          </div>   
           <Menu mode="horizontal"  theme="blue"  selectedKeys={keys} style={{lineHeight: '64px'}}>
                {
                    links.map(function (link) {
                        return <Menu.Item key={link.path.replace('/','')}>
                            <Link to={link.path} {...LinkProps}><Icon type={link.icon}/>{link.title}</Link>{' '}
                        </Menu.Item>
                    })
                }
            </Menu>
        </div>
      </div>     
    </div> )
    }

    logout() {
        LoginActions.logout();
    }
}

export default GlobalNav
