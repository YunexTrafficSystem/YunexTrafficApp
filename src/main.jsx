import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {ThemeProvider,  createTheme } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'

// Importación de las páginas
import Forgot from './Forgot'
import Login from './Login'
import Modal from './Modal'
import Nav from './Nav'
import Registro from './SignUp'
import SignUp from './SignUp'
import Table from './Table'
import Home from './Home'
import Electrico from './Electrico'

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
      <Router>
        <Routes>
          <Route path="/" element={<Electrico />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </Router>      
    </ThemeProvider> 
  </React.StrictMode>
)

