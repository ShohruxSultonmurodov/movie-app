import React, {useEffect, useState} from "react";
import Navbar from "./Navbar";
import Movies from "./Movies";
import axios from 'axios';
function Home({setActiveMovie}) {
    const featured = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=0f0e2af2e57d1673ab107a92ac78c5b9";
    const [movies, setMovies] = useState([]);
    function getMovies(api) {
      axios.get(api).then((resp)=>{
        setMovies(resp.data.results);
      })
    }
    useEffect(()=>{
      getMovies(featured);
    },[]);
    return (
      <div className="App container-fluid">
        <Navbar getMovies={getMovies} />
        <Movies movies={movies} setActiveMovie={setActiveMovie} />
      </div>
    );
  }
  
  export default Home;