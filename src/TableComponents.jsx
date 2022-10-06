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

function TableForm() {
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
    <>
      <ul>
        {fields.map((item, index) => (
          <li key={item.id}>
            <Controller
              rules={{ 
                required: 'Cantidad numérica requerida ',
                min:{ 
                  value: 1,
                  message: 'Cantidad debe ser mayor a 0'
                },
                max: {
                  value: 51,
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
            <Button 
              type="Button"
              onClick={() => remove(index)}
              variant="contained"
            >
              Eliminar
            </Button>
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
      
    </>
  );
}

export { TableForm }