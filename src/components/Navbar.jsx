import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, IconButton, Menu, MenuItem, Button, Box } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

import { Link } from 'react-router-dom'; // If you're using routing

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="static" sx={{ backgroundColor: '#1a4f64' }}>
      <Toolbar>
        <Typography
          variant="h6"
          component="div"
          sx={{ flexGrow: 1, fontWeight: 'bold', color: '#fcfcfc', display: 'flex', alignItems: 'center' }}
        >
          <img src="../assets/logo.png" alt="Logo" style={{ width: '40px', marginRight: '10px' }} /> {/* Use your logo here */}
          Toolscape
        </Typography>

        {isMobile ? (
          <>
            <IconButton
              edge="start"
              color="inherit"
              aria-label="menu"
              onClick={handleMenu}
            >
              <MenuIcon />
            </IconButton>
            <Menu
              anchorEl={anchorEl}
              open={Boolean(anchorEl)}
              onClose={handleClose}
              sx={{ display: { xs: 'block', md: 'none' } }}
            >
              <MenuItem onClick={handleClose} component={Link} to="/">
                Home
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/features">
                Features
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/pricing">
                Pricing
              </MenuItem>
              <MenuItem onClick={handleClose} component={Link} to="/contact">
                Contact
              </MenuItem>
            </Menu>
          </>
        ) : (
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <Button component={Link} to="/" sx={{ color: '#fcfcfc' }}>
              Home
            </Button>
            <Button component={Link} to="/features" sx={{ color: '#fcfcfc' }}>
              Features
            </Button>
            <Button component={Link} to="/pricing" sx={{ color: '#fcfcfc' }}>
              Pricing
            </Button>
            <Button component={Link} to="/contact" sx={{ color: '#fcfcfc' }}>
              Contact
            </Button>
          </Box>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
