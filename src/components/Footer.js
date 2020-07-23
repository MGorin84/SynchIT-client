import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Typography, Avatar, Divider } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    position: "fixed",
    bottom: 22,
    left: 0,
		right: 0,
		justifyContent: 'center',
		alignItems: 'center',
		paddingLeft: '4%',
		paddingRight: '4%',
  },
  title: {
		flexGrow: 1,
		textAlign: 'center',
		fontSize: 15,
		marginTop: 10,
	},
	logoContainer: {
		display: 'flex',
		justifyContent: 'center',
	},
  logo: {
    width: 66,
		height: 65,
		alignSelf: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
			<div className={classes.logoContainer}>
				<Avatar src="./synchit-logo.png" className={classes.logo} />
			</div>
			<Divider />
			<Typography variant="h6" className={classes.title}>
				© SynchIT 2020
			</Typography>
    </div>
  );
}