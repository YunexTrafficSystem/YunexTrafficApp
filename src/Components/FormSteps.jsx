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


function FormSteps({ children, title, steps, activeStep }) {
  return (
    <Stepper activeStep={activeStep}>
      {steps.map((step, index) => (
        <Step key={index}>
          <StepLabel>{step}</StepLabel>
        </Step>
      ))}
    </Stepper>
  )
}
//Hola ✌
// Ni había visto, que más
export { FormSteps }