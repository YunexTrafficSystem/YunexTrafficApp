import {
  TextField,
  Button, 
  Box,
  Grid, 
  Typography,
}  from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import CreateIcon from '@mui/icons-material/Create';

function FieldArrayE ({ fields, register, append, remove, errors, control, controller: Controll, spacing }) {
  return (
    <>
      {fields.map((field, index) => (
        <Box key={field.id} sx={{maxHeight:'100%', overflow:'auto'}}>
               <TextField 
               label="Dato 1"
               />
               <TextField 
               label="Dato 2"
               />
               <TextField 
               label="Dato 3"/>
               <TextField 
               label="Dato 4"
               />
               <TextField 
               label="Dato 5"
               />
               <TextField 
               label="Dato 6"
               />
               <TextField 
               label="Dato 7"
               />
               <TextField 
               label="Dato 8"
               />
               <TextField 
               label="Dato 9"
               />
               <TextField 
               label="Dato 10"
               />
                <Button
                  variant='contained'
                  onClick={() => remove(index)} 
                  sx={{margin:1, widht:15 }}
                  disabled={index == 0}
                >
                  <ClearIcon
                    color="blanco" sx={{width:20}}>
                  </ClearIcon>
                </Button>
                <Button
                  variant='contained'
                  sx={{margin:1, widht:15 }}
                >
                  <CreateIcon
                    color="blanco" sx={{width:20}}>
                  </CreateIcon>
                </Button>
          </Box>
        ))}
      <Button 
        variant='contained' 
        type="Button"
        onClick={() => append({ component: 1, quantity: 1 })}
        disabled={fields.length >= 2}
        >
          <AddIcon  
          color='blanco'/>
      </Button>
    </>
  )
}

export { FieldArrayE }