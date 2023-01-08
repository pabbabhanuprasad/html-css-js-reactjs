import { ADD_PERSON } from "./ActionType";
const defaultState = {
    users: ["Mohan", "Raghu", "Bhanu"],
    books: [],
    projects: [],
    persons: [],
    employes: [],
  };
export const reducer = (state = defaultState, action) => {
    switch (action.type) {
      case "Add_User":
        let newUsers=[...state.users]
        newUsers.push(action.payload)
        return {...state,users:newUsers}
        case "Delete_User":
        let deleteUsers=state.users.filter((user)=>user !== action.payload);
        return {...state,users:deleteUsers};
        case "Changes":
            console.log(action.payload)
            let newPersons={...state.persons};
            newPersons.push(action.payload);
            return {...state,persons:newPersons}


      default:
        return state;
    }
  };