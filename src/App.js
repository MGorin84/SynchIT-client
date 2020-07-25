import React from "react";
import { Switch, Route } from "react-router-dom";
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

const App = () => {
  return (
    <div className='App'>
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
    </div>
  );
};

export default App;
