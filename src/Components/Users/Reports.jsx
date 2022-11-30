import { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Title from "./Title"
import DialogTitle from "@mui/material/DialogTitle"
import { Container, Grid, FormControl, InputLabel, Select, MenuItem } from "@mui/material"


export default function FormFDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Container>
        <Title>Reporte</Title>
        <p>En este espacio usted podrá realizar el reporte correspondiente de los elementos que se encuentran en mal estado, recuerde que este será remitido al area EHS, con el fin de dar solución al problema</p>
        <Grid item xs={12} sx={{display: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        <Button variant='contained' onClick={handleClickOpen}>
          Realizar reporte
        </Button>
        </Grid>
        <Dialog open={open} onClose={handleClose} >
          <DialogTitle>Reporte</DialogTitle>
          <DialogContent>
            <DialogContentText>
              En este espacio se deberan diligenciar todos los datos y recuerde ser breve en la descripcion del elemento (Todos los campos son obligatorioas)
            </DialogContentText>
            <br />
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <TextField
                  label="Nombre Completo"
                  variant="outlined"
                  fullWidth
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  autoFocus
                  margin="dense"
                  id="name"
                  label="Correo Electrónico"
                  type="email"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12}>
                <FormControl fullWidth>
                  <InputLabel>Rol</InputLabel>
                  <Select
                    label="Rol"
                    defaultValue={1}

                  >
                    <MenuItem value={1}>Laboratorio</MenuItem>
                    <MenuItem value={2}>Mantenimiento</MenuItem>
                    <MenuItem value={3}>Ensambles</MenuItem>
                    <MenuItem value={4}>Garantias</MenuItem>
                    <MenuItem value={5}>EHS</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={12}>
                <TextField
                  multiline
                  rows={4}
                  fullWidth
                  variant="outlined"
                  label="Descripción"
                >
                </TextField>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancelar</Button>
            <Button onClick={handleClose}>Enviar</Button>
          </DialogActions>
        </Dialog>
      </Container>
    </>
  );
}
