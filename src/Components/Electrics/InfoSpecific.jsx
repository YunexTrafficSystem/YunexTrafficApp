import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
} from "@mui/material";

/**
* Es una página en la que se pasa la retroalimentación para el formulario de Electrics/Electrico
* @author Katerine Ospina <ospinakaterine4@gmail.com>
* @param {ReactHook} register - Registro por campo, se reciben desde react-hook-form
* @param {ReactHook} errors - Errores del formulario, se reciben desde react-hook-form
* @returns {ReactComponent} - Página de Step 2 (Información Específica)
*/

function InfoSpecific({ register, errors }) {
  return (
    <Grid container spacing={5}>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Voltage"
          type="number"
          {...register("voltage", { required: "Requerido", min: 1, max: 99 })}
          error={errors?.voltage}
          helperText={errors?.voltage && errors?.voltage.message}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          type="number"
          label="Corriente"
          {...register("current", { required: "Requerido", min: 1, max: 99 })}
          error={errors?.current}
          helperText={errors?.current && errors?.current.message}
        />
      </Grid>
      <Grid item xs={4}>
        <TextField
          fullWidth
          label="Potencia"
          type="number"
          {...register("power", { required: "Requerido", min: 1, max: 99 })}
          error={errors?.power}
          helperText={errors?.power && errors?.power.message}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Desplazamiento"
          type="number"
          {...register("displacement", {
            required: "Desplaxamiento es requerido",
            min: -99,
            max: 99,
          })}
          error={errors?.displacement}
          helperText={errors?.displacement && errors.displacement.message}
        />
      </Grid>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel
            control={<Checkbox {...register("testing")} />}
            label="Inicio prueba"
          />
          <FormControlLabel
            control={<Checkbox {...register("tested")} />}
            label="Fin prueba"
          />
        </FormGroup>
      </Grid>
    </Grid>
  );
}

export { InfoSpecific };
