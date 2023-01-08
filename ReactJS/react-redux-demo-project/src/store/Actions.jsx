//Actions functon is used to add value,delete value,create value, read value to the State information

import { ADD_PERSON } from "./ActionType";

//each action should return an Object.
export const addUserAction = () => {

    return {
      type:"Add_User",
      payload:"Lokesh"
    }
    };
    export const deleteUserAction=()=>{
      return{
        type:"Delete_User",
        payload:"Mohan"
    
      }
    }
    export const addPersonAction=(person)=>{
        console.log(person)
        return{
            type:"CHANGES",
            payload:person
        }
    }