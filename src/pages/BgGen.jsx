import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import mockupGenerationBanner from "../assets/BGGen.webp"; // Update with correct path
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
              AI Background Generation
            </Typography>
            <Typography
              variant="body1"
              style={{ marginBottom: "20px", color: "white" }}
            >
              Enhance your designs with AI Background Generation, a tool that
              allows you to create visually stunning backgrounds for any
              project. From websites to presentations, this tool generates
              customized backgrounds that align with your theme and style
              preferences. Whether you need abstract designs, textures, or
              scenic visuals, AI makes the process seamless.
              <br />
              <br />
              Backgrounds play a crucial role in making your content visually
              appealing, and AI Background Generation ensures that you always
              have the perfect backdrop. Instead of spending hours searching for
              the right image, you can generate one that’s tailored to your
              exact specifications in seconds.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MockupGeneration;
