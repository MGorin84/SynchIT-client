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
    // Attempt login on server
    loginUser(userDetails).then((user) => {
        dispatch({
            type: "setLoggedInUser",
            data: userDetails.username
        });
        dispatch({
          type: "setMemberData",
          data: user
        })
  console.log(user.availability);
        history.push("/dashboard")
        
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
            <input type='text' name='username' placeholder='Username' onChange={handleChange}/>
            <input type='Password' name='password' placeholder='Password' onChange={handleChange}/>
            <button onClick={handleSubmit}>Sign In</button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
