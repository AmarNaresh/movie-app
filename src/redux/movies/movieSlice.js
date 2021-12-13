import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import MovieApi from '../../common/Api/MovieApi';
import {APIkey} from "../../common/Api/MovieApiKey";

 export const fetchAsyncMovies = createAsyncThunk('movies/fetchAsyncMovies', async(search) =>{
        const  response = await MovieApi.get(`?apiKey=${APIkey}&s=${search}&type=movie`);
      return response.data;
});

export const fetchAsyncShows = createAsyncThunk('shows/ fetchAsyncShows', async (search) =>{
        const  response = await MovieApi.get(`?apiKey=${APIkey}&s=${search}&type= series`);
      return response.data;
});

export const fetchAsyncMoviesorShowsDetails = createAsyncThunk(' movies/ fetchAsyncMoviesorShows', async (id ) =>{
        const  response = await MovieApi.get(`?apiKey=${APIkey}&i=${id}&Plot=full`);
      return response.data;
});

const initialState = {
    movies:{},
    shows:{},
    SelectedMovieorShow: {},
};
const movieSlice = createSlice({
    name: "movies",
    initialState,
    reducers: {
       
        removeSelectedMovieorShowDetails : (state) => {
            state.SelectedMovieorShow = {};
        },  
    },
    extraReducers: {
        [fetchAsyncMovies.pending] : () => {
            console.log("pending");
        },
       [fetchAsyncMovies.fulfilled] : (state, {payload}) => {
           console.log("fetched succesfully");
             return {...state,  movies: payload}
       },
        [fetchAsyncMovies.rejected] : () => {
           console.log("Rejected");
       },
       [fetchAsyncShows.fulfilled] : (state, {payload}) => {
        console.log("fetched succesfully");
          return {...state,  shows: payload}
    },
    [ fetchAsyncMoviesorShowsDetails.fulfilled] : (state, {payload}) => {
        console.log("fetched succesfully");
          return {...state,  SelectedMovieorShow : payload}
    },
  }, 
});
export const {removeSelectedMovieorShowDetails} = movieSlice.actions;
export const getAllMovies = (state) =>state.movies.movies;
export const getAllShows = (state) =>state.movies.shows;
export const getSelectedMovieorShow = (state) =>state.movies.SelectedMovieorShow;
export default movieSlice.reducer;