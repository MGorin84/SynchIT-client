import React from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import Signin from "./pages/Signin";

const font = "'Montserrat', sans-serif"; 

const theme = createMuiTheme({
  typography: {
    fontFamily: font,
    button: {
      textTransform: 'none'
    },
  },
  palette: {
    primary: {
      main: '#18A0FB',
    },
  },
});

function App() {
  return (
    <Router>
      <ThemeProvider theme={theme}>
        <div style={{fontFamily: font}}>
          {/* A <Switch> looks through its children <Route>s and
              renders the first one that matches the current URL. */}
          <div style={{height: 'calc(100vh - 120px)', overflow: 'auto'}}>
            <Switch>
              <Route path="/signup">
                <Signup />
              </Route>
              <Route path="/signin">
                <Signin />
              </Route>
              <Route path="/">
                <Home />
              </Route>
            </Switch>
          </div>
          <Footer />
        </div>
      </ThemeProvider>
    </Router>
  );
}

export default App;
