/**
 * SunEee
 * @date Created on 11/13/15
 * @author YuHui(语晖)<yuhui@suneee.com>
 */


import React from 'react';
import MainBody from './MainBody';
import SideBar from './SideBar';
import {Row,Col} from 'antd';


export default class Container extends React.Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {

    }


    componentWillUnmount() {

    }

    render() {
        const {children,sidebar} = this.props;

<<<<<<< HEAD:src/components/Container.js
        console.log(sidebar)
        return (

            <div className="container-router-wrap">
                <Row>
                    <Col span="5">
=======
        return ( <Row>
                    <Col span="3">
>>>>>>> origin/master:src/components/Container.jsx
                        <SideBar type={sidebar}></SideBar>
                    </Col>
                    <Col span="21">
                        <MainBody>
                            {
                            
                             children  
                              
                            }
                        </MainBody>
                    </Col>
                </Row>)

    }

}


