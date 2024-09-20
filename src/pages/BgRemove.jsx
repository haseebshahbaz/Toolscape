import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import mockupGenerationBanner from "../assets/BGRemover.webp"; // Update with correct path
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
              AI Background Removal
            </Typography>
            <Typography
              variant="body1"
              style={{ marginBottom: "20px", color: "white" }}
            >
              AI Background Removal is an essential tool for anyone looking to
              isolate subjects from their background. With this tool, removing
              the background from any image becomes effortless and precise. This
              is especially useful for e-commerce businesses, graphic designers,
              and content creators who need clean, professional-looking images.
              <br />
              <br />
              The AI ensures accuracy, handling even the most intricate edges
              and details with ease. Whether you’re editing product images or
              creating marketing materials, Background Removal makes it easy to
              achieve a polished, professional look without needing advanced
              photo-editing skills.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default MockupGeneration;
