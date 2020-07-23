import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import { useHistory, NavLink } from "react-router-dom";
import { Typography, Avatar } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    width: 130,
    height: 40,
  },
  title: {
    flexGrow: 1,
  },
  whiteTextButton: {
    fontStyle: 'normal',
    fontWeight: 500,
    fontSize: 15,
    color: '#fff',
    width: 130,
    height: 40,
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
  },
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const history = useHistory();

  const navigate = (route) => () => {
    history.push(route);
  }

  return (
    <div className={classes.root}>
      <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}}>
        <Toolbar>
          <NavLink to="/">
            <Avatar alt="logo" src="./synchit-logo.png" className={classes.large} />
          </NavLink>
          <Typography variant="h6" className={classes.title}>
          </Typography>
          <Button variant="outlined" className={classes.menuButton} color="primary" onClick={navigate('/signin')}>
            Sign In
          </Button>
          <Button variant="contained" className={classes.whiteTextButton} color="primary" onClick={navigate('signup')}>
            Sign Up
          </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}