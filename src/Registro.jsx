import {
  Button,
  Paper,
  Grid as a,
  TextField,
  Select,
  MenuItem,
  FormControl,
  InputLabel,
  Stack,
  Grid, 
  Link
} from "@mui/material";

function Registro() {
  return (
    <Grid 
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      md={12}
    >
        <Paper >
            <Stack spacing={2} sx={{ minWidth: 350, maxHeight: "80vh", padding: 2}}>
              <TextField label="Nombre Completo" variant="filled" required />
              <TextField label="Usuario" variant="filled" required />
              <TextField label="Correo" variant="filled" required />
              <TextField
                label="Contraseña"
                type="password"
                variant="filled"
                autoComplete="current-password"
                required
              />
              <FormControl variant="filled" sx={{ m: 1 }}>
                <InputLabel>Rol</InputLabel>
                <Select>
                  <MenuItem value="1">Operadores</MenuItem>
                  <MenuItem value="2">Usuarios</MenuItem>
                  <MenuItem value="1">Invitados</MenuItem>
                  <MenuItem value="2">Externos</MenuItem>
                </Select>
                <Link href="https://www.facebook.com/" underline="none">
                    {'Ya tengo cuenta'}
                </Link>
              </FormControl>
              <Button variant="contained">Registrar</Button>
            </Stack>
        </Paper>
    </Grid>
  )
}

export default Registro
 
