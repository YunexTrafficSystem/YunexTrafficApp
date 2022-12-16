import { useTheme } from '@mui/material/styles'
import Report from './Reports'
import { Container, Grid, Paper } from '@mui/material'

export default function Chart() {
  const theme = useTheme();

  return (
    <>

      <Container>
        <Grid container spacing={3}>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minHeight: 200
              }}
            >
              <p> {false ? 'Rol ya asignado' : 'Usted se encuentra desahabilitado hasta que administrador le asigne un rol. Tenga en cuenta que podra visualizar los formularios, sin embargo no podra editarlos. Cuando ya se le haya asignado su rol, se activaran los formulario que usted podra manipular.'}</p>
            </Paper>
          </Grid>
          <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
            <Paper
              sx={{
                p: 2,
                display: 'flex',
                flexDirection: 'column',
                width: '100%',
                minHeight: 200
              }}
            >
              <Report />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}