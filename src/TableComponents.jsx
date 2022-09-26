import React from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import {
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Button,
  Grid
} from '@mui/material'


function TableForm() {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm({
    defaultValues: {
      componentes: [{ quiantity: 1, component: 1 }]
    } 
  });
  const { fields, append, remove } = useFieldArray({
    control,
    name: "componentes",
  })
  
  return (
    <form onSubmit={handleSubmit(data => console.log(data))}>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <Controller
              render={({ field }) => (
                <TextField
                  {...field}
                  label="Cantidad"
                  variant="outlined"
                  type="number"
                />
              )}
              name={`componentes.${index}.quiantity`}
              control={control}
            />
            <FormControl>
              <InputLabel>Componente</InputLabel>
              <Controller
                  render={({ field }) => (
                    <Select
                      {...field}
                      label="Componente"
                      autoWidth
                      sx={{ width:100 }}
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
            <Button type="Button" onClick={() => remove(index)}>Eliminar</Button>
          </li>
        ))}
      </ul>
      <Button
        type="Button"
        onClick={() => append({ quiantity: 1, component: 2 })}
      >
        Añadir
      </Button> 
      <Button type="submit">Test</Button>
      
    </form>
  );
}

/* 

<Controller 
        name="quantity"
        controll={control}
        render={({ field }) => (
          <TextField 
            label="Cantidad"
            variant="outlined"
          />
        )}
      />

*/

export { TableForm }