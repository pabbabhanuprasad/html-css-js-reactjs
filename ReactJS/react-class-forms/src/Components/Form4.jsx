import React, { Component } from "react";

export default class Form4 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        Street: "",
        City: "",
        State:"",
        ZipCode: "",
       Country:""
    },
      allUser: [
        {
            Street: "Street-1",
            City: "Vijayawada",
            State:"AP",
            ZipCode: "345566",
           Country:"India"
        },
        {
            Street: "Street-3",
            City: "Rajahmandry",
            State:"AP",
            ZipCode: "345678",
           Country:"India"
        },
        {
            Street: "Street-7",
            City: "Tanuku",
            State:"AP",
            ZipCode: "534211",
           Country:"India"
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
      Street: "",
      City: "",
      State:"",
      ZipCode: "",
      Country:""
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
    var latestUser = this.state.allUser.filter((myUser)=>myUser.Country !=user.Country)
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
          <h2>Address</h2><hr/>
          <lable htmlform="">Street :</lable>
          <input type="text" name="Street" value={this.state.person.Street} onChange={(e) => {this.handleChange(e)}}/><br/><br />
          <input type="text" name="Street" value={this.state.person.Street} onChange={(e) => {this.handleChange(e)}}/>
          <br /><br />
          <lable htmlform="">City :</lable>
          <input type="text" name="City" value={this.state.person.City} onChange={(e) => {this.handleChange(e)}}/>
          <br /><br />
          <lable htmlform="">State</lable>
          <input type="text" name="State" value={this.state.person.State} onChange={(e) => {this.handleChange(e)}}/>
          <br/><br />
          <lable htmlform="">ZipCode</lable>
          <input type="text" name="ZipCode" value={this.state.person.ZipCode} onChange={(e) => {this.handleChange(e)}}/>
          <br/><br />
          <lable htmlform="">Country</lable>
          <input type="text" name="Country" value={this.state.person.Country} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
          
          {/* terminory operator for addUser and updateUser */}
          {this.state.editIndex !==null ?<button type="button" onClick={this.updateUser} className="btn btn-primary">update User</button> 
          :  <button type="button" onClick={this.addUser} className="btn btn-primary">addUser</button>}
          {/* <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>
          <button type="button" onClick={this.updateUser} className="btn btn-primary">update User</button> */}
        </form>
        <hr></hr>
        <table className="table">
          <thead>
            <tr>
              <th>Street</th>
              <th>City</th>
              <th>State</th>
              <th>ZipCode</th>
              <th>Country</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUser.map((user,i) => (
              <tr key={i}>
                <td>{user.Street}</td>
                <td>{user.City}</td>
                <td>{user.State}</td>
                <td>{user.ZipCode}</td>
                <td>{user.Country}</td>
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
