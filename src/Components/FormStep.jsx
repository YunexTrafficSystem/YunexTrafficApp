import { useState } from 'react'
import { Step, Card, Grid } from '@mui/material'

/** Paso de formulario y requisito de FormStepper */

function FormStep({ children, done, active }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
    >
      <Card 
        sx={{ p:10, marginTop:15, maxWidth:450 }}
      >
        {children}
      </Card>
    </Grid>
  )
}



export { FormStep }