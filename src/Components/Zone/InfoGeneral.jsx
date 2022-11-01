import { useState } from 'react'
import {
    TextField,
    Select,
    MenuItem,
    FormControl,
    InputLabel,
    Grid,
    Typography
  }  from '@mui/material'
  
/**
 * Es una página en la que se pasa la información general para el formulario de Zona/Terreno
 * @author Miguel Castillo <miguel126xl9@outlook.es>
 * @param {ReactHook} register - Registro por campo, se reciben desde react-hook-form
 * @param {ReactHook} errors - Errores del formulario, se reciben desde react-hook-form
 * @returns {ReactComponent} - Página de Información General
 */

  function InfoGeneral({ register, errors }) {
    const order = `${new Date().getFullYear()}-0${Math.floor(Math.random() * 99999)}`
    
    return (
      <Grid container spacing={5}>
        <Grid item xs={12}>
        <Typography>
          Número de orden de trabajo
        </Typography>
        </Grid>
        <Grid item xs={12}>
          <TextField
            label='O.T. Número'
            fullWidth
            value={order}
            {...register("number", {
              required: true,
              message: 'O.T. Número es requerido'
            })}
            error={errors?.number}
            />
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Prioridad
          </Typography>
        </Grid>
        <Grid item xs={6}>
          <Typography>
            Estado Actual
          </Typography>
        </Grid>
        <Grid item xs={6}>
        <FormControl fullWidth>
        <InputLabel>Prioridad</InputLabel>
        <Select
        defaultValue={1}
        label="Prioridad"
        sx={{ minWidth:100 }}
        {...register("priority", {
          required: true,
          message: 'Prioridad es requerido'
        })}
        >
          <MenuItem value={1}>Revision</MenuItem>
          <MenuItem value={2}>Preventivo</MenuItem>
          <MenuItem value={3}>Correctivo</MenuItem>
        </Select>
        </FormControl>
      </Grid>
      <Grid item xs={6}>
        <FormControl fullWidth >
        <InputLabel>Estado Actual</InputLabel>
          <Select
            label="Estado Actual"
            sx={{ minWidth:100 }}
            defaultValue={1} 
            {...register("state", {
                required: true,
                message: 'Estado requerido'
              })}
          >
            <MenuItem value={1}>Abierta</MenuItem>
            <MenuItem value={2}>En Proceso</MenuItem>
            <MenuItem value={3}>Cerrada</MenuItem>
          </Select>
        </FormControl>
      </Grid>
      </Grid>
    )
  }
  
  export { InfoGeneral }