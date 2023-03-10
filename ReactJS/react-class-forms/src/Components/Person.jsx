import React, { Component } from "react";

export default class Person extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        fname: "",
        lname: "",
        email: "",
      },
      allUser: [
        {
          fname: "Mohan",
          lname: "Krishna",
          email: "MohanKrishna@gmail.com",
        },
        {
          fname: "Raghu",
          lname: "Sai",
          email: "Raghusai@gmail.com",
        },
        {
          fname: "Bhanu",
          lname: "Prasad",
          email: "BhanuPrasad@gmail.com",
        },
      ],
      editIndex :null
    };
  }
  addUser = () => {
    console.log(this.state.person);
    var newAllUsers = [...this.state.allUser];
    newAllUsers.push(this.state.person);
    this.setState({ allUser: newAllUsers });
    // to clear the form
    this.clearForm();
  };
  handleChange = (e) => {
    // copy of existing state Object
    var newPerson = { ...this.state.person };
    newPerson[e.target.name] = e.target.value;
    this.setState({ person: newPerson });
    // console.log("Name : - ",e.target.name)
    // console.log("values : -",e.target.value);
  };

  clearForm = () => {
    var newForm = {
      fname: "",
      lname: "",
      email: "",
    };
    this.setState({ person: newForm });
  };
  // i indicates where should we update the object after completion of the edit
  editUser = (user,i) => {
    console.log(user);
    this.setState({person:user,editIndex:i})
  };

  deleteUser = (user) => {
    console.log(user);
    var latestUser = this.state.allUser.filter((myUser)=>myUser.email !=user.email)
    this.setState({allUser:latestUser})
  };
  updateUser=()=>{
    var latestUser = [...this.state.allUser]
    latestUser[this.state.editIndex]=this.state.person;
    this.setState({allUser:latestUser,editIndex:null});
    this.clearForm()
  }
  render() {
    return (
      <div>
        <form>
          <lable htmlform="">First Name :</lable>
          <input type="text" name="fname" value={this.state.person.fname} onChange={(e) => {this.handleChange(e)}}/>
          <br />
          <lable htmlform="">Last Name :</lable>
          <input type="text" name="lname" value={this.state.person.lname} onChange={(e) => {this.handleChange(e)}}/>
          <br />
          <lable htmlform="">Email</lable>
          <input type="text" name="email" value={this.state.person.email} onChange={(e) => {this.handleChange(e)}}/>
          <br />
          {/* terminory operator for addUser and updateUser */}
          {this.state.editIndex !==null ?<button type="button" onClick={this.updateUser} className="btn btn-primary">update User</button> 
          :  <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>}
          {/* <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>
          <button type="button" onClick={this.updateUser} className="btn btn-primary">update User</button> */}
        </form>
        <hr></hr>
        <table className="table">
          <thead>
            <tr>
              <th>First</th>
              <th>Last</th>
              <th>Handle</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUser.map((user,i) => (
              <tr key={i}>
                <td>{user.fname}</td>
                <td>{user.lname}</td>
                <td>{user.email}</td>
                <td>
                  {/* if we pass the user in first paranthesis in onClick it will become synthetic event */}
                  <button className="btn btn-warning" onClick={() => {this.editUser(user,i) }}>Edit</button>
                </td>
                <td>
                  <button className="btn btn-danger" onClick={() => {this.deleteUser(user)}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
  }
}
