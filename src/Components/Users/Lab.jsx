import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Button, InputLabel, FormControl, MenuItem, Select } from '@mui/material'
import * as React from 'react';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import Dialog from "@mui/material/Dialog"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#e2edF3',
  },
  text:{
    color:"#000000",
  },
  title:{
    alignText:'center',
  }
}));

export default function Lab() {
  const classes = useStyles();

  //Hook para que el buscador funcione
  const [searchText, setSearchText] = useState('');

  // const handleSearch = () => {
  //   console.log('Buscando:', searchText);

//Hooks para desplegar el cuadro de dialogo en donde esta el formulario de Laboratoriofase1
const [open, setOpen] = useState(false);

const handleClickOpen = () => {
  setOpen(true);
};
const handleClose = () => {
  setOpen(false);
};

//Hooks para desplegar el cuadro de dialogo en donde esta el formulario de Laboratoriofase2
  const [open2, setOpen2] = useState(false);

  const handleClickOpen2 = () => {
    setOpen2(true);
  };
  const handleClose2 = () => {
    setOpen2(false);
  };

//Datos ficticios usados para que se muestren en la tabla 
  const data = [
    { serial: 'L-1001', equipo: 'MP', date: '17/07/2021' },
    { serial: 'L-1002', equipo: 'MP', date: '17/07/2021' },
    { serial: 'L-1003', equipo: 'MP', date: '17/07/2021' },
    { serial: 'L-1004', equipo: 'MP', date: '17/07/2021' },
    { serial: 'L-1005', equipo: 'MP', date: '17/07/2021' },

  ];
  return (
    <>
      <Container>
        {/**Grid que contiene el buscador y el boton de agregar */}
        <Grid container spacing={3} width="370px" className={classes.main}>
          {/**Boton para buscar un evento según con la informacion establecida */}
          <TextField
            margin="dense"
            label=" Buscar"
            value={searchText}
            onChange={(event) => setSearchText(event.target.value)}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                   <IconButton > 
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Grid sx={{mt:7}}>
            {/**Boton para agregar un nuevo evento*/}
            <Button variant="outlined"  color="black" onClick={handleClickOpen}>
              Agregar
            </Button>
          </Grid>
        </Grid>
        <br />
        <br />
        {/**Grid que contiene la tabla donnde se muestra la informacion */}
        <Grid container>
          {/**Se llama la etiqueta de tabla */}
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="center">Numero de Ticket</TableCell>
              <TableCell align="center">Equipo</TableCell>
              <TableCell align="center">Fecha estimada de entrega</TableCell>
              <TableCell align="center">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">{row.serial}</TableCell>
                <TableCell align="center">{row.equipo}</TableCell>
                <TableCell align="center" >{row.date}</TableCell>
                <TableCell align="center">
                <FormControl required fullWidth margin="dense">
                  <InputLabel></InputLabel>
                    <Select
                      required
                    >
                      <MenuItem value={1} onClick={handleClickOpen2}>Completado</MenuItem>
                      <MenuItem value={1} onClick={handleClickOpen2}>Completar</MenuItem>
                    </Select>

                  </FormControl >
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
        </Grid>
      </Container>

      {/**Ventana de dialogo en donde esta el formulario de la LaboratorioFase 1 */}
      <Dialog open={open} onClose={handleClose} maxWidth="md">
        <Grid container padding="1%" border="1px solid black" component='form' >
              <DialogTitle margin="auto">
                <Typography variant="h4" color="initial"className={classes.title} >INGRESO</Typography>
              </DialogTitle>
              <br />
              <DialogContent>

                <Grid container spacing={2}>

                  <Grid item xs={12} sm={4} align="center" >

                    <FormControl fullWidth size="small" margin='dense'>
                      <InputLabel>Equipo</InputLabel>
                      <Select
                        label="Estado"
                        required
                      >
                        <MenuItem value={1}>Biciusuario</MenuItem>
                        <MenuItem value={2}>C900</MenuItem>
                        <MenuItem value={2}>Flecha</MenuItem>
                        <MenuItem value={2}>GE</MenuItem>
                        <MenuItem value={2}>MP</MenuItem>
                        <MenuItem value={2}>Peatonal</MenuItem>
                        <MenuItem value={2}>PMV</MenuItem>
                        <MenuItem value={2}>RS900G</MenuItem>
                        <MenuItem value={2}>ST</MenuItem>
                        <MenuItem value={2}>ST800</MenuItem>
                        <MenuItem value={2}>ST900</MenuItem>
                        <MenuItem value={2}>ST950</MenuItem>
                        <MenuItem value={2}>Teléfono SOS</MenuItem>
                        <MenuItem value={2}>Vehicular</MenuItem>
                        <MenuItem value={2}>Vehículo</MenuItem>
                      </Select>
                    </FormControl>
                  
                  </Grid>

                  <Grid item xs={12} sm={4} align="center">
                    <TextField
                      
                     variant="outlined"
                      type='number'
                      label='Numero de ticket'
                      margin='dense'
                      fullWidth
                      required
                    />


                  </Grid>
                  <Grid item xs={12} sm={4} align="center">
                    <TextField
                      
                        variant="outlined"
                        type='text'
                        label='modulo'
                        margin='dense'
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4}>

                    <TextField
                        variant="outlined"
                        type='number'
                        label='serial'
                        margin='dense'
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                        variant="outlined"
                        type='number'
                        label='Cantidad'
                        margin='dense'
                        fullWidth

                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4} align="center">

                    <FormControl fullWidth size="small" margin='dense'>
                      <InputLabel>Actividad</InputLabel>
                      <Select required >
                        <MenuItem value={1}>Diagnosticar</MenuItem>
                        <MenuItem value={2}>Reparar</MenuItem>
                      </Select>
                    </FormControl>

                  </Grid>

                  <Grid item xs={12} sm={4} align="center" >

                    <FormControl fullWidth size="small" margin='dense'>
                      <InputLabel>Ingresa por garantia</InputLabel>
                      <Select
                        required
                      >
                        <MenuItem value={1}>Si</MenuItem>
                        <MenuItem value={2}>No</MenuItem>
                      </Select>
                    </FormControl>
                    
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                        variant="outlined"
                        type='text'
                        label='Ciudad'
                        margin='dense'
                        size="normal"
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      size="small"
                      margin='dense'
                      variant="outlined"
                      label="observaciones"
                      fullWidth
                      multiline
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                        variant="outlined"
                        type='number'
                        label='numero de contrato'
                        margin='dense'
                        size="normal"
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                        variant="outlined"
                        type='text'
                        label='Nombre de cliente'
                        margin='dense'
                        size="normal"
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                        variant="outlined"
                        type='text'
                        label='Nombre del remitente'
                        margin='dense'
                        size="normal"
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                        type='time'
                        helperText='Hora estimada de Entrega'
                        margin='dense'
                        size="normal"
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      variant="outlined"
                        type='date'
                        helperText='Fecha estimada de entrega'
                        margin='dense'
                        size="normal"
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                        variant="outlined"
                        type='number'
                        label='Año'
                        margin='dense'
                        size="normal"
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4} margin="auto">
                    <FormControl fullWidth size="small" margin='dense'>
                      <InputLabel>Estado</InputLabel>
                      <Select
                        required
                      >
                        <MenuItem value={1}>Inicialización</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>
                </Grid>

                <Grid
                  container
                  justifyContent='center'
                >
                  <Grid
                    item
                  >
                    <Button
                      type='submit'
                      variant='contained'
                      sx={{ mt: 3, mb: 2 }}
                      >
                        ENVIAR
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>
        </Grid>
      </Dialog>

      {/**Ventana de dialogo en donde esta el formulario de la LaboratorioFase 2 */}
      <Dialog open={open2} onClose={handleClose2} maxWidth="md">
        <Grid container 
          padding="1%" 
          border="1px solid black" 
          component='form'>
              <DialogTitle margin="auto">
                <Typography variant="h4" color="initial" align="center">SALIDA</Typography>
              </DialogTitle>
              <br />
              <DialogContent>
                <Grid container 
                spacing={2}>

                  <Grid item xs={8} sm={8} margin="auto">
                    <FormControl fullWidth size="small">
                      <InputLabel>Estado</InputLabel>
                      <Select
                        label="Estado"
                        required
                      >
                        <MenuItem value={2}>Finalización</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                     variant="outlined"
                      type='time'
                      helperText='Horas real de entrega'
                      margin='dense'
                      fullWidth
                      required
                    />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        type='text'
                        id='fullName'
                        name='nombre'
                        label='Cumplio con las horas establecidas'
                        margin='dense'
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        type='date'
                        helperText='Fecha real de entrega'
                        margin='dense'
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        type='text'
                        id='fullName'
                        name='nombre'
                        label='Cumplio con la fecha establecida'
                        margin='dense'
                        fullWidth

                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        type='text'
                        id='fullName'
                        name='nombre'
                        label='Responsable Laboratorio'
                        margin='dense'
                        fullWidth
                        required
                      />
                  </Grid>
                  
                  <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        type='text'
                        id='fullName'
                        name='nombre'
                        label='Responsable Servicios'
                        margin='dense'
                        fullWidth

                        required
                      />
                  </Grid>
                </Grid>
                <Grid
                  container
                  justifyContent='center'
                >
                  <Grid
                    item
                  >
                    <Button
                      type='submit'
                      variant='contained'
                      sx={{ mt: 3, mb: 2 }}
                      >
                        ENVIAR
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>
        </Grid>
      </Dialog>
    </>
  );
}


{/* onClick={handleSearch}*/}
