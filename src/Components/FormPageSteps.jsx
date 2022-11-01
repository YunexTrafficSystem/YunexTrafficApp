import { useState } from 'react'
import { Box } from '@mui/material'

/**
 * Es una página en la que se pasa la información general para el formulario de Zona/Terreno
 * @author Miguel Castillo <miguel126xl9@outlook.es>
 * @param {Number} activeStep - Número de la página actual 
 * @param {ReactComponent} children - elemento hijo del padre (En este caso de FormPageSteps) 
 * @returns {ReactComponent} - Página especificada del paso a paso
 */

function FormPageSteps({ activeStep, children }) {

  return (
    <>
      {children[activeStep]}
    </>
  )
}

export { FormPageSteps }