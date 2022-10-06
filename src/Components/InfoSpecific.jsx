import { 
  TextField,
  Checkbox,
  FormGroup,
  FormControlLabel
} from '@mui/material'
function InfoSpecific({ register, errors }) {
  return (
    <div>
      <TextField
      {...register("outputDescription", {
        required: true,
        message: 'Descripcion es requerido'
      })}
        error={errors?.outputDescription}
        multiline
        label="Descripcion"
        rows={4}
        sx={{ minWidth:'10%'}}
        variant="outlined"
        placeholder="Descripción"
      >
      </TextField>
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
    </div>
  )
}

export { InfoSpecific }