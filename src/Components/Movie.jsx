import {useParams, Link} from 'react-router-dom'

const Movie = (props) => {
    const params = useParams()
    const findMovie = props.data.find(e => e.id === parseInt(params.movieId))
    return(
        <div className='flex'>
            <img src={findMovie.img} width='500' height='500' className='image'></img>
            <div className='cadre' >
            <h1>{findMovie.title}</h1>
            <p>{findMovie.description}</p>
            <Link to='/'> go back</Link>
            </div>

        </div>   
    )
}

export default Movie