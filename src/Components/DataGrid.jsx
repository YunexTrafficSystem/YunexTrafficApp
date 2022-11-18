import { useState } from "react"
import Paper from "@mui/material/Paper"
import Table from "@mui/material/Table"
import Menu from '../Menu'
import TableBody from "@mui/material/TableBody"
import TableCell from "@mui/material/TableCell"
import TableContainer from "@mui/material/TableContainer"
import TableHead from "@mui/material/TableHead"
import TableRow from "@mui/material/TableRow"
import TextField from "@mui/material/TextField"
import Button from '@mui/material/Button'
import AddIcon from '@mui/icons-material/Add'
import Grid from '@mui/material/Grid'
import ClearIcon from '@mui/icons-material/Clear'
import DeleteIcon from '@mui/icons-material/Delete';
 
/**
 * Pagina para tabla editable EHS de datos personales de los colaboradores
 * @author Katerine Ospina <ospinakaterine4@gmail.com>
 * @returns {ReactComponent} - Tabla de componentes a llenar, botones con funcionalidades para eliminar, añadir o editar colaboradores
 */

const columns = [
  { 
    id: "nombres", 
    label: "Nombres", 
    minWidth: 170,
    align: "center" 
  },
  { 
    id: "apellidos", 
    label: "Apellidos", 
    minWidth: 170,
    align: "center" 
  },
  { 
    id: "identificacion", 
    label: "Identificacion", 
    minWidth: 170,
    align: "center" 
  },
  { 
    id: "telefono", 
    label: "Telefono", 
    minWidth: 170,
    align: "center" 
  },
  { 
    id: "tipo", 
    label: "Tipo de Sangre", 
    minWidth: 170,
    align: "center" 
  },
  { 
    id: "nacimiento", 
    label: "Fecha Nacimiento", 
    minWidth: 170,
    align: "center" 
  },
  { 
    id: "direccion", 
    label: "Direccion", 
    minWidth: 170,
    align: "center" 
  },
  {
    id: "localidad",
    label: "Localidad",
    minWidth: 170,
    align: "center",
  },
  {
    id: "correo",
    label: "Correo Electronico",
    minWidth: 170,
    align: "center",
  },
  {
    id: "edad",
    label: "Edad",
    minWidth: 170,
    align: "center",
  }
];

function createData(nombres, apellidos, identificacion, telefono, tipo, nacimiento, direccion, localidad, correo, edad, acciones) {
  return { nombres, apellidos, identificacion, telefono, tipo, nacimiento, direccion, localidad, correo, edad, acciones };
}

const rows = [
  createData(
  <TextField />, 
  <TextField />, 
  <TextField />, 
  <TextField />, 
  <TextField />, 
  <TextField />, 
  <TextField />, 
  <TextField />, 
  <TextField />, 
  <TextField />, 
  )
];

export default function StickyHeadTable() {
  const [page, setPage] = useState(0);
  const [rowsPerPage, setRowsPerPage] = useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>
    <Menu />
    <br />
    <Paper sx={{ width: "100%", overflow: "hidden" }}>
      <TableContainer sx={{ maxHeight: 440 }}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows
              .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
              .map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === "number"
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                    <Grid sx={{padding:10}}>
                      <Grid>
                    <Button
                  variant='contained'
                  type="Button"
                  >
                    <DeleteIcon 
                    color='blanco' sx={{width:20}}
                    >
                      </DeleteIcon>
                  </Button>
                  </Grid>
                  <Grid>
                  <Button
                  variant='contained'
                  type="Button"
                  >
                    <ClearIcon 
                    color='blanco' sx={{width:20}}
                    >
                      </ClearIcon>
                  </Button>
                  </Grid>
                  </Grid>
                  </TableRow>
                );
              })}
          </TableBody>
        </Table>
      </TableContainer>
      <Grid sx={{padding:7}}>
      <Button 
        variant='contained' 
        type="Button"
        >
          <AddIcon  
          color='blanco'/>
      </Button>
      </Grid>
    </Paper>
    </>
  );
}
