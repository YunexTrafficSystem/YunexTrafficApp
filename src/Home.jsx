import {
  Box,
  Button,
  CssBaseline,
  Grid,
  Typography,
  GlobalStyles
} from '@mui/material';

import Nav from './Nav'

function FeaturesContent() {
  return (
    <>
      <Nav />
      <br />
      <GlobalStyles margin="0%" padding="0%"/>
      <CssBaseline />
      <Box margin="4%">

        <Box display="grid" gridTemplateColumns="repeat(12, 1fr)" gap={2}>

          <Box gridColumn="span 6" padding="7%">
            <Typography component="h1" variant="h3" align="center" color="text.ligthgreen" gutterBottom > 
              The Yunex Traffic System 
            </Typography>

            <Typography variant="p" align="center" color="text.secondary" component="p">
              Software desarrollado con el objetivo de optimizar y facilitar los procesos de las areas de trabajo que componen la empresa Yunex Traffic
            </Typography>
            <Grid
              container
              justifyContent="center"
            >
              <Grid
                item
              >
                <Button
                  variant="contained"
                  size="large"
                  sx={{ marginTop: 8 }}
                  href="Login"
                >
                  Iniciar ahora
                </Button>
              </Grid>
            </Grid>
          </Box>


          <Box gridColumn="span 6" padding="5%">
            <img src="../public/img/yunex.jpg" alt="" width="500px" height="300"/>
          </Box>

        </Box>
            
      </Box >

    </>
  );
}

export default function FeaturesPage() {
  return <FeaturesContent />;
}