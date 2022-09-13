import {
    FormControlLabel,
    Checkbox,
    Box,
    Grid,
    TextField,
    Typography,
    Container,
    Link,
  } from "@mui/material";
  
  import { Link as RouterLink } from 'react-router-dom'
  import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
  import CssBaseline from '@mui/material/CssBaseline'
  import { useState } from 'react'
import { number } from "prop-types";
  
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
        componentes: data.get('componentes'),
        cantidad: data.get('cantidad'),
        descripcion:data.get('descripcion'),
      });
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
          <Typography component="h1" variant="h5">
            Información especifica
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={15}>
                <TextField
                  autoComplete="given-name"
                  name="componentes"
                  required
                  fullWidth
                  label="Componentes"
                  autoFocus
                />
              </Grid>
              <Grid item xs={50} sm={20}>
                <TextField
                id="outlined-number"
                label="Cantidad"
                name="cantidad"
                type="number"
                sx={{ minWidth:'100%' }}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                required
                />
              </Grid>
              <Grid item xs={50} sm={20}>
                <TextField
                name="descripcion"
                label="Descripcion"
                multiline
                rows={4}
                sx={{ minWidth:'100%' }}
                variant="outlined"
                />
              </Grid>
              <Grid item xs={6} sm={7}>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="En prueba"
                />
              </Grid>
              <Grid item xs={6} sm={5}>
                <FormControlLabel
                control={<Checkbox value="remember" color="primary" />}
                label="Fin Prueba"
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    );
  }
  