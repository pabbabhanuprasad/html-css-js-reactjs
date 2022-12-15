const { Component } = require("react");
export class Users extends Component {
  constructor() {
    super();
    this.state = {
      person:{
        fname: "",
        lname: "",
        email:""
      },
    };
  }

  handleChange(e) {
    // console.log(e.target.value);
    // this.setState({fname:e.target.value})
    // console.log(e.target.name);
    // var newObject = {...this.state}
    // newObject[e.target.name] = e.target.value
    // this.setState({newObject})
    var newObject = { ...this.state.person };
    newObject[e.target.name] = e.target.value;
    this.setState({ person:newObject });
  }
  addUser=()=>{
    console.log(this.state)
  }
  editUser=()=>{
    var newUser={
        fname:"Bhanu",
        email:"Bhanu@gmail.com"
    }
    this.setState({person: newUser})
    console.log(newUser)
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
          <button type="button" onClick={this.editUser}>Edit User</button>
        </form>
      </div>
    );
  }
}
