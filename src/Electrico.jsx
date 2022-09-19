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
  
    const [{tipo, color, proyecto}, setRole] = useState('')
    
  
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
            Electrico
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
                  onChange={handleChange}
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
              <Grid item xs={50} sm={20}>
                <TextField
                id="outlined-number"
                label="Voltaje"
                name="voltaje"
                type="number"
                sx={{ minWidth:'100%' }}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                />
              </Grid>
              <Grid item xs={50} sm={20}>
                <TextField
                id="outlined-number"
                label="Corriente"
                name="corriente"
                type="number"
                sx={{ minWidth:'100%' }}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                />
              </Grid>
              <Grid item xs={50} sm={20}>
                <TextField
                id="outlined-number"
                label="Potencia"
                name="potencia"
                type="number"
                sx={{ minWidth:'100%' }}
                InputLabelProps={{ shrink: true }}
                variant="outlined"
                />
              </Grid>
              <Grid item xs={50} sm={20}>
                <TextField
                id="outlined-number"
                label="Desplazamiento"
                name="desplazamiento"
                type="number"
                sx={{ minWidth:'100%' }}
                InputLabelProps={{ shrink: true }}
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
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Guardar
            </Button>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    );
  }
  