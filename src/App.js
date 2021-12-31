import { Route,Switch, Link } from "react-router-dom"
import {useState} from 'react';
import Home from './Components/Home'
import Movies from './Components/Movies'
import Movie from './Components/Movie'
import "./App.css"

const App = () => {

    const [isAuth,setIsAuth] = useState(false)
    const movies = [
        {
            id: 1,
            title: 'The Dark Knight Rises',
            description: 'Bane, an imposing terrorist, attacks Gotham City and disrupts its eight-year-long period of peace. This forces Bruce Wayne to come out of hiding and don the cape and cowl of Batman again.',
            img: 'https://m.media-amazon.com/images/M/MV5BMTk4ODQzNDY3Ml5BMl5BanBnXkFtZTcwODA0NTM4Nw@@._V1_UY1200_CR90,0,630,1200_AL_.jpg'
        },
    ]

    const routes = [
        {
            path:'/',
            main: () => <Home/>
        },
        {
            path:'/movies',
            main: () => <Movies data={movies}/>
        },
        {
            path:'/movies/:movieId',
            main: () => <Movie data={movies}/>
        },
     
    ]
return (
        <>
        <div className='links'>
        <button><Link to='/'>Home</Link></button>
        <button> <Link to='/movies'>Movies</Link></button>
           </div>
        
    
        <Switch>
            {routes.map((route,index) => (
                <Route 
                    key={index}
                    path={route.path}
                    children={route.main}
                    exact/>
            ))}
        </Switch>
        </>
    )
}

export default App