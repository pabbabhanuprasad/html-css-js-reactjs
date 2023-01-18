// import React from "react";
// import { useEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { getUsersFromServerAction } from "../store/Actions/userAction";
// import UsersTable from "./UsersTable";

// const Users = () => {
//   const dispatch = useDispatch();
//   const userDetails = useSelector((state) => state.users);
//   console.log(userDetails);
//   useEffect(() => {
//     dispatch(getUsersFromServerAction());
//   }, []);
//   return (
//     <div className="container">
//       <div className="row">
//         <div className="col-4"></div>
//         <div className="col-8"></div>
//       </div>
//       <UsersTable persons={userDetails}/>
//     </div>
//   );
// };

// export default Users;

import React, { Component } from "react";
import { connect,  } from "react-redux";
import { deleteUserAction, getUsersFromServerAction } from "../store/Actions/userAction";
import UsersTable from "./UsersTable";
class Users extends Component {
  render() {
    return (
      <div>
        <div className="container">
          <div className="row">
            <div className="col-4"></div>
            <div className="col-8"></div>
          </div>
          <UsersTable persons={this.props.userDetails} handleDelete={this.props.deleteUser}/>
        </div>
      </div>
    );
  }
  componentDidMount(){
    this.props.getUsers();
  }
}
function mapStateToProps(state) {
    return {
        userDetails:state.users
    }
}
function mapDispatchToProps(dispatch) {
    return {
        getUsers:()=>dispatch(getUsersFromServerAction()),
        deleteUser:(id)=>dispatch(deleteUserAction(id))
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Users);
