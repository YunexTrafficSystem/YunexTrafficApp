import {  Avatar,AppBar,  Button,  Box,  Grid,  TextField,  Typography,  Select,  FormControl,  MenuItem,  InputLabel,  IconButton ,  Link, Checkbox, FormControlLabel, ButtonGroup}from "@mui/material";
import { Link as RouterLink } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import * as React from 'react';
import Toolbar from '@mui/material/Toolbar';
import { createTheme } from '@mui/material/styles';
import MenuIcon from '@mui/icons-material/Menu';
import { ThemeProvider } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';



import Menu from '@mui/material/Menu';
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


//Declarando la funcion que retorna el contenido del dashboard
export default function SignUp() {

  {/**Hook para que funcione el formulario */}
  const { register, handleSubmit } = useForm();
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
        <AppBar position='static'>

          {/**Box donde se usa para aplicar el color que se personalizó de fondo en la barra de navegacion*/}
          <Box className={classes.card}> 

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
                <img src='../public/img/logo.png' alt="" width='100px' height='40px' />
              </Grid>

              {/**Grid que contiene los botones de navegacion y los posiciones al final del lado derecho de la barra de navegación */}
              <Grid container direction='row' justifyContent='end'>

              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">

                {/**Botones de navegación */}
                <Button href="/" sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>INICIO</Button>
                <Button href="SignUp" theme={theme} sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>REGISTRARSE</Button>
                <Button href="Login" sx={{display: { xs: 'none', sm: 'none', md: 'block' }}}>INICIAR SESION</Button>

              </ButtonGroup>

              </Grid>

            </Toolbar> 

          </Box>

        </AppBar>

        {/**Grid donde se usa para que genere un relleno de fondo detras del formulario y aplica el color que se personalizó */}
        <Grid className={classes.main} padding='4%'>

          {/**Grid qe contiene el formulario y este hace que se active la adaptacion del formulario según el tamaño de la pantalla */}
          <Grid container >

              {/**Box donde se define como se ve la ventana donde se encuentra el formulario */}
              <Box padding='2%' width='500px' margin='auto' boxShadow='0px 2px 2px black'  className={classes.card} >

                  {/**Grid que configura como se ve el icono y el texto de registro del formulario según el tamaño de la pantalla */}
                  <Grid item xs={12} sm={12}>

                    <Avatar sx={{bgcolor:'primary.main', margin:'auto'}}>

                      <AccountCircleIcon  />

                    </Avatar>

                    <Typography component='h1' variant='h5' align='center'>
                      REGISTRO
                    </Typography>

                  </Grid>

                  <br />

                  {/**Box que configura la validacion de los datos ingresados del formulario */}
                  <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>

                      <Grid container  >

                        {/**Grid que configura como se ve los cuadros donde se ingresan los datos del formulario según el tamaño de la pantalla */}
                        <Grid item xs={12} sm={6}>

                          {/**Cuadro donde el Interesado ingresara su Nombre */}
                          <TextField
                            type='text'
                            id='fullName'
                            label='Nombre Completo'
                            margin='dense'
                            fullWidth
                            required
                            {...register('name', { required: true })}
                          />

                        </Grid>
                        
                        <Grid item xs={12} sm={6}>

                          {/**Cuadro de opcion multiple donde el interesado elegira su Rol */}
                          <FormControl required fullWidth margin="dense">

                            <InputLabel>Rol solicitado</InputLabel>
                              <Select
                                label='Rol solicitado'
                                required
                                {...register('rol')}    
                              >
                                <MenuItem value={1}>Administrador</MenuItem>
                                <MenuItem value={2}>Jefe de Area</MenuItem>
                            </Select>

                          </FormControl >

                        </Grid>

                        <Grid item xs={12} sm={12}>

                          {/**Cuadro donde el Interesado ingresara su Correo Electronico */}
                          <TextField
                            type='email'
                            id='email'
                            label='Correo Electrónico'
                            required
                            fullWidth
                            {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })} 
                          />

                        </Grid>

                        <Grid item xs={12} sm={12}>

                          {/**Cuadro donde el Interesado ingresara su Contraseña */}
                          <TextField
                          type='password'
                          id='password'
                          label='Contraseña'
                          required
                          margin='dense'
                          fullWidth
                          {...register('password', { required: true, minLength: 8, maxLength: 20 })}
                          />

                        </Grid>

                        <Grid item xs={12} sm={12}>
                            {/**Cuadro de confirmacion donde el Interesado seleccionara si acepta los terminos y condiciones */}
                            <FormControlLabel 
                              control={
                                <Checkbox
                                  color='primary'
                                  {...register("terms", { required: true })}
                                />
                              }
                              label='Acepto terminos y condiciones'
                            />

                        </Grid>

                        <Grid
                          container
                          justifyContent='center'
                        >
                          <Grid
                            item
                          >
                            {/**Boton en el que al hacer click  enviara los datos obtenidos de los cuadros del formulario */}
                            <Button
                              type='submit'
                              variant='contained'
                              sx={{ mt: 3, mb: 2 }}
                            >
                              ENVIAR
                            </Button>
                          </Grid>
                        </Grid>

                        <Grid>
                          {/**Link esta etiqueta lo enviara al formulario de login si ya tiene cuenta */}
                          <Link to='/Login' variant='body2' underline='none' component={RouterLink}>
                            Ya tengo cuenta
                          </Link>
                        </Grid>

                      </Grid>

                  </Box>

              </Box>

          </Grid>

        </Grid>

      </ThemeProvider>
    </>
  );
}
