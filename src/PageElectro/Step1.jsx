import {
    Box,
    Grid,
    TextField,
    Typography,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    Link,
    Container
  } from "@mui/material";
  
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
        serial: data.get('serial'),
        nombre: data.get('nombre'),
        contenedor:data.get('contenedor'),
        proyecto:data.get('proyecto'),
        diagnostico:data.get('descripcion'),
      });
    };
  
    const [nombre, setNombre] = useState('')
    const [contenedor, setContenedor] = useState('')
    const [proyecto, setProyecto] = useState('')
    
  
    const handleNombre = (event) => {
      setNombre(event.target.value)
    };
    const handleContenedor = (event) => {
        setContenedor(event.target.value)
      };
      const handleProyecto = (event) => {
        setProyecto(event.target.value)
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
            Información general
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={15}>
                <TextField
                  autoComplete="given-name"
                  name="serial"
                  required
                  fullWidth
                  label="Serial"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={15}>
              <FormControl sx={{ minWidth: '100%' }}  required>
                <InputLabel id="demo-simple-select-helper-label">Nombre Modulo</InputLabel>
                <Select
                  value={nombre}
                  label="Nombre de Modulo"
                  onChange={handleNombre}
                  name="nombre"
                >
                  <MenuItem value="Modulo 1">Modulo 1</MenuItem>
                  <MenuItem value="Modulo 2">Modulo 2</MenuItem>
                  <MenuItem value="Modulo 3">Modulo 3</MenuItem>
                  <MenuItem value="Modulo 4">Modulo 4</MenuItem>
                  <MenuItem value="Modulo 5">Modulo 5</MenuItem>
                </Select>
              </FormControl > 
              </Grid>
              <Grid item xs={12} sm={15}>
              <FormControl sx={{ minWidth: '100%' }} required>
                <InputLabel id="demo-simple-select-helper-label">Tipo de Contenedor</InputLabel>
                <Select
                  value={contenedor}
                  label="Tipo de contenedor"
                  onChange={handleContenedor}
                  name="contenedor"
                >
                  <MenuItem value="Contenedor 1">Contenedor 1</MenuItem>
                  <MenuItem value="Contenedor 2">Contenedor 2</MenuItem>
                  <MenuItem value="Contenedor 3">Contenedor 3</MenuItem>
                </Select>
              </FormControl > 
              </Grid>
              <Grid item xs={12} sm={15}>
              <FormControl sx={{ minWidth: '100%' }} required>
                <InputLabel id="demo-simple-select-helper-label">Proyecto</InputLabel>
                <Select
                  value={proyecto}
                  label="Proyecto"
                  onChange={handleProyecto}
                  name="proyecto"
                >
                  <MenuItem value="Proyecto 1">Proyecto 1</MenuItem>
                  <MenuItem value="Proyecto 2">Proyecto 2</MenuItem>
                  <MenuItem value="Proyecto 3">Proyecto 3</MenuItem>
                  <MenuItem value="Proyecto 4">Proyecto 4</MenuItem>
                  <MenuItem value="Proyecto 5">Proyecto 5</MenuItem>
                </Select>
              </FormControl > 
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
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    );
  }
  