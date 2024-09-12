import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AppBar, Toolbar, Typography, Button, Container } from '@mui/material';
import Home from './pages/Home';
import ImageGen from './pages/ImageGen';
import IconGen from './pages/IconGen';
import PDFGen from './pages/PDFGen';
import VideoGen from './pages/VideoGen';
import BgGen from './pages/BgGen';
import BgRemove from './pages/BgRemove';
import MockupNews from './pages/MockupNews';
import './App.css';
import Navbar from './components/Navbar';

function App() {
  return (
    <Router>
<Navbar />

      <Container>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/image-gen" element={<ImageGen />} />
          <Route path="/icon-gen" element={<IconGen />} />
          <Route path="/pdf-gen" element={<PDFGen />} />
          <Route path="/video-gen" element={<VideoGen />} />
          <Route path="/bg-gen" element={<BgGen />} />
          <Route path="/bg-remove" element={<BgRemove />} />
          <Route path="/mockup-news" element={<MockupNews />} />
        </Routes>
      </Container>
    </Router>
  );
}

export default App;
