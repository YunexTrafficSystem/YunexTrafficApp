import { Grid } from '@mui/material'
function FormStep({ children }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
    >
      {children}
    </Grid>
  )
}

export { FormStep }