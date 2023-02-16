import { makeStyles } from '@material-ui/core/styles';
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

const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#e2edF3',
  },
  text:{
    color:"#000000",
  }
}));

export default function Lab() {
  const classes = useStyles();
  const [searchText, setSearchText] = useState('');

  // const handleSearch = () => {
  //   console.log('Buscando:', searchText);



  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };


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
        
        <Grid container spacing={3} width="370px" className={classes.main}>
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
            <Button variant="outlined"  size="small" color="black">
              Agregar
            </Button>
          </Grid>
        </Grid>
        <br />
        <br />
        <Grid container>
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
                      <MenuItem value={1} onClick={handleClickOpen}>Completar</MenuItem>
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


      
      <Dialog open={open} onClose={handleClose}>
        <Grid container padding="1%" border="1px solid black">
              <DialogTitle>
                <Typography variant="body4" color="initial" >Fase 2</Typography>
              </DialogTitle>
              <br />
              <DialogContent>
                <Grid container spacing={2}>
                  <Grid item xs={8} sm={8} align="center">
                    <FormControl fullWidth>
                      <InputLabel>Estado</InputLabel>
                      <Select
                        label="Estado"
                      >
                        <MenuItem value={2}>Laboratorio</MenuItem>
                        <MenuItem value={3}>Laboratorio</MenuItem>
                      </Select>
                    </FormControl>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                     variant="outlined"
                      type='time'
                      label='Horas real de entrega'
                      margin='dense'
                      fullWidth
                      size="normal"
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
                        size="normal"
                        required
                      />
                  </Grid>

                  <Grid item xs={12} sm={6}>
                    <TextField
                        variant="outlined"
                        type='date'
                        label='Fecha real de entrega'
                        margin='dense'
                        fullWidth
                        size="normal"
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
                        size="normal"
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
                        size="normal"
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
                        size="normal"
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
                      onClick={handleClose}
                      sx={{ mt: 3, mb: 2 }}
                      >
                        ENVIAR
                    </Button>
                  </Grid>
                </Grid>
              </DialogContent>
              <DialogActions>

              </DialogActions>
        </Grid>
      </Dialog>
    </>
  );
}


{/* onClick={handleSearch}*/}