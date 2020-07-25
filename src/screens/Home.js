import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/synchit-logo-full.png";

import "./Home.css";

const Home = () => {
  return (
    <main className='Home'>
      <div className='main-logo'>
        <img src={logo} alt='synchit-logo' />
      </div>

      <div className='info'>
        <Link to='sing-up' className='signup-btn'>
          Sign Up
        </Link>
        <h1>Synch yo'self</h1>
      </div>
    </main>
  );
};

export default Home;
