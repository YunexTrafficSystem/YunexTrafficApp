import {  CssBaseline,Avatar,AppBar,  Button,  Box,  Grid,  TextField,  Typography,  Select,  FormControl,  MenuItem,  InputLabel,  Container,  Link, Checkbox, FormControlLabel, GlobalStyles }from "@mui/material";

import { Link as RouterLink } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as React from 'react';
import { useState } from "react";
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import  {grey}  from '@mui/material/colors';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles'


const theme = createTheme({
  palette: {
    primary:{
      main: '#e2edF3'
    },
    secondary:{
      main:grey[50]
    }
  }
});
const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#e2edF3',
  },
  card:{
    backgroundColor:'#fff',
  }
}));

export default function SignUp() {

  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const classes = useStyles();
  return (

    <>
      <GlobalStyles margin="0%" padding="0%"/>
      <CssBaseline/>
      <ThemeProvider>
        <AppBar position="static">
          <Box className={classes.card}>        
            <Toolbar>
              <Container>
                <img src="../public/img/logo.png" alt="" width="100px" height="40px" />
              </Container>
              <Box sx={{ flexGrow: 1, display: { md: 'flex', flexDirection:'row-reverse', xs: 'none'}}}>
                <Button variant="contained" href="Login">
                  IniciarSesion
                </Button>
                <Button  variant="contained" theme={theme} href="SignUp">
                    Registrarse
                </Button>
                <Button variant="contained" href="/" >
                  Inicio
                </Button>
              </Box>
            </Toolbar> 
          </Box>
        </AppBar>
        <Box className={classes.main} padding="2%">
          <br/>
          <Container>
              <Box padding='2%' width="500px" margin="auto" boxShadow=" 0px 2px 2px black"  className={classes.card}>
                <Box sx={{
                  marginTop: 2,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                }}>
                  <Box>
                    <Avatar sx={{bgcolor:"primary.main", margin:"auto"}}>
                      <AccountCircleIcon  />
                    </Avatar>
                    <Typography component="h1" variant="h5" align="center">
                      Registro
                    </Typography>
                  </Box>
                  <br />
                  <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                      <Grid container  >
                        <Grid item sm={6}>
                          <TextField
                            type="text"
                            id="fullName"
                            // value={fullName}
                            name="nombre"
                            label="Nombre Completo"
                            margin="dense"
                            required
                            {...register("name", { required: true })}                      
                          />
                        </Grid>
                        <Grid item sm={6}>
                          <FormControl required fullWidth margin="dense">
                            <InputLabel>Rol solicitado</InputLabel>
                              <Select
                                id="rol"
                                name="rol"
                                // value={rol}
                                label="Rol solicitado"
                                required
                                {...register("role")}    
                              >
                                <MenuItem value={1}>Administrador</MenuItem>
                                <MenuItem value={2}>Jefe de Area</MenuItem>
                            </Select>
                          </FormControl >
                        </Grid>
                        <Grid Item sm={12}>
                          <TextField
                            type="email"
                            id="email"
                            // value={email}
                            label="Correo Electrónico"
                            required
                            fullWidth
                            {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} 
                          />
                        </Grid>
                        <Grid Item sm={12}>
                          <TextField
                          type="password"
                          id="password"
                          // value={password}
                          label="Contraseña"
                          required
                          margin="dense"
                          fullWidth
                          {...register("password", { required: true, minLength: 8, maxLength: 20 })}
                          />
                        </Grid>
                        <Grid item xs={12}>
                            <FormControlLabel 
                              control={
                                <Checkbox
                                  color="primary" 
                                  {...register("terms", { required: true })}
                                />
                              }
                              label="Acepto terminos y condiciones"
                            />
                        </Grid>
                        <Grid container >
                          <Button
                            type="submit"
                            variant="contained"
                            sx={{ mt: 3, mb: 2 }}
                          >
                            Registrar
                          </Button>
                        </Grid> 
                        <Grid container >
                          <Link to="/Login" variant="body2" underline="none"component={RouterLink}>
                            Ya tengo cuenta
                          </Link>
                        </Grid>
                      </Grid>
                  </Box>
                </Box>
              </Box>
          </Container>
        </Box>
      </ThemeProvider>
    </>
  );
}
