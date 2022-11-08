import { useState } from "react"
import AppBar from "@mui/material/AppBar"
import Box from "@mui/material/Box"
import Toolbar from "@mui/material/Toolbar"
import IconButton from "@mui/material/IconButton"
import Typography from "@mui/material/Typography"
import Badge from "@mui/material/Badge"
import MenuItem from "@mui/material/MenuItem"
import Menu from "@mui/material/Menu"
import MenuIcon from "@mui/icons-material/Menu"
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import EngineeringIcon from '@mui/icons-material/Engineering';
import WarningIcon from '@mui/icons-material/Warning';
import SchoolIcon from '@mui/icons-material/School';

export default function PrimarySearchAppBar() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [mobileMoreAnchorEl, setMobileMoreAnchorEl] = useState(null);

  const isMenuOpen = Boolean(anchorEl);
  const isMobileMenuOpen = Boolean(mobileMoreAnchorEl);

  const handleProfileMenuOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMobileMenuClose = () => {
    setMobileMoreAnchorEl(null);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    handleMobileMenuClose();
  };

  const handleMobileMenuOpen = (event) => {
    setMobileMoreAnchorEl(event.currentTarget);
  };

  const menuId = "primary-search-account-menu";
  const renderMenu = (
    <Menu
      anchorEl={anchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      id={menuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
    >
    </Menu>
  );

  const mobileMenuId = "primary-search-account-menu-mobile";
  const renderMobileMenu = (
    <Menu
      anchorEl={mobileMoreAnchorEl}
      anchorOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      id={mobileMenuId}
      keepMounted
      transformOrigin={{
        vertical: "top",
        horizontal: "left"
      }}
      open={isMobileMenuOpen}
      onClose={handleMobileMenuClose}
    >
       <MenuItem
       href="/"
       >         
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          href="/"
        >
           <PersonAddIcon />
        </IconButton>
        <p>Datos Personales</p>
      </MenuItem> 
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          href="/"
        >
           <LocationOnIcon />
        </IconButton>
        <p>Segumiento de vehiculos</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          href="/"
        >
           <EngineeringIcon />
        </IconButton>
        <p>Entrega de Dotación</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          href="/"
        >
           <WarningIcon />
        </IconButton>
        <p>Actos Inseguros</p>
      </MenuItem>
      <MenuItem>
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          href="/"
        >
           <SchoolIcon />
        </IconButton>
        <p>Plan de Capacitación</p>
      </MenuItem>
      
      
    </Menu>
  );

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".0rem",
              color: "inherit",
              textDecoration: "none"
            }}
          >
            TYTS
          </Typography>
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            <IconButton
              size="large"
              color="inherit"
              href="/"
            >
              <Badge>
                <PersonAddIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              href="/"
            >
              <Badge>
                <LocationOnIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              href="/"
            >
              <Badge>
                <EngineeringIcon />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              href="/"
            >
              <Badge>
                <WarningIcon  />
              </Badge>
            </IconButton>
            <IconButton
              size="large"
              color="inherit"
              href="/"
            >
              <Badge>
                <SchoolIcon />
              </Badge>
            </IconButton>
          </Box>
          <Box sx={{ display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="show more"
              aria-controls={mobileMenuId}
              aria-haspopup="true"
              onClick={handleMobileMenuOpen}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: 0,
              color: "inherit",
              textDecoration: "none"
            }}
          >
            TYTS
          </Typography>
        </Toolbar>
      </AppBar>
      {renderMobileMenu}
      {renderMenu}
    </Box>
  );
}

 /*
  Todos tus amigos saben? => La gran mayoría, mi miedo era que luego empiecen a pensar que me gustan o algo así
  ya me pasó dos veces que piesen que me gustan jej

  Alguna vez te gusto alguno de tus amigos actuales?
  No, pero igual puedo captar si son lindos o no

  Piensas en algun momento decirle a tus papás o prefieres que siga siendo asi?
  Lo prefiero así, ellos no tienen que saber, no me beneficiaría en nada y en todo caso aunque me acepten
  no habría como que mucha diferencia, solo es como algo privado y ya

  Me dijiste que ya habias tenido novios, cuanto duraron esas relaciones y como se conocieron
  Por amigos en común, de esa forma basicamente, la primera relación duró 3 meses, de la nada me borró de todas partes y desapareció
  y la otra duró 9 meses 

  Jumm, sospechos
  pero no la primera si no la segunda, meses de embarazo hahahahahhahahah
  yo a el lo mencioné unas cuantas veces, solo que ustedes pensaron que era una chica
  
  No me digas que es uno de los lanceheros kajajajaj
  Na, mentira
  pero igual no importa, sea mujer, hombre, peerro o gato 
  si te hizo feliz en su momento

  Le conatrias a Julian?
  No sé, no sé como reaccionaría, es que para mi es mpas fácil decirle a amigas, mis amigos se han enterado son por errores míos
  

  Igual yo creo que el es muy abierto con ese tema, pero igual si no le quieres contar 
  Errores, como cuales?
  Oye, cuando dijiste "Quiero contarle a Kata y porque"?

  Ahhh, sigo sin entender 

  Cual es tu tipo?
  A mi lo que me gusta de locs chicos es que sean como honestos con ellos mismos, imagio que usted habrá visto esto de hombre que se cree fuerte todo el tiempo, y pues me gusta que se porten así como que digan que les gusta, que les emociona y que no, se me hacen muy muy muy muy lindos, de verdad que me derriten cuando son así de honestos y cariñosos, es aglo poco común y los dos chicos que te dije me llegaron a gustar de lo lindos que eran conmigo, literal recuerdo que el primero llenó una pantalla de "TE AMO TE AMO TE AMO TE AMO TE AMO "
  


  awwww, pero me referia fisicamente jajajajajaj  

  Como yo, nada exigente, se me hacen bonitos



  Cuando yo te pregunte:
  "¿Quien crees que de la empresa es el que mas atrae, te sentiste nerviso al responder?"
   Non, yo estaba normal, pero obvio pensé como en lo que me gustaría a mi de alguien 



   Osea que cuando respondiste "Bedoya" fue por algo en especifico?
   Pues que me mataba de la risa, los que me han gustado ha sido también porque me divierten, pero obvio no me gusta 


   Tampoco estoy diciendo eso jajajajaj

   Pero ahorita mismo no hay  ninguno, sabiendo que trabajamos mas con hombres que te parezca atractivo, ojo, no estoy diciendo que tiene que gustarte
   solo que se te ha interesante

   No, ni uno de momento, solo me caen bien y ya

   Bueno, pero si quieres, tu tambien me puedes preguntar para que no se sienta todo tan motono de solo preguntarte a ti

   Alguna vez te has sentido atraida por el mismo genero??? que opinas de la gente que es trans? te puede llegar a gustar o interesar? ojo que está transgenero y transexual 

   Pues por el momento no, pero como te digo
   Puede que en algun momento llegue alguien y me ha cambiar de opinion, obvio hay actrices, cantantes que uno dice WTF pero hasta hay
   Que pienso, nada pues al final de cuentas son ellas las que sienten agusto,no me hacen daño a mi y si eso hace que se sientan bien con sigo mismo 
   yo voy a estar feliz de que ellos tambien lo esten
   

   También me acordé cuando le dije que me estaba gustando Melissa porque se vestía como un chico y eso de verdad me gusta, recuerdo la cara que hizo ajsj, en ese momento también sospechó?
   
   No mira que siento que es normal, yo te lo dije 
   
 */
