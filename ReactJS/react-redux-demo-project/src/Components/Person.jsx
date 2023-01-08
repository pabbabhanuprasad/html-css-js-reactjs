import React, { Component } from 'react'
import { connect} from 'react-redux';
import { addPersonAction } from '../store/Actions';

class Person extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         fname:"",
         lname:"",
         email:""

      }
      console.log(this.props);
    }
    handleChange=(e)=>{
        let newUser={...this.state};
        newUser[e.target.name]=e.target.value;
        this.setState(newUser)
    }
addPerson=()=>{
    console.log(this.state);
    
    this.props.addPerson(this.state)
console.log(this.props.allPersons);
}

  render() {
    return (
      <div>
        <form>
          <lable htmlform="">First Name :</lable>
          <input type="text" name="fname" value={this.state.fname} onChange={(e) => {this.handleChange(e)}}/><br />
          <lable htmlform="">Last Name :</lable>
          <input type="text" name="lname" value={this.state.lname} onChange={(e) => {this.handleChange(e)}}/><br />
          <lable htmlform="">Email</lable>
          <input type="text" name="email" value={this.state.email} onChange={(e)=>{this.handleChange(e)}}/><br/>
          <button type="button" onClick={this.addPerson}>Add User</button>
          
        </form>
        <ul>
            {this.props.allPersons.map((user,i)=><li key={i}>{user.fname}</li>)}
        </ul>
      </div>
    )
  }
}
function mapStateToProps(state){
return {

    allPersons:state.persons
}
}
function mapDispatchToProps(){
   return {
    addPerson:(person)=>(addPersonAction(person))
}
}
export default connect(mapStateToProps,mapDispatchToProps)(Person)
