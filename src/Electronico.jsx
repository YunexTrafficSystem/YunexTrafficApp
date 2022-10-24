import { useState } from 'react'
import { useForm, useFieldArray, Controller  } from 'react-hook-form'

import { FieldArray } from './Components/FieldArray'
import { InfoGeneral } from './Components/Electronics/InfoGeneral'
import { InfoSpecific } from './Components/Electronics/InfoSpecific'
import { FormStepper } from './Components/FormStepper'
import { FormSteps } from './Components/FormSteps'
import { FormPageSteps } from './Components/FormPageSteps'
import { FormStep } from './Components/FormStep'
import { Stepper, Step, StepLabel, Button, Box, Card, Grid, ButtonGroup } from '@mui/material'
import { positions } from '@mui/system'
import { FinalStep } from './Components/FinalStep'

/* Lista de cosas por hacer
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
  
  // Hace el submit, verifica errores y usa Fetch debido
  const onSubmit = (data) => {  
    onError() // Verificará errores
    if (activeStep === steps.length -1 ) {
      // Usará los datos 
      alert(JSON.stringify(data))
    }
  }
  
  //Función de verificación de errores
  const onError = (errors) => {
    if (!errors) {
      nextStep()
    }
  }
  
  // Función para cambio de etiqueta en botón "siguiente"
  const returnStepLabel = (activeStep) => {
    let label = "Siguente"
    if(activeStep == steps.length - 1) {
      label = "Finalizar"
    } else if (activeStep >= steps.length - 1) {
      label = "Reestablecer"
    } 
    return label
  }
  //Declaración de pasos
  const [activeStep, SetActiveStep] = useState(0) 
  
  //Funcion para el cambio de pasos 
  const nextStep = () => {
    if (activeStep >= steps.length) {
      // Recarga página si el formulario está finalizado
      window.location.reload()
    } else {
      SetActiveStep((activeStep) => activeStep + 1);
    }
  }

  //Funcion para volver a la pagina anterior
  const backStep = () => {
    SetActiveStep((activeStep) => activeStep - 1);
  }
  
  //Funcion para nombres de pasos
  const steps = ['Información general', 'Información especifica']
  
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        {/** Componente que imprime los PASOS del formulario */}
        <FormStepper
          steps={steps}
          activeStep={activeStep}
        />
      </Box>
      {/**  Definicion de las páginas de cada paso, contiene FormSteps
       * FormPageSteps: Almacén de pasos
       * FormStep: Página de paso
       * Cada paso tiene:
       * --------------------------- Ejemplo --------------------------
       * <FormStep>
       *   <h1> Paso 1 <h1>
       * </FormStep>
       * <FormStep>
       *   <h1> Paso 2 <h1>
       * </FormStep>
       */
      }
      <FormPageSteps activeStep={activeStep} >
        <FormStep>
          {/** Componentes a rendereizar dentro del paso */}
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
        {/** Agrupacion y diseño de botones */}
        <ButtonGroup
          sx={{
            margin:"10px 0",
            display: "flex",
            justifyContent: "center",
          }}
        >
          {/** Boton que lleva a paso anterior */}
          <Button 
            onClick={backStep}
            disabled={!(activeStep === 1)}
          >
            Volver
          </Button>
          {/** Boton que lleva a paso siguiente */}
          <Button
            variant="contained"
            type="submit"
          >
            {returnStepLabel(activeStep)}
          </Button>
        </ButtonGroup>
      </Grid>
    </form>
  ) 
}

//Cambiar nombre
export { PlaceHolder }
