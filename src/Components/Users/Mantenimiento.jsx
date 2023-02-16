import { useTheme } from '@mui/material/styles'
import { Container, Grid, Paper, TextField, Typography } from '@mui/material'

function Mantenimiento() {

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
              <Typography variant="h1" color="initial">Mantenimiento</Typography>
              <TextField
                id="wewe"
                label="wewewew"

                
              />
            </Paper>
          </Grid>
          </Grid>
      </Container>
    </>
  )
}

export default Mantenimiento
