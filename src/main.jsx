import React from 'react'
import ReactDOM from 'react-dom/client'
import Registro from './Registro'
import Nav from './Nav'
import Footer from './Footer'
import { createTheme } from '@mui/material/styles'

const theme = createTheme({
  palette: {
    prim
  }
})

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Nav />
    <Registro />
  </React.StrictMode>
)

