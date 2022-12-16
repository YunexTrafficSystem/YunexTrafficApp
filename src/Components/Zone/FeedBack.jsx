import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Grid,
} from "@mui/material";

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
            <MenuItem value={1}>FEN</MenuItem>
            <MenuItem value={2}>FSS</MenuItem>
            <MenuItem value={3}>FCT</MenuItem>
            <MenuItem value={4}>FCM</MenuItem>
            <MenuItem value={5}>FAC</MenuItem>
            <MenuItem value={5}>FDT</MenuItem>
            <MenuItem value={5}>ATA</MenuItem>
            <MenuItem value={5}>ACL</MenuItem>
            <MenuItem value={5}>APA</MenuItem>
            <MenuItem value={5}>RSF-(MOBI)</MenuItem>
            <MenuItem value={5}>REP</MenuItem>
            <MenuItem value={5}>IEN</MenuItem>
            <MenuItem value={5}>TCT</MenuItem>
            <MenuItem value={5}>EEN</MenuItem>
            <MenuItem value={5}>AUC</MenuItem>
            <MenuItem value={5}>PCT</MenuItem>
            <MenuItem value={5}>PSD</MenuItem>
            <MenuItem value={5}>PPT</MenuItem>
            <MenuItem value={5}>SCN</MenuItem>

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
