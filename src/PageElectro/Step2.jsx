import { useForm, useFieldArray } from 'react-hook-form' // Importación de hook de formularios
import { // Importación de MUI
  FormControlLabel,
  Checkbox,
  Box,
  Grid,
  TextField,
  Typography,
  Container,
  Link  
} from "@mui/material";
// Importación de componentes necesarios
import { TablaForm } from '../TablaComponents' // corregir

const Copyright = (props) => {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
        Copyright ©
      <Link color="inherit" href="">
        Yunex Traffic
      </Link>
        {` ${new Date().getFullYear()}.`}
    </Typography>
  )
} 


/*
TODO: 
> [-] Importar react hook form 
- [-] Añadir los handlers para el fomulario
- [-] Refactorizar componentes livianos
- [-] Separar componentes en carpetas
- [-] Abstraer componentes
- [-] Ver documentación de los providers
- [-] Pisible abstracción de <Step> <Step1 /> </Step>? 
- [-] Realizar un placer holder de formularios 
*/ 

// Inicialización del SingUp (Registro)
export default function SignUp() {
  const { control, register, handleSubmit } = useForm();



  return (
    <Container component="main" maxWidth="xs">
      <form onSubmit={handleSubmit(data => console.log(data))}> 
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
          <Box component="form" noValidate sx={{ mt: 3 }}>
            <Grid container spacing={2}>
            <Grid item xs={50} sm={20}>
                <TablaForm/>
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
      </form>
      <Copyright sx={{ mt: 5 }} />
    </Container>
  );
}
