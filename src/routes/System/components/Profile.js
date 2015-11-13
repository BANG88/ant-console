import React from 'react'

import {message,Button} from 'antd';
import  Container from 'components/Container';


class Profile extends React.Component {

    constructor(props) {

        super(props);

        this.state = {
            count: 0
        }

    }

    componentDidMount() {


    }

    render() {
        return (
            <Container>
                <h2>Profile</h2>
                <p>{this.state.count}</p>
                <Button onClick={()=>{
         
          message.success('+1')
        }}> 增加( + 1 )</Button>
                <Button onClick={()=>{
          message.error('-1')
        }}>减少( - 1 )</Button>

            </Container>
        )
    }


}

export default Profile
