import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import iconGenerationBanner from "../assets/image.png"; // Update with correct path
import "./Tool.css";

const IconGeneration = () => {
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
                src={iconGenerationBanner}
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
              AI Icon Generation
            </Typography>
            <Typography
              variant="body1"
              style={{ marginBottom: "20px", color: "white" }}
            >
              Easily create custom icons for any project with AI-powered icon
              generation. Perfect for websites, apps, or branding, this tool
              offers a quick and efficient way to generate unique and creative
              icons.{" "}
            </Typography>
            <Button
              variant="contained"
              style={{
                backgroundColor: "#f65329",
                color: "#fff",
                padding: "10px 20px",
                borderRadius: "8px",
                fontSize: "16px",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
              }}
            >
              Get Started
            </Button>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default IconGeneration;
