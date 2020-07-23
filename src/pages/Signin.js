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

const Signin = () => {
  const classes = useStyles();
  const history = useHistory();

  const handleClick = () => {
    history.push("/");
  }
  
  return (
    <>
      <Navbar />
      <Grid container direction="column" justify="center" alignItems="center" className={classes.root}>
        <Typography className={classes.title}>
          Sign In
        </Typography>
        <div className={classes.formContainer}>
          <Grid container spacing={3}>
            <Grid item sm={12}>
              <Typography className={classes.formTitle}>
                Sign In
              </Typography>
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
                <InputLabel htmlFor="password-input">Password</InputLabel>
                <OutlinedInput
                  id="password-input"
                  // value={values.amount}
                  // onChange={handleChange('amount')}
                  labelWidth={80}
                />
              </FormControl>
            </Grid>
            <Grid item sm={12}>
              <Button variant="contained" className={classes.whiteTextButton} color="primary" onClick={handleClick}>
                Sign In
              </Button>
            </Grid>
          </Grid>
        </div>
      </Grid>
    </>
  );
};

export default Signin;
