import * as React from 'react'
import PropTypes from 'prop-types'
import { useTheme } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Table from '@mui/material/Table'
import TableBody from '@mui/material/TableBody'
import TableCell from '@mui/material/TableCell'
import TableContainer from '@mui/material/TableContainer'
import TableFooter from '@mui/material/TableFooter'
import TablePagination from '@mui/material/TablePagination'
import TableRow from '@mui/material/TableRow'
import Paper from '@mui/material/Paper'
import IconButton from '@mui/material/IconButton'
import FirstPageIcon from '@mui/icons-material/FirstPage'
import KeyboardArrowLeft from '@mui/icons-material/KeyboardArrowLeft'
import KeyboardArrowRight from '@mui/icons-material/KeyboardArrowRight'
import LastPageIcon from '@mui/icons-material/LastPage'
import TableHead from '@mui/material/TableHead'
import capitalize from 'capitalize'
import Button from '@mui/material/Button'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import Dialog from './Modal'

function TablePaginationActions(props) {
  const theme = useTheme()
  const { count, page, rowsPerPage, onPageChange } = props

  const handleFirstPageButtonClick = (event) => {
    onPageChange(event, 0)
  }

  const handleBackButtonClick = (event) => {
    onPageChange(event, page - 1)
  }

  const handleNextButtonClick = (event) => {
    onPageChange(event, page + 1)
  }

  const handleLastPageButtonClick = (event) => {
    onPageChange(event, Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  }

  return (
    <Box sx={{ flexShrink: 0, ml: 2.5 }}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label="first page"
      >
        {theme.direction === 'rtl' ? <LastPageIcon /> : <FirstPageIcon />}
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label="previous page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowRight /> : <KeyboardArrowLeft />}
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="next page"
      >
        {theme.direction === 'rtl' ? <KeyboardArrowLeft /> : <KeyboardArrowRight />}
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label="last page"
      >
        {theme.direction === 'rtl' ? <FirstPageIcon /> : <LastPageIcon />}
      </IconButton>
    </Box>
  )
}

TablePaginationActions.propTypes = {
  count: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired,
}

const actionButtons = [
  <IconButton color="primary" component="label">
    <Dialog />
  </IconButton>,
  <IconButton color="primary" component="label">
    <DeleteIcon/>
  </IconButton>,
]


function createData(name, role, email, actions) {
  return { name: capitalize.words(name), role, email, actions: actionButtons }
}

const rows = [
  createData('lila linda lina linares lopez', 'usuario', 'a@algo.com'),
  createData('heider julian cortes herrera', 'usuario','a@algo.com'),
  createData('miguel angel castillo amador', 'usuario', 'a@algo.com'),
  createData('katerine ospina paternina', 'usuario', 'a@algo.com'),
  createData('Carlos andrés castillo amador', 'usuario', 'a@algo.com'),
  createData('Duvan felipe garzon garzon', 'usuario', 'a@algo.com'),
  createData('daniel felipe roa marin', 'usuario', 'a@algo.com'),
  createData('jesus stan camino belén', 'usuario', 'a@algo.com'),
]

export default function CustomPaginationActionsTable() {
  const [page, setPage] = React.useState(0)
  const [rowsPerPage, setRowsPerPage] = React.useState(10)

  // Avoid a layout jump when reaching the last page with empty rows.
  const emptyRows =
    page > 0 ? Math.max(0, (1 + page) * rowsPerPage - rows.length) : 0

  const handleChangePage = (event, newPage) => {
    setPage(newPage)
  }

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(parseInt(event.target.value, 10))
    setPage(0)
  }

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 500 }} aria-label="custom pagination table">
      <TableHead>
          <TableRow>
            <TableCell>Nombre Completo</TableCell>
            <TableCell>Rol</TableCell>
            <TableCell >Correo Electronico</TableCell>
            <TableCell >Accciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {(rowsPerPage > 0
            ? rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
            : rows
          ).map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" style={{ width: 200 }}>
                {row.name}
              </TableCell>
              <TableCell style={{ width: 120 }} >
                {row.role}
              </TableCell>
              <TableCell style={{ width: 120  }} >
                {row.email}
              </TableCell>
              <TableCell style={{ width:120 }} >
                {row.actions}
              </TableCell>
            </TableRow>
          ))}

          {emptyRows > 0 && (
            <TableRow style={{ height: 100 * emptyRows }}>
              <TableCell colSpan={6} />
            </TableRow>
          )}
        </TableBody>
        <TableFooter>
          <TableRow>
            <TablePagination
              rowsPerPageOptions={[5, 10, 25, { label: 'All', value: -1 }]}
              colSpan={0}
              count={rows.length}
              rowsPerPage={rowsPerPage}
              page={page}
              SelectProps={{
                inputProps: {
                  'aria-label': 'rows per page',
                },
                native: true,
              }}
              onPageChange={handleChangePage}
              onRowsPerPageChange={handleChangeRowsPerPage}
              ActionsComponent={TablePaginationActions}
            />
          </TableRow>
        </TableFooter>
      </Table>
    </TableContainer>
  )
}