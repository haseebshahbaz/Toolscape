import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import imageGenerationBanner from "../assets/ImgGen.webp"; // Update with correct path
import "./Tool.css";

const ImageGeneration = () => {
  return (
    <div
      className="image-generation-section"
      style={{ backgroundColor: "#192e3d", padding: "50px 0" }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          {/* Left Section: Image */}
          <Grid item xs={12} md={6}>
            <div className="image-wrapper">
              <img
                src={imageGenerationBanner}
                alt="AI Image Generation"
                className="image-generation-banner"
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.1)",
                }}
              />
            </div>
          </Grid>

          {/* Right Section: Content */}
          <Grid item xs={12} md={6}>
            <Typography
              variant="h3"
              gutterBottom
              style={{ fontWeight: "bold", color: "white" }}
            >
              AI Image Generation
            </Typography>
            <Typography
              variant="body1"
              style={{ marginBottom: "20px", color: "white" }}
            >
              AI Image Generation is revolutionizing the way we create visuals.
              Instead of relying on manual graphic design, this tool allows
              users to turn simple text inputs into high-quality images in
              seconds. Whether you're designing for social media, product
              promotions, or creative projects, this tool makes the process
              quick and efficient. You no longer need advanced design
              skills—just input your vision in words, and AI handles the rest.
              <br />
              <br />
              This technology is perfect for businesses and individuals looking
              to enhance their content with custom visuals. From concept art to
              marketing images, AI Image Generation provides endless
              possibilities. With a user-friendly interface, it’s now easier
              than ever to produce beautiful, professional-grade images that
              capture your unique ideas.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default ImageGeneration;
