import { makeStyles} from '@material-ui/core/styles';
import { createTheme } from '@material-ui/core/styles';
import { Container, Grid, Button, InputLabel, FormControl, MenuItem, Select } from '@mui/material'
import * as React from 'react';
import { IconButton, InputAdornment, TextField } from '@material-ui/core';
import SearchIcon from '@mui/icons-material/Search';
import { useState } from 'react';
import { Table, TableHead, TableRow, TableCell, TableBody, Typography } from '@material-ui/core';
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogTitle from "@mui/material/DialogTitle"
import { ThemeProvider } from '@mui/material/styles';

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#e2edF3',
  },
  text:{
    color:"#000000",
  }
}));


const theme = createTheme({
  typography: {
    fontFamily:'cabin'

  },
});
export default function Ens() {
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
    { consecutivo: '30010', tipoDeSolicitud: 'Semaforo', date: '17/07/2021' },
    { consecutivo: '30040', tipoDeSolicitud: 'Controlador', date: '06/09/2022' },
    { consecutivo: '30001', tipoDeSolicitud: 'SX proteccion', date: '27/01/2022' },
    { consecutivo: '30014', tipoDeSolicitud: 'Bandejas', date: '11/10/2022' },

  ];
  return (
    <>

      <Container>
        {/**Grid que contiene el buscador y el boton de agregar */}
        <Grid container spacing={3} width="370px" className={classes.main}>
          {/**Boton para buscar un evento según con la informacion establecida */}
          <TextField
            margin="dense"
            label="Buscar"
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
            <Button variant="outlined" color="black" onClick={handleClickOpen}>
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
              <TableCell align="center">consecutivo</TableCell>
              <TableCell align="center">Tipo de Solicitud</TableCell>
              <TableCell align="center">Fecha estimada de entrega</TableCell>
              <TableCell align="center">Estado</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.name}>
                <TableCell align="center">{row.consecutivo}</TableCell>
                <TableCell align="center">{row.tipoDeSolicitud}</TableCell>
                <TableCell align="center" >{row.date}</TableCell>
                <TableCell align="center">
                <FormControl required fullWidth margin="dense">
                  <InputLabel></InputLabel>
                    <Select
                      required
                    >
                      <MenuItem value={1} onClick={handleClickOpen2}>Completar</MenuItem>
                      <MenuItem value={2}>Completado</MenuItem>
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
          <ThemeProvider>
              <DialogTitle margin="auto" >
                <Typography variant="h2" color="initial"  theme={theme} >Fase 1</Typography>
              </DialogTitle>
          </ThemeProvider>
              <br />
              <DialogContent>

                <Grid container spacing={2}>

                  <Grid item xs={12} sm={4} align="center" >

                    <FormControl fullWidth size="small" margin='dense'>
                      <InputLabel>Tipo de solicitud</InputLabel>
                      <Select
                        label="Estado"
                        required
                      >
                        <MenuItem value={1}>Laboratorio</MenuItem>
                        <MenuItem value={2}>Laboratorio</MenuItem>
                      </Select>
                    </FormControl>
                  
                  </Grid>

                  <Grid item xs={12} sm={4} align="center">
                    <TextField
                      
                     variant="outlined"
                      type='number'
                      label='Consecutivo'
                      margin='dense'
                      fullWidth
                      required
                    />


                  </Grid>
                  <Grid item xs={12} sm={4} align="center">
                    <TextField
                      
                        variant="outlined"
                        type='number'
                        label='Grafo'
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

                  <Grid item xs={12} sm={4}>
                    <TextField
                        variant="outlined"
                        type='text'
                        label='Nombre del contrato'
                        margin='dense'
                        fullWidth

                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={4} align="center" >

                    <FormControl fullWidth size="small" margin='dense'>
                      <InputLabel>Nombre del remitente</InputLabel>
                      <Select
                        required
                      >
                        <MenuItem value={1}>Laboratorio</MenuItem>
                        <MenuItem value={2}>Laboratorio</MenuItem>
                      </Select>
                    </FormControl>
                    
                  </Grid>

                  <Grid item xs={12} sm={4} align="center" >

                    <FormControl fullWidth size="small" margin='dense'>
                      <InputLabel>Nombre destinatario</InputLabel>
                      <Select
                        required
                      >
                        <MenuItem value={1}>Laboratorio</MenuItem>
                        <MenuItem value={2}>Laboratorio</MenuItem>
                      </Select>
                    </FormControl>
                    
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      type="date"
                      margin='dense'
                      variant="outlined"
                      helperText="Fecha de recibido"
                      fullWidth
                    />
                  </Grid>

                  <Grid item xs={12} sm={4}>
                    <TextField
                      type="date"
                      margin='dense'
                      variant="outlined"
                      helperText="Fecha estimada de devolucion"
                      fullWidth
                    />
                  </Grid>
                </Grid>

                <Grid item xs={12} sm={4} margin="auto" >

                  <FormControl fullWidth size="small" margin='dense'>
                    <InputLabel>Estado</InputLabel>
                    <Select
                      label="Estado"
                      required
                    >
                      <MenuItem value={1}>Laboratorio</MenuItem>
                      <MenuItem value={2}>Laboratorio</MenuItem>
                    </Select>
                  </FormControl>

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
        <Grid container padding="1%" border="1px solid black"  component='form'>
              <DialogTitle margin="auto">
                <Typography variant="h2" color="initial" align="center">Fase 2</Typography>
              </DialogTitle>
              <br />
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={6} sm={6} align="center">
                    <FormControl fullWidth margin="dense" size="small">
                      <InputLabel>Estado</InputLabel>
                      <Select
                        label="Estado"
                        required
                      >
                        <MenuItem value={1}>Laboratorio</MenuItem>
                        <MenuItem value={2}>Laboratorio</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        type='date'
                        id='fullName'
                        name='nombre'
                        helperText="Fecha de Finalizacion"
                        margin='dense'
                        fullWidth
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        type='date'
                        helperText="Fecha real de Entrega"
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
                        label='Responsable Ensabmble'
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
                  <Grid item xs={12} sm={6} margin="auto">
                    <TextField
                        variant="outlined"
                        type='text'
                        id='fullName'
                        name='nombre'
                        label='Satisfaccion '
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
