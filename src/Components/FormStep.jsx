import { useState } from 'react'
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material'

/**
 * Función que retornará paso a paso y renderizará la página indicada
 * @author Miguel <miguel126xl9@outlook.es>
 * 
 * @param {ReactComponent} children - Elemento hijo, se pasará como prop para renderizar.
 * @param {String} title - Títutlo del paso.
 * @returns {ReactComponent} - Componente de paso
 * 
 * @history
 * - Inicio de formulario paso a paso
 */
function FormStep({ children, title }) {
  return (
    <Step>
      <StepLabel>{title}</StepLabel>
    </Step>
  )
}
