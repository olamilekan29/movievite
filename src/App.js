// import {useEffect, useState} from 'react';
// import './App.css';
// import searchicon from './search.svg'
// import MovieCard from './MovieCard';

// //  b39d70bb

// const  URL = 'http://www.omdbapi.com/?apikey=b39d70bb';

 
// const movie1 = {
  
//     "Title": "Batman Begins",
//     "Year": "2005",
//     "imdbID": "tt0372784",
//     "Type": "movie",
//     "Poster": "N/A"

// }
// function App() {

//     const [movies, setMovies] = useState([]);
  

//     const searchMovies = async (title) =>{
//       const response = await fetch(`${URL}&S=${title}`);

//       const data = await response.json();
//       setMovies(data.search);
//     }
//   useEffect(() => {

//     searchMovies('Batman');
//   }, []);
//   return (
//     <div className='app'>
//       <h1>MovieLand</h1>

//       <div className='search'>
//         <input
//         placeholder='Search for Movies'
//         value='Batman'
//         onChange={() => {}}


//         />
//         <img
//         src={searchicon}
//         alt='search'
//         onClick={() => {}}
//         />
//       </div>

//       {
//         movies?.length > 0
//         ? (
//         <div className="container">
          
//             <MovieCard movie1={movies[0]} />
//              </div>
//           ) :
//           (
//             <div className='empty'>
//               <h2>no movies found</h2>
//             </div>
//           )
//           }
       
      
     
       
      
      
//     </div>
//   );
// }

// export default App;


import React, { useState, useEffect } from "react";

import MovieCard from "./MovieCard";
import SearchIcon from "./search.svg";
import "./App.css";

const API_URL = "http://www.omdbapi.com?apikey=b39d70bb";

const App = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    searchMovies("Batman");
  }, []);

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  };

  return (
    <div className="app">
      <h1>MovieLand</h1>

      <div className="search">
        <input
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
          placeholder="Search for movies"
        />
        <img
          src={SearchIcon}
          alt="search"
          onClick={() => searchMovies(searchTerm)}
        />
      </div>

      {movies?.length > 0 ? (
        <div className="container">
          {movies.map((movie) => (
            <MovieCard movie={movie} />
          ))}
        </div>
      ) : (
        <div className="empty">
          <h2>No movies found</h2>
        </div>
      )}
    </div>
  );
};

export default App;