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

function TableForm() {

    const [inputFields, SetInputFields] = useState([
        { quant: 1, comp: 1 },
    ])

    // TODO:
    // [-] Añadir control para el borrado completo
    // [x] Añadir control para los decimales
    // [-] Pasar de forma implicta el evento
    // [-] Integrar RegEx con .replace
    // [-] Pasar estado al objeto

    const handdleInputChange = (e, i) => {
        // Obteniedo valores del input 
        const values = [...inputFields]        
        // Expresion regular para manejo de numeros
        const isValid = (input) => {
            const hasLetters = /^[a-zA-Z]*$/g.test(input)
            const hasMax = input > 100
            return !hasLetters && !hasMax
        }

        // Comprobación de input
        if (isValid(e.target.value)) {
            values[i][e.target.name] = e.target.value
            SetInputFields(values)
        }
    }

    // Parche para evitar la escritura de puntos
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

export { TableForm }