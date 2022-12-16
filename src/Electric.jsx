import { useState } from "react";
import { useForm } from "react-hook-form";
import { Button, Box, Grid, ButtonGroup } from "@mui/material";
import { InfoSpecific } from "./Components/Electrics/InfoSpecific";
import { InfoGeneral } from "./Components/Electrics/InfoGeneral";
import { FormStepper } from "./Components/FormStepper";
import { FormPageSteps } from "./Components/FormPageSteps";
import { FormStep } from "./Components/FormStep";
import { FinalStep } from "./Components/FinalStep";
import Paper from '@mui/material/Paper'

export default function Electric() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

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

  const steps = ["Información general", "Información especifica"];

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
  );
}

export { Electric };
