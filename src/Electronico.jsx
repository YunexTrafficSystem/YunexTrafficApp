import { useState } from "react"
import { useForm, useFieldArray, Controller } from "react-hook-form"
import { FieldArray } from "./Components/FieldArray"
import { InfoGeneral } from "./Components/Electronics/InfoGeneral"
import { InfoSpecific } from "./Components/Electronics/InfoSpecific"
import { FormStepper } from "./Components/FormStepper"
import { FormSteps } from "./Components/FormSteps"
import { FormPageSteps } from "./Components/FormPageSteps"
import Nav from "./Nav"
import { FormStep } from "./Components/FormStep"
import {
  Stepper,
  Step,
  StepLabel,
  Button,
  Box,
  Card,
  Grid,
  ButtonGroup,
} from "@mui/material"
import { positions } from "@mui/system"
import { FinalStep } from "./Components/FinalStep"

function Electronico() {
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      mant: [{ quantity: 1, component: 1 }], 
      module: 3,
      container:5,
      project:4
    }
  })

  const onSubmit = (data) => {
    onError();
    if (activeStep === steps.length - 1) {
      alert(JSON.stringify(data));
    }
  };

  const { fields, append, prepend, remove, swap, move, insert } = useFieldArray(
    {
      control,
      name: "mant"
    }
  );

  const onError = (errors) => {
    if (!errors) {
      nextStep();
    }
  };

  const returnStepLabel = (activeStep) => {
    let label = "Siguente";
    if (activeStep == steps.length - 1) {
      label = "Finalizar";
    } else if (activeStep >= steps.length - 1) {
      label = "Reestablecer";
    }
    return label;
  };
  const [activeStep, SetActiveStep] = useState(0);

  const nextStep = () => {
    if (activeStep >= steps.length) {
      window.location.reload();
    } else {
      SetActiveStep((activeStep) => activeStep + 1);
    }
  };

  const backStep = () => {
    SetActiveStep((activeStep) => activeStep - 1);
  };

  const steps = ["Información general", "Información especifica"];

  return (
    <>
    <Nav />
    <br />
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
  );
}

export { Electronico };
