import React from 'react';
import Dashboard from './Dashboard';
import GlobalNav from './GlobalNav';
import { QueueAnim, Button } from 'antd';


import  MainBody from './MainBody';


class App extends React.Component {

    render() {
        return (
            <div>
                <QueueAnim type={['right', 'left']}>
                    <GlobalNav {...this.props} key="global-nav"/>
                </QueueAnim>
                <MainBody>{
                    this.renderContainer()
                }</MainBody>
            </div>
        )
    }

    renderContainer() {
        let children = this.props.children;
        return children || <Dashboard />
    }
}

export default App
