import React, { Component } from 'react'
import {connect} from 'react-redux';
import { addUserAction } from '..';

 class User extends Component {
  render() {
    console.log(this.props)
    return (
      <div>

      </div>
    )
  }
}
function mapStateToProps(state){
    console.log(state);
    return {
        // users:state.users,
        Bhanu:state.users,
    }
}
function mapDispathToProps(){
    return{
        addUser:addUserAction
    }
}
// console.log(connect);
// export default User;
//here mapStateToprops is take total state,in that state which component we want we are giving it as argument.
export default connect(mapStateToProps,mapDispathToProps)(User)