import {
  TextField,
  Button, 
  Box,
  Grid
}  from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

function FieldArrayE ({ fields, register, append, remove, errors, control, controller: Controll, spacing }) {
  return (
    <>
      {fields.map((field, index) => (
        <Box key={field.id}>
          <Grid container spacing={5} sx={{p:'13px 0'}}>
              <Grid item xs={2}>
               <TextField 
               label="Dato 1"
               />
              </Grid>
              <Grid item xs={2}>
               <TextField 
               label="Dato 2"
               />
              </Grid>
              <Grid item xs={2}>
               <TextField 
               label="Dato 3"/>
              </Grid>
              <Grid item xs={2}>
               <TextField 
               label="Dato 4"
               />
              </Grid>
              <Grid item xs={2}>
               <TextField 
               label="Dato 5"
               />
              </Grid>
              <Grid item xs={2}>
               <TextField 
               label="Dato 6"
               />
              </Grid>
              <Grid item xs={2}>
               <TextField 
               label="Dato 7"
               />
              </Grid>
              <Grid item xs={2}>
               <TextField 
               label="Dato 8"
               />
              </Grid>
              <Grid item xs={2}>
               <TextField 
               label="Dato 9"
               />
              </Grid>
              <Grid item xs={2}>
               <TextField 
               label="Dato 10"
               />
              </Grid>
              <Grid item xs={3}>
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
                </Grid>
            </Grid>
          </Box>
        ))}
      <Button 
        variant='contained' 
        type="Button"
        onClick={() => append({ component: 1, quantity: 1 })}
        disabled={fields.length >= 6}
        >
          <AddIcon  
          color='blanco'/>
      </Button>
    </>
  )
}

export { FieldArrayE }