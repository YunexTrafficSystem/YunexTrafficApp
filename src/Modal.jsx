import { useState } from 'react';
import {
  Button,
  FormLabel,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  Switch,
  FormControlLabel
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit'
import {
  FormContainer,
  TextFieldElement,
  SelectElement,
  CheckboxButtonGroup,
} from 'react-hook-form-mui'

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
          <FormContainer
            defaultValues={{name: ''}}
            onSuccess={data => console.log(data)}
          >
            <FormLabel component="legend">Datos básicos</FormLabel>
            <TextFieldElement
              name="name"
              label="Nombre Completo"
              margin={'dense'} 
              sx={{ display: 'grid' }}
              required
            />
            <SelectElement
              name="preselect"
              label="Rol"
              margin={'dense'}
              sx={{ display: 'grid' }}
              options={[
                  {
                      id: 1,
                      label: 'Operador'
                    },
                {
                  id: 2,
                  label: 'Usuario'
                },
                {
                  id: 3,
                  label: 'Externo'
                },
                {
                    id: 4,
                    label: 'Invitado'
                }
              ]}
              required
            />
            <TextFieldElement name='email' label='Correo Electronico' sx={{ minWidth: '100%' }} margin={'dense'} required type="email"/>
            <CheckboxButtonGroup
                label="Permisos"
                name="permissions"
                options={[
                  {
                    id: 'create',
                        label: 'Crear'
                  },
                  {
                    id: 'read',
                    label: 'Leer'
                  },
                  {
                    id: 'edit',
                    label: 'Editar'
                  },
                  {
                    id: 'delete',
                    label: 'Eliminar'
                  }

                ]}
                row
              />
            <FormLabel component="legend">Estado</FormLabel>
            <FormControlLabel control={<Switch />} label="Habilitar" />
          </FormContainer>
        </DialogContent>
        <DialogActions>
            <Button onClick={handleClose}>Guardar</Button>
            <Button onClick={handleClose}>Cancelar</Button>
        </DialogActions>
        </Dialog>
        </>
    );
}
