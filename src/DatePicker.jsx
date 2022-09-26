import { useState } from 'react'
import dayjs from 'dayjs'
import { TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { Grid, Box } from '@mui/material'


function DatePicker() {
    const [value, setValue] = useState(dayjs())
    const[value1, setValue1]=useState(dayjs())

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
                <Grid sx={{width:190, height:60}} item xs={12} sm={15}>
                    <DateTimePicker
                        renderInput={(props) => <TextField{...props} />}
                        label = "Fecha y hora inicio"
                        value = {value}
                        onChange = {(newValue) => {
                            setValue(newValue)
                        }}
                    />
                </Grid> 
                <Grid sx={{width:190, top:-60, left:190, position:'relative'}} item xs={12} sm={15}>
                    <DateTimePicker  
                        renderInput={(props) => <TextField{...props} />}
                        label = "Fecha y hora fin"
                        value = {value1}
                        onChange = {(newValuer) => {
                            setValue1(newValuer)
                        }}
                    />
                </Grid>
        </LocalizationProvider>
    )
}

export { DatePicker }