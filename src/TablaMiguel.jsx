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

    const [rows, setRows] = useState(1)

    const handleRow = () => {
        setRows( rows + 1 )
    }

    return (
        <FormContainer
            defaultValues={{quant: 1}}
            onSuccess={data => console.log({...data, })}
        >
        <h1>{rows}</h1>
        <Button variant="contained" type="submit" onClick={handleRow} >Añadir</Button>
        </FormContainer>
    )
}

export default Form