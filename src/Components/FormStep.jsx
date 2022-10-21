import { useState } from 'react'
import { Step, Card, Grid } from '@mui/material'


// Reractorizar para no poner un step 
// Haciendo de que trabajo,  
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