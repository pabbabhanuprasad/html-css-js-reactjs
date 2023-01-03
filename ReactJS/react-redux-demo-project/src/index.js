import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const defaultState = {
  users: ["Mohan", "Raghu", "Bhanu"],
  books: [],
  projects: [],
  products: [],
  employes: [],
};
//Actions functon is used to add value,delete value,create value, read value to the State information
//each action should return an Object.
export const addUserAction = () => {
return {
  type:"Add_User",
  payload:"Lokesh"
}
};
export const deleteUser=()=>{
  return{
    type:"Delete_User",
    payload:"Mohan"

  }
}
const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Add_User":
      let newUsers=[...state.users]
      newUsers.push(action.payload)
      return {...state,users:newUsers}
      case "Delete_User":
      let deleteUsers={...state.users.filter((user)=>user !== action.payload)};
      return {...state,users:deleteUsers}
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log(store);
// store.dispatch(addUserAction())
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
