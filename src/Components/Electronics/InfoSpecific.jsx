import { 
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel,
  Grid,
} from '@mui/material'

//Cada componente requiere explicitamente de propiedades tal cómo:
//<Component        error       =    {errors} 
//    ↑               ↑                 ↑
//    |               |          Variable de la propiedad
//    |           Propiedades
//Componenetes 

function InfoSpecific({ register, errors }) {
  /** Segundo step, muestra la información específica del formulario*/
  return (
     <Grid container spacing={5}>
     <Grid item xs={12}>
        <TextField 
          {...register("outDescription", {
            required: true,
            message: "Descripcinón de entrada requerida",
          })}
          error={errors?.outDescription}
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
              />} label= "Fin prueba" />
          </FormGroup>
        </Grid>
      </Grid>
  )
}

export { InfoSpecific }