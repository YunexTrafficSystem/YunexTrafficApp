import { useState } from 'react'
import {Container, Typography,Grid,CssBaseline} from '@mui/material';
import Box from '@mui/material/Box'
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  main: {
    color: '#fff',

  },
  card:{
    backgroundColor:'#000',
  }
}));

export default function ResponsiveFooter () {

  const classes = useStyles();
  return (
      <Box className={classes.card}>
      <CssBaseline/>
        <Container >
              <Grid container padding='3%'>

                <Grid item sm={3} xs={12}>
                  <Typography variant='body2' align='center' className={classes.main}>
                    Compliace
                  </Typography>
                </Grid>
                <Grid item sm={3} xs={12}>
                  <Typography variant='body2' align='center'className={classes.main}>
                    For Suppliers
                  </Typography>
                </Grid>
                
                <Grid item sm={3} xs={12}>
                  <Typography variant='body2' align='center' className={classes.main}>
                    Data Privacy & Cookies
                  </Typography>
                </Grid>

                <Grid item sm={3} xs={12}>
                  <Typography variant='body2' align='center' className={classes.main}>
                    Impripmit
                  </Typography>
                </Grid>
<<<<<<< HEAD

=======
>>>>>>> 6acd696e2c051602fbc883af96ca76f915c6eac9
              </Grid>

        </Container>

      </Box>
  );
}


