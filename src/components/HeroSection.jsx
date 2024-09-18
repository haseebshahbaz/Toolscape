import React from 'react';
import { Button, Container, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Hero from '../assets/new3.jpg';
import './Hero.css'; // For custom styles if needed

const HeroSection = () => {
  return (
    <div className="hero-container">


      <Container maxWidth="md" className="hero-content">
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 90 }}
        >
          <Typography 
            variant="h2" 
            className="hero-title"
            sx={{
              fontSize: { xs: '1.5rem', sm: '2.5rem', md: '3.5rem' }, 
              color: '#fcfcfc', 
              fontWeight: 'bold'
            }}>
            <span className="hero-title-animated">
              Explore the Future of AI Tools with
            </span>
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: '100vw' }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ type: 'spring', stiffness: 90, delay: 1.5 }}
        >
          <Typography 
            variant="h2" 
            component="span"
            sx={{
              fontSize: { xs: '2rem', sm: '3rem', md: '4rem' },
              color: '#f88b6f', 
              fontWeight: 'bold'
            }}>
            Toolscape
          </Typography>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <Typography 
            variant="body1" 
            sx={{ 
              fontSize: { xs: '0.9rem', sm: '1rem', md: '1.2rem' }, 
              color: '#fcfcfc', 
              marginTop: '20px'
            }}>
            Discover our AI-powered tools designed to transform the way you work. 
            Get started with innovative solutions that enhance productivity.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 1.5 }}
        >
          <Button 
            variant="contained" 
            sx={{ 
              marginTop: '30px', 
              backgroundColor: '#f65329', 
              color: '#fff', 
              '&:hover': { backgroundColor: '#ff7255' } 
            }}
          >
            Get Started
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
