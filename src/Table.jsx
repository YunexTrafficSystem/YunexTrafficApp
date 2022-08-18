 import { Button, Paper, Grid, TextField} from "@mui/material"
 
function Table() {
    <br />
    return (
        <>
            <Grid>
                <Paper square >
                <TextField id="outlined-basic" label="Nombre Completo" variant="outlined" />
                <TextField id="outlined-basic" label="Usuario" variant="outlined" />
                <TextField id="outlined-basic" label="Correo" variant="outlined"/>
                <TextField id="outlined-password-input" label="Contraseña" type="password" autoComplete="current-password"/>
                <Button variant="contained">Registrar</Button>
                </Paper>
            </Grid>
        </>
    )
}
export default Table