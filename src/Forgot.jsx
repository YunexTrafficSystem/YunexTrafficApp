import * as React from 'react';
import {Avatar,Button, CssBaseline, TextField, Link, Grid, Box, Typography, Container, AppBar, Toolbar,GlobalStyles} from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { useForm } from "react-hook-form"
import HistoryIcon from '@mui/icons-material/History';

import { createTheme } from '@mui/material/styles';
import { ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary:{
      main: '#e2edF3'
    }
  }
});

import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#e2edF3',

  },
  card:{
    backgroundColor:'#fff',
  }
}));

export default function SignIn() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  const classes = useStyles();
  return (
    <>
      <GlobalStyles margin="0%" padding="0%"/>
      <CssBaseline />   
      <ThemeProvider>
      <AppBar position="static" >
          <Box className={classes.card} padding="1%">        
            <Toolbar>
              <Container>
                <img src="../public/img/logo.png" alt="" width="100px" height="40px" />
              </Container>
              <Box sx={{ flexGrow: 1, display: { md: 'flex', flexDirection:'row-reverse', xs: 'none'}}}>
                <Button variant="contained" theme={theme}  href="Login">
                  INICIARSESION
                </Button>
                <Button  variant="contained"  href="SignUp">
                  REGISTRARSE
                </Button>
                <Button variant="contained" color="primary" href="/" >
                  INICIO
                </Button>
              </Box>
            </Toolbar> 
          </Box>
        </AppBar>
      </ThemeProvider>
      <Box className={classes.main} padding="4%">
        <Box padding='2%' width="500px" height="400px" margin="auto" boxShadow=" 0px 2px 2px black" className={classes.card}>
        
          <Box
            sx={{
              marginTop: 8,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
            }}
          >
            <Box>
              <Avatar sx={{bgcolor:"primary.main", margin:"auto"}}>
                <HistoryIcon  />
              </Avatar>
              <Typography  component="h1" variant="h5" align="center">
                RECUPERAR CONTRASEÑA
              </Typography>
            </Box>
              <br />
              <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  type="email"
                  label="Correo Electronico"
                  autoComplete="email"
                  autoFocus
                  {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                />
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  sx={{ mt: 3, mb: 2 }}
                >
                  Aceptar
                </Button>
                <Grid container>
                  <Grid item xs>
                    <Link to="/" variant="body2" component={RouteLink}>
                      Regresar
                    </Link>
                  </Grid>
                  <Grid item>
                    <Link to="/signup" variant="body2" component={RouteLink}>
                      No tengo cuenta
                    </Link>
                  </Grid>
                </Grid>
              </Box>
            </Box>
          
          </Box>
        </Box>
    </>
  );
}

<Grid
container
justifyContent="center"
>
<Grid
  item
>
                          <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Registrar
                          </Button>
</Grid>
</Grid>