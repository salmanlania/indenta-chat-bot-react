import React from 'react';
import { AppBar, Box, Toolbar, Typography, Button, useTheme } from '@mui/material';
import Navbar from '../../screens/navbar/Navbar';
import headerBg from './assests/headerBg.png';
import MyButton from '../MyButton';

const Home = () => {
  const theme = useTheme();

  return (
    <div sx={{ flexGrow: 1 }}>
      <AppBar position="static" sx={{ backgroundImage: `url(${headerBg})`, backgroundSize: 'cover', height: '42rem', display: 'flex', flexDirection: 'column' }}>
        <Toolbar sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Navbar />
        </Toolbar>
        <Box sx={{
          padding: 2,
          textAlign: 'left',
          alignItems: 'flex-end',
          marginRight: '8rem',
          float: 'right',
          marginLeft: 'auto',
          marginTop: 'auto',
          marginBottom: 'auto',
          gap: '2rem',
          animation: 'moveFromLeft 1s forwards', // Apply animation directly using sx prop
          '@keyframes moveFromLeft': { // Define keyframes inline
            from: {
              transform: 'translateX(-100%)',
              opacity: 0
            },
            to: {
              transform: 'translateX(0)',
              opacity: 1
            }
          }
        }}>
          <Typography variant="body1" sx={{ fontSize: '1.25rem', marginBottom: '1rem', fontWeight: 'bold', [theme.breakpoints.down('md')]: { fontSize: '1rem' } }}>
            WE'RE TAX CONSULTANT
          </Typography>
          <Typography variant="h4" sx={{borderLeft : '2px solid #FFB400' , paddingLeft : '1rem' , fontSize: '3.25rem', marginBottom: '0.5rem', [theme.breakpoints.down('md')]: { fontSize: '2.5rem' } }}>
            Gain tax knowledge, <br /> from your law assistant!
          </Typography>
          <Typography variant="body2" sx={{ fontSize: '1.125rem', marginBottom: '1rem', [theme.breakpoints.down('md')]: { fontSize: '1rem' } }}>
            Lorem ipsum dolor sit amet consectetur.
          </Typography>
          <MyButton>Get Started</MyButton>
        </Box>
      </AppBar>
    </div>
  );
};

export default Home;
