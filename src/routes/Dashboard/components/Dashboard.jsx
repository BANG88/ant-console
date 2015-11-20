import React from 'react';
import DashboardActions from 'actions/DashboardActions';
import DashboardStore from 'stores/DashboardStore';
import MainBody from 'components/mainbody';
import {Menu,Breadcrumb,SubMenu,Icon,QueueAnim} from 'antd';


export default React.createClass({

  getInitialState() {
    return {};
  },

  componentDidMount() {

  },
  componentWillUnmout(){

  },
  render() {
       return (
            <QueueAnim type={['right', 'left']} className="anim-wrap">
                <div key="MainBody">
                    控制面板
                </div>
            </QueueAnim>)
  }

});
