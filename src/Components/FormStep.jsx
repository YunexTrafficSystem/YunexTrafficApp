import { useState } from 'react'
import { Step, Card, Paper, Grid } from '@mui/material'
function FormStep({ children, done, active }) {
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