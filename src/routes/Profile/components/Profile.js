import React from 'react'
 
import {message,Button} from 'antd'
 

class Profile extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      count:0
    }
 
  }

  componentDidMount(){
 


  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <p>{this.state.count}</p>
        <Button onClick={()=>{
          // The only way to mutate the internal state is to dispatch an action.
          // The actions can be serialized, logged or stored and later replayed.          
          message.success('+1')
        }}> 增加( + 1 )</Button>
        <Button onClick={()=>{         
          message.error('-1')
        }}>减少( - 1 )</Button>

      </div>
    )
  }



}

export default Profile
