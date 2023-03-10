import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid
} from '@mui/material'

/**
* Es una página en la que se pasa la retroalimentación para el formulario de Electronico/Electronico
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
          <InputLabel>Nombre Modulo</InputLabel>
          <Select
            label="Nombre Modulo"
            defaultValue={1}
            {...register("module", {
              required: true,
              message: 'Módulo es requerido'
            })}
          >
            <MenuItem value={1}>mod1</MenuItem>
            <MenuItem value={2}>mod2</MenuItem>
            <MenuItem value={3}>mod3</MenuItem>
            <MenuItem value={4}>mod4</MenuItem>
            <MenuItem value={5}>mod5</MenuItem>
          </Select>
        </FormControl>
      </Grid>

      <Grid item xs={4}>
        <FormControl fullWidth>
          <InputLabel>Tipo Contenedor</InputLabel>
          <Select
            defaultValue={1}
            label="Tipo Contenedor"
            {...register("container", {
              required: true,
              message: 'Contenedor requerido'
            })}
          >
            <MenuItem value={1}>cont1</MenuItem>
            <MenuItem value={2}>cont2</MenuItem>
            <MenuItem value={3}>cont3</MenuItem>
            <MenuItem value={4}>cont4</MenuItem>
            <MenuItem value={5}>cont5</MenuItem>
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
              required: true,
              message: 'Proyecto requerido'
            })}
          >
            <MenuItem value={1}>Bogotá</MenuItem>
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