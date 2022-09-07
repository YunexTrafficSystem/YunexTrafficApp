import { useState } from 'react'
import { Button } from '@mui/material'
import {
    FormContainer,
    TextFieldElement,
    SelectElement
} from 'react-hook-form-mui'


function Row() {
    return (
        <>
            <TextFieldElement
                name="quant"
                label="Cantidad"
                type={'number'}
                required
                InputProps={{ inputProps: { min: 1, max: 100 } }}
            />
            <SelectElement
                sx={{ width: 150 }}
                label="Seleccione Rol"
                name="role"
                options={[
                {
                    id: '1',
                    label: 'Comp1'
                },
                {
                    id: '2',
                    label: 'Comp2'
                },
                {
                    id: '3',
                    label: 'Comp3'
                },
                {
                    id: '4t',
                    label: 'Comp4'
                }]}
            />
        </>
    )
}


function Form() {

    const [rows, setRows] = useState([
        { quant: 1, role: 3 }
    ])

    const onAddRow = () => {
        const newRow = { quant: 1, role: '' }
        setRows([...rows,  newRow ])
    }

    return (
        <FormContainer
            // defaultValues={{quant: 1}}
            onSuccess={data => console.log({...data})}
        >
        {rows.map((row, index) => {
            console.log(row)
            return(
                <Row key={index} />
            )
        })}
        <Button variant="contained" type="submit" onClick={onAddRow}>Añadir</Button>
        </FormContainer>
    )
}

export default Form