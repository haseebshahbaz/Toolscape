import React from 'react';
import { Container, Grid, Typography, Box } from '@mui/material';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';

const benefits = [
  {
    icon: <AccessTimeIcon style={{ fontSize: '48px', color: '#f65329' }} />,
    title: 'Time-Saving',
    description: 'Automate tasks and reduce manual work with AI-powered tools that save you hours of time.',
  },
  {
    icon: <AttachMoneyIcon style={{ fontSize: '48px', color: '#f65329' }} />,
    title: 'Cost-Effective',
    description: 'Our tools help you get more done with fewer resources, reducing operational costs significantly.',
  },
  {
    icon: <ThumbUpIcon style={{ fontSize: '48px', color: '#f65329' }} />,
    title: 'User-Friendly',
    description: 'Our tools are designed with simplicity in mind, making them easy to use for all skill levels.',
  },
];

const Benefits = () => {
  return (
    <Container maxWidth="lg" style={{ backgroundColor: '#192e3d' , color: 'white', marginTop: '20px', marginBottom: '50px' }}>
      <Typography variant="h4" align="center" gutterBottom style={{ fontWeight: 'bold', marginBottom: '20px', color: 'white' }}>
        Why Toolscape?
      </Typography>
      <Grid container spacing={4} justifyContent="center">
        {benefits.map((benefit, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Box textAlign="center">
              {benefit.icon}
              <Typography variant="h6" style={{ marginTop: '10px' }}>
                {benefit.title}
              </Typography>
              <Typography variant="body2" style={{ marginTop: '10px', marginBottom: '20px'}}>
                {benefit.description}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Benefits;
