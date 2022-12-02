import { useTheme } from '@mui/material/styles'
import Title from './Title'
import Report from './Reports'
import { Container, Grid, Paper } from '@mui/material'
import DataGrid from '../DataGrid'

export default function Datos() {
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
                minHeight: 500
              }}
            >
              <Title>Datos Personales</Title>
              <DataGrid/>
            </Paper>
          </Grid>
          </Grid>
      </Container>
    </>
  );
}