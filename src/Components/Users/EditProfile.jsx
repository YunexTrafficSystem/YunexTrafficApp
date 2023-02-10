import { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import { Container, Grid, Box} from "@mui/material"


export default function FormFDialog() {

  return (
    <>
              <Grid container spacing={2} >
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="nombre"
                    label="Nombre Completo"
                    type="text"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={12}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="correo"
                    label="Correo Electrónico"
                    type="email"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="numeroCelular"
                    label="Numero de Celular"
                    type="number"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="fechaNacimiento"
                    type="date"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="numeroCedula"
                    label="Numero de cedula"
                    type="number"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <TextField
                    autoFocus
                    margin="dense"
                    id="fechaExpedicion"
                    type="date"
                    fullWidth
                    variant="outlined"
                  />
                </Grid>
                <Grid
                  container
                  justifyContent='center'
                >
                  <Grid
                    item
                    sx={{ mt:8, mb: 8,}}
                    
                  >
                    <Button
                      type='submit'
                      variant='contained'
                    >
                      GUARDAR CAMBIOS
                    </Button>
                  </Grid>
                </Grid>
              </Grid>   
    </>
  )
}
