import { Container, Grid, Paper } from '@mui/material'
import { PersonalTable } from '../ehs/PersonalTable'

export default function Datos() {
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
              <PersonalTable />
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </>
  );
}