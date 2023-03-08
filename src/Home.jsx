import { useState } from 'react';
import {  Box,  Button,  Grid,  Typography,   IconButton,ButtonGroup, Dialog} from '@mui/material';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@mui/icons-material/Menu';

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';



//Declarando la función que retorna la vista del y los datos del Home
function FeaturesContent() {
  {/**Se declara la variable para que contenga la informacion donde se personalizó los colores */}
  const classes = useStyles();


  /////////////
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <>
      {/**Barra de navegacion */}
      <AppBar position = "static">

          {/**Box donde se usa para aplicar el color que se personalizó de fondo en la barra de navegacion*/}
          <Box className={classes.main}>
            <Toolbar>

              <IconButton 
              sx={{m:10,display:{md:'none'}}}
              id="basic-button"
              aria-controls={open ? 'basic-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
              onClick={handleClick}
              >
                <MenuIcon/>
              </IconButton>
              
                <Menu
                  id="basic-menu"
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                  MenuListProps={{
                    'aria-labelledby': 'basic-button',
                  }}
                >
                  <MenuItem onClick={handleClose}><Button variant="text" href="/">
                    Inicio
                  </Button></MenuItem>

                  <MenuItem onClick={handleClose}><Button variant="text" href="SignUp">
                    Registrarse
                  </Button></MenuItem>

                  <MenuItem onClick={handleClose}><Button variant="text" href="Login">
                    Iniciar Sesion
                  </Button></MenuItem>
                </Menu>


              {/**Grid que contiene el logo de yunex traffic  */}
              <Grid sx={{m:10}}>
                <img src='../public/img/logo.png' alt='' width='100px' height='40px' />
              </Grid>

              {/**Grid que contiene los botones de navegacion y los posiciones al final del lado derecho de la barra de navegación */}
              <Grid container direction='row' justifyContent='end'>

              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

                {/**Botones de navegación */}
                <Button href="/" color="inherit"  sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>INICIO</Button>
                <Button href="SignUp"  sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>REGISTRARSE</Button>
                <Button href="Login"  sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>INICIAR SESION</Button>

              </ButtonGroup>

              </Grid>

            </Toolbar> 
          </Box>

        </AppBar>

      {/**Grid donde se usa para que genere un relleno de fondo detras de la imagen y el texto que se muestra en el inicio */}
      <Grid margin='7%' >

          {/**Grid donde contiene la imagen y el texto que se muestra en el inicio */}
          <Grid container spacing={2} padding="1%">
            
            {/**Grid que configura como se ve el texto según el tamaño de la pantalla */}
            <Grid item xs={12} sm={12} md={6} padding="2%">

              {/** Typography Se define las caracteristicas del texto */}
              <Typography component='h1' variant='h3' align='center' color='text.ligthgreen' gutterBottom > 
                The Yunex Traffic System 
              </Typography>
              
              {/** Typography Se define las caracteristicas del texto */}
              <Typography variant='p' align='center' color='text.secondary' component='p'>
                Software desarrollado con el objetivo de optimizar y facilitar los procesos de las areas de trabajo que componen la empresa Yunex Traffic
              </Typography>

              <Grid
                container
                justifyContent='center'
              >
                <Grid
                  item
                >
                  
                  {/**Boton en el que al hacer click lo enviara al formulario de login*/}
                  <Button
                    variant='contained'
                    sx={{ marginTop: 8}}
                    href='Login'
                  >
                    Iniciar ahora
                  </Button>

                </Grid>

              </Grid>

            </Grid>

            <br />

            {/**Grid que contiene la imagen que aparece en el inicio*/}
            <Grid item sm={12} xs={12} md={6} sx={{mt:10, padding:0}} align="center">
              <img src='../public/img/yunex.jpg' alt='' width='450px' height='250' />
            </Grid>
          </Grid>

      </Grid >

    </>
  );
}
//Declarando la funcion que retorna el contenido del Home
export default function FeaturesPage() {
  return <FeaturesContent />;
}