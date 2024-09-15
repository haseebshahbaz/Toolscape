import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import ImageGen from './pages/ImageGen';
import BgGen from './pages/BgGen';
import IconGen from './pages/IconGen';
import BgRemove from './pages/BgRemove';
import MockupNews from './pages/MockupNews';
import PDFGen from './pages/PDFGen';
import VideoGen from './pages/VideoGen';
import Home from './pages/Home';


function App() {
  return (
    <>
      <Navbar />
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

    </>
  );
}

export default App;
