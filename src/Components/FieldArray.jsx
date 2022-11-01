import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button, 
  InputLabel,
  Box,
  Grid
}  from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';

function FieldArray ({ fields, register, append, remove, errors, control, controller: Controll, spacing }) {
  return (
    <>
      {fields.map((field, index) => (
        <Box key={field.id}>
          <Grid container spacing={5} sx={{p:'13px 0'}}>
              <Grid item xs={5}>
                <FormControl fullWidth>
                  <InputLabel>Componentes</InputLabel>
                  <Select 
                    label="Componente"
                    required
                    defaultValue={1}
                    {...register("quantity",`mant.${index}.component`)} 
                  >
                    <MenuItem value={1}>Comp1</MenuItem>
                    <MenuItem value={2}>Comp2</MenuItem>
                    <MenuItem value={3}>Comp3</MenuItem>
                    <MenuItem value={4}>Comp4</MenuItem>
                    <MenuItem value={5}>Comp5</MenuItem>
                  </Select>
                </FormControl>
              </Grid>
              <Grid item xs={4}>
                <TextField
                  {...register(`mant.${index}.quantity`, { 
                  required: "Cantidad es requerida",
                  })}
                  error={errors?.mant?.[index]?.quantity}
                  helperText={errors?.quantity && errors?.quantity.message} 
                  fullWidth
                  type="number"
                  label="Cantidad"
                  inputProps={{ min: 1, max: 50 }} 
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

export { FieldArray }