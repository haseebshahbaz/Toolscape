import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Button, Menu, MenuItem, Typography, useMediaQuery, useTheme } from '@mui/material';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import ImageIcon from '@mui/icons-material/Image';
import IconGenIcon from '@mui/icons-material/Category';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BackgroundImageIcon from '@mui/icons-material/Wallpaper';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import logo from '../assets/logo3.png'; // Adjust the path to your logo image

const Navbar = () => {
  const [anchorEl, setAnchorEl] = useState(null);
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const handleMenuClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  return (
    <AppBar position="sticky" style={{ backgroundColor: '#192e3d' }}>
      <Toolbar>
        {/* Logo */}
        <IconButton
          edge="start"
          color="inherit"
          aria-label="logo"
          sx={{ mr: 2 }}
          component={Link}
          to="/"
        >
          <img src={logo} alt="Toolscape Logo" style={{ height: 40 }} />
        </IconButton>

        <Typography variant="h6" style={{ flexGrow: 1 }}></Typography> {/* Empty to push buttons to the right */}

        {/* Conditionally render based on screen size */}
        {!isMobile ? (
          // Display buttons for large screens
          <div style={{ display: 'flex', justifyContent: "center" , gap: '15px' }}>
            <Button color="inherit" startIcon={<ImageIcon />} component={Link} to="/image-gen" sx={{ backgroundColor: '#f65329', color: '#fff', '&:hover': { backgroundColor: 'white', color: '#f65329' } }}>
              Image Gen
            </Button>
            <Button color="inherit" startIcon={<IconGenIcon />} component={Link} to="/icon-gen" sx={{ backgroundColor: '#f65329', color: '#fff', '&:hover': { backgroundColor: 'white', color: '#f65329' } }}>
              Icon Gen
            </Button>
            <Button color="inherit" startIcon={<PictureAsPdfIcon />} component={Link} to="/pdf-gen" sx={{ backgroundColor: '#f65329', color: '#fff', '&:hover': { backgroundColor: 'white', color: '#f65329' } }}>
              PDF Gen
            </Button>
            <Button color="inherit" startIcon={<VideoLibraryIcon />} component={Link} to="/video-gen" sx={{ backgroundColor: '#f65329', color: '#fff', '&:hover': { backgroundColor: 'white', color: '#f65329' } }}>
              Video Gen
            </Button>
            <Button color="inherit" startIcon={<BackgroundImageIcon />} component={Link} to="/bg-gen" sx={{ backgroundColor: '#f65329', color: '#fff', '&:hover': { backgroundColor: 'white', color: '#f65329' } }}>
              BG Gen
            </Button>
            <Button color="inherit" startIcon={<RemoveCircleOutlineIcon />} component={Link} to="/bg-remove" sx={{ backgroundColor: '#f65329', color: '#fff', '&:hover': { backgroundColor: 'white', color: '#f65329' } }}>
              BG Remove
            </Button>
            <Button color="inherit" startIcon={<NewspaperIcon />} component={Link} to="/mockup-news" sx={{ backgroundColor: '#f65329', color: '#fff', '&:hover': { backgroundColor: 'white', color: '#f65329' } }}>
              Mockup News
            </Button>
          </div>
        ) : (
          // Display dropdown for small screens
          <>
            <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleMenuClick}>
              <MenuIcon />
            </IconButton>
            <Menu anchorEl={anchorEl} open={Boolean(anchorEl)} onClose={handleMenuClose}>
              <MenuItem onClick={handleMenuClose} component={Link} to="/image-gen">
                <ImageIcon sx={{ mr: 1 }} /> Image Gen
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/icon-gen">
                <IconGenIcon sx={{ mr: 1 }} /> Icon Gen
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/pdf-gen">
                <PictureAsPdfIcon sx={{ mr: 1 }} /> PDF Gen
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/video-gen">
                <VideoLibraryIcon sx={{ mr: 1 }} /> Video Gen
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/bg-gen">
                <BackgroundImageIcon sx={{ mr: 1 }} /> Background Gen
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/bg-remove">
                <RemoveCircleOutlineIcon sx={{ mr: 1 }} /> Background Remove
              </MenuItem>
              <MenuItem onClick={handleMenuClose} component={Link} to="/mockup-news">
                <NewspaperIcon sx={{ mr: 1 }} /> Mockup News
              </MenuItem>
            </Menu>
          </>
        )}
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
