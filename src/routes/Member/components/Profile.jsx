/**
 * SunEee
 * @date Created on 11/12/15
 * @author YuHui(语晖)<yuhui@suneee.com>
 */

import React from 'react';
import { QueueAnim, Button } from 'antd';

import  MainBody from 'components/MainBody';

export default class Profile extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};

    }

    componentDidMount() {

    }


    componentWillUnmount() {

    }

    render() {

        return (<MainBody>         
            {
              this.props.children ||  <h3>密码修改</h3>
            }
        </MainBody>)

    }

}


