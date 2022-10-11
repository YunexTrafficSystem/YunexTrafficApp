import { useState } from 'react'
import { Step, Card } from '@mui/material'


// Reractorizar para no poner un step 
// Haciendo de que trabajo,  
function FormStep({ children, done, active }) {
  return (
    <Card>
    {children}
    </Card>
  )
}

export { FormStep }