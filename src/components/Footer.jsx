import React from 'react';
import { Container, Typography, Grid, Link, Box, IconButton } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <Box sx={{ backgroundColor: '#192e3d', color: '#fcfcfc', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2} alignItems="center">
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">
              © 2024 Toolscape. All Rights Reserved.
            </Typography>
          </Grid>
          <Grid item xs={12} sm={6} sx={{ textAlign: { xs: 'left', sm: 'right' } }}>
            <Typography variant="body1" sx={{ display: 'inline-block' }}>
              Developed by Muhammad Haseeb
            </Typography>
            <Box sx={{ display: 'inline-flex', ml: { xs: 0, sm: 1 }, mt: { xs: 1, sm: 0 } }}>
              <Link
                href="https://github.com/haseebshahbaz"
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{ color: '#f65329', mr: 2 }}
              >
                <IconButton sx={{ color: '#fcfcfc' }}>
                  <GitHubIcon />
                </IconButton>
              </Link>
              <Link
                href="https://www.linkedin.com/in/mdhaseeb07/"
                target="_blank"
                rel="noopener"
                underline="none"
                sx={{ color: '#f65329' }}
              >
                <IconButton sx={{ color: '#fcfcfc' }}>
                  <LinkedInIcon />
                </IconButton>
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default Footer;
