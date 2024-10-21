import { configureStore } from "@reduxjs/toolkit";
import votingReducer from "./redux/votingSlice"

export const store=configureStore({
    reducer:{
        voting:votingReducer
    }
})