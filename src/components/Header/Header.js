import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import "./Header.scss";
import { fetchAsyncMovies, fetchAsyncShows } from '../../redux/movies/movieSlice';

const Header = () => {
  const [search, setSearch]= useState("");
  const dispatch = useDispatch();
  const submitHandler =(e) => {
    e.preventDefault();
    if(search === "" ) return alert("Please Enter Movies/Shows  In Search Box.... ");
    dispatch(fetchAsyncMovies(search));
    dispatch(fetchAsyncShows(search));
    setSearch("");
  };
    return (
        
        <div className="header">
        
          <div className="logo"><Link to="/">Movies Hub </Link></div>
          <div className="search-box">
            <form onSubmit={submitHandler}>
              <input type="text" value={search} placeholder="Search movies or Shows" onChange={(e) => setSearch(e.target.value) }/>
              <button typ="submit"><i className="fa fa-search"></i></button>
            </form>
          </div>
        </div>
       
    );
};

export default Header;