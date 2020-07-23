import React from "react";
import { Grid, Typography, makeStyles, Button } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    fontSize: 56,
    textAlign: 'center',
  },
  whiteTextButton: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    color: '#fff',
    width: 130,
    height: 40,
    marginTop: 30,
  },
  large: {
    width: '100%',
    height: theme.spacing(70),
    objectFit: 'contain',
  },
}));

const Home = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/signup");
  }
  
  return (
    <>
      <Navbar />
      <Grid container direction="column" justify="center" alignItems="center">
        <img alt="logo" src="./synchit-logo.png" className={classes.large} />
        <Button variant="contained" className={classes.whiteTextButton} color="primary" onClick={handleClick}>
          Sign Up
        </Button>
        <Typography className={classes.title}>
          Synch yo’ self
        </Typography>
      </Grid>
    </>
  );
};

export default Home;
