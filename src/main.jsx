import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import {ThemeProvider,  createTheme } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'

// Importación de las páginas
import Forgot from './Forgot'
import Login from './Login'
import Nav from './Nav'
import SignUp from './SignUp'
import Home from './Home'
import { PlaceHolder } from './Electronico'
import { FinalStep } from './Components/FinalStep'
import { FormStepper } from './Components/FormStepper'
import { makeStyles } from '@mui/styles'

const useStyles = makeStyles({
  root: {
    heigth: "100vh",
    background: "red"
  }
})

const theme = createTheme({
  spacing: 2,
  palette: {
      primary: {
      main: '#00E676',
      light: '#00E676',
      dark: '#00ca6e',
      contrastText: '#000',
    },
    secondary: {
      main: '#86fdd4',
      light: '#bbffff',
      dark: '#50c9a3',
      contrastText: '#000',
    },
    blanco:{
      main:'#e3f2fd',
    },
    red:{
      background: '#00E676'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
   <ThemeProvider theme={theme}>
    <Nav />
    <br />
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Forgot" element={<Forgot />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="ph" element={<PlaceHolder />} />
          <Route path="Login" element={<Login />} />
          <Route path="FormStepper" element={<FormStepper />}/>
          <Route path="FinalStep" element={< FinalStep/>}/>
        </Routes>
      </Router>      
    </ThemeProvider> 
  </React.StrictMode>
)

