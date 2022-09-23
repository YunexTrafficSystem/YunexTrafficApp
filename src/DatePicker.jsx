import { useState } from 'react'
import dayjs from 'dayjs'
import { TextField } from '@mui/material'
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs'
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider'
import { DateTimePicker } from '@mui/x-date-pickers/DateTimePicker'
import { Grid, Box } from '@mui/material'


function DatePicker({ text }) {
    const [value, setValue] = useState(dayjs())

    return (
        <LocalizationProvider dateAdapter={AdapterDayjs}>
    <Box component="form" spacing={2} >
        <Grid sx={{width:190}}>
            <DateTimePicker
                renderInput={(props) => <TextField{...props} />}
                label = {text}
                value = {value}
                onChange = {(newValue) => {
                setValue(newValue)
                }}
            />
            </Grid> 
            <Grid sx={{width:190, height:60}}>
            <DateTimePicker  
                renderInput={(props) => <TextField{...props} />}
                label = {text}
                value = {value}
                onChange = {(newValuer) => {
                    setValue(newValuer)
                }}
                />
            </Grid>
                </Box>
        </LocalizationProvider>
    )
}

export { DatePicker }