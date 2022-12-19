import { useState } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { FieldArray } from "./Components/FieldArray";
import { InfoSpecific } from "./Components/zone/InfoSpecific";
import { InfoGeneral } from "./Components/zone/InfoGeneral";
import { FeedBack } from "./Components/zone/FeedBack";
import { FormStepper } from "./Components/FormStepper";
import { FormPageSteps } from "./Components/FormPageSteps";
import { FormStep } from "./Components/FormStep";
import {
  Button,
  Box,
  Grid,
  ButtonGroup,
} from "@mui/material";
import { FinalStep } from "./Components/FinalStep";
import Paper from '@mui/material/Paper'

export default function Zone() {
  const {
    control,
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    onError();
    if (activeStep === steps.length - 1) {
      alert(JSON.stringify(data));
    }
  };

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

  const steps = [
    "Información general",
    "Realimentación",
    "Información especifica",
  ];

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
        </FormStep>
        <FormStep>
          <FeedBack register={register} errors={errors} />
        </FormStep>
        <FormStep>
          <InfoSpecific
            register={register}
            errors={errors}
            Controller={Controller}
            control={control}
          />
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
        >{
          !(activeStep === steps.length || activeStep === 0) &&
          <Button
            onClick={backStep}
          >
            Volver
          </Button>
        }
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
  );
}

export { Zone };
