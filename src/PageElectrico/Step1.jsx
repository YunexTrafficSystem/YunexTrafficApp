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

  //Guarda y retorna datos del formulario (Submit)
  export default function SignUp() {
    const handleSubmit = (event) => {
      event.preventDefault();
      const data = new FormData(event.currentTarget);
      console.log({
        serial: data.get('serial'),
        tipo: data.get('tipo'),
        color:data.get('color'),
        proyecto:data.get('proyecto'),
        diagnostico:data.get('descripcion'),
        volteje:data.get('voltaje'),
        corriente:data.get('corriente'),
        potencia:data.get('potencia'),
        desplazamiento:data.get('desplazamiento')
      });
    };
  
    
    const [color, setColor] = useState('')
    const [proyecto, setProyecto] = useState('')
    const [tipo, setTipo] = useState('')
  
    const handleColor = (event) => {
      setColor(event.target.value)
    };
    const handleProyecto = (event) => {
      setProyecto(event.target.value)
    };
    const handleTipo = (event) => {
      setTipo(event.target.value)
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }} >
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
            <FormControl sx={{ minWidth: '100%' }} required>
              <InputLabel id="demo-simple-select-helper-label">Tipo de Modulo</InputLabel>
              <Select
                value={tipo}
                label="Tipo de Modulo"
                onChange={handleTipo}
                name="tipo"
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
              <InputLabel id="demo-simple-select-helper-label">Color</InputLabel>
              <Select
                value={color}
                label="Color"
                onChange={handleColor}
                name="color"
              >
                <MenuItem value="Verde">Verde</MenuItem>
                <MenuItem value="Amarillo">Amarillo</MenuItem>
                <MenuItem value="Rojo">Rojo</MenuItem>
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
          </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    );
  }
  