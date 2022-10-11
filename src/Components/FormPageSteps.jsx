import { useState } from 'react'
import { Box } from '@mui/material'

// Concepto de pasos
// Los pasos se obtendran de active steps y se enlistaran de la siguiente forma:
// [{children}].map => activeStep = PageToLoad

function FormPageSteps({ activeStep, children }) {

  console.log(children[activeStep])

  return (
    <>
      {children[activeStep]}
    </>
  )
}

export { FormPageSteps }