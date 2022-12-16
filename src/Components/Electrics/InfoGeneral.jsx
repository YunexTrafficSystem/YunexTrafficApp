import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid
} from '@mui/material'

/**
* Es una página en la que se pasa la retroalimentación para el formulario de Electrics/Electrico
* @author Katerine Ospina <ospinakaterine4@gmail.com>
* @param {ReactHook} register - Registro por campo, se reciben desde react-hook-form
* @param {ReactHook} errors - Errores del formulario, se reciben desde react-hook-form
* @returns {ReactComponent} - Página de Step 1 (Información General)
*/

function InfoGeneral({ register, errors }) {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Serial"
          {...register("serial", {
            required: "Serial es requerido",
          })}
          error={errors?.serial}
          helperText={errors?.serial && errors?.serial.message}
        />
      </Grid>
      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel>Tipo Modulo</InputLabel>
          <Select
            label="Tipo Modulo"
            defaultValue={1}
            {...register("type", {
              required: "Tipo modulo es requerido",
            })}
            error={errors?.type}
          >
            <MenuItem value={1}>Vehicular</MenuItem>
            <MenuItem value={2}>Flecha</MenuItem>
            <MenuItem value={3}>Peatonal</MenuItem>
            <MenuItem value={4}>Sonoro</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel>Color</InputLabel>
          <Select
            defaultValue={1}
            label="Color"
            {...register("color", {
              required: "Color es requerido",
            })}
            error={errors?.color}
          >
            <MenuItem value={1}>Verde</MenuItem>
            <MenuItem value={2}>Amarillo</MenuItem>
            <MenuItem value={3}>Rojo</MenuItem>
            <MenuItem value={3}>Sonoro</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <FormControl fullWidth >
          <InputLabel>Proyecto</InputLabel>
          <Select
            label="Proyecto"
            defaultValue={1}
            {...register("project", {
              required: "Proyecto es requerido",
            })}
            errors={errors?.project}
          >
            <MenuItem value={1}>Bogota</MenuItem>
            <MenuItem value={2}>Monteria</MenuItem>
            <MenuItem value={3}>proj3</MenuItem>
            <MenuItem value={4}>proj4</MenuItem>
            <MenuItem value={5}>proj5</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("inputDescription", {
            required: "Descripcion es requerida",
          })}
          error={errors?.inputDescription}
          helperText={errors?.inputDescription && errors?.inputDescription.message}
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          label="Descripción"
        >
        </TextField>
      </Grid>
    </Grid>
  )
}

export { InfoGeneral }