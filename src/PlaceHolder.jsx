import { useForm, useFieldArray, Controller  } from 'react-hook-form'

import { FieldArray } from './Components/FieldArray'
import { InfoGeneral } from './Components/InfoGeneral'
import { InfoSpecific } from './Components/InfoSpecific'
import { FormStepper } from './Components/FormStepper'
import { Button } from '@mui/material'


function PlaceHolder() {
  const { control, register, handleSubmit, watch, formState: { errors } } = useForm({
    defaultValues: {
      mant: [{ quantity: 1, component: 1 }], 
      module: 3,
      container:5,
      project:4
    }   
  })

  const { fields, append, remove } = useFieldArray({
    control,
    name: "mant",
  })
 const onSubmit = data => {
    console.log(data)
  }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <FormStepper>
        {/** Esto fijo que se va a romper */}
        <InfoGeneral
          register={register}
          errors={errors}
        />
        <FieldArray 
          fields={fields}
          register={register}
          append={append}
          remove={remove}
          errors={errors}
        />
        <InfoSpecific
          register={register}
          errors={errors}
        />
      </FormStepper>
      <Button variant="contained" type="submit">Enviar</Button>
    </form>
  )
}

export { PlaceHolder }
