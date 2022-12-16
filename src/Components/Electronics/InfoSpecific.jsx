import {
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
} from '@mui/material'

/**
* Es una página en la que se pasa la retroalimentación para el formulario de Electronics/Electronico
* @author Katerine Ospina <ospinakaterine4@gmail.com>
* @param {ReactHook} register - Registro por campo, se reciben desde react-hook-form
* @param {ReactHook} errors - Errores del formulario, se reciben desde react-hook-form
* @returns {ReactComponent} - Página de Step 2 (Información Específica)
*/

function InfoSpecific({ register, errors }) {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <TextField
          {...register("outDescription", {
            required: "Descripcion es requerida",
          })}
          error={errors?.outDescription}
          helperText={errors?.outDescription && errors?.outDescription.message}
          multiline
          rows={4}
          fullWidth
          sx={{ minWidth: 339 }}
          variant="outlined"
          label="Descripción"
        >
        </TextField>
      </Grid>
      <Grid item xs={12}>
        <FormGroup>
          <FormControlLabel control={
            <Checkbox
              {...register("testing")}
            />} label="Inicio prueba" />
          <FormControlLabel control={
            <Checkbox
              {...register("tested")}
            />} label="Fin prueba" />
        </FormGroup>
      </Grid>
    </Grid>
  )
}

export { InfoSpecific }