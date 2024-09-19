import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import mockupGenerationBanner from '../assets/BGGen.webp'; // Update with correct path
import './Tool.css'

const MockupGeneration = () => {
  return (
    <div className="image-generation-section" style={{ backgroundColor: '#192e3d', padding: '50px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Section: Image */}
          <Grid item xs={12} md={6}>
            <div className="image-wrapper">
              <img
                src={mockupGenerationBanner}
                alt="AI Icon Generation"
                className="image-generation-banner"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
          </Grid>

          {/* Right Section: Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: 'white' }}>
            AI Background Generation
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '20px', color: 'white' }}>
            Quickly generate custom backgrounds with our AI background creation tool. Whether you need a new backdrop for your website, app, or presentation, this tool offers a range of styles and themes to suit your needs.            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: '#f65329',
                color: '#fff',
                padding: '10px 20px',
                borderRadius: '8px',
                fontSize: '16px',
                boxShadow: '0px 4px 10px rgba(0, 0, 0, 0.1)',
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MockupGeneration;
