import { GET_USERS } from "../Actions/actionType"
import { defaultState } from "../defaultState"

export const usersReducer=(state=defaultState,action)=>{
    switch(action.type){
        case GET_USERS:
            return  {...state,users:action.payload}
        default:
            return state
    }
}