import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./createslice"

export const store = configureStore({
    reducer:{
        breedid: counterReducer
    }
})