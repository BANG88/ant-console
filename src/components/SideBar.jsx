/**
 * SunEee
 * @date Created on 11/13/15
 * @author YuHui(语晖)<yuhui@suneee.com>
 */

import React from 'react';
import {Link} from 'react-router';
import { QueueAnim,Menu, Icon } from 'antd';
const SubMenu = Menu.SubMenu;

/*
商品管理
    商品管理
    价格管理
    商品设置
    库存管理
订单管理
    订单管理
    退换货管理
系统设置
    权限管理
    渠道管理
    系统管理
*/

const menus = {
    products:[{
        
    }]
};

var Sider = React.createClass({
    getInitialState() {
        return {
            current: '1'
        }
    },
    handleClick(e) {
        console.log('click ', e);
        this.setState({
            current: e.key
        });
    },
    render() {
        return <Menu onClick={this.handleClick}                   
                     defaultOpenKeys={['sub1']}
                     selectedKeys={[this.state.current]}
                     mode="inline">
            <SubMenu key="sub1" title={<span><Icon type="mail" /><span>导航一</span></span>}>
                <Menu.Item key="1">选项1</Menu.Item>
                <Menu.Item key="2">选项2</Menu.Item>
                <Menu.Item key="3">选项3</Menu.Item>
                <Menu.Item key="4">选项4</Menu.Item>
            </SubMenu>
            <SubMenu key="sub2" title={<span><Icon type="appstore" /><span>导航二</span></span>}>
                <Menu.Item key="5">选项5</Menu.Item>
                <Menu.Item key="6">选项6</Menu.Item>
                <SubMenu key="sub3" title="三级导航">
                    <Menu.Item key="7">选项7</Menu.Item>
                    <Menu.Item key="8">选项8</Menu.Item>
                </SubMenu>
            </SubMenu>
            <SubMenu key="sub4" title={<span><Icon type="setting" /><span>导航三</span></span>}>
                <Menu.Item key="9">选项9</Menu.Item>
                <Menu.Item key="10">选项10</Menu.Item>
                <Menu.Item key="11">选项11</Menu.Item>
                <Menu.Item key="12">选项12</Menu.Item>
            </SubMenu>
        </Menu>;
    }
});

export default class SideBar extends React.Component {

    constructor(props) {

        super(props);

        this.state = {};

    }

    componentDidMount() {

    }


    componentWillUnmount() {

    }

    render() {

        return (<QueueAnim>
            <div key="SideBar">
                <Sider/>
                {
                    this.props.children
                }
            </div>
        </QueueAnim>)

    }

}


