import { useState } from 'react'
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import {Container, Typography,Grid} from "@mui/material"

import { makeStyles } from '@material-ui/core/styles'
const useStyles = makeStyles(theme => ({
  text: {
    align: 'center',
  }
}));

const ResponsiveFooter = () => {
  const classes = useStyles();

  return (

      <AppBar position='bottom' color="black" margin="0%">

        <Container sm={12} className={classes.text}>

          <Toolbar>
              <Grid container alignItems="right" >

                <Grid Item sm={3}>
                  <Typography variant="body2">
                    Compliace
                  </Typography>
                </Grid>
                <Grid Item sm={3}>
                  <Typography variant="body2">
                    For Suppliers
                  </Typography>
                </Grid>
                
                <Grid Item sm={3}>
                  <Typography variant="body2">
                    Data Privacy & Cookies
                  </Typography>
                </Grid>

                <Grid Item sm={3}>
                  <Typography variant="body2">
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


