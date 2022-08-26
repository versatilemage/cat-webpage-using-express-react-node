import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// const initialState = {
//     cats: [],
//     loadingStatus: false,
//     status:""
// }
// export const getcatDetails = createAsyncThunk(
//     "allcats/getData",
//     async(arg, {rejectWithValue}) => {
//          try{
//             const{data} = await axios.get("https://api.thecatapi.com/v1/breeds")
//             return data
//         } catch (error) {
//             rejectWithValue(error.response.data)
//         }
// })

// const catSlice = createSlice({
//     name: "allcats",
//     initialState,
//     reducers: {},
//     extraReducers:{
//         [getcatDetails.fulfilled]: (state, action) => {
//             state.loadingStatus = false;
//             state.allcats = action.payload.results;
//           },
//         [getcatDetails.rejected]: (state, action) => {
//             state.status = 'Sorry! something went wrong';
//         },
//         [getcatDetails.pending]: (state, action) => {
//             state.loadingStatus = true;
//         },
//     },
// })

export const counterSlice = createSlice({
    name: "breedid",
    initialState:{
        breed: null
    },
    reducers:{
        breedId: (state, action) => {
            state.breed = action.payload
        }
    }
})

// export default catSlice.reducer;
export default counterSlice.reducer
export const {breedId} = counterSlice.actions
// export const { addcat } = catSlice.actions;