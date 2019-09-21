import React, { useState } from 'react';
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import TextField from '@material-ui/core/TextField';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import Link from '@material-ui/core/Link';
import Paper from '@material-ui/core/Paper';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { useLoginMutation, useSigninMutation, SigninMutationResult, SigninMutationHookResult, useMeQuery } from '../graphql/generated/graphql';
import Token from '../utils/Token';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

const useStyles = makeStyles(theme => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(https://source.unsplash.com/random)',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
  },
  paper: {
    margin: theme.spacing(8, 4),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

interface FormState {
  username: string,
  email: string,
  password: string
}

export default function EnterForm() {
  const classes = useStyles();
  const [signinState, setSigninState] = useState(false)

  const [formState, setFormState] = useState<FormState>({username: "", email: "", password: ""})
  
  const onChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    setFormState({
      ...formState,
      [e.target.name]: e.target.value
    })
  }

  const success = (token: string | undefined | null) => {
    token && Token.set(token)
    window.location.assign("/")
  }

  const [signin, {loading: signinLoading}] = useSigninMutation({
    onCompleted: ({signin}) => success(signin.token)
  })

  const [login, {loading: loginLoading}] = useLoginMutation({
    onCompleted: ({login}) => success(login.token)
  })

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    let mutation = signinState ? signin: login
    await mutation({variables: formState}) 
  }


  return (
    <Grid container component="main" className={classes.root}>
      <CssBaseline />
      <Grid item xs={false} sm={4} md={7} className={classes.image} />
      <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            {signinState ? "Sign in" : "Log in"}
          </Typography>
          <form className={classes.form} noValidate onSubmit={onSubmit} id="form">
            {signinState &&
              <TextField
                variant="outlined"
                margin="normal"
                required
                fullWidth
                id="email"
                label="User Name"
                name="username"
                autoFocus
                value={formState.username}
                onChange={onChange}
              />
            }
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoFocus={!signinState}
              value={formState.email}
              onChange={onChange}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              value={formState.password}
              onChange={onChange}
            />
            <FormControlLabel
              control={<Checkbox value="remember" color="primary" />}
              label="Remember me"
            />
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
            >
              {
                signinLoading || loginLoading
                ? "Loading"
                : signinState ? "Sign in" : "Log in"
              }
            </Button>
            <Grid container>
              <Grid item xs>
                {!signinState &&
                  <Link href="#" variant="body2">
                    Forgot password?
                  </Link>
                }
              </Grid>
              <Grid item>
                <Link variant="body2" onClick={(e: any) => {setSigninState(!signinState)}}>
                  {!signinState ? "Don't have an account? Sign Up" : "have an account? Log in"}
                </Link>
              </Grid>
            </Grid>
            <Box mt={5}>
              <Copyright />
            </Box>
          </form>
        </div>
      </Grid>
    </Grid>
  );
}
