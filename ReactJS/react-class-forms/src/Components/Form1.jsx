import React, { Component } from "react";

export default class Form1 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        Name: "",
        UserName: "",
        Email: "",
        Password:"",
        Confirm :"",
        Massage:""
      },
      allUser: [
        {
          Name: "Mohan",
          UserName: "Krishna",
          Email: "MohanKrishna@gmail.com",
          Password:"Mohan@123",
          Confirm:"Mohan@123",
          Massage:"My name is Mohan Krishna"
        },
        {
          Name: "Raghu",
          UserName: "Sai",
          Email: "Raghusai@gmail.com",
          Password:"Raghu@123",
          Confirm:"Raghu@123",
          Massage:"My name is RaghuSai"
        },
        {
          Name: "Bhanu",
          UserName: "Prasad",
          Email: "BhanuPrasad@gmail.com",
          Password:"Bhanu@123",
          Confirm:"Bhanu@123",
          Massage:"My name is Bhanu Prasad"
        },
      ],
      editIndex :null
    };
  }
  Send = () => {
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
      Name: "",
      UserName: "",
      Email: "",
      Password:"",
      Confirm:"",
      Massage:""
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
    var latestUser = this.state.allUser.filter((myUser)=>myUser.Massage !=user.Massage)
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
          <lable htmlform="">Name :</lable>
          <input type="text" name="Name" value={this.state.person.Name} onChange={(e) => {this.handleChange(e)}}/>
          <br />
          <lable htmlform="">UserName :</lable>
          <input type="text" name="UserName" value={this.state.person.UserName} onChange={(e) => {this.handleChange(e)}}/>
          <br />
          <lable htmlform="">Email</lable>
          <input type="text" name="Email" value={this.state.person.Email} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
          <lable htmlform="">Password</lable>
          <input type="text" name="Password" value={this.state.person.Password} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
          <lable htmlform="">Confirm</lable>
          <input type="text" name="Confirm" value={this.state.person.Confirm} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
          <lable htmlform="">Massage</lable>
          <input type="text" name="Massage" value={this.state.person.Massage} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
          <br />
          {/* terminory operator for addUser and updateUser */}
          {this.state.editIndex !==null ?<button type="button" onClick={this.updateUser} className="btn btn-primary">update User</button> 
          :  <button type="button" onClick={this.Send} className="btn btn-primary">Send</button>}
          {/* <button type="button" onClick={this.addUser} className="btn btn-primary">Add User</button>
          <button type="button" onClick={this.updateUser} className="btn btn-primary">update User</button> */}
        </form>
        <hr></hr>
        <table className="table">
          <thead>
            <tr>
              <th>Name</th>
              <th>UserName</th>
              <th>Email</th>
              <th>Password</th>
              <th>Confirm</th>
              <th>Massage</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUser.map((user,i) => (
              <tr key={i}>
                <td>{user.Name}</td>
                <td>{user.UserName}</td>
                <td>{user.Email}</td>
                <td>{user.Password}</td>
                <td>{user.Confirm}</td>
                <td>{user.Massage}</td>
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
