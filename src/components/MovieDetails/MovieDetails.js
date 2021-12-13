import React,{useEffect} from 'react';
import "./MovieDetails.scss";
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import {fetchAsyncMoviesorShowsDetails, getSelectedMovieorShow,
    removeSelectedMovieorShowDetails} from "../../redux/movies/movieSlice";

const MovieDetails = () => {
    const {imdbID}= useParams();
    const dispatch = useDispatch();
    const data =useSelector(getSelectedMovieorShow);
    console.log(data);
    useEffect(()  => {
        dispatch(fetchAsyncMoviesorShowsDetails(imdbID));
        return () => {
            dispatch(removeSelectedMovieorShowDetails());
        };
    },[dispatch, imdbID]);
    return (
        
        <div className="selected-movieSection">
            {Object.keys(data).length === 0 ? (<div>.....Loading</div>) : (
            <>
          <div className="section-left">
              <img src={data.Poster} alt={data.Title}/>
          </div>
          <div className="section-right">
              <div className="movie-title">{data.Title}</div>
              <div className="movie-rating">
                  <span>
                       IMDB Rating <i className="fa fa-star"></i>: {data.imdbIDRating}
                  </span>
                  <span>
                       IMDB Votes <i className="fa fa-thumbs-up"></i>: {data.imdbIDVotes}
                  </span>
                  <span> 
                      Runtime <i className="fa fa-film"></i>: {data.Runtime} 
                  </span>
                  <span> 
                      Year <i className="fa fa-calendar"></i>: {data.Year}
                  </span>
              </div>
              <div className="movie-plot">{data.Plot}</div>
              <div className="movie-info">
                 <div>
                    <span>Director</span>
                    <span>{data.Director}</span>
                 </div>
                 <div>
                    <span>Stars</span>
                    <span>{data.Actors}</span>
                 </div>
                 <div>
                    <span>Generes</span>
                    <span>{data.Genre}</span>
                 </div>
                 <div>
                    <span>Languages</span>
                    <span>{data.Language}</span>
                 </div>
                 <div>
                    <span>Awards</span>
                    <span>{data.Awards}</span>
                 </div>
                
              </div>
          </div>
         </>
         )}
        </div>
    );
};

export default MovieDetails;