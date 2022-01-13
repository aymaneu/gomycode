import React,{useRef} from "react";
import './SignIn.css';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {useHistory} from 'react-router-dom';

const SignIn = ({users}) => {

  const username = useRef();
  const password = useRef();
   const history = useHistory()


  const redirecthistory = () =>{
   
    let url ="/Dashboard";
    
    history.push(url)
     
  }

  

  
  
  return (
    
<div>
        <div class="container-fluid vh-100 bg-dark">
            <div class="">
                <div class="rounded d-flex justify-content-center" style={{paddingTop : "50px"}}>
                    <div class="col-md-4 col-sm-12 shadow-lg p-5 Sign">
                        <div class="text-center">
                            <h3 class="text-warning">Sign In</h3>
                        </div>
                        <form action="">
                            <div class="p-4">
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-warning"><i
                                            class="bi bi-person-plus-fill text-dark"></i></span>
                                    <input type="text" class="form-control" ref= {username} placeholder="Username"/>
                                </div>
                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-warning"><i
                                            class="bi bi-key-fill text-dark"></i></span>
                                    <input type="password" class="form-control" ref={password} placeholder="password"/>
                                </div>
                                <div class="form-check">
                                    <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                    <label class="form-check-label text-light" for="flexCheckDefault">
                                        Remember Me
                                    </label>
                                </div>
                                <button class="btn btn-warning text-center mt-2" onClick={()=>{

                                   username.current.value ==="admin"&& password.current.value==="admin" ? redirecthistory() : alert("Wrong entries")

                                }}>
                                    Login
                                </button>
                                <p class="text-center mt-5 text-light">Don't have an account?
                                    <Link to ="/SignUp"><span class="text-warning">Sign Up</span></Link>
                                </p>
                                <Link to="/ResetPassword"><p class="text-center text-warning">Forgot your password?</p></Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    </div>


    
  );
};

const UserList = connect (

    (state) => ({users : state})

)

export default UserList(SignIn);

