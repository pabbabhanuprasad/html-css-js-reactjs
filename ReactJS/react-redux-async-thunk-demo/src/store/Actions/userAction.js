import axios from "axios";
import { GET_USERS } from "./actionType";
export const getUsersFromServerAction = () => {
  return (dispatch) => {
   getLatestUsers(dispatch)
  };
};
export const deleteUserAction=(id)=>{
    return(dispatch)=>{
        axios.delete("http://localhost:3004/users"+id).then(()=>{
            getLatestUsers(dispatch)
        })
    }
}
function getLatestUsers(dispatch){
    axios.get("http://localhost:3004/users").then((response) => {
        // console.log(response.data)
        dispatch({
          type: GET_USERS,
          payload: response.data,
        });
      });
}