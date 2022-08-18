 import { Button, Paper, Grid, TextField, Select, MenuItem, OutlinedInput } from "@mui/material"
 
function Table() {
    <br />
    return (
        <>
            <Grid>
                <Paper square >
                <TextField id="outlined-basic" label="Nombre Completo" variant="outlined" required />
                <TextField id="outlined-basic" label="Usuario" variant="outlined" required/>
                <TextField id="outlined-basic" label="Correo" variant="outlined" required/>
                <TextField id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password" required/>
                <Select id="ontlined-basic"  input={<OutlinedInput label="Name" />} variant="outlined">
                    <MenuItem value="1">Hola</MenuItem>
                    <MenuItem value="2">Hola</MenuItem>
                </Select>
                <Button variant="contained">Registrar</Button>
                </Paper>
            </Grid>
        </>
    )
}
export default Table