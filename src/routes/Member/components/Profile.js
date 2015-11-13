/**
 * SunEee
 * @date Created on 11/12/15
 * @author YuHui(语晖)<yuhui@suneee.com>
 */

import React from 'react';
import {Link} from 'react-router';
import { QueueAnim, Button } from 'antd';
import  Container from 'components/Container';


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

        return (<Container>
            <Link to={'/user/updatePassword'}>修改密码</Link>
            {
                this.props.children
            }
        </Container>)

    }

}


