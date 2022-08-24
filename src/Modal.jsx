import { useState } from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import IconButton from '@mui/material/IconButton'
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material'
import Checkbox from '@mui/material/Checkbox'
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch'

const label = { inputProps: { 'aria-label': 'Switch demo' } };
export default function FormDialog() {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <EditIcon color='primary' onClick={handleClickOpen}>
       
      </EditIcon>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Editar Usuario</DialogTitle>
        <DialogContent>
          <DialogContentText>   
            Edite, active permisos y habilite usuario 
          </DialogContentText>
            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Nombre completo"
                type="email"
                fullWidth
                variant="standard"
            />
            <FormControl sx={{ minWidth: '100%' }} variant="standard" required>
              <InputLabel>Rol</InputLabel>
              <Select
                label="Rol"
                name="rol"
              >
                <MenuItem value="operador">Operador</MenuItem>
                <MenuItem value="usuario">Usuario</MenuItem>
                <MenuItem value="externo">Externo</MenuItem>
                <MenuItem value="invitado">Invitado</MenuItem>
              </Select>
            </FormControl > 

            <TextField
                autoFocus
                margin="dense"
                id="name"
                label="Correo Electronico"
                type="email"
                fullWidth
                variant="standard"
            />
            <FormGroup>
                <FormControlLabel control={<Checkbox />} label="Crear" />
                <FormControlLabel control={<Checkbox />} label="Leer" />
                <FormControlLabel control={<Checkbox />} label="Editar" />
                <FormControlLabel control={<Checkbox />} label="Eliminar" />
            </FormGroup>
            <FormControlLabel control={<Switch />} label="Habilitar" />
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Guardar</Button>
            <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
        </Dialog>
        </>
    );
}
