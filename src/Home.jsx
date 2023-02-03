import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Typography,
  GlobalStyles
} from '@mui/material';

import * as React from 'react';
import { ReactDOM } from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container'
import { createTheme } from '@mui/material/styles';
import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#e2edF3',

  },
  card:{
    backgroundColor:'#fff',
  }
}));


function FeaturesContent() {
  const classes = useStyles();
  return (
    <>
      <AppBar position="static">
          <Box className={classes.main}>        
            <Toolbar>
              <Container>
                <img src="../public/img/logo.png" alt="" width="100px" height="40px" />
              </Container>
              <Box sx={{ flexGrow: 1, display: { md: 'flex', flexDirection:'row-reverse', xs: 'none'}}}>
                <Button variant="contained" href="Login">
                  IniciarSesion
                </Button>
                <Button  variant="contained"  href="SignUp">
                    Registrarse
                </Button>
                <Button variant="contained" color="inherit" href="/" >
                  Inicio
                </Button>
              </Box>
            </Toolbar> 
          </Box>
        </AppBar>
      <br />
      <GlobalStyles margin="0%" padding="0%"/>
      <CssBaseline />
      <Box margin="6%">
        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={4} margin="auto">
          <Box gridColumn="span 6" margin="auto">
            <Typography component="h1" variant="h3" align="center" color="text.ligthgreen" gutterBottom > 
              The Yunex Traffic System 
            </Typography>

            <Typography variant="p" align="center" color="text.secondary" component="p">
              Software desarrollado con el objetivo de optimizar y facilitar los procesos de las areas de trabajo que componen la empresa Yunex Traffic
            </Typography>
            <Grid
              container
              justifyContent="center"
            >
              <Grid
                item
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{ marginTop: 8}}
                  href="Login"
                >
                  Iniciar ahora
                </Button>
              </Grid>
            </Grid>
          </Box>
          <Box gridColumn="span 6" padding="2%">
            <img src="../public/img/yunex.jpg" alt="" width="600px" height="300"/>
          </Box>
        </Box> 
      </Box >
    </>
  );
}

export default function FeaturesPage() {
  return <FeaturesContent />;
}