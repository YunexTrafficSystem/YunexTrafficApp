import { useTheme } from '@mui/material/styles'
import { Container, Grid, Paper } from '@mui/material'

export default function Preoperacionales() {
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
            </Paper>
          </Grid>
          </Grid>
      </Container>
    </>
  );
}