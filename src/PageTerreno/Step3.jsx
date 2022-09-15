import {
    Box,
    Grid,
    Typography,
    Container,
    Link,
  } from "@mui/material";

  import { DatePicker } from "../DatePicker";
  import CssBaseline from '@mui/material/CssBaseline'
  import { useState } from 'react'
  import Tabla1 from '../TablasTerreno/Tabla1'
  // import Tabla2 from '../TablasTerreno/Tabla2'
  
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
            <Tabla1 text = "Actividad" texto = "Entidad"/> 
            </Grid>
            <Grid item xs={12} sm={15}>
            <Typography sx={{ mt: 2, mb: 2 }}>
            Lista de cuadrillas asignadas desde el panel getion servicios
            </Typography>
            <Tabla1 text = "Entidad" /> 
            </Grid>
            <Grid item xs={12} sm={15}>
            <DatePicker text="Fecha Inicio"/>
              </Grid>
              <Grid item xs={12} sm={15}>
            <DatePicker text="Fecha Fin" />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    );
  }
  