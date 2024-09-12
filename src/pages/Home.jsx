import React from 'react';
import { Typography, List, ListItem, ListItemText, Link } from '@mui/material';

function Home() {
  return (
    <div>
      <Typography variant="h3" gutterBottom>
        Welcome to Creatonic
      </Typography>
      <Typography variant="body1" gutterBottom>
        Explore the different AI tools below:
      </Typography>
      <List>
        <ListItem>
          <Link href="/image-gen" underline="hover">
            <ListItemText primary="AI Image Generation" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/icon-gen" underline="hover">
            <ListItemText primary="Icon Generation" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/pdf-gen" underline="hover">
            <ListItemText primary="PDF Generation" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/video-gen" underline="hover">
            <ListItemText primary="Video Generation" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/bg-gen" underline="hover">
            <ListItemText primary="Background Generation" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/bg-remove" underline="hover">
            <ListItemText primary="Background Removal" />
          </Link>
        </ListItem>
        <ListItem>
          <Link href="/mockup-news" underline="hover">
            <ListItemText primary="Mockup News" />
          </Link>
        </ListItem>
      </List>
    </div>
  );
}

export default Home;
