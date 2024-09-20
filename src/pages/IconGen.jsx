import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import iconGenerationBanner from "../assets/IconGen.webp"; // Update with correct path
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
              Creating icons that perfectly match your project’s style and
              requirements has never been easier, thanks to AI Icon Generation.
              This tool lets you generate fully customized icons from scratch,
              ensuring that your branding remains cohesive and unique. Whether
              you need icons for a mobile app, a website, or a product design,
              AI helps you get exactly what you need in a fraction of the time.
              <br />
              <br />
              By streamlining the creative process, AI Icon Generation removes
              the frustration of manually designing or searching for the right
              icon. You provide the design parameters, and AI delivers polished,
              scalable icons tailored to your exact specifications. Perfect for
              both seasoned designers and beginners, this tool saves time while
              ensuring top-notch quality.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default IconGeneration;
