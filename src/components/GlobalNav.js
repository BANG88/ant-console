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
					path:'/',
					icon:'home',
					title:'Home'
				},	{
					path:'/calendar',
					icon:'calendar',
					title:'Calendar'
				},	{
					path:'/grades',
					icon:'',
					title:'Grades'
				},	{
					path:'/messages',
					icon:'messages',
					title:'Messages'
				},	{
					path:'/profile',
					icon:'profile',
					title:'Profile'
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
