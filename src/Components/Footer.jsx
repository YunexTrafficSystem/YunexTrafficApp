import { useState } from 'react'
import AppBar from '@mui/material/AppBar';
import Box from "@mui/material/Box"
import Toolbar from '@mui/material/Toolbar';
import {Container, Typography,Grid,CssBaseline} from '@mui/material';

import { makeStyles } from '@material-ui/core/styles';
const useStyles = makeStyles(theme => ({
  text: {
    align: 'center',
  }
}));

const ResponsiveFooter = () => {
  const classes = useStyles();

  return (
  
      <AppBar position='' color='black' >
        <CssBaseline/>

        <Container >

          <Toolbar>
              <Grid container padding='3%'>

                <Grid Item sm={3} xs={12}>
                  <Typography variant='body2' align='center'>
                    Compliace
                  </Typography>
                </Grid>
                <Grid Item sm={3} xs={12}>
                  <Typography variant='body2' align='center'>
                    For Suppliers
                  </Typography>
                </Grid>
                
                <Grid Item sm={3} xs={12}>
                  <Typography variant='body2' align='center'>
                    Data Privacy & Cookies
                  </Typography>
                </Grid>

                <Grid Item sm={3} xs={12}>
                  <Typography variant='body2' align='center'>
                    Impripmit
                  </Typography>
                </Grid>


              </Grid>
          </Toolbar>

        </Container>

      </AppBar>
  )
}
export default ResponsiveFooter


