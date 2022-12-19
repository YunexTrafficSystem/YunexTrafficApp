import React from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import { ThemeProvider, createTheme } from '@mui/material/styles'
import ReactDOM from 'react-dom/client'

import Forgot from './Forgot'
import Login from './Login'
import Footer from './Components/Footer'
import SignUp from './SignUp'
import Home from './Home'
import Dashboard from './Components/users/Dashboard'
import Menu from './Menu'
import { EHS } from './EHS'
import { Electronico } from './Electronico'
import { Electric } from './Electric'
import { FinalStep } from './Components/FinalStep'
import { FormStepper } from './Components/FormStepper'
import { Zone } from './Zone'

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
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="forgot" element={<Forgot />} />
          <Route path="signUp" element={<SignUp />} />
          <Route path="electro" element={<Electronico />} />
          <Route path="login" element={<Login />} />
          <Route path="formStepper" element={<FormStepper />} />
          <Route path="finalStep" element={< FinalStep />} />
          <Route path="electrico" element={< Electric />} />
          <Route path="terreno" element={< Zone />} />
          <Route path="menu" element={<Menu />} />
          <Route path="ehs" element={<EHS />} />
          <Route path="dashboard" element={<Dashboard />} />
          {/* <Route path="grid" element={<DataGrid />} /> */}
        </Routes>
      </Router>
      <br />
      <Footer />
    </ThemeProvider>
  </React.StrictMode>
)

