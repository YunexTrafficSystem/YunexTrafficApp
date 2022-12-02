import { useState } from 'react'
import { styled, createTheme, ThemeProvider } from '@mui/material/styles'
import CssBaseline from '@mui/material/CssBaseline'
import MuiDrawer from '@mui/material/Drawer'
import Box from '@mui/material/Box'
import MuiAppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'
import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Paper from '@mui/material/Paper'
import MenuIcon from '@mui/icons-material/Menu'
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft'
import LogoutIcon from '@mui/icons-material/Logout'
import { MainListItems, SecondaryListItems } from './ListItems'
import Welcome from './Welcome'
import Reports from './Reports'
import Electric from '../../Electric'
import Electronic from '../../Electronico'
import Zone from '../../Zone'
import EditProfile from './EditProfile'
import Ensambles from './Ensambles'
import Garantias from './Garantias'
import Datos from './Datos'
import Preoperacionales from './Preoperacionales'
import Preventivos from './Preventivos'
import InventarioEhs from './InventarioEhs'

const drawerWidth = 230;

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
}));

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
        width: theme.spacing(7),
        [theme.breakpoints.up('sm')]: {
          width: theme.spacing(9),
        },
      }),
    },
  }),
);

const mdTheme = createTheme({  
  palette: {  
    primary: {  
      main: '#00E676',  
      light: '#00E676',  
      dark: '#00ca6e',  
      contrastText: '#000',  
    },  
  }
})

function DashboardContent() {
  const [open, setOpen] = useState(true);
  const toggleDrawer = () => {
    setOpen(!open);
  };
  const [selectedTab, setTab] = useState(1);
  const selectTab = (i) => {
    console.log(i);
    setTab(i);
  };

  return (
    <ThemeProvider theme={mdTheme}>
      <Box sx={{ display: 'flex' }}>
        <CssBaseline />
        <AppBar position="absolute" open={open}>
          <Toolbar
            sx={{
              pr: '24px'
            }}
          >
            <IconButton
              edge="start"
              color="inherit"
              aria-label="open drawer"
              onClick={toggleDrawer}
              sx={{
                marginRight: '36px',
                ...(open && { display: 'none' }),
              }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              component="h1"
              variant="h6"
              color="inherit"
              noWrap
              sx={{ flexGrow: 1 }}
            >
              TYTS
            </Typography>
            <IconButton color="inherit" href='/'>
                <LogoutIcon />
              </IconButton>
          </Toolbar>
        </AppBar>
        <Drawer variant="permanent" open={open}>
          <Toolbar
            sx={{
              display: 'flex',
              
              alignItems: 'center',
              justifyContent: 'flex-end',
              px: [1],
            }}
          >
            <IconButton onClick={toggleDrawer}>
              <ChevronLeftIcon />
            </IconButton>
          </Toolbar>
          <Divider />
          <List component="nav">
            <MainListItems 
             onClick={
              selectTab
            }/>
            <Divider sx={{ my: 1 }} />
            <SecondaryListItems 
            onClick={
              selectTab
            }
            />
          </List>
        </Drawer>
        <Box
          component="main"
          sx={{
            backgroundColor: (theme) =>
              theme.palette.mode === 'light'
                ? theme.palette.grey[100]
                : theme.palette.grey[900],
            flexGrow: 1,
            overflow: 'auto',
          }}
        >
          <Toolbar />
          <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
            <Grid container spacing={3}>
              <Grid item xs={12} sx={{display:'flex', alignItems: 'center'}}>
               
                  {showTab(selectedTab)}
              </Grid>
             
            </Grid>
          </Container>
        </Box>
      </Box>
    </ThemeProvider>
  );
}

export default function Dashboard() {
  return <DashboardContent />;
}
function showTab(tabNum) {
  if (tabNum === 1) {
    return <Welcome />;
  } else if (tabNum === 2) {
    return <EditProfile />;
  } else if (tabNum ===3){
    return <Electric />
  } else if (tabNum ===4){
    return <Electronic />
  } else if (tabNum ===5){
    return <Zone />
  }else if (tabNum ==6){
    return <Ensambles/>
  } else if (tabNum ==7){
    return <Garantias/>
  } else if (tabNum ==8){
    return <Datos />
  } else if (tabNum ==9){
    return <Preoperacionales />
  } else if (tabNum ==10){
    return <Preventivos />
  } else if (tabNum ==11){
    return <InventarioEhs />
  }
}