import { useState } from 'react'
import { 
  Stepper,
  Step,
  StepLabel,
  Button,
  Box
} from '@mui/material'

import { FieldArray } from './FieldArray'

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
