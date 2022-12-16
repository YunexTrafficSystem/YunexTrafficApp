import { useState } from 'react'
import { 
  Stepper,
  Step,
  StepLabel,
} from '@mui/material'


function FormStepper({ steps, activeStep }) {

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
