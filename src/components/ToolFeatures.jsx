import React, { forwardRef } from 'react';
import { Grid, Typography, Card, CardContent, Container, Button } from '@mui/material';
import ImageIcon from '@mui/icons-material/Image';
import IconGenIcon from '@mui/icons-material/Category';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import BackgroundImageIcon from '@mui/icons-material/Wallpaper';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { Link } from 'react-router-dom';
import './Features.css'; // Import CSS file for hover effects

const ToolFeatures = forwardRef((props, ref) => {
  const features = [
    {
      title: 'Image Generation',
      description: 'Generate high-quality images from text inputs.',
      icon: <ImageIcon fontSize="large" sx={{ color: '#f65329' }} />,
      link: "/image-gen"
    },
    {
      title: 'Icon Generation',
      description: 'Create custom icons based on your project needs.',
      icon: <IconGenIcon fontSize="large" sx={{ color: '#f88b6f' }} />,
      link: "/icon-gen"
    },
    {
      title: 'PDF Generation',
      description: 'Generate PDFs from various content sources easily.',
      icon: <PictureAsPdfIcon fontSize="large" sx={{ color: '#f65329' }} />,
      link: "/pdf-gen"
    },
    {
      title: 'Video Generation',
      description: 'Produce videos with AI-driven automation.',
      icon: <VideoLibraryIcon fontSize="large" sx={{ color: '#f88b6f' }} />,
      link: "/video-gen"
    },
    {
      title: 'Background Generation',
      description: 'Automatically generate backgrounds for your projects.',
      icon: <BackgroundImageIcon fontSize="large" sx={{ color: '#f65329' }} />,
      link: "/bg-gen"
    },
    {
      title: 'Background Removal',
      description: 'Easily remove backgrounds from images.',
      icon: <RemoveCircleOutlineIcon fontSize="large" sx={{ color: '#f88b6f' }} />,
      link: "/bg-remove"
    },
    {
      title: 'Mockup News',
      description: 'Generate mockup news layouts for projects.',
      icon: <NewspaperIcon fontSize="large" sx={{ color: '#f65329' }} />,
      link: "/mockup-news"
    },
  ];

  return (
    <Container ref={ref} maxWidth="lg" sx={{ backgroundColor: '#192e3d', color: 'white', mt: 4, mb: 6 }}>
      <Typography variant="h4" align="center" sx={{ fontWeight: 'bold', mb: 4 }}>
        Tools with Features
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {features.map((feature, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <Card
              className="card-container"
              sx={{
                height: '100%',
                borderRadius: 2,
                boxShadow: 1,
                textAlign: 'center',
                transition: 'transform 0.3s',
                '&:hover': {
                  transform: 'scale(1.05)',
                  boxShadow: 3,
                },
              }}
            >
              <CardContent>
                <div style={{ marginBottom: '15px' }}>{feature.icon}</div>
                <Typography variant="h6" sx={{ fontWeight: 'bold', color: '#192e3d' }}>
                  {feature.title}
                </Typography>
                <Typography variant="body2" sx={{ color: '#192e3d', mt: 1 }}>
                  {feature.description}
                </Typography>
                <Link to={feature.link} style={{ textDecoration: 'none' }}>
                  <Button 
                    variant="contained" 
                    sx={{ mt: 2, backgroundColor: '#f65329', color: '#fff', '&:hover': { backgroundColor: '#ff7255' } }}
                  >
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
});

export default ToolFeatures;
