import { usersReducer } from "./Reducers/usersReducer";
import {configureStore} from "@reduxjs/toolkit";
import { productsReducer } from "./Reducers/productsReducer";
export const mainstore=configureStore({
    //in configureStore we can pass no of reducers
    reducer:{
       users: usersReducer,
       products:productsReducer
    }

});