import {
    Box,
    Grid,
    TextField,
    Typography,
    Container,
    Link,
    FormControl,
    InputLabel,
    Select,
    MenuItem
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
        sitio: data.get('sitio'),
        diagnostico: data.get('diagnostico'),
        descripcion: data.get('descripcion'),
        realimentacion: data.get('realimentacion'),
      });
    };
  
    const [diagnostico, setDiagnostico] = useState('')
    
    const handleDiagnostico = (event) => {
      setDiagnostico(event.target.value)
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={12} sm={15}>
                <TextField
                  autoComplete="given-name"
                  name="sitio"
                  required
                  fullWidth
                  label="Sitio"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={15}>
              <FormControl sx={{ minWidth: '100%' }}  required>
                <InputLabel id="demo-simple-select-helper-label">Diagnostico</InputLabel>
                <Select
                  value={diagnostico}
                  label="Diagnostico"
                  onChange={handleDiagnostico}
                  name="diagnostico"
                >
                  <MenuItem value="Diagnostico 1">Diagnostico 1</MenuItem>
                  <MenuItem value="Diagnostico 2">Diagnostico 2</MenuItem>
                  <MenuItem value="Diagnostico 3">Diagnostico 3</MenuItem>
                  <MenuItem value="Diagnostico 4">Diagnostico 4</MenuItem>
                  <MenuItem value="Diagnostico 5">Diagnostico 5</MenuItem>
                </Select>
              </FormControl > 
              </Grid>
              <Grid item xs={50} sm={20}>
                <TextField
                name="descripcion"
                label="Descripcion del Trabajo"
                multiline
                rows={4}
                sx={{ minWidth:'100%' }}
                variant="outlined"
                />
              </Grid>
              <Grid item xs={50} sm={20}>
                <TextField
                name="realimentacion"
                label="Realimentacion Tecnica"
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
  