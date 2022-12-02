import { useState } from "react"
import Button from "@mui/material/Button"
import TextField from "@mui/material/TextField"
import Dialog from "@mui/material/Dialog"
import DialogActions from "@mui/material/DialogActions"
import DialogContent from "@mui/material/DialogContent"
import DialogContentText from "@mui/material/DialogContentText"
import Title from "./Title"
import DialogTitle from "@mui/material/DialogTitle"
import { Container, Grid, FormControl, InputLabel, Select, MenuItem, Paper } from "@mui/material"


export default function FormFDialog() {
    const [open, setOpen] = useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };


    return (
        <>
            <Container>
                <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center' }}>
                    <Paper
                        sx={{
                            p: 2,
                            display: 'flex',
                            flexDirection: 'column',
                            width: '100%',
                            minHeight: 200
                        }}
                    >
                        <Title>Editar Perfil de Usuario</Title>
                        <p>En este espacio usted podra realizar los cambios que  considere necesario en su perfil, algunos de estos campos no podran ser editados, ya que el administrador sera el único que podrá acceder a ellos</p>
                        <Grid item xs={12} sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                            <Button variant='contained' onClick={handleClickOpen}>
                                Editar
                            </Button>
                        </Grid>
                        <Dialog open={open} onClose={handleClose} >
                            <DialogTitle>Editar Perfil</DialogTitle>
                            <DialogContent>
                                <br />
                                <Grid container spacing={2}>
                                    <Grid item xs={12}>
                                        <TextField
                                            label="Nombre Completo"
                                            variant="outlined"
                                            fullWidth
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                            autoFocus
                                            margin="dense"
                                            id="name"
                                            label="Correo Electrónico"
                                            type="email"
                                            fullWidth
                                            variant="outlined"
                                        />
                                    </Grid>
                                    <Grid item xs={12}>
                                        <FormControl fullWidth>
                                            <InputLabel>Rol</InputLabel>
                                            <Select
                                                label="Rol"
                                                defaultValue={1}

                                            >
                                                <MenuItem value={1}>Laboratorio</MenuItem>
                                                <MenuItem value={2}>Mantenimiento</MenuItem>
                                                <MenuItem value={3}>Ensambles</MenuItem>
                                                <MenuItem value={4}>Garantias</MenuItem>
                                                <MenuItem value={5}>EHS</MenuItem>
                                            </Select>
                                        </FormControl>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <TextField
                                        fullWidth
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                        />
                                    </Grid>
                                        <Grid item xs={12}>
                                        <TextField
                                        fullWidth
                                            id="outlined-password-input"
                                            label="Password"
                                            type="password"
                                            autoComplete="current-password"
                                        />
                                        </Grid>
                                </Grid>
                            </DialogContent>
                            <DialogActions>
                                <Button onClick={handleClose}>Cancelar</Button>
                                <Button onClick={handleClose}>Enviar</Button>
                            </DialogActions>
                        </Dialog>
                    </Paper>
                </Grid>
            </Container>
        </>
    );
}
