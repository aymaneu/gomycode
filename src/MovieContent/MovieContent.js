import React, {useState} from 'react'
import { useLocation, Link} from 'react-router-dom';
import './MovieContent.css'

const MovieContent = () => {

    const location = useLocation();
    const [MV,setMV] = useState(location.state);


    return (

        <div className="d-flex align-items-center justify-content-space-around m-3">

            <section className="Picture">
            <img className="image" src={MV.movie.poster} alt =""/>
            </section>

            <section className="p-4">
             <div className="d-flex align-items-baseline">
             <h2>{MV.movie.title}</h2>
             <h6>(6.5K)</h6> 
             <i class="fas fa-star"></i>
             <h3>8</h3>
             <h6>/10</h6>
             </div>
             <p>{MV.movie.description}</p>
             <h6 className="text-secondary">Date of release : {MV.movie.dateOfRelease}</h6>

             <section className="d-flex align-items-center">
                 <span className ="bg-primary text-white  p-2">{MV.movie.type[0]}</span>
                 <span className ="bg-secondary text-white  p-2 m-2">{MV.movie.type[1]}</span>
                 <span className ="bg-success text-white  p-2">{MV.movie.type[2]}</span>

             </section>

             <section className="Actors mt-3">
                  <h4 className="mb-4">Actors</h4>
                  <p className="act">{MV.movie.actors[0]}</p>
                  <hr/>
                  <p className="act">{MV.movie.actors[1]}</p>
                  <hr/>
                  <p className="act">{MV.movie.actors[2]}</p>
             </section>

             <section className="mt-5">
          <Link to ={{
             pathname : "./Trailer",
             state : {Item : MV.movie},

             }}>  <button class="btn btn-warning" type="submit">
                Watch now <i class="fas fa-eye"></i>
              </button></Link>
            </section>

            </section>

            

            
        </div>
    )
}

export default MovieContent
