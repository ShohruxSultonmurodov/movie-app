import React, {useState} from "react";
import Home from "./components/Home";
import Movie from "./components/Movie";

import {Route, Routes} from 'react-router-dom';

function App() {
  const [activeMovie, setActiveMovie] = useState('');
  return (
    <div className="App container-fluid">
      <Routes>
        <Route path="movie/:title" element={<Movie activeMovie={activeMovie} />} />
        <Route path="/" element={<Home setActiveMovie={setActiveMovie} />} />
      </Routes>
    </div>
  );
}

export default App;
