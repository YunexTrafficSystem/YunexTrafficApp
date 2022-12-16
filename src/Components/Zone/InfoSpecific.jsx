import { useState } from "react";
import { DateTimePicker, LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterMoment } from "@mui/x-date-pickers/AdapterMoment";
import moment from "moment";
import {
  TextField,
  Grid,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Typography,
} from "@mui/material";

function InfoSpecific({ register, errors, Controller, control }) {
  const [start, setStart] = useState(moment(new Date()));
  const [end, setEnd] = useState(moment(new Date()));

  return (
    <Grid container spacing={5}>
      <Grid item xs={12}>
        <TextField
          fullWidth
          label="Lugar"
          {...register("location", {
            required: "Lugar es requerido",
          })}
          error={errors?.location}
          helperText={errors?.location && errors?.location.message}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          multiline
          rows={2}
          name="des"
          label="Descripción"
          {...register("description", {
            required: "Descripción es requerido",
          })}
          error={errors?.description}
          helperText={errors?.description && errors?.description.message}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Actividades de Matenimiento (A.M) Asignadas a la O.T
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Nombre"
          {...register("name", {
            required: "Nombre es requerido",
          })}
          error={errors?.name}
          helperText={errors?.name && errors?.name.message}
        />
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Personal"
          {...register("personal", {
            required: "Personal es requerido",
          })}
          error={errors?.personal}
          helperText={errors?.personal && errors?.personal.message}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>
          Lista de Cuadrillas asignadas desde el panel gestion servicios
        </Typography>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth>
          <InputLabel>Prioridad</InputLabel>
          <Select
            defaultValue={1}
            label="Actividad"
            sx={{ minWidth: 100 }}
            {...register("activity", {
              required: true,
              message: 'Activida es requerido'
            })}
          >
            <MenuItem value={1}>Mantenimiento revision de controladores</MenuItem>
            <MenuItem value={2}>Mantenimiento preventivo de controladores</MenuItem>
            <MenuItem value={3}>Mantenimiento correctivo de controladores</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <TextField
          fullWidth
          label="Entidad"
          {...register("entity", {
            required: "Entidad es requerida",
          })}
          error={errors?.entity}
          helperText={errors?.entity && errors?.entity.message}
        />
      </Grid>
      <Grid item xs={12}>
        <Typography>Tiempos de Mantenimiento</Typography>
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="start"
          render={({ onChange, newValue }) => (
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                value={start}
                {...register("start", {
                  required: "Fecha de inicio requerida",
                })}
                error={errors?.start}
                helperText={errors?.start && errors?.start.message}
                inputFormat="DD/MM/YYYY HH:mm"
                onChange={(newValue) => {
                  setStart(newValue);
                }}
              />
            </LocalizationProvider>
          )}
        />
      </Grid>
      <Grid item xs={6}>
        <Controller
          control={control}
          name="end"
          render={({ onChange, newValue }) => (
            <LocalizationProvider dateAdapter={AdapterMoment}>
              <DateTimePicker
                renderInput={(props) => <TextField {...props} />}
                value={end}
                {...register("end", {
                  required: "Fecha de finalización requerida",
                })}
                error={errors?.end}
                helperText={errors?.end && errors?.end.message}
                inputFormat="DD/MM/YYYY HH:mm"
                onChange={(newValue) => {
                  setEnd(newValue);
                }}
              />
            </LocalizationProvider>
          )}
        />
      </Grid>
    </Grid>
  );
}

export { InfoSpecific };
