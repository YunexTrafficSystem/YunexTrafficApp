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
import { FinalStep } from './Components/FinalStep'

/* Lista de cosas por hacer
* [-] Login de ultimo step 
* [-] Controlar botones de paso a paso con validaciones y validacion de errores
* [-] Realizar formularios de Electrico, Terreno 
* [-] Realizar interfaz de tabla (editale)
* [-] Recoleccion de datos para formulario de EHS
* [-] Formulario EHS 
* [-] Conectar el servidor
*/

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
  
  const onSubmit = (data) => {  
    onError()
    console.log(data)
  }

  const onError = (errors, e) => {
    if (!errors) {
      nextStep()
    }
  }

  const [activeStep, SetActiveStep] = useState(0) 
  
  const nextStep = () => {
    SetActiveStep((activeStep) => activeStep + 1);
  }

  const backStep = () => {
    SetActiveStep((activeStep) => activeStep - 1);
  }
  
  const steps = ['Información general', 'Información especifica']
  return (
    <form onSubmit={handleSubmit(onSubmit, onError)}>
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
        <FormStep>
          <FinalStep />
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
          <Button 
            onClick={backStep}
            disabled={!(activeStep === 1)}
          >
            Volver
          </Button>
          <Button
            variant="contained"
            type="submit"
          >
            {activeStep === steps.length - 1 ? 'Enviar' : 'Siguiente'}
          </Button>
        </ButtonGroup>
      </Grid>
    </form>
  ) 
}

export { PlaceHolder }
