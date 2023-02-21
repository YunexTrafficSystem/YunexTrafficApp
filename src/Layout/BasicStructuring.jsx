
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import Button from '@material-ui/core/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography'
import SecondaryListItemes from '../Components/users/ListItems';

export const BasicStructuring = () => {
    return (
        <>
            {/* Nav */}
            <AppBar position='static'>
                <Box className={classes.card}>
                    <Toolbar>
                        <IconButton
                            edge="start"
                            color="inherit"
                            aria-label="open drawer"
                            onClick={toggleDrawer}
                            sx={{
                                m: 10, display: { sm: 'none' }
                            }}>
                            <MenuIcon />
                        </IconButton>

                        <Grid sx={{ m: 10 }}>
                            <img src='../public/img/logo.png' alt='' width='100px' height='40px' />
                        </Grid>
                        <Grid container direction='row' justifyContent='end'>
                            <Button variant="contained" className={classes.buton} href="Dashboard">
                                INICIO
                            </Button>
                            <Button variant="contained" className={classes.buton}>
                                CERRAR SESION
                            </Button>
                        </Grid>
                    </Toolbar>
                </Box>
            </AppBar>
            {/**El sideBar */}
            <Box sx={{ display: 'flex' }} className={classes.main}>
                <Drawer variant="permanent" open={open}>
                    <Grid bgcolor="primary.main" >
                        <List>
                            <SecondaryListItemes
                                onClick={
                                    selectTab
                                }
                            />
                        </List>
                    </Grid>
                </Drawer>
            </Box>
            <Toolbar position='' color='black' >
                <Grid container padding='3%'>

                    <Grid Item sm={3} xs={12}>
                        <Typography variant='body2' align='center'>
                            Compliace
                        </Typography>
                    </Grid>
                    <Grid Item sm={3} xs={12}>
                        <Typography variant='body2' align='center'>
                            For Suppliers
                        </Typography>
                    </Grid>

                    <Grid Item sm={3} xs={12}>
                        <Typography variant='body2' align='center'>
                            Data Privacy & Cookies
                        </Typography>
                    </Grid>

                    <Grid Item sm={3} xs={12}>
                        <Typography variant='body2' align='center'>
                            Impripmit
                        </Typography>
                    </Grid>
                </Grid>
            </Toolbar>
        </>
    )
}
