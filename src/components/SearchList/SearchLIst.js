import React from 'react';
import { useSelector } from 'react-redux';
import SearchMovieList from '../SearchMoviesList/SearchMovieList';
import { getAllSearchMovies} from '../../redux/movies/movieSlice';

const SearchList = () => {
    const searchMovies = useSelector(getAllSearchMovies);
    let rendersearchmovies  = "";

     rendersearchmovies = 
     searchMovies.Response === "True" ? (
        searchMovies.Search.map ((movie, index) =>(
            <SearchMovieList key={index} search={movie}/>
        ))
    ) : (<div className="movies-error"><h3>{searchMovies.Error}</h3></div>);


    return (
        <div className="search-list">
            <div className="search-container">{rendersearchmovies} </div>
        </div>
    );
};

export default SearchList;