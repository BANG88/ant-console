import React from 'react';
import Dashboard from './Dashboard';
import GlobalNav from './Nav';
import { QueueAnim, Button } from 'antd';


import  MainBody from 'components/MainBody';

import './App.less';

class App extends React.Component {

    render() {
     const key = this.props.location.pathname;
        return (
            <div>
                <QueueAnim type={['right', 'left']}  className="anim-wrap">
                    <GlobalNav {...this.props} key="global-nav"/>
                </QueueAnim>
                 <QueueAnim type={['right', 'left']}  className="anim-wrap anim-wrap-body ">
                   {React.cloneElement(this.props.children || <Dashboard />, {key: key})}
                </QueueAnim>
                
            </div>
        )
    }

}

export default App
