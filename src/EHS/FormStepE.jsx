import { useState } from 'react'
import { Step, Card, Grid } from '@mui/material'
function FormStepE({ children, done, active }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
    >
      <Card 
        sx={{ p:10, marginTop:15, maxWidth: 2000 }}
      >
        {children}
      </Card>
    </Grid>
  )
}



export { FormStepE }