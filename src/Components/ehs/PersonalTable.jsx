import { DataGrid } from '@mui/x-data-grid'

function getCell(id, name, dni, company, charge, template, afp, eps, arl, emo, induction) {
  return {
    id,
    name,
    dni,
    company,
    charge,
    template,
    afp,
    eps,
    arl,
    emo,
    induction
  }
}

const rows = [
  // Retorno de usuarios desde el fetch
  {
    id: 1,
    name: 'Miguel',
    dni: 1002582736,
    company: 'Yunex SAS',
    charge: 'Tecnico',
    template: new Date(),
    afp: 'Colpensiones',
    eps: 'Compensar',
    arl: 'Colmena',
    emo: new Date(),
    induction: new Date()
  },
  getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  ),
    getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  ),
    getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  ),
    getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  ),
    getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  ),
  getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  ),
  getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  ),
  getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  ),
  getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  ),
  getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  ),
  getCell(
    2,
    'Miguel Angel Castillo Amador',
    1002582736,
    'Yunex',
    'Tecnico',
    new Date(),
    'Conpensar',
    'Compensar',
    'Colmena',
    new Date(),
    new Date()
  )
]

const columns = [
  { field: 'name', headerName: 'Colaborador', width: 220, editable: true },
  { field: 'dni', headerName: 'Cedula', width: 140, editable: true },
  { field: 'company', headerName: 'Empresa', width: 140, editable: true },
  { field: 'template', headerName: 'Plantilla', type: 'date', width: 130, editable: true },
  { field: 'afp', headerName: 'AFP', width: 140, editable: true },
  { field: 'eps', headerName: 'EPS', width: 140, editable: true },
  { field: 'arl', headerName: 'ARL', width: 140, editable: true },
  { field: 'emo', headerName: 'EMO', type: 'date', width: 140, editable: true },
  { field: 'induction', headerName: 'Inducción', type: 'date', width: 140, editable: true },
]


function PersonalTable() {
  return (
    <DataGrid
      rows={rows}
      columns={columns}
      experimentalFeatures={{ newEditingApi: true }}
    />
  )
}

export { PersonalTable }