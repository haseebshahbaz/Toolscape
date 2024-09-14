import React from 'react';
import { Button, Container, Grid, Typography } from '@mui/material';
import { motion } from 'framer-motion';
import Hero from '../assets/new2.jpg'
import './Hero.css'; // For custom styles if needed

const HeroSection = () => {
  return (
    <div className="hero-container">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <img src={Hero} alt="Hero" className="hero-image" />
      </motion.div>

      <Container maxWidth="md" className="hero-content">
        <motion.div
          initial={{ x: '-100vw' }}
          animate={{ x: 0 }}
          transition={{ type: 'spring', stiffness: 120 }}
        >
          <Typography variant="h2" style={{ color: '#fcfcfc', fontWeight: 'bold' }}>
            <span className="hero-title-animated">Explore the Future of AI Tools with</span>
          </Typography>
        </motion.div>
        <motion.div
  initial={{ opacity: 0, x: '100vw' }}
  animate={{ opacity: 1, x: 0 }}
  transition={{ type: 'spring', stiffness: 120, delay: 4 }}>
  <Typography variant="h2" component="span" style={{ color: '#f88b6f', fontWeight: 'bold' }}>
    Toolscape
  </Typography>
</motion.div>


        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 1.5 }}
        >
          <Typography variant="body1" style={{ color: '#fcfcfc', marginTop: '20px' }}>
            Discover our AI-powered tools designed to transform the way you work. Get started with innovative solutions that enhance productivity.
          </Typography>
        </motion.div>

        <motion.div
          initial={{ y: '100vh' }}
          animate={{ y: 0 }}
          transition={{ type: 'spring', stiffness: 80, delay: 1.5 }}
        >
          <Button variant="contained" style={{ marginTop: '30px', backgroundColor: '#f65329', color: '#fff' }}>
            Get Started
          </Button>
        </motion.div>
      </Container>
    </div>
  );
};

export default HeroSection;
