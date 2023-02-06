import {  Avatar,  Button,  TextField,  Checkbox,Tooltip,  Link,  Grid,  Box,  Typography,  Container,  GlobalStyles ,  Toolbar,  AppBar,  CssBaseline} from '@mui/material';

import { Link as RouterLink } from 'react-router-dom'
import { useForm } from "react-hook-form";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { makeStyles } from '@material-ui/core/styles'
import { ThemeProvider } from '@material-ui/core';

import { createMuiTheme } from '@material-ui/core/styles';

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

export default function SignIn() {
  const { register, handleSubmit } = useForm();
  const onSubmit = data => console.log(data);
  const classes = useStyles();
  return (
    <>
      <GlobalStyles margin="0%" padding="0%"/>
      <ThemeProvider >
      <CssBaseline />
        <AppBar position="static">
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
        <Box className={classes.main} padding="4%">
          <br />
          <Container>
            <Box padding='2%' width="500px" margin="auto" boxShadow=" 0px 2px 2px black" color="inherit" className={classes.card}>
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
                  <Typography  component="h1" variant="h5" align="center">
                    INICIO DE SESION
                  </Typography>
                </Box>
                <br />
                <br />
                <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
                  <TextField
                  margin="dense"
                    required
                    fullWidth
                    type="email"
                    label="Correo Electronico"
                    autoFocus
                    {...register("email", { required: true, pattern: /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/ })}
                  />
                  <TextField
                  margin="dense"
                    required
                    fullWidth
                    label="Contraseña"
                    type="password"
                    id="password"
                    {...register("password", { required: true, minLength: 8, maxLength: 20 })}
                  />
                  <br />
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
                        Ingresar
                      </Button>

                    </Grid>
                  </Grid>
                  <Grid container alignItems="bottom">
                    <Grid item xs>
                      <Link variant="body2" to="/forgot" underline="none" component={RouterLink}>
                        Olvide mi contraseña
                      </Link>
                    </Grid>
                    <Grid item>
                        <Link variant="body2" to="/signup" underline="none" component={RouterLink} >
                          No tengo cuenta
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
  )
}
