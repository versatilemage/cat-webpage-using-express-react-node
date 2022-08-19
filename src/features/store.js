import { configureStore } from "@reduxjs/toolkit";
import { getcatDetails } from "./createslice";

export const store = configureStore({
    reducer:{
        allcats: getcatDetails
    }
})