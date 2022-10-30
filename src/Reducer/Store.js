import { configureStore } from "@reduxjs/toolkit"
// import { MovieSlice } from "./MovieSlice"
import MovieSlice from "./MovieSlice"
export const  store=configureStore({
    reducer:{
        movie:MovieSlice,
    }
})