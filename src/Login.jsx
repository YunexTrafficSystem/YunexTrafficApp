import {
  Avatar,
  Button,
  TextField,
  Checkbox,
  Link,
  Grid,
  Box,
  Typography,
  Container,
  FormControlLabel,
  CssBaseline
} from '@mui/material'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import { BrowserRouter as Router, Routes, Route, Link as RouterLink } from 'react-router-dom'
import { useForm } from "react-hook-form";

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Yunex Traffic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

// Función que renderiza la App (Login de usuario)
export default function SignIn() {
  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
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
        <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
          <LockOutlinedIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Inicio de Sesion
        </Typography>
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
          <TextField
            margin="normal"
            required
            fullWidth
            label="Contraseña"
            type="password"
            id="password"
            autoComplete="current-password"
            {...register("password", { required: true,  minLength: 8,  maxLength: 20 })}
          />
          <FormControlLabel
            control={
              <Checkbox 
                color="primary"
                {...register("remember")} 
              />
            }
            label="Mentener sesión iniciada"
          />
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Ingresar
          </Button>
          <Grid container>
            <Grid item xs>
                <Link variant="body2"  to="/forgot" underline="none" component={RouterLink}>
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
      <Copyright sx={{ mt: 8, mb: 4 }} />
    </Container>
  )
}
