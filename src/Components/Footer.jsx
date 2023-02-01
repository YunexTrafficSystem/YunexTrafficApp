import { useState } from 'react'
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import {Container,  Button, Typography,} from "@mui/material"


const ResponsiveFooter = () => {


  return (
    <AppBar position='static' color="black">

      <Container maxWidth="xl">

        <Toolbar disableGutters >

          <Box display="inline-block">
            <Typography variant="body2">
              Compliace

            </Typography>

            <Typography variant="body2">
              For Suppliers

            </Typography>
             
            <Typography variant="body2">
              Data Privacy  Cookies

            </Typography>

            <Typography variant="body2">
              Impripmit

            </Typography>
          </Box>

        </Toolbar>

      </Container>

    </AppBar>
  )
}
export default ResponsiveFooter


