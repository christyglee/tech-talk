import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { UserContext } from "../../utils/UserContext";


const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  navbar: {
    marginBottom: 20,
    backgroundColor: "#9e9e9e"
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();
  const { logout } = useContext(UserContext);

  return (
    <div className={classes.root}>
      <AppBar position="static" className={classes.navbar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title}>
            <img className="logo" style={{ marginTop: 20 }} src="https://i.ibb.co/ctthk2R/TECH-TALK-25.png" width="65" height="65" alt="TECH-TALK-10" border="0"></img>
            <Button><NavLink to="/" exact style={{ marginBottom: 40, color: 'black', textDecoration: 'none' }}> Home </NavLink></Button>
            <Button><NavLink to="/members" style={{ marginBottom: 40, color: 'black', textDecoration: 'none' }}> Members </NavLink></Button>
            <Button> <NavLink to="/profile" style={{ marginBottom: 40, color: 'black', textDecoration: 'none' }}> Profile</NavLink></Button>
          </Typography>
          <Button onClick={() => {
            logout()
          }}> Logout </Button>
        </Toolbar>
      </AppBar>
    </div>
  );
}

