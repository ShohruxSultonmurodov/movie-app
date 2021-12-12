import React from "react";
import {Link} from 'react-router-dom';
import '../imgs/movie.jpg';
function Movies({movies, setActiveMovie}) {
    const img_url = "https://image.tmdb.org/t/p/w1280";

    function changeActiveMovie(active) {
        setActiveMovie(active);
    }
    return (
        <div className="movies  row my-3 mx-auto">
            {
                movies.map((movie)=><div className="col-md-3 col-sm-6 col-xs-12" key={movie.id}>
                    <Link to={`/movie/${movie.title}`}>
                        <div onClick={()=>changeActiveMovie(movie)} className="movie my-2">
                            <img alt={movie.title} src={movie.poster_path?img_url+movie.poster_path:'https://images.unsplash.com/photo-1560109947-543149eceb16?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80'} />
                            <h2 className="text-center">{movie.title}</h2>
                        </div>
                    </Link>
                </div>)
            }
        </div>
    )
}
export default Movies;