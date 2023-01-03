import React from "react";
import { useContext } from "react";
import {useState} from 'react';
const AuthContext = React.createContext();
export const AuthProvider = ({ children }) => {
//   const [user, setUser] = useState(null);
const [user, setUser] = useState({fname:"Bhanu"});
  const login=(user)=>{
    setUser(user)
  };
  const logout=()=>{
    setUser(null)
  };
  return <AuthContext.Provider value={{user,login,logout}}>{children}</AuthContext.Provider>;
};
export const useAuth = ()=>{
    return useContext(AuthContext)
    //here useContext is react hook, it takes created context,because of useContext we didn't use ContextConsumer.
}

//line:4  created a context
//line:5 there is a funtion which returns the provider,in that provider we are sending 3 values(empty user,login,logout)