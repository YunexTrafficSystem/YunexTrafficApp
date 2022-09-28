import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid,

} from '@mui/material'

import DeleteIcon from '@mui/icons-material/Delete';
import AddIcon from '@mui/icons-material/Add';

function TablaForm() {
  const {
    register,
    control,
    handleSubmit,
    reset,
    trigger,
    setError,
    formState: { errors }
  } = useForm({
    defaultValues: {
      componentes: [{ quiantity: 1, component: 1 }]
    } 
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "componentes",
  })

  return (
    <Grid >
        {fields.map((item, index) => (
          <ul key={item.id}>
                  <FormControl>
                    <InputLabel>Componente</InputLabel>
                    <Controller
                        render={({ field }) => (
                          <Select
                            {...field}
                            label="Componente"
                            autoWidth
                            name = "componente"
                            sx={{ width:170 }}
                          >
                            <MenuItem value={1}>Uno</MenuItem>
                            <MenuItem value={2}>Dos</MenuItem>
                            <MenuItem value={3}>Tres</MenuItem>
                          </Select>
                      )}
                      name={`componentes.${index}.component`}
                      control={control}
                    />
                  </FormControl>
            <Controller
              rules={{ 
                required: 'Cantidad numérica requerida ',
                min:{ 
                  value: 1,
                  message: 'Cantidad debe ser mayor a 0'
                },
                max: {
                  value: 50,
                  message: 'Cantidad debe ser menor a 50'
                },
                valuesAsNumber: true
              }}
              render={({ field }) => (
                <>
                  <TextField
                    {...field}
                    label="Cantidad"
                    variant="outlined"
                    sx={{width:70}}
                    name = 'cantidad'
                    error={errors.componentes?.[index]?.quiantity}
                    helperText={errors?.componentes?.[index]?.quiantity.message}
                    type="number"
                    inputProps={{ inputMode: 'numeric' }}
                    required
                  />
                </>
              )}
              name={`componentes.${index}.quiantity`}
              control={control}
            />
            <Button 
            variant='contained' 
            sx={{margin:1, width:15}}>
              <DeleteIcon 
              onClick={() => remove(index)} 
              color='blanco'sx={{width:20}}/>
              </Button>
          </ul>
      ))}
      <Button 
      variant='contained' 
      type="Button"
      sx={{margin:1}}><AddIcon 
      onClick={() => append({ quiantity: 1, component: 2 })} 
      color='blanco'/>
      </Button>
      <Button type="submit">Test</Button>
    </Grid>
  );
}

export { TablaForm }