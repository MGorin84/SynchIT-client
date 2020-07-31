import React, {useReducer, useEffect} from "react";
import { Switch, Route } from "react-router-dom";
import Reducer from "./config/stateReducer"
import {StateContext} from "./config/store"
import {
  Home,
  Signin,
  Signup,
  Dashboard,
  YourTeam,
  YourAvailability,
  CancelMembership,
  ConfirmCancellation,
} from "./screens";
import { Navbar, Footer } from "./components";
import "./App.css";
import availability from "./data/availability";
import {userAuthenticated} from "./services/authServices"

const App = () => {
  const initialState = {
    memberData: null
  }
  const [store, dispatch] = useReducer(Reducer, initialState)


  useEffect(() => {
    //check for logged in user
  userAuthenticated().then((user)=>{
    console.log(user)
    if(user) {
      dispatch({
        type: "setLoggedInUser",
        data: user.username
      })
      dispatch({
        type: "setMemberData",
        data: user
      })
  // console.log("useEffect", user.availability)
    }
  })
  .catch(()=>{})
    //set member data if user logged in (fetch, dispatch)
    //axios.get('/auth/user')
  },[])

  return (
    <div className='App'>
      <StateContext.Provider value={{store, dispatch}}> 
      <Navbar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/sign-in' component={Signin} />
        <Route exact path='/sign-up' component={Signup} />
        <Route exact path='/dashboard' component={Dashboard} />
        <Route exact path='/your-team' component={YourTeam} />
        <Route exact path='/your-availability' component={YourAvailability} />
        <Route exact path='/cancel-membership' component={CancelMembership} />
        <Route
          exact
          path='/confirm-cancellation'
          component={ConfirmCancellation}
        />
      </Switch>
      <Footer />
      </StateContext.Provider>
    </div>
  );
};

export default App;
