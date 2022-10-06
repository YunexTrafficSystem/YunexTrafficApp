import {
    Box,
    Grid,
    TextField,
    Typography,
    Link,
    Container
  } from "@mui/material";
  
  import CssBaseline from '@mui/material/CssBaseline'
  
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
        numero: data.get('numero'),
        prioridad: data.get('prioridad'),
        estado:data.get('estado'),
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
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={15}>
                <TextField
                  autoComplete="given-name"
                  name="numero"
                  required
                  fullWidth
                  label="O.T Numero"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={15}>
                <TextField
                  autoComplete="given-name"
                  name="prioridad"
                  required
                  fullWidth
                  label="Prioridad"
                  autoFocus
                />
              </Grid>
              <Grid item xs={12} sm={15}>
                <TextField
                  autoComplete="given-name"
                  name="estado"
                  required
                  fullWidth
                  label="Estado Actual"
                  autoFocus
                />
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    );
  }
  