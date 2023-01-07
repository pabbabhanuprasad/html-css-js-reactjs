import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import { createStore } from "redux";

const root = ReactDOM.createRoot(document.getElementById("root"));

const defaultState = {
  names: ["HTML","CSS","JAVASCRIPT","BOOTSTRAP"],
  books: [],
  projects: [],
  products: [],
  employes: [],
};

const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case "Add_User":
      let newUsers=[...state.names]
      newUsers.push(action.payload)
      return {...state,names:newUsers}
      case "Delete_User":
      let deleteUsers={...state.names.filter((user)=>user !== action.payload)};
      return {...state,names:deleteUsers}
    default:
      return state;
  }
};
const store = createStore(reducer);
console.log(store);
// store.dispatch(addUserAction())
root.render(
  
    <Provider store={store}>
      <App />
    </Provider>
  
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
