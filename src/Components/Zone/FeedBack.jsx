import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";

/**
 * Es una página en la que se pasa la retroalimentación para el formulario de Zona/Terreno
 * @author Miguel Castillo <miguel126xl9@outlook.es>
 * @param {ReactHook} register - Registro por campo, se reciben desde react-hook-form
 * @param {ReactHook} errors - Errores del formulario, se reciben desde react-hook-form
 * @returns {ReactComponent} - Página de Feedback
 */

function FeedBack({ register, errors }) {
  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Sitio"
          {...register("site", {
            required: "Sitio es requerido",
          })}
          error={errors?.site}
          helperText={errors?.site && errors?.site.message}
        />
      </Grid>
      <Grid item xs={12}>
        <FormControl fullWidth>
          <InputLabel>Diagnostico</InputLabel>
          <Select
            defaultValue={1}
            label="Diagnostico"
            {...register("container", {
              required: "Contenedor requerido",
            })}
          >
            <MenuItem value={1}>Diag1</MenuItem>
            <MenuItem value={2}>Diag2</MenuItem>
            <MenuItem value={3}>Diag3</MenuItem>
            <MenuItem value={4}>Diag4</MenuItem>
            <MenuItem value={5}>Diag5</MenuItem>x
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("automatic_desc", {
            required: "Diagnostico es requerido",
          })}
          error={errors?.automatic_desc}
          helperText={errors?.automatic_desc && errors?.automatic_desc.message}
          multiline
          rows={2}
          fullWidth
          variant="outlined"
          label="Descripción de los trabajos"
        ></TextField>
      </Grid>
      <Grid item xs={12}>
        <TextField
          {...register("diagnostic", {
            required: "Descripcion de entrada requerida",
          })}
          error={errors?.diagnostic}
          helperText={errors?.diagnostic && errors?.diagnostic.message}
          multiline
          rows={4}
          fullWidth
          variant="outlined"
          label="Retroalimentación Técnica"
        ></TextField>
      </Grid>
    </Grid>
  );
}

export { FeedBack };
