import React, {useState} from "react";
import {useGlobalState} from '../config/store'
import {registerUser} from '../services/authServices';

import "./Signup.css";

const Signup = ({history}) => {
  const initialFormState = {
  username: "",
  position: "",
  email: "",
  password: ""
  }
  const [errorMessage, setErrorMessage] = useState(null);
  const [userDetails,setUserDetails] = useState(initialFormState)
  const {dispatch} = useGlobalState()
  
  function handleChange(event) {
  const name = event.target.name
  const value = event.target.value
  setUserDetails({
  ...userDetails,
  [name]: value
  })
  }
  function handleSubmit(event) {
  event.preventDefault()
  registerUser(userDetails)
  .then(response => {
  dispatch({
  type: "setLoggedInUser",
  data: userDetails.username
  })
  history.push("/dashboard")
  
  })
  .catch(error => {
    console.log(`An error occurred authenticating: ${error}`)
    });
  
  
  }
  return (
    <div className='Signup'>
      <h2>Sign Up</h2>
      <p>
        Welcome to SynchIT! To get started, please enter your details.
      </p>
      <div className='Signup-form'>
        <div>
          <h3>Sign up</h3>
          <form>
            <input className='username' name='username' type='text' placeholder='Username' onChange={handleChange} />
            <input className='position' name='position' type='text' placeholder='Position' onChange={handleChange} />
            <input className='email' name='email' type='email' placeholder='Email address' onChange={handleChange} />
            <input type='Password' name='password' placeholder='Create password' onChange={handleChange} />
            <button onClick={handleSubmit}>Sign Up</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
