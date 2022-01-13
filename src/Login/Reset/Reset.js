import React from 'react'
import {Link} from 'react-router-dom';

const Reset = () => {
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
                                            class="bi bi-key-fill text-dark"></i></span>
                                    <input type="password" class="form-control" placeholder="New password"/>
                                </div>

                                <div class="input-group mb-3">
                                    <span class="input-group-text bg-warning"><i
                                            class="bi bi-key-fill text-dark"></i></span>
                                    <input type="password" class="form-control" placeholder="Confirm password"/>
                                </div>
                                
                                <button class="btn btn-warning text-center mt-2" type="submit">
                                    Change
                                </button>
                                <p class="text-center mt-5 text-light">Already have an account?
                                    <Link to ="/SignIn"><span class="text-warning">Sign In</span></Link>
                                </p>
                                
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
            
        </div>
    )
}

export default Reset
