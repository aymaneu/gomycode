import React from 'react'
import MovieCard from '../MovieCard/MovieCard';
import './MovieList.css';


const MovieList = ({list}) => {
    return (
        <div className="Movies">
        
        {
            list.map(movie => (

                <div className="Movies">
               <MovieCard   film={movie}/>
               </div>

            ))
        }

            
        </div>
    )
}

export default MovieList
