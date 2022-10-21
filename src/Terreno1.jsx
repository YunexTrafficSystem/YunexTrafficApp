import Box from "@mui/material/Box"
import Stepper from "@mui/material/Stepper"
import Step from "@mui/material/Step"
import StepLabel from "@mui/material/StepLabel"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
// import Step1 from "./PageTerreno/Step1"
// import Step2 from "./PageTerreno/Step2"
// import Step3 from "./PageTerreno/Step3"
import { useState } from 'react';
const steps = [
  "Datos generales de la O.T",
  "Realimentación",
  "Datos de fecha",
]
const handleChange = (event) => {
  setRole(event.target.value)
}

// Refactor en pages para almacenar título y
// página relacionados en el { children }
// const pages = [
//   <Step1 />,
//   <Step2 />,
//   <Step3 />
// ]

export default function HorizontalLinearStepper() {
  const [activeStep, setActiveStep] = useState(0)
  const [skipped, setSkipped] = useState(new Set())

  const isStepOptional = (step) => {
    return step === 1
  }

  const isStepSkipped = (step) => {
    return skipped.has(step)
  }

  const handleNext = () => {
    let newSkipped = skipped
    if (isStepSkipped(activeStep)) {
    newSkipped = new Set(newSkipped.values())
    newSkipped.delete(activeStep)
    }

  setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped(newSkipped)
  }

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1)
  }

  const handleSkip = () => {
    if (!isStepOptional(activeStep)) {
    throw new Error("You can't skip a step that isn't optional.")
    }
    setActiveStep((prevActiveStep) => prevActiveStep + 1)
    setSkipped((prevSkipped) => {
    const newSkipped = new Set(prevSkipped.values())
    newSkipped.add(activeStep)
      return newSkipped
    })
  }

  const handleReset = () => {
    setActiveStep(0)
  }

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
        const stepProps = {}
        const labelProps = {}
  
        if (isStepSkipped(index)) {
        stepProps.completed = false
        }
        return (
          <Step key={label} {...stepProps}>
          <StepLabel {...labelProps}>{label}</StepLabel>
          </Step>
        )
        })}
        </Stepper>
        {activeStep === steps.length ? (
        <>
          <Typography sx={{ mt: 2, mb: 1 }}>
            Se completo todos los datos
          </Typography>
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleReset}>Reset</Button>
          </Box>
        </>
      ) : (
        <>
          { pages[activeStep] }
          <Box sx={{ display: "flex", flexDirection: "row", pt: 2 }}>
            <Button
              color="inherit"
              disabled={activeStep === 0}
              onClick={handleBack}
              sx={{ mr: 1 }}
            >
              Volver
            </Button>
            <Box sx={{ flex: "1 1 auto" }} />
            <Button onClick={handleNext}>
              {activeStep === steps.length - 1 ? "Finalizar" : "Siguiente"}
            </Button>
          </Box>
        </>
      )}
    </Box>
  )
}
