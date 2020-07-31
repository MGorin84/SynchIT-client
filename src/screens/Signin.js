import React, {useState} from "react";
import {useGlobalState} from '../config/store'
import {loginUser} from '../services/authServices'
import "./Signin.css";

const SignIn = ({history}) => {
  const initialFormState = {
  username: "",
  password: ""
  }
  const [errorMessage, setErrorMessage] = useState(null);
  const [userDetails,setUserDetails] = useState(initialFormState)
  const {dispatch} = useGlobalState()
  

  function handleSubmit(event) {
    event.preventDefault()
    // Attempt login on server
    loginUser(userDetails).then(() => {
        dispatch({
            type: "setLoggedInUser",
            data: userDetails.username
        })
        history.push("/")
        
    }).catch((error) => {
        console.log(`An error occurred authenticating: ${error}`)
    })		
};

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

export default SignIn;
