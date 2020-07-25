import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/synchit-logo.png";

import "./Navbar.css";

const Navbar = () => {
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
            <Link to='sign-in' className='signin btn'>
              Sign In
            </Link>
          </li>
          <li className='nav-item'>
            <Link to='sign-up' className='signup btn'>
              Sign Up
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
