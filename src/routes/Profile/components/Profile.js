import React from 'react'

import { createStore } from 'redux'

import {message,Button} from 'antd'

/**
 * This is a reducer, a pure function with (state, action) => state signature.
 * It describes how an action transforms the state into the next state.
 *
 * The shape of the state is up to you: it can be a primitive, an array, an object,
 * or even an Immutable.js data structure. The only important part is that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * In this example, we use a `switch` statement and strings, but you can use a helper that
 * follows a different convention (such as function maps) if it makes sense for your project.
 */
function counter(state = 0, action,args) {
  switch (action.type) {
  case 'INCREMENT':
    return state + 1
  case 'DECREMENT':
    return state - 1
  default:
    return state
  }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
let store = createStore(counter)


class Profile extends React.Component {

  constructor(props){

    super(props);

    this.state = {
      count:0
    }

    // You can subscribe to the updates manually, or use bindings to your view layer.

  }

  componentDidMount(){

    store.subscribe(()=>{
      console.log(store,store.getState());

      this.setState({
        count: store.getState()
      })
    })



  }

  render() {
    return (
      <div>
        <h2>Profile</h2>
        <p>{this.state.count}</p>
        <Button onClick={()=>{
          // The only way to mutate the internal state is to dispatch an action.
          // The actions can be serialized, logged or stored and later replayed.
          store.dispatch({ type: 'INCREMENT',other:{} })
          message.success('+1')
        }}> 增加( + 1 )</Button>
        <Button onClick={()=>{
          store.dispatch({ type: 'DECREMENT' })
          message.error('-1')
        }}>减少( - 1 )</Button>

      </div>
    )
  }



}

export default Profile
