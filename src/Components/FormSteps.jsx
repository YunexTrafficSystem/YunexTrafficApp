import { useState } from 'react'
import { Stepper, Step, StepLabel, Button, Box } from '@mui/material'

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
export { FormSteps }