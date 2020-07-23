import React from "react";
import { Grid, Typography, makeStyles, Button, FormControl, InputLabel, OutlinedInput } from "@material-ui/core";
import Navbar from "../components/Navbar";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingLeft: '10%',
    paddingRight: '10%',
  },
  title: {
    flexGrow: 1,
    fontSize: 48,
    textAlign: 'center',
    color: theme.palette.secondary,
    marginTop: 30,
  },
  formTitle: {
    flexGrow: 1,
    fontSize: 24,
    color: theme.palette.secondary,
    fontWeight: 'bold',
  },
  description: {
    flexGrow: 1,
    fontSize: 36,
    textAlign: 'center',
    color: 'rgba(0, 0, 0, 0.8)',
    marginTop: 30,
  },
  formContainer: {
    padding: 34,
    borderColor: 'rgba(0,0,0,0.5)',
    borderWidth: 1,
    borderStyle: 'solid',
    marginTop: 60,
    width: '60%',
  },
  whiteTextButton: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    color: '#fff',
    width: 130,
    height: 40,
  },
}));

const Signup = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/signup");
  }
  
  return (
    <>
      <Navbar />
      <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
        <Typography className={classes.title}>
          Sign Up
        </Typography>
        <Typography className={classes.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore
        </Typography>
        <div className={classes.formContainer}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Typography className={classes.formTitle}>
                Sign Up
              </Typography>
            </Grid>
            <Grid item sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="fname-input">First name</InputLabel>
                <OutlinedInput
                  id="fname-input"
                  // value={values.amount}
                  // onChange={handleChange('amount')}
                  labelWidth={90}
                />
              </FormControl>
            </Grid>
            <Grid item sm={6}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="lname-input">Last name</InputLabel>
                <OutlinedInput
                  id="lname-input"
                  // value={values.amount}
                  // onChange={handleChange('amount')}
                  labelWidth={90}
                />
              </FormControl>
            </Grid>
            <Grid item sm={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="email-input">Email address</InputLabel>
                <OutlinedInput
                  id="email-input"
                  // value={values.amount}
                  // onChange={handleChange('amount')}
                  labelWidth={110}
                />
              </FormControl>
            </Grid>
            <Grid item sm={12}>
              <FormControl fullWidth variant="outlined">
                <InputLabel htmlFor="password-input">Create password</InputLabel>
                <OutlinedInput
                  id="password-input"
                  // value={values.amount}
                  // onChange={handleChange('amount')}
                  labelWidth={130}
                />
              </FormControl>
            </Grid>
            <Grid item sm={12}>
              <Button variant="contained" className={classes.whiteTextButton} color="primary" onClick={handleClick}>
                Sign Up
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default Signup;
