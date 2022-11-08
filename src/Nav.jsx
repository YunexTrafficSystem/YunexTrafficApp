import { useState } from 'react'
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import { Menu as MenuIcon } from "@mui/icons-material";
import {
  IconButton,
  Typography,
  Menu,
  Container,
  Button,
  MenuItem,
  Link
} from "@mui/material";
import { Router, Routes, Route, Link as RouterLink } from 'react-router-dom'

const pages = [ 
  { 
    title:"Dashboard", 
    ref: "/"
  },
  { 
    title: "Login", 
    ref: "/Login" 
  },
  { 
    title: "Inicio", 
    ref: "/SignUp" 
  }
]

const ResponsiveAppBar = () => {
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          
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

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left"
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left"
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" }
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page.title} onClick={handleCloseNavMenu}>
                  <Typography 
                    textAlign="center"
                    component={Button}
                    href={page.ref}
                  >
                    {page.title}
                  </Typography>
                </MenuItem>
              ))}
            </Menu>
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
          <Box sx={{ flexGrow: 1, display: { md: 'flex', flexDirection:'row-reverse', xs: 'none'}}}>
            {pages.map((page) => (
              <Button
                key={page.title}
                sx={{ my: 1, color: "white", display: "block" }}
                href={page.ref}
              >
                {page.title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
export default ResponsiveAppBar;


