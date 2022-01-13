import "./App.css";
import Home from './Home/Home';
import MovieContent from "./MovieContent/MovieContent";
import NavBar from './NavBar/NavBar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Trailer from "./Trailer/Trailer";
import React,{useEffect, useState} from 'react';
import { MovieContext } from "./Contexte/Context";
import Dashboard from "./Dashboard/Dashboard";
import SignIn from './Login/SignIn/SignIn'
import SignUp from "./Login/SignUp/SignUp";
import Reset from "./Login/Reset/Reset";




function App() {
  

  
  return (

    

    <Router>


    <div className="App">
       
    
     
     <Switch>

     <Route path='/Dashboard' component ={Dashboard}/>
     
      <div>
      <NavBar/>
     <Route path='/' component={Home} exact/>
     <Route path='/MovieContent' component ={MovieContent}/>
     <Route path='/Trailer' component ={Trailer}/>
     <Route path='/SignIn' component ={SignIn}/>
     <Route path='/SignUp' component ={SignUp}/>
     <Route path="/ResetPassword" component={Reset}/>
     </div>
    
     

     </Switch>

     

    </div>
    
    </Router>

  );
}

export default App;
