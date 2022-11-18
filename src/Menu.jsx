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
import Container from '@mui/material/Container'

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
       onClick={handleMenuClose}
       >         
        <IconButton
          size="large"
          aria-label="account of current user"
          aria-controls="primary-search-account-menu"
          aria-haspopup="true"
          color="inherit"
          href="../EHS"
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
    <Container sx={{ flexGrow: 1 }}>
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
              href="../EHS"
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
    </Container>
  );
}