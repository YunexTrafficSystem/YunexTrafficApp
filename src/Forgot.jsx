import * as React from 'react';
import {Avatar,Button, TextField, Link, Grid, Box, Typography, ButtonGroup, AppBar, Toolbar,IconButton} from '@mui/material';
import { Link as RouteLink } from 'react-router-dom';
import { useForm } from "react-hook-form";
import HistoryIcon from '@mui/icons-material/History';
import MenuIcon from '@mui/icons-material/Menu';
import { createTheme } from '@mui/material/styles';
import  {ThemeProvider} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';


import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
//personalizacion de los colores
const theme = createTheme({
  palette: {
    primary:{
      main: '#e2edF3'
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


//Declarando y exportando la función que retorna el contenido del Registro
export default function SignIn() {

  {/**Hook para que funcione el formulario */}
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  {/**Se declara la variable para que contenga la informacion donde se personalizó los colores */}
  const classes = useStyles();



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
      {/**se usa el ThemeProvider para que se pueda declarar la funcion  que guarda la personalizacion del color */}
      <ThemeProvider>

      {/**Barra de navegacion */}
      <AppBar position='static' >

          {/**Box donde se usa para aplicar el color que se personalizó de fondo en la barra de navegacion*/}
          <Box className={classes.card}>  

            <Toolbar>

            <IconButton 
              sx={{m:10,display:{sm:'none'}}}
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
                <Button href="/" sx={{display: { xs: 'none', sm: 'block', md: 'block' }}}>INICIO</Button>
                <Button href="SignUp" sx={{display: { xs: 'none', sm: 'block', md: 'block' }}}>REGISTRARSE</Button>
                <Button href="Login" theme={theme} sx={{display: { xs: 'none', sm: 'block', md: 'block' }}}>INICIAR SESION</Button>

              </ButtonGroup>

              </Grid>

            </Toolbar> 

          </Box>

        </AppBar>

      </ThemeProvider>

      {/**Grid donde se usa para que genere un relleno de fondo detras del formulario y aplica el color que se personalizó */}
      <Grid className={classes.main} padding='4%'>
        
        {/**Grid que contiene el formulario y este hace que se active la adaptacion del formulario según el tamaño de la pantalla */}
        <Grid container>
          
          {/**Box donde se define como se ve la ventana donde se encuentra el formulario */}
          <Box padding='2%' width='500px' height='400px' margin='auto' boxShadow='0px 2px 2px black' className={classes.card}>

              {/**Grid que configura como se ve el icono y el texto de recuperar contraseña del formulario según el tamaño de la pantalla */}
              <Grid item xs={12} sm={12}>

                <Avatar sx={{bgcolor:'primary.main', margin:'auto'}}>
                  <HistoryIcon  />
                </Avatar>

                <Typography  component='h1' variant='h5' align='center'>
                  RECUPERAR CONTRASEÑA
                </Typography>

              </Grid>

                <br />

                {/**Box que configura la validacion de los datos ingresados del formulario */}
                <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>

                  {/**Grid que configura como se ve los cuadros donde se ingresan los datos del formulario según el tamaño de la pantalla */}
                  <Grid item xs={12} sm={12}>

                    {/**Cuadro donde el Interesado ingresara su Correo Electrónico */}
                    <TextField
                      margin='normal'
                      required
                      fullWidth
                      type='email'
                      label='Correo Electronico'
                      autoComplete='email'
                      autoFocus
                      {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                    />

                    {/**Boton en el que al hacer click  enviara los datos obtenidos de los cuadros del formulario */}
                    <Button
                      type='submit'
                      fullWidth
                      variant='contained'
                      sx={{ mt: 3, mb: 2 }}
                    >
                      Aceptar
                    </Button>


                    {/*Grid que contiene las opciones de regresar y de registrar */}
                    <Grid container>

                      {/**Link esta etiqueta lo enviara al Home  */}
                      <Grid item xs>
                        <Link to='/' variant='body2' component={RouteLink}>
                          Regresar
                        </Link>
                      </Grid>

                      <Grid item>
                        {/**Link esta etiqueta lo enviara al formulario de register si ya tiene cuenta */}
                        <Link to='/signup' variant='body2' component={RouteLink}>
                          No tengo cuenta
                        </Link>
                      </Grid>

                    </Grid>
                </Grid>

              </Box>

          </Box>

        </Grid>

      </Grid>
    </>
  );
}
