import React, { useState, useEffect, useRef } from "react";
import "./NavBar.css";
import { Link } from "react-router-dom";




const NavBar = ({ name, filterM,...props}) => {
  

  


  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand text-warning" href="#">
            Anime-Site
          </a>
          <button className="navbar-toggler" type="button">
            <span class="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link to="/">Home</Link>
              </li>
            </ul>

            <form
              className={`d-flex align-items-center w-75 ${
                name !== "App"
                  ? "justify-content-end"
                  : "justify-content-evenly"
              }`}
            >
              <div
                className={`input-group w-75 ${name !== "App" ? "d-none" : ""}`}
              >
                <input
                  type="text"
                  className="form-control"
                  placeholder="Search"
                />
                <button
                  className="btn btn-outline-secondary"
                  type="button"
                  id="button-addon2"
                >
                  <i className="fas fa-search"></i>
                </button>
              </div>

                 <Link to="/SignIn">
                  <button className="btn btn-warning" type='button' >
                    Sign-in <i className="fas fa-sign-in-alt"></i>
                  </button>

                  </Link>
                   
                  

            </form>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
