import React, {useState} from "react";
import { Link } from "react-router-dom";
import logo from "../assets/synchit-logo.png";
import {useGlobalState} from '../config/store';
import "./Navbar.css";

const Navbar = () => {

  function handleLogout() {
    logoutUser()
    .then(response => console.log("successful logout: ", response.status))
    .catch(error => console.log("Server down: ", error))
    
    dispatch({
    type: "setLoggedInUser",
    data: null
    })
    };

  const {store, dispatch} = useGlobalState();
  const {loggedInUser} = store;



  if(!loggedInUser){
  return (
    <nav>
      <div className='container'>
        <div className='logo'>
          <Link to='/'>
            <img src={logo} alt='synchit-logo' />
          </Link>
        </div>
        <ul className='nav-links'>
          <li className='nav-item'>
            <Link to='sign-in' data-cy='signin' className='signin btn'>
              Sign In
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='sign-up' data-cy='signup' className='signup btn'>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
  } else {
    return (
      <nav>
        <div className='container'>
          <div className='logo'>
            <Link to='/'>
              <img src={logo} alt='synchit-logo' />
            </Link>
          </div>
          <ul className='nav-links'>
            <li className='nav-item'>
              <Link to='sign-out' data-cy='signout' className='signin btn'>
                Sign Out
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  
  }
};

export default Navbar;
