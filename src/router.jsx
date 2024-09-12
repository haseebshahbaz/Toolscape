import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import ImageGen from './pages/ImageGen';
import IconGen from './pages/IconGen';
import PDFGen from './pages/PDFGen';
import VideoGen from './pages/VideoGen';
import BgGen from './pages/BgGen';
import BgRemove from './pages/BgRemove';
import MockupNews from './pages/MockupNews';

function AppRouter() {
  return (
    <Router>
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
    </Router>
  );
}

export default AppRouter;
