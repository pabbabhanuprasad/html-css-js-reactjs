import React, { Component } from 'react'

export default class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         person:{
            fname:"",
            lname:"",
            email:""
         }
      }
    }
    addUser=()=>{
        console.log(addUser);
    }
  render() {
    return (
      <div>
        <form>
          <lable htmlform="">First Name :</lable>
          <input type="text" name="fname" value={this.state.person.fname} onChange={(e) => {this.handleChange(e)}}/><br />
          <lable htmlform="">Last Name :</lable>
          <input type="text" name="lname" value={this.state.person.lname} onChange={(e) => {this.handleChange(e)}}/><br />
          <lable htmlform="">Email</lable>
          <input type="text" name="email" value={this.state.person.email} onChange={(e)=>{this.handleChange(e)}}/><br/>
          <button type="button" onClick={this.addUser}>Add User</button>
          
        </form>
      </div>
    )
  }
}
