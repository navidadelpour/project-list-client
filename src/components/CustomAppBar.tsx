import React, { Fragment, useState } from 'react';
import { createStyles, makeStyles, Theme } from '@material-ui/core';
import {AppBar, Toolbar, Typography, Button, IconButton} from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import { useMeQuery, IUser } from '../graphql/generated/graphql';
import { Link } from 'react-router-dom';
import Token from '../utils/Token';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      marginBottom: 30
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }),
);
type PropType = Pick<IUser, 'username'>

const CustomAppBar = ({username}: PropType) => {
  const classes = useStyles()

  const logout = (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    Token.remove()
    window.location.assign("/")
  }

  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {username} Projects
          </Typography>
          <Fragment>
            {!username
              ? <Link to="/form"><Button style={{color: "white"}}>Login</Button></Link>
              : <Button style={{color: "white"}} onClick={logout}>Logout</Button>
            }
          </Fragment>
        </Toolbar>
      </AppBar>
    </div>
  );
}

export default CustomAppBar