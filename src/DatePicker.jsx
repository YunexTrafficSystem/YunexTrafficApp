import { useState } from 'react'
import dayjs from 'dayjs'
import { TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import {Grid} from '@mui/material'

    
function DatePicker({ text }) {
    const [value, setValue] = useState(dayjs())

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
            <Grid>
            <DateTimePicker 
                renderInput={(props) => <TextField{...props} />}
                label = {text}
                value = {value}
                onChange = {(newValue) => {
                    setValue(newValue)
                }}
            />
            </Grid>
        </LocalizationProvider>
    )
}

export { DatePicker }