import React, { Component } from "react";

export default class Form5 extends Component {
  constructor(props) {
    super(props);

    this.state = {
      person: {
        UserName: "",
        Password: "",
        EmailAddress: "",
        DateofBirth:"",
        Height:"",
        Weight:""
      },
      allUser: [
        {
            UserName: "Mohan",
            Password: "Mohan@1223",
            EmailAddress: "Mohan@gmail.com",
            DateofBirth:"12-03-2000",
            Height:"5.8",
            Weight:"60kgs"
          },
          {
            UserName: "Raghu",
            Password: "Raghu@123",
            EmailAddress: "Raghu@gmail.com",
            DateofBirth:"13-03-2000",
            Height:"5.7",
            Weight:"61kgs"
          },
          {
            UserName: "Bhanu",
            Password: "Bhanu@123",
            EmailAddress: "Bhanu@gmail.com",
            DateofBirth:"14-03-2000",
            Height:"5.6",
            Weight:"62kgs"
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
      UserName: "",
      Password: "",
      EmailAddress: "",
      DateOfBirth:"",
      Height:"",
      Weight:""
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
    var latestUser = this.state.allUser.filter((myUser)=>myUser.Weight !=user.Weight)
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
          <lable htmlform="">UserName :</lable>
          <input type="text" name="UserName" value={this.state.person.UserName} onChange={(e) => {this.handleChange(e)}}/>
          <br />
          <lable htmlform="">Password:</lable>
          <input type="text" name="Password" value={this.state.person.Password} onChange={(e) => {this.handleChange(e)}}/>
          <br />
          <lable htmlform="">EmailAddress:</lable>
          <input type="text" name="EmailAddress" value={this.state.person.EmailAddress} onChange={(e) => {this.handleChange(e)}}/>
          <br/>
          <select>
                        <option value={"I am a Man"}>I am a Man</option>
                        <option value={"My name is Bhanu Prasad"}>My name is Bhanu Prasad</option><br/>
                        </select><br/><br/>
          <lable htmlform="">DateofBirth:</lable>
          <select name="DateofBirth" value={this.state.person.DateofBirth}  onChange={(e) => { this.handleChange(e) }}>
                        <option value={""}>Year</option>
                        <option value={"2000"}>2000</option>
                        <option value={"2001"}>2001</option>
                        <option value={"2002"}>2002</option>
                        <option value={"2003"}>2003</option>
                        <option value={"2004"}>2004</option>
</select>
<select>
                        <option value={""}>Month</option>
                        <option value={"January"}>January</option>
                        <option value={"Fibruary"}>Fibruary</option>
                        <option value={"March"}>March</option>
                        <option value={"April"}>April</option>
                        <option value={"May"}>May</option>
                        </select>
<select>
                        <option value={""}>Day</option>
                        <option value={"1"}>1</option>
                        <option value={"2"}>2</option>
                        <option value={"3"}>3</option>
                        <option value={"4"}>4</option>
                        <option value={"5"}>5</option>
                    </select> <br /><br />
          <lable htmlform="">Height:</lable>
          <select name="Height" value={this.state.person.Height}  onChange={(e) => { this.handleChange(e) }}>
                        <option value={""}>Height</option>
                        <option value={"5.5"}>5.5</option>
                        <option value={"5.6"}>5.6</option>
                        <option value={"5.7"}>5.7</option>
                        <option value={"5.8"}>5.8</option>
                        <option value={"5.9"}>5.9</option>
            </select>
          <br/><br/>
          <lable htmlform="">Weight:</lable>
          <select name="Weight" value={this.state.person.Weight}  onChange={(e) => { this.handleChange(e) }}>
                        <option value={""}>Weight</option>
                        <option value={"50kgs"}>50kgs</option>
                        <option value={"51kgs"}>51kgs</option>
                        <option value={"52kgs"}>52kgs</option>
                        <option value={"53kgs"}>53kgs</option>
                        <option value={"54kgs"}>54kgs</option>
            </select>
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
              <th>UserName</th>
              <th>Password</th>
              <th>EmailAddress</th>
              <th>DateofBirth</th>
              <th>Height</th>
              <th>Weigth</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {this.state.allUser.map((user,i) => (
              <tr key={i}>
                <td>{user.UserName}</td>
                <td>{user.Password}</td>
                <td>{user.EmailAddress}</td>
                <td>{user.DateofBirth}</td>
                <td>{user.Height}</td>
                <td>{user.Weight}</td>
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
