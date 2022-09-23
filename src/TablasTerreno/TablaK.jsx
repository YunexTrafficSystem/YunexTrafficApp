import {
    TextField, 
    Box,
    Grid
} from '@mui/material'

function Terreno({text, texto}){
    return(
    <Box component="form" spacing={2} >
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
    </Box>
    )
}
export default Terreno