import React from "react";
import logo from "../assets/synchit-logo.png";

import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className='container'>
        <img src={logo} alt='syncit-logo' />
        <hr />
        <p>&copy;SynchIt 2020</p>
      </div>
    </footer>
  );
};

export default Footer;
