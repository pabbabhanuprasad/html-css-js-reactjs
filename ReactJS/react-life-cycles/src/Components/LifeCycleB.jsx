import React, { Component } from 'react'

export default class LifeCycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        
      }
      console.log("This is From Constructor LifeCycleB")
    }
    shouldComponentUpdate(){
        console.log("LifeCycleB should Component Triggered")
        return true
    }
  render() {
    console.log("This is From render LifeCycleB")
    return (
      <div>
        <h2>{this.props.msg}</h2>
      </div>
    )
  }
  componentDidMount(){
    console.log("This is From ComponentDidMount LifeCycleB")
  }
}
