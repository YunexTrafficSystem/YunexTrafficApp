
//IMportaciones de etiquetas
import {  Avatar,  Button,  TextField, Link,  Grid,  Box,  Typography,  Toolbar,  AppBar,  IconButton, ButtonGroup } from '@mui/material';
import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "react-hook-form";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core';
import { createMuiTheme } from '@material-ui/core/styles';


//personalizacion de los colores
const theme = createMuiTheme({
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


//Declarando y exportando la función que retorna el contenido del Login
export default function SignIn() {

  {/**Hook para que funcione el formulario */}
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);

  {/**Se declara la variable para que contenga la informacion donde se personalizó los colores */}
  const classes = useStyles();

  return (
    <>

      {/**se usa el ThemeProvider para que se pueda declarar la funcion  que guarda la personalizacion del color */}
      <ThemeProvider >

        {/**Barra de navegacion */}
        <AppBar position='static'>

          {/**Box donde se usa para aplicar el color que se personalizó de fondo en la barra de navegacion*/}
          <Grid className={classes.card}>  

            <Toolbar>

              <IconButton sx={{m:10,display:{sm:'none'}}}>
                <MenuIcon/>
              </IconButton>

              {/**Grid que contiene el logo de yunex traffic  */}
              <Grid sx={{m:10}}>
                <img src='../public/img/logo.png' alt="" width='100px' height='40px' />
              </Grid>

              {/**Grid que contiene los botones de navegacion y los posiciones al final del lado derecho de la barra de navegación */}
              <Grid container direction='row' justifyContent='end'>

              <ButtonGroup variant="contained" color="primary" aria-label="contained primary button group">
                {/**Botones de navegación */}
                <Button href="/">INICIO</Button>
                <Button href="SignUp">REGISTRARSE</Button>
                <Button href="Login" theme={theme}>INICIAR SESION</Button>
              </ButtonGroup>

              </Grid>
            </Toolbar> 
          </Grid>
        </AppBar>

        {/**Grid donde se usa para que genere un relleno de fondo detras del formulario y aplica el color que se personalizó */}
        <Grid className={classes.main} padding='4%'>

          {/**Grid quee contiene el formulario y este hace que se active la adaptacion del formulario según el tamaño de la pantalla */}
          <Grid container>

            {/**Box donde se define como se ve la ventana donde se encuentra el formulario */}
            <Box padding='2%' width='500px' margin='auto' boxShadow='0px 2px 2px black' color='inherit' className={classes.card}>

                {/**Grid que configura como se ve el icono y el texto de Iniciar sesion del formulario según el tamaño de la pantalla */}
                <Grid Item xs={12} sm={12}>

                    <Avatar sx={{bgcolor:'primary.main', margin:'auto'}}>
                      <AccountCircleIcon  />
                    </Avatar>

                    <Typography  component='h1' variant='h5' align='center'>
                      INICIO DE SESION
                    </Typography>

                </Grid>

                <br />
                <br />
                
                {/**Box que configura la validacion de los datos ingresados del formulario */}
                <Box component='form' onSubmit={handleSubmit(onSubmit)} noValidate >
                  
                  {/**Grid que configura como se ve los cuadros donde se ingresan los datos del formulario según el tamaño de la pantalla */}
                  <Grid Item xs={12} sm={12}>

                    {/**Cuadro donde el Interesado ingresara su Correo Electronico */}
                    <TextField
                    margin='dense'
                      required
                      fullWidth
                      type='email'
                      label='Correo Electronico'
                      autoFocus
                      {...register('email', { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                    />

                    {/**Cuadro donde el Interesado ingresara su Contraseña */}
                    <TextField
                      margin='dense'
                      required
                      fullWidth
                      label='Contraseña'
                      type='password'
                      id='password'
                      {...register('password', { required: true, minLength: 8, maxLength: 20 })}
                    />

                    <br />

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
                          Ingresar
                        </Button>

                      </Grid>

                    </Grid>

                    {/**Grid que contiene las opciones de Olvide mi contraseña y No tengo cuenta */}
                    <Grid container alignItems='bottom'>

                      <Grid item xs>
                        {/**Link esta etiqueta lo enviara al formulario de recuperar contraseña  en caso en el que tenga cuenta */}
                        <Link variant='body2' to='/forgot' underline='none' component={RouterLink}>
                          Olvide mi contraseña
                        </Link>

                      </Grid>

                      <Grid item>

                          {/**Link esta etiqueta lo enviara al formulario de registrarse en caso en el que no tenga cuenta */}
                          <Link variant='body2' to='/signup' underline='none' component={RouterLink} >
                            No tengo cuenta
                          </Link>

                      </Grid>

                    </Grid>

                  </Grid>

                </Box>
                

            </Box> 

          </Grid>

        </Grid>

      </ThemeProvider>
        
    </>
  )
}
