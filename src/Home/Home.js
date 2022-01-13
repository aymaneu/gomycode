import React, { useState, useEffect } from "react";
import MovieList from "../MovieList/MovieList";
import "./Home.css";
import { MovieContext } from "../Contexte/Context";


const Home = () => {

  const [Movies, setMovies] = useState(MovieContext);

  const [CopieMovies, setCopieMovies] = useState(Movies);
 



  return (
    <div>
      <main>
        
        <MovieList list ={Movies}/>

      </main>
    </div>
  );
};

export default Home;
