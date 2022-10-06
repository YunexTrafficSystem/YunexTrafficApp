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
import { PlaceHolder } from './PlaceHolder'
import { TableForm } from './TableComponents'
import Electrico1 from './Electrico1'
import Electronico1 from './Electronico1'
import Terreno1 from './Terreno1'
import Tabla1 from './TablasTerreno/Tabla1'
import { DatePicker } from './DatePicker'
import TablaK from './TablasTerreno/TablaK'
import { FormStepper } from './Components/FormStepper'

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
          <Route path="Electrico" element={<Electrico1 />} />
          <Route path="Electronico" element={<Electronico1 />} />
          <Route path="Registro" element={<Registro />} />
          <Route path="Login" element={<Login />} />
          <Route path="Terreno" element={<Terreno1 />} />
          <Route path="FormStepper" element={<FormStepper />}/>
        </Routes>
      </Router>      
    </ThemeProvider> 
  </React.StrictMode>
)

