import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { useNavigate } from 'react-router-dom';
import '../login/login.css';
import { GoogleOAuthProvider, GoogleLogin } from '@react-oauth/google';

const defaultTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function Login() {

  const navigate = useNavigate();

  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
    });
  };


  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar src="/broken-image.jpg" />
          <Typography component="h1" variant="h5">
            LOG IN
          </Typography>
          <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
            <TextField
              margin="normal"
              required
              fullWidth
              id="email"
              label="Email Address"
              name="email"
              autoComplete="email"
              autoFocus
            />
            <TextField
              margin="normal"
              required
              fullWidth
              name="password"
              label="Password"
              type="password"
              id="password"
              autoComplete="current-password"
            />
            <Grid item xs>
                <Link href="#" variant="body2">
                  Forgot password?
                </Link>
              </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              LOG IN
            </Button>
            <Grid container justifyContent='space-between'>
              <Grid item>
                  {"Don't have an account?"}
              </Grid>

              <Grid item id='login-signup-link'>
                <a onClick={()=>{navigate("/signup")}} variant="body2">
                  Sign Up
                </a>
              </Grid>
            </Grid>
          </Box>
          <Grid margin={3}>OR</Grid>
          <Grid>
            <GoogleOAuthProvider clientId="296218357829-0r23jpcp1lsu9v2ol3b5u225d3859keu.apps.googleusercontent.com">
              <GoogleLogin
              onSuccess={credentialResponse => {
                console.log(credentialResponse);
              }}
              onError={() => {
              console.log('Login Failed');
            }}
            useOneTap/>
            </GoogleOAuthProvider>
          </Grid>
        </Box>
      </Container>
    </ThemeProvider>
  );
}