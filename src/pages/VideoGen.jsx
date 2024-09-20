import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import videoGenerationBanner from "../assets/VideoGen.webp"; // Update with correct path
import "./Tool.css";

const PDFGeneration = () => {
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
                src={videoGenerationBanner}
                alt="AI Icon Generation"
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
              AI Video Generation
            </Typography>
            <Typography
              variant="body1"
              style={{ marginBottom: "20px", color: "white" }}
            >
              In an age where video content dominates, AI Video Generation
              brings cutting-edge technology to content creators and marketers.
              This tool automates the production of dynamic, engaging videos
              with minimal input. Whether you need promotional videos, explainer
              clips, or social media content, AI simplifies the entire process,
              from script generation to video output.
              <br />
              <br />
              By leveraging AI Video Generation, businesses and individuals can
              quickly create eye-catching videos without the need for advanced
              editing software. Simply provide a brief, and the AI tool
              assembles the video, allowing you to focus more on your message
              and less on the technical aspects of production.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PDFGeneration;
