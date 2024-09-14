import React from 'react';
import { Grid, Typography, Card, CardContent, Container } from '@mui/material';
import { Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import IconGenIcon from '@mui/icons-material/Category';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BackgroundImageIcon from '@mui/icons-material/Wallpaper';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from 'react-router-dom';

const ToolFeatures = () => {
  const features = [
    {
      title: 'Image Generation',
      description: 'Generate high-quality images from text inputs.',
      icon: <ImageIcon fontSize="large" style={{ color: '#f65329' }} />,
    },
    {
      title: 'Icon Generation',
      description: 'Create custom icons based on your project needs.',
      icon: <IconGenIcon fontSize="large" style={{ color: '#f88b6f' }} />,
    },
    {
      title: 'PDF Generation',
      description: 'Generate PDFs from various content sources easily.',
      icon: <PictureAsPdfIcon fontSize="large" style={{ color: '#f65329' }} />,
    },
    {
      title: 'Video Generation',
      description: 'Produce videos with AI-driven automation.',
      icon: <VideoLibraryIcon fontSize="large" style={{ color: '#f88b6f' }} />,
    },
    {
      title: 'Background Generation',
      description: 'Automatically generate backgrounds for your projects.',
      icon: <BackgroundImageIcon fontSize="large" style={{ color: '#f65329' }} />,
    },
    {
      title: 'Background Removal',
      description: 'Easily remove backgrounds from images.',
      icon: <RemoveCircleOutlineIcon fontSize="large" style={{ color: '#f88b6f' }} />,
    },
    {
      title: 'Mockup News',
      description: 'Generate mockup news layouts for projects.',
      icon: <NewspaperIcon fontSize="large" style={{ color: '#f65329' }} />,
    },
  ];

  return (
    <Container maxWidth="lg" style={{ marginTop: '50px', marginBottom: '50px' }}>
      <Typography variant="h4" align="center" style={{ fontWeight: 'bold', marginBottom: '20px', color: '#192e3d' }}>
        Tool Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
      {features.map((feature, index) => (
  <Grid item xs={12} sm={6} md={3} key={index}>
    <Card
      style={{
        height: '100%',
        backgroundColor: '#fcfcfc',
        borderRadius: '8px',
        boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.1)',
        textAlign: 'center',
      }}
    >
      <CardContent>
        <div style={{ marginBottom: '15px' }}>{feature.icon}</div>
        <Typography variant="h6" style={{ fontWeight: 'bold', color: '#192e3d' }}>
          {feature.title}
        </Typography>
        <Typography variant="body2" style={{ color: '#192e3d', marginTop: '10px' }}>
          {feature.description}
        </Typography>
        <Link to={`/tools/${feature.title.toLowerCase().replace(/\s+/g, '-')}`} style={{ textDecoration: 'none' }}>
          <Button variant="contained" style={{ marginTop: '20px', backgroundColor: '#f65329', color: '#fff' }}>
            Learn More
          </Button>
        </Link>
      </CardContent>
    </Card>
  </Grid>
))}
      </Grid>
    </Container>
  );
};

export default ToolFeatures;
