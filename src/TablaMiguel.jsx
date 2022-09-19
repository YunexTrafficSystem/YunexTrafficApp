import { useState } from 'react'
import {
    Button,
    TextField,
    Select,
    MenuItem
} from '@mui/material'

import {
    FormContainer,
} from 'react-hook-form-mui'


import { useForm, Controller } from 'react-hook-form'

function Form() {

    const [inputFields, SetInputFields] = useState([
        { quant: 1, comp: 2 },
    ])

    const { handleSubmit, control, reset, setValue } = useForm({
        defaultValues: {
            quant: 1,
        }
    })

    // TODO:
    // [-] Añadir control para el borrado completo
    // [x] Añadir control para los decimales
    // [-] Integrar regEx con .replace

    const handdleInputChange = (e, i) => {
        // Obteniedo valores del input 
        const values = [...inputFields]
        // Expresion regular para manejo de numeros
        const isValid = !(new RegExp('^[a-zA-Z]*$', 'g').test(e.target.value))
        const hasMax = e.target.value > 100
        // Remplazando caracteres
        if (isValid && !hasMax) {
            values[i][e.target.name] = e.target.value
            SetInputFields(values)
        }
    }

    const handlePress = (e) => {
        if(e.key === '.') {
            e.preventDefault()
        }
    }

    const newInputField = () => {
        SetInputFields([...inputFields, { quant: 1, comp: 1 }])
    }

    return (
        <FormContainer
            onSuccess={data => console.log({...data})}
        >
        {inputFields.map((inputField, index) => {
            return(
                <div key={index}>
                    <TextField
                        name="quant"
                        label="Cantidad"
                        value={inputField.quant}
                        type="number"
                        inputProps={{ min: 1, max: 100, maxLength: 10 }}
                        onChange={(e) => handdleInputChange(e, index)}
                        onKeyPress={handlePress}
                        required
                    />
                    <Select
                        name="comp"
                        required
                        sx={{ minWidth: 100}}
                        value={inputField.comp}
                        onChange={(e) => handdleInputChange(e, index)}
                    >
                        <MenuItem value={1}>Componente 1</MenuItem>
                        <MenuItem value={2}>Componente 2</MenuItem>
                        <MenuItem value={3}>Componente 3</MenuItem>
                    </Select>
                </div>

            )
        })}
        <Button variant="contained" onClick={newInputField}>Añadir</Button>
        <Button variant="contained" type="submit" >Enviar</Button>
        </FormContainer>
    )
}

export default Form