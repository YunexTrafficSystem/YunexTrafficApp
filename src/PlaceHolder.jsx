import { useState } from 'react'
import { useForm, useFieldArray, Controller  } from 'react-hook-form'

import { FieldArray } from './Components/FieldArray'
import { InfoGeneral } from './Components/InfoGeneral'
import { InfoSpecific } from './Components/InfoSpecific'
import { FormStepper } from './Components/FormStepper'
import { FormSteps } from './Components/FormSteps'
import { FormPageSteps } from './Components/FormPageSteps'
import { FormStep } from './Components/FormStep'
import { Stepper, Step, StepLabel, Button, Box, Card, Grid, ButtonGroup } from '@mui/material'
import { positions } from '@mui/system'

function PlaceHolder() {
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      mant: [{ quantity: 1, component: 1 }], 
      module: 3,
      container:5,
      project:4
    }
  })
  

  const { fields, append, remove } = useFieldArray({
    control,
    name: "mant",
  })
  
  const onSubmit = data => {
    console.log(data)
  }
  
  const [activeStep, SetActiveStep] = useState(0) 
  
  const nextStep = () => {
    if ( activeStep === steps.length - 1 ) {

    }
    SetActiveStep((activeStep) => activeStep + 1);
  }

  const backStep = () => {
    SetActiveStep((activeStep) => activeStep - 1);
  }
  
  const steps = ['Información general', 'Información especifica']
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <FormStepper
          steps={steps}
          activeStep={activeStep}
        />
      </Box>
      <FormPageSteps activeStep={activeStep} >
        <FormStep>
          <InfoGeneral register={register} errors={errors} />
          <FieldArray 
            fields={fields}
            register={register}
            append={append}
            remove={remove}
            errors={errors}
          />
        </FormStep>
        <FormStep>
          <InfoSpecific register={register} errors={errors} />
        </FormStep>
      </FormPageSteps>
      <Grid> 
        <ButtonGroup
          sx={{
            margin:"10px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <Button onClick={backStep}>Volver</Button>
          <Button
            onClick={nextStep}
            variant="contained"
            type={(activeStep === steps.length) ? "submit" : "button" }
          >
            {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
          </Button>
        </ButtonGroup>
      </Grid>
    </form>
  )
}

export { PlaceHolder }
