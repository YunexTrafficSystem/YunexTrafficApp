import React from 'react'
import ReactDOM from 'react-dom/client'
import Registro from './SignUp'
import Login from './Login'
import Table from './Table'
import Forgot from './Forgot'
import Nav from './Nav'
import Footer from './Footer'
import {ThemeProvider,  createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    primary: {
      main: '#00ff9d',
      light: '#6cffcf',
      dark: '#00ca6e',
      contrastText: '#000',
    },
    secondary: {
      main: '#86fdd4',
      light: '#bbffff',
      dark: '#50c9a3',
      contrastText: '#000',
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
      <Nav />
      <Table />
    </ThemeProvider> 
  </React.StrictMode>
)

