/*globals COURSES:true */
import React from 'react'
import Dashboard from './Dashboard'
import GlobalNav from './GlobalNav'


class App extends React.Component {
    render() {
        return (
            <div>
                <GlobalNav {...this.props}/>
                {this.props.children || <Dashboard />}
            </div>
        )
    }
}

export default App
