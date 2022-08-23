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

import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import CssBaseline from '@mui/material/CssBaseline'
import { useState } from 'react'

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
  );
}

export default function SignUp() {
  const handleSubmit = (event) => {
    event.preventDefault();
    const data = new FormData(event.currentTarget);
    console.log({
      email: data.get('email'),
      password: data.get('password'),
      nombre:data.get('nombre'),
      rol:data.get('rol')
    });
  };

  const [role, setRole] = useState('')

  const handleChange = (event) => {
    setRole(event.target.value)
  };

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
          Registro
        </Typography>
        <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
              />
            </Grid>
            <Grid item xs={12} sm={6}>
            <FormControl sx={{ minWidth: '100%' }} required>
              <InputLabel id="demo-simple-select-helper-label">Rol</InputLabel>
              <Select
                value={role}
                label="Rol"
                onChange={handleChange}
                name="rol"
              >
                <MenuItem value="operador">Operador</MenuItem>
                <MenuItem value="usuario">Usuario</MenuItem>
                <MenuItem value="externo">Externo</MenuItem>
                <MenuItem value="invitado">Invitado</MenuItem>
              </Select>
            </FormControl > 
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                id="email"
                label="Correo Electronico"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                required
                fullWidth
                name="password"
                label="Contraseña"
                type="password"
                id="password"
                autoComplete="new-password"
              />
            </Grid>
            <Grid item xs={12}>
              <FormControlLabel
                control={<Checkbox value="allowExtraEmails" color="primary" />}
                label="Acepta terminos y condiciones."
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
          >
            Sign Up
          </Button>
          <Grid container justifyContent="flex-end">
            <Grid item>
              <Link href="InicioSesion.jsx" variant="body2">
                Ya tengo cuenta
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
