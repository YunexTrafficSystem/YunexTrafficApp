import { useState } from "react"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { FieldArray } from "./Components/FieldArray"
import { InfoGeneral } from "./Components/Electronics/InfoGeneral"
import { InfoSpecific } from "./Components/Electronics/InfoSpecific"
import { FormStepper } from "./Components/FormStepper"
import { FormPageSteps } from "./Components/FormPageSteps"
import { FormStep } from "./Components/FormStep"
import { Button, Box, Grid, ButtonGroup } from "@mui/material"
import { FinalStep } from "./Components/FinalStep"
import Paper from '@mui/material/Paper'

export default function Electronico() {
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      mant: [{ quantity: 1, component: 1 }],
      module: 3,
      container: 5,
      project: 4
    }
  })

  const onSubmit = (data) => {
    onError()
    if (activeStep === steps.length - 1) {
      alert(JSON.stringify(data))
    }
  }

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "mant"
    }
  )

  const onError = (errors) => {
    if (!errors) {
      nextStep()
    }
  }

  const returnStepLabel = (activeStep) => {
    let label = "Siguente"
    if (activeStep == steps.length - 1) {
      label = "Finalizar"
    } else if (activeStep >= steps.length - 1) {
      label = "Reestablecer"
    }
    return label
  }
  const [activeStep, SetActiveStep] = useState(0)

  const nextStep = () => {
    if (activeStep >= steps.length) {
      window.location.reload()
    } else {
      SetActiveStep((activeStep) => activeStep + 1)
    }
  }

  const backStep = () => {
    SetActiveStep((activeStep) => activeStep - 1)
  }

  const steps = ["Información general", "Información especifica"]

  return (
    <Grid container spacing={3}>
      <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            minHeight: 200
          }}
        >
          <>

            <form onSubmit={handleSubmit(onSubmit)}>
              <Box>
                <FormStepper steps={steps} activeStep={activeStep} />
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
                <FormStep>
                  <FinalStep />
                </FormStep>
              </FormPageSteps>
              <Grid>
                <ButtonGroup
                  sx={{
                    margin: "10px 0",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  <Button onClick={backStep} disabled={!(activeStep === 1)}>
                    Volver
                  </Button>
                  <Button variant="contained" type="submit">
                    {returnStepLabel(activeStep)}
                  </Button>
                </ButtonGroup>
              </Grid>
            </form>
          </>
        </Paper>
      </Grid>
    </Grid>
  )
}

export { Electronico }
