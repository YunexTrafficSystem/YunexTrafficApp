import { Stepper, Step, StepLabel } from '@mui/material'

function FormSteps({ steps, activeStep }) {
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