import { useState } from 'react'
import {
    TextField,
    Container
} from '@mui/material'

import {
    FormContainer,
} from 'react-hook-form-mui'

import { useForm } from 'react-hook-form'

function Form ({ text, texto}) {

    const [inputFields, SetInputFields] = useState([
        { quant: 1, comp: 2 },
    ])

    const { handleSubmit, control, reset, setValue } = useForm({
        defaultValues: {
            quant: 1,
        }
    })

    const handdleInputChange = (e, i) => {
        const values = [...inputFields]
     values[i][e.target.name] = /^[1-9]$|^[1-9][0-9]$|^(100)$/.test(e.target.value) ? e.target.value : '' 
        SetInputFields(values)

    }

    const newInputField = () => {
        SetInputFields([...inputFields, { quant: 1, comp: 1 }])
    }

    return (
      <FormContainer onSuccess={data => console.log({...data})}>
        {inputFields.map((inputField, index) => {
          return(
            <div key={index} >
              <TextField
                name="quant"
                label={text}
                onChange={(e) => handdleInputChange(e, index)}
                required
              />
              <div key={index}>
                <TextField
                name="quant"
                label={texto}
                onChange={(e) => handdleInputChange(e, index)}
                required
              />
              </div>
            </div>
          )
        })}
      </FormContainer>
    )
}

export default Form