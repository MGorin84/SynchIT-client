import React from "react";

import "./Signin.css";

const Signin = () => {
  //handle login click handler
  //send user data if user
  return (
    <div className='Signin'>
      <h2>Sign In</h2>

      <div className='Signin-form'>
        <div>
          <h3>Sign in</h3>
          <form>
            <input type='email' placeholder='Email address' />
            <input type='Password' placeholder='Password' />
            <button>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signin;
