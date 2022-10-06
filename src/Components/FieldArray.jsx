import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  Button, 
  InputLabel,
  Box
}  from '@mui/material'
import ClearIcon from '@mui/icons-material/Clear';
import AddIcon from '@mui/icons-material/Add';
import HorizontalLinearStepper from '../Terreno1';

function FieldArray ({ fields, register, append, remove, errors, control, controller: Controll }) {
  return (
    <>
      {fields.map((field, index) => (
        <Box key={field.id} sx={{  m: ".7rem" }}>
          <FormControl>
            <InputLabel>Componentes</InputLabel>
            <Select 
              sx={{width:200}}
              label="Componente"
              defaultValue={1}
              {...register(`mant.${index}.component`)} 
            >
            <MenuItem value={1}>Comp1</MenuItem>
            <MenuItem value={2}>Comp2</MenuItem>
            <MenuItem value={3}>Comp3</MenuItem>
            <MenuItem value={4}>Comp4</MenuItem>
            <MenuItem value={5}>Comp5</MenuItem>
            </Select>
            </FormControl>
             <TextField
                {...register(`mant.${index}.quantity`, { 
                required: true,
                message:'Cantidad es requerido'
                })}
              error={errors?.mant?.[index]?.quantity} 
              type="number"
              label="Cantidad"
              sx={{width:130}}
              inputProps={{ min: 1, max: 50 }} 
            />
            <Button
              variant='contained'
              onClick={() => remove(index)}
              sx={{margin:1, widht:15}}
            >
              <ClearIcon
                color='blanco' sx={{width:20}}>
              </ClearIcon>
            </Button>
        </Box>
      ))}
      <Button 
        variant='contained' 
        type="Button"
        onClick={() => append({ component: 1, quantity: 1 })} 
        sx={{ m: ".7rem" }}>
          <AddIcon  
          color='blanco'/>
      </Button>
    </>
  )
}

export { FieldArray }