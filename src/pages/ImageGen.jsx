import React from 'react';
import { Container, Typography, Grid, Button } from '@mui/material';
import imageGenerationBanner from '../assets/ImgGen.webp'; // Update with correct path
import './Tool.css'

const ImageGeneration = () => {
  return (
    <div className="image-generation-section" style={{ backgroundColor: '#192e3d', padding: '50px 0' }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Section: Image */}
          <Grid item xs={12} md={6}>
            <div className="image-wrapper">
              <img
                src={imageGenerationBanner}
                alt="AI Image Generation"
                className="image-generation-banner"
                style={{ width: '100%', borderRadius: '12px', boxShadow: '0px 8px 20px rgba(0, 0, 0, 0.1)' }}
              />
            </div>
          </Grid>

          {/* Right Section: Content */}
          <Grid item xs={12} md={6}>
            <Typography variant="h3" gutterBottom style={{ fontWeight: 'bold', color: 'white' }}>
              AI Image Generation
            </Typography>
            <Typography variant="body1" style={{ marginBottom: '20px', color: 'white' }}>
              Unlock the power of AI-driven image creation. Effortlessly generate high-quality, realistic images from
              simple text prompts. Bring your ideas to life with cutting-edge technology.
            </Typography>
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

export default ImageGeneration;
