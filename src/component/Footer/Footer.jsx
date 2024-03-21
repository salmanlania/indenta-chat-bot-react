import React from 'react';
import { Grid, Typography, IconButton } from '@mui/material';
import { Facebook, Twitter, Instagram } from '@mui/icons-material';

const Footer = () => {
  return (
    <footer style={{background: '#184341' , color : 'white' , padding : '1rem'}}>
      <Grid container spacing={3}>
        {/* First Column */}
        <Grid item xs={12} sm={4}>
          <Grid container direction="column">
            <Grid item>
              {/* Your logo */}
              <Typography variant="h6">Your Logo</Typography>
            </Grid>
            <Grid item>
              {/* Text */}
              <Typography variant="body1">Some text about your company</Typography>
            </Grid>
            <Grid item>
              {/* Social Icons */}
              <IconButton aria-label="Facebook" sx={{background: 'FFB400'}}>
                <Facebook sx={{color : 'white'}}/>
              </IconButton>
              <IconButton aria-label="Twitter" sx={{background: 'FFB400'}}>
                <Twitter sx={{color : 'white'}}/>
              </IconButton>
              <IconButton aria-label="Instagram" sx={{background: 'FFB400'}}>
                <Instagram sx={{color : 'white'}}/>
              </IconButton>
            </Grid>
          </Grid>
        </Grid>

        {/* Second Column */}
        <Grid item xs={12} sm={4}>
          <Grid container direction="column">
            <Grid item>
              {/* Tabs */}
              <Typography variant="h6">Navigation</Typography>
            </Grid>
            <Grid item>
              <Typography variant="body1">Home</Typography>
              <Typography variant="body1">About</Typography>
              <Typography variant="body1">Features</Typography>
              <Typography variant="body1">Contact Us</Typography>
            </Grid>
          </Grid>
        </Grid>

        {/* Third Column */}
        <Grid item xs={12} sm={4}>
          <Grid container direction="column">
            <Grid item sx={{marginBottom : '1.3rem'}}>
              {/* Address */}
              <Typography variant="h5" sx={{color : 'yellow'}}>Contact</Typography>
            </Grid>
            <Grid item sx={{display : 'flex' , gap : '1rem' , flexDirection : 'column'}}>
              <Typography variant="body1">Address: 21-C, 5th Lane, Zamzama Commercial, Phase 5, DHA, Karachi,  Pakistan</Typography>
              <Typography variant="body1">info@indenta-technologies.com</Typography>
              <Typography variant="body1">+92 21 111 124 338</Typography>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </footer>
  );
};

export default Footer;
