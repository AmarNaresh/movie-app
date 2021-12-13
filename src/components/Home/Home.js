import React,{useEffect} from 'react';
import MovieListing from "../MovieListing/MovieListing";
import { useDispatch } from 'react-redux';
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice';

const Home = () => {
    const textMovies = "john wick";
    const textShows = "tom and jerry";
    const dispatch = useDispatch();    
    useEffect(() => { 
      dispatch(fetchAsyncMovies(textMovies));
      dispatch(fetchAsyncShows(textShows));
    },[dispatch]);

    return (
        <div>
           <div className="banner-img"></div>
          <MovieListing/>
        </div>
    );
};

export default Home;