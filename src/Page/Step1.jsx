import {
    Grid,
    TextField,
    Select,
    FormControl,
    MenuItem,
    InputLabel,
    Box, 
    Typography
} 
    from "@mui/material";
  import { useState } from 'react'

  
  const handleChange = (event) => {
    setRole(event.target.value)
  };
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
  
function Form (){
    return (
        <Box
        sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}>
          <Typography component="h1" variant="h5">
            Electrico
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}></Grid>
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
            </Grid>
            </Box>
            </Box>
    )
}
export default Form