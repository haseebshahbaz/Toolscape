import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import mockupGenerationBanner from "../assets/MockGen.webp"; // Update with correct path
import "./Tool.css";

const MockupGeneration = () => {
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
                src={mockupGenerationBanner}
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
              AI Mock Up Generation
            </Typography>
            <Typography
              variant="body1"
              style={{ marginBottom: "20px", color: "white" }}
            >
              Mockup News Generation is the go-to tool for those looking to
              quickly produce professional mockups of news articles, blogs, or
              media content. Whether you’re showcasing a website design or
              building a content portfolio, this AI-powered tool helps you
              generate realistic, polished mockups with just a few inputs.
              <br />
              <br />
              Ideal for web designers, developers, and digital agencies, Mockup
              News Generation saves time by automating the process of creating
              convincing news layouts. Customize headlines, text, and imagery
              with ease, ensuring your mockups look professional and ready for
              presentation.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MockupGeneration;
