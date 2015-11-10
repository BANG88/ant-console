import React from 'react'
import { Link } from 'react-router'
import {Menu,Icon} from 'antd';

const LinkProps = {

}


class GlobalNav extends React.Component {

	constructor(props, context) {
		super(props, context)
	}

	render() {
		const { user } = this.props

				let links = [
					{
					path:'/products',
					icon:'home',
					title:'商品管理'
				},	{
					path:'/calendar',
					icon:'calendar',
					title:'订单管理'
				},	{
					path:'/grades',
					icon:'',
					title:'促销活动'
				},	{
					path:'/messages',
					icon:'messages',
					title:'会员管理'
				},	{
					path:'/profile',
					icon:'profile',
					title:'系统设置'
				}
			]
		return <Menu mode="horizontal">
		{
			links.map(function (link) {
				return <Menu.Item key={link.title}>
				<Link to={link.path} {...LinkProps}><Icon type={link.icon} />{link.title}</Link>{' '}
				</Menu.Item>
			})
		}
		</Menu>
	}
}

export default GlobalNav
