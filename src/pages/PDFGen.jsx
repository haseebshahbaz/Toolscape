import React from "react";
import { Container, Typography, Grid, Button } from "@mui/material";
import pdfGenerationBanner from "../assets/PDFGen.webp"; // Update with correct path
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
                src={pdfGenerationBanner}
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
              PDF Generation
            </Typography>
            <Typography
              variant="body1"
              style={{ marginBottom: "20px", color: "white" }}
            >
              Our AI-powered PDF Generation tool simplifies the process of
              creating professional documents. Whether you need to generate
              reports, invoices, brochures, or any other PDF file, this tool
              streamlines the process, saving you time and effort. You can
              effortlessly turn raw content into well-formatted, easy-to-read
              documents.
              <br />
              <br />
              AI PDF Generation is ideal for businesses, freelancers, and anyone
              looking to produce clean, organized documents. Instead of
              formatting every detail manually, let AI do the heavy lifting.
              This ensures that your documents are consistent, professional, and
              ready to share or print in just a few moments.
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
};

export default PDFGeneration;
