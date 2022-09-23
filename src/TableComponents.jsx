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

import { useForm } from 'react-hook-form'
const { register, handleSubmit } = useForm()

function TableForm() {
    const initialFields = { quant: 1, comp: 1 }
    const [inputFields, SetInputFields] = useState([initialFields])

    // TODO:
    // [x] Añadir botón de eliminar
    // [x] Añadir control para los decimales
    // [x] Pasar estado al objeto
    // [x] Añadir control para 0 al inicio
    // [x] Controlar reset
    // [x] Controlar valores por defecto filas nuevas
    // [x] Controlar limite de filas
    // [x] Mínimo de filas
    // [x] Controlar valores por defecto por valor inicial
    // [x] Integrar RegEx con .replace
    // [x] Controlar valores de componente y cantidad
    // [x] Control de caracteres que no sean numeros
    // [x] Añadir control exclusivo para numeros
    // [-] Añadir control para valor mínimo

    const onInputChange = (e, i) => {
        const LETTERS_PATTERN = /[\D]/
        const values = [...inputFields]
        if (e.target.name === 'quant') {
            values[i][e.target.name] = e.target.value.replace(LETTERS_PATTERN, '')
        } else {
            values[i][e.target.name] = e.target.value
        }
        SetInputFields(values)
    }

    const resetInputField = () => {
        const values = {...initialFields}
        SetInputFields([values])
    }

    const addInputField = () => {
        if (inputFields.length < 5) {
            const newInputField = {...initialFields}
            SetInputFields([...inputFields, {...initialFields}])
        }
    }

    const removeInputField = () => {
        const values = [...inputFields]
        if (inputFields.length > 1) {
            values.pop()
            SetInputFields(values)
        }
    }

    return (
        <FormContainer
            onSuccess={data => console.log({...data, ...inputFields})}
        >
        {inputFields.map((inputField, index) => {
            return(
                <div key={index}>
                    <TextField
                        name="quant"
                        label="Cantidad"
                        value={inputField.quant} 
                        inputProps={{ min: 1, max: 100, maxLength: 3, inputMode: 'numeric' }}
                        onChange={(e) => onInputChange(e, index)}
                        required
                    />
                    <Select
                        name="comp"
                        required
                        sx={{ minWidth: 100}}
                        value={inputField.comp}
                        onChange={(e) => onInputChange(e, index, 'select')}
                        type="select"
                    >
                        <MenuItem value={1}>Componente 1</MenuItem>
                        <MenuItem value={2}>Componente 2</MenuItem>
                        <MenuItem value={3}>Componente 3</MenuItem>
                    </Select>
                </div>

            )
        })}
        <Button variant="contained" onClick={addInputField}>Añadir</Button>
        <Button variant="contained" type="submit">Enviar</Button>
        <Button variant="contained" onClick={resetInputField}>Reset</Button>
        <Button variant="contained" onClick={removeInputField}>Eliminar</Button>
        </FormContainer>
    )
}

export { TableForm }