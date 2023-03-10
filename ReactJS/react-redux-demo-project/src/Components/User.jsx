import React, { Component } from "react";
import { connect } from "react-redux";
import { addUserAction, deleteUserAction } from "../store/Actions";


class User extends Component {
  render() {
    console.log(this.props);
    return (
      <div>
        <button onClick={this.props.addUser}>AddUser</button>
        <button onClick={this.props.deleteUser}>DeleteUser</button>
        <ul>
          {this.props.users && this.props.users.map((user, i) => (<li key={i} onClick={() => {
             this.props.deleteUser(user)}}>{user}</li>))}
        </ul>
      </div>
    );
  }
}
function mapStateToProps(state) {
  console.log(state);
  return {
    users:state.users,
    // Bhanu: state.users,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    addUser: () => dispatch(addUserAction("Bhanu")),
    deleteUser: (user) => dispatch(deleteUserAction(user)),
  };
}
// console.log(connect);
// export default User;
//here mapStateToprops is take total state,in that state which component we want we are giving it as argument.
export default connect(mapStateToProps, mapDispatchToProps)(User);
