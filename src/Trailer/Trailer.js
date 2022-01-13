import React, {useState} from 'react'
import {useLocation} from 'react-router-dom';
import './Trailer.css';



const Trailer = () => {

    const location = useLocation();
    const [Element,setElement] = useState(location.state);


    return (

        <div className="video">

          <video  className ="display" src="/Record.mp4" autoplay="true" loop="true" muted ="true" type="video/mp4"></video> 
             
        </div>
    )
}

export default Trailer
