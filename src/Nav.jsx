// import { useState } from 'react'
// import AppBar from "@mui/material/AppBar";
// import Box from "@mui/material/Box";
// import Toolbar from "@mui/material/Toolbar";
// import { Menu as MenuIcon } from "@mui/icons-material";
// import {
//   Container,
//   Button,
// } from "@mui/material";

// const pages = [ 
//   { 
//     title: "Login", 
//     ref: "/Login" 
//   },
//   { 
//     title: "Sign Up", 
//     ref: "/SignUp" 
//   },
//   {
//     title: "Inicio",
//     ref: ""
//   }
// ]

// const ResponsiveAppBar = () => {

//   return (
//     <AppBar position="static" color="secondary">
//       <Container maxWidth="xl">
//         <Toolbar disableGutters>
//           <Box>
//             <img src="../public/img/logo.png" alt="" width="100px" height="40px" />
//           </Box>

//           <Box sx={{ flexGrow: 1, display: { md: 'flex', flexDirection:'row-reverse', xs: 'none'}}}>
//             {pages.map((page) => (
//               <Button
//                 variant="outlined"
//                 key={page.title}
//                 size="large"
//                 sx={{  color: "inherit"}}
//                 href={page.ref}
//               >
//                 {page.title}
//               </Button>
//             ))}
//           </Box>
          
//         </Toolbar>
//       </Container>
//     </AppBar>
//   );
// };
// export default ResponsiveAppBar;

import * as React from 'react';
import { ReactDOM } from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';

import Container from '@mui/material/Container'
import { createTheme } from '@mui/material/styles';
import  {lightBlue, green}  from '@mui/material/colors';
import { ThemeProvider } from '@material-ui/core';

const theme = createTheme({
  palette: {
    primary:{
      main: lightBlue[50]
    }
  }
});



export default function ButtonAppBar() {

  return (
      <ThemeProvider >
        <AppBar position="static" theme={theme}>
          
          <Toolbar>

            <Container>
              <img src="../public/img/logo.png" alt="" width="100px" height="40px" />
            </Container>

            <Box sx={{ flexGrow: 1, display: { md: 'flex', flexDirection:'row-reverse', xs: 'none'}}}>

              <Button variant="contained" disableElevation color="primary" href="SignUp">
                Registrarse
              </Button>
              <Button variant="contained" disableElevation color="primary"  href="Login">
                IniciarSesion
              </Button>
              <Button variant="contained" disableElevation color="inherit" href="" >
                Inicio
              </Button>
            </Box>

          </Toolbar> 

        </AppBar>
      </ThemeProvider>
  );
}