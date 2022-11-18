import { useState } from 'react'
import { Step, Card, Grid } from '@mui/material'

/**
 * Carta que contiene al fieldArray
 * @author Katerine Ospina <ospinakaterine4@gmail.com>
 */

function FormStepE({ children }) {
  return (
    <Grid
      container
      spacing={0}
      direction="column"
      alignItems="center"
    >
      <Card 
        sx={{ p:10, marginTop:15, minWidth: 500, overflow: 'auto'  }}
      >
        {children}
      </Card>
    </Grid>
  )
}



export { FormStepE }