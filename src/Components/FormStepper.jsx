import { useState } from 'react'
import { 
  Stepper,
  Step,
  StepLabel,
  Button,
  Box
} from '@mui/material'

import { FieldArray } from './FieldArray'

/**
 * @author  Miguel <miguel126l9@outlook.es>
 * 
 * Función que recibe los pasos para el formaulario
 * @param {List} items - Recibe lista que contiene objetos con titulo y componente,
 * @returns {ReactComponent} - Un componente de paso a paso
 * 
 * @History
 * - Añadido recurso inicial de las listas
 * - Correción de bugs en parametro desconocido LAST
 * - Usando funciones como componentes
 * - Removiendo componentes inecesarios
*/

function FormStepper({ steps, children, activeStep, setActiveStep }) {

  return (
    <>
      <Stepper
        alternativeLabel
        activeStep={activeStep}
      >
        {steps.map((step, index) => (
            <Step key={index}>
              <StepLabel>{step}</StepLabel>
            </Step>
        ))}
      </Stepper>
    </>
  )
}

export { FormStepper }
