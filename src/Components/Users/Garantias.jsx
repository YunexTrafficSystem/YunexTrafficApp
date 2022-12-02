import { useTheme } from '@mui/material/styles'
import Title from './Title'
import Report from './Reports'
import { Container, Grid, Paper } from '@mui/material'

export default function Ensambles() {
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
              <Title>Garantias</Title>
            </Paper>
          </Grid>
          </Grid>
      </Container>
    </>
  );
}