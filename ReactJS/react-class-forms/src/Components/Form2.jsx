import React, { Component } from "react";

export default class Form2 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        FirstName: "",
        LastName: "",
        DateofBirth:"",
        Emailid: "",
        MobileNumber:""
      },
      allUser: [
        {
          FirstName: "Mohan",
          LastName: "Krishna",
          DateofBirth:"12-02-2000",
          Emailid: "MohanKrishna@gmail.com",
          MobileNumber:"45667784"
        },
        {
          FirstName: "Raghu",
          LastName: "Sai",
          DateofBirth:"31-10-2000",
          Emailid: "Raghusai@gmail.com",
          MobileNumber:"4556678"
        },
        {
          FirstName: "Bhanu",
          LastName: "Prasad",
          DateofBirth:"22-01-2000",
          Emailid: "BhanuPrasad@gmail.com",
          MobileNumber:"34578894"
        },
      ],
      editIndex :null
    };
  }
  SUBMIT = () => {
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
      FirstName: "",
      LastName: "",
      DateofBirth:"",
      Emailid: "",
      MobileNumber:""
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
    var latestUser = this.state.allUser.filter((myUser)=>myUser.Emailid !=user.Emailid)
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
          <input type="text" name="First Name" value={this.state.person.FirstName} onChange={(e) => {this.handleChange(e)}}/>
          <br />
          <lable htmlform="">Last Name :</lable>
          <input type="text" name="Last Name" value={this.state.person.LastName} onChange={(e) => {this.handleChange(e)}}/>
          <br />
          <lable htmlform="">Date of Birth</lable>
          <input type="date" name="Date of Birth" value={this.state.person.DateofBirth} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
          <lable htmlform="">Emailid</lable>
          <input type="text" name="Emailid" value={this.state.person.Emailid} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
          <lable htmlform="">Mobile Number</lable>
          <input type="text" name="MobileNumber" value={this.state.person.MobileNumber} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
         
          {/* terminory operator for addUser and updateUser */}
          {this.state.editIndex !==null ?<button type="button" onClick={this.updateUser} className="btn btn-primary">update User</button> 
          :  <button type="button" onClick={this.SUBMIT} className="btn btn-primary">SUBMIT</button>}
          {/* <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>
          <button type="button" onClick={this.updateUser} className="btn btn-primary">update User</button> */}
        </form>
        <hr></hr>
        <table className="table">
          <thead>
            <tr>
              <th>FirstName</th>
              <th>LastName</th>
              <th>DateofBirth</th>
              <th>Emailid</th>
              <th>MobileNumber</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUser.map((user,i) => (
              <tr key={i}>
                <td>{user.FirstName}</td>
                <td>{user.LastName}</td>
                <td>{user.DateofBirth}</td>
                <td>{user.Emailid}</td>
                <td>{user.MobileNumber}</td>
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