import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import movieAPI from "../API/movieAPI";
import { APIKEY } from "../API/APIKEY";


//fetch all movies
export const fetchMovie=createAsyncThunk('movie/addmovie',async(term1)=>{

    const res=await movieAPI.get(`?apikey=${APIKEY}&s=${term1}&type=movie`);
    return res.data;
});


//fetch all series
export const fetchSeries=createAsyncThunk('series/addSeries',async(term2)=>{
    const res=await movieAPI.get(`?apikey=${APIKEY}&s=${term2}&type=series`);
    return res.data;

});
// fetch movie detail
export const fetcheDetailsMOVIE=createAsyncThunk('movie/show',async(id)=>{
const res= await movieAPI.get(`?apikey=${APIKEY}&i=${id}&Plote=full`)
return res.data;
})





export const MovieSlice=createSlice({
    name:'movie',
    initialState:{
        movie:{},
        series:{},
        shows:{},
    },
    reducers:{
        RemoveSelectedMovie:(state)=>{
        state.shows={}
        },
    },
    extraReducers:{
        [fetchMovie.pending]:()=>{
            console.log("starting")
        },
        [fetchMovie.fulfilled]:(state,{payload})=>{
            state.movie=payload;
            // console.log('series:',state.movie.Search);

        },
        [fetchMovie.rejected]:()=>{
            console.log("error")
        },
        [fetchSeries.fulfilled]:(state,{payload})=>{
            state.series=payload;
            // console.log('series:',state.series.Search);
        },
        [fetchSeries.rejected]:()=>{
            console.log('error seies')
        },
        [fetcheDetailsMOVIE.fulfilled]:(state,{payload})=>{
            return {...state,shows:payload}

        }
    }
});
export const {addmovie,RemoveSelectedMovie} =MovieSlice.actions;
export default MovieSlice.reducer;