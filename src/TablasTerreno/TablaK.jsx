import {
    TextField, 
    Box,
    Grid
} from '@mui/material'

function Terreno({text, texto}){
    return(
        <Grid >
            <TextField
            name="quant"
            sx={{width:190, height:60}}
            label={text}
            required
            />
            <TextField
            name="quant"
            sx={{width:190, height:60}}
            label={texto}
            required
            />
        </Grid>
    )
}
export default Terreno