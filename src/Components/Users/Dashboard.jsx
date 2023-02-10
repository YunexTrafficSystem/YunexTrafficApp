import { useState } from 'react';
import { styled, ThemeProvider } from '@mui/material/styles';
import MuiDrawer from '@mui/material/Drawer';
import Box from '@mui/material/Box';
import MuiAppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import IconButton from '@mui/material/IconButton';
import Grid from '@mui/material/Grid';
import MenuIcon from '@mui/icons-material/Menu';
import { makeStyles } from '@material-ui/core/styles';
import SecondaryListItems from './ListItems';
import EditProfile from './EditProfile';
import Button from '@material-ui/core/Button';

import Balance from '../../Balance';
import Zone from '../../Zone';
import Ensambles from './Ensambles';
import Garantias from './Garantias';
import Datos from './Datos'
import Preoperacionales from './Preoperacionales';
import Preventivos from './Preventivos';
import InventarioEhs from './InventarioEhs';




// Definiendo el ancho del sideBar
const drawerWidth = 250


//Importando los archivos para después mostrarlos en la ventana de informacion
const modules = [
  <EditProfile />,
  <Balance />,
  <Zone />,
  <Ensambles />,
  <Garantias />,
  <Datos />,
  <Preoperacionales />,
  <Preventivos />,
  <InventarioEhs />
]


// Desplegable

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== 'open',
})(({ theme, open }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(['width', 'margin'], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}))

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    '& .MuiDrawer-paper': {
      position: 'relative',
      whiteSpace: 'nowrap',
      width: drawerWidth,
      transition: theme.transitions.create('width', {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.enteringScreen,
      }),
      boxSizing: 'border-box',
      ...(!open && {
        overflowX: 'hidden',
        transition: theme.transitions.create('width', {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.leavingScreen,
        }),
        width: theme.spacing(0),
        [theme.breakpoints.up('xs')]: {
          width: theme.spacing(0),
        },
      }),
    },
  }),
)



// personalizacion de colores
const useStyles = makeStyles(theme => ({
  main: {
    backgroundColor: '#e2edF3',

  },
  card:{
    backgroundColor:'#fff',
  },
}));

//Declarando la función que retorna la vista y los datos del dashboard
function DashboardContent() {

  {/**Hooks para que funcionen los desplegables */}
  const [open, setOpen] = useState(true)
  const toggleDrawer = () => {
    setOpen(!open)
  }
  const [selectedTab, setTab] = useState(1)

  const selectTab = (i) => {
    setTab(i)
  }

  {/**Se declara la variable para que contenga la informacion donde se personalizó los colores */}
  const classes = useStyles();

  return (
      {/**Se usa ThemeProvider para que se pueda usar  */},
    <ThemeProvider >
        {/**La barra de navegacion */}
        <AppBar position='static'>
          <Box  className={classes.card}>
            <Toolbar>
                <IconButton
                  edge="start"
                  color="inherit"
                  aria-label="open drawer"
                  onClick={toggleDrawer}
                  sx={{m:10, display:{sm:'none'}
                }}>
                  <MenuIcon />
                </IconButton>
              <Grid sx={{m:10}}>
                <img src='../public/img/logo.png' alt='' width='100px' height='40px' />
              </Grid>
              <Grid container direction='row' justifyContent='end'>
                <Button variant="contained" href="/" color="primary">
                  INICIO
                </Button>
                <Button variant="contained" color="error">
                  CERRAR SESION
                </Button>
              </Grid>
            </Toolbar>
          </Box>
        </AppBar>
      {/**Este box contiene el sideBar y la ventana donde se muestra la infromacion */}
      <Box sx={{ display: 'flex' }} className={classes.main}>
        {/**El sideBar */}
        <Drawer  variant="permanent" open={open}>
          <Grid bgcolor="primary.main" >
            <List>
              <SecondaryListItems
                onClick={
                  selectTab
                }
              />
            </List>
          </Grid>
        </Drawer>

        {/**Ventana donde se muestra la información */}
        <Grid container sx={{ mt:27, mb: 27, ml:29, mr:29 }} className={classes.card} margin="auto" padding="1%">

            <Grid container spacing={3} display="flex">
              <Grid item xs={12}>
              {modules[selectedTab-1]}
              </Grid>

            </Grid>
        </Grid>
      </Box>
    </ThemeProvider>
    
    
  )
}

//Declarando la funcion que retorna el contenido del dashboard
function Dashboard() {
  return <DashboardContent />
}

//exportacion de la funcion declarada anteriormente
export default Dashboard