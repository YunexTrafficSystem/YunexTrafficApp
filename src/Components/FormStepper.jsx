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

function FormStepper({ items, children }) {

  const [activeStep, setActiveStep] = useState(0)

  const nextStep = () => {
    setActiveStep((currentStep) => currentStep + 1)
  }

  const prevStep = () => {
    setActiveStep((currentStep) => currentStep - 1)
  }

  return (
    <>
      <Stepper>
        {children.map((child, index) => (
            <Step key={index}>
              <StepLabel>Paso</StepLabel>
            </Step>
        ))}
      </Stepper>
      {children.map((child, index) => (
        <Box>
          {children[index]}
      </Box>
      ))}
    </>
  )
}

export { FormStepper }
