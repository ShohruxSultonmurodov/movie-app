import React from "react";
function Movie({activeMovie}) {
    const img_url = "https://image.tmdb.org/t/p/w1280";
    const {title, vote_average, backdrop_path, overview} = activeMovie;
    let style = {
            'background':`url(${backdrop_path?img_url+backdrop_path:'https://images.unsplash.com/photo-1542204165-65bf26472b9b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80'})`,
            
            'background-repeat':'no-repeat',
            'background-size':'cover',
            'background-position':'center'
    }
    return (
        
        <div style={style} className="one_movie mx-auto row">
            <div className="col-10 mx-auto">
                <div className="movie_info">
                    <h1 className="text-center">{title}</h1>
                    <p>{overview}</p>
                    <div className="vote">Vote: <span className={`${vote_average>=8?'green':vote_average>=6?'orange':'red'}`}>{vote_average}</span> </div>
                </div>
            </div>
        </div>
    )
}

export default Movie;