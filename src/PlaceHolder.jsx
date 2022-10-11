import { useState } from 'react'
import { useForm, useFieldArray, Controller  } from 'react-hook-form'

import { FieldArray } from './Components/FieldArray'
import { InfoGeneral } from './Components/InfoGeneral'
import { InfoSpecific } from './Components/InfoSpecific'
import { FormStepper } from './Components/FormStepper'
import { FormSteps } from './Components/FormSteps'
import { FormPageSteps } from './Components/FormPageSteps'
import { FormStep } from './Components/FormStep'
import { Stepper, Step, StepLabel, Button, Box, Card } from '@mui/material'

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

  const [activeStep, SetActiveStep] = useState(2) 

  const steps = ['Información general', 'Información especifica']
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        <FormStepper 
          steps={steps}
          activeStep={activeStep}
        />
      </Box>
      <FormPageSteps activeStep={activeStep}>
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
      <Button onCLick={true}>Siguiente</Button>
      <Button variant="contained" type="submit">Enviar</Button>
    </form>
  )
}

export { PlaceHolder }
