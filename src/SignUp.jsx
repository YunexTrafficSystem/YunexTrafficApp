import {
  Avatar,
  Button,
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  TextField,
  Typography,
  Select,
  FormControl,
  MenuItem,
  InputLabel,
  Container,
  Link,
} from "@mui/material";

import { Link as RouterLink } from 'react-router-dom'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'
import Nav from './Nav'
import { useForm } from 'react-hook-form'

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://www.yunextraffic.com/global/en/">
        Yunex Traffic
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

export default function SignUp() {

  const { register, handleSubmit, watch, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);

  return (
    <>
      <Nav />
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
            Registro
          </Typography>
          <Box component="form" onSubmit={handleSubmit(onSubmit)} noValidate sx={{ mt: 1 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="nombre"
                  required
                  fullWidth
                  id="firstName"
                  label="Nombre Completo"
                  autoFocus
                  {...register("name", { required: true })}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <FormControl sx={{ minWidth: '100%' }} required>
                  <InputLabel>Rol solicitado</InputLabel>
                  <Select
                    label="Rol solicitado"
                    required
                    defaultValue={1}
                    {...register("role")}
                  >
                    <MenuItem value={1}>Operador</MenuItem>
                    <MenuItem value={2}>Usuario</MenuItem>
                    <MenuItem value={3}>Externo</MenuItem>
                    <MenuItem value={4}>Invitado</MenuItem>
                  </Select>
                </FormControl >
              </Grid>
              <Grid item xs={12}>
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
              </Grid>
              <Grid item xs={12}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  label="Contraseña"
                  type="password"
                  id="password"
                  autoComplete="current-password"
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
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Registrar
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link to="/Login" variant="body2" underline="none" component={RouterLink}>
                  Ya tengo cuenta
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>

        <Copyright sx={{ mt: 5 }} />
      </Container>
    </>
  );
}
