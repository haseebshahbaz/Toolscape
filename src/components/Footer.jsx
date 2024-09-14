import React from 'react';
import { Container, Typography, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer = () => {
  return (
    <div style={{ backgroundColor: '#192e3d', color: '#fcfcfc', padding: '20px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={2}>
          <Grid item xs={12} sm={6}>
            <Typography variant="body1">© 2024 Toolscape. All Rights Reserved.</Typography>
          </Grid>
          <Grid item xs={12} sm={6} style={{ textAlign: 'right' }}>
            <IconButton style={{ color: '#fcfcfc' }}>
              <FacebookIcon />
            </IconButton>
            <IconButton style={{ color: '#fcfcfc' }}>
              <TwitterIcon />
            </IconButton>
            <IconButton style={{ color: '#fcfcfc' }}>
              <LinkedInIcon />
            </IconButton>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default Footer;
