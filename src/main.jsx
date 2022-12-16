import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'

import Forgot from './Forgot'
import Login from './Login'
import Footer from './Components/Footer'
import SignUp from './SignUp'
import Home from './Home'
import Dashboard from './Components/Users/Dashboard'
import Menu from './Menu'
import DataGrid from './Components/DataGrid'
import { EHS } from './EHS'
import { Electronico } from './Electronico'
import { Electric } from './Electric'
import { FinalStep } from './Components/FinalStep'
import { FormStepper } from './Components/FormStepper'
import { makeStyles } from '@mui/styles'
import { Zone } from './Zone'

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
    black: {
      main: '#000',
      light: '#fff',
      dark: '#000',
      contrastText: '#fff',
    },
    white: {
      main: '#fff',
      light: '#000',
      dark: '#fff',
      contrastText: '#000'
    }
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      {/* <Nav /> */}
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="Forgot" element={<Forgot />} />
          <Route path="SignUp" element={<SignUp />} />
          <Route path="Electro" element={<Electronico />} />
          <Route path="Login" element={<Login />} />
          <Route path="FormStepper" element={<FormStepper />} />
          <Route path="FinalStep" element={< FinalStep />} />
          <Route path="Electrico" element={< Electric />} />
          <Route path="Terreno" element={< Zone />} />
          <Route path="Menu" element={<Menu />} />
          <Route path="EHS" element={<EHS />} />
          <Route path="DataGrid" element={<DataGrid />} />
          <Route path="Dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
      <br />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
)

