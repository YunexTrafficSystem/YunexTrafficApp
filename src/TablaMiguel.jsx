import { useState } from 'react'
import {
    Button,
    TextField,
    Select,
    MenuItem
} from '@mui/material'

import {
    FormContainer,
    TextFieldElement,
    SelectElement
} from 'react-hook-form-mui'


function Form() {

    const [inputFields, SetInputFields] = useState([
        { quant: 1, comp: 2 },
    ])

    const handdleInputChange = (e, i) => {
        const values = [...inputFields]
        values[i][e.target.name] = e.target.value
        SetInputFields(values)

    }

    const newInputField = () => {
        SetInputFields([...inputFields, { quant: 1, comp: 1 }])
        console.log({...data})
    }

    return (
        <FormContainer
            defaultValues={{quant: 1}}
            onSuccess={data => console.log({...data})}
        >
        {inputFields.map((inputField, index) => {
            return(
                <div key={index}>
                    <TextField
                        name="quant"
                        label="Cantidad"
                        value={inputField.quant}
                        variant="filled"
                        type="number"
                        inputProps={{ min: 1, max: 100 }}
                        onChange={(e) => handdleInputChange(e, index)}
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
        <Button variant="contained" type="submit" onClick={newInputField}>Añadir</Button>
        </FormContainer>
    )
}

export default Form