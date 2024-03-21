import React from 'react';
import { AppBar, Box, Toolbar, Typography, useTheme, Paper } from '@mui/material';
import Navbar from '../navbar/Navbar';
import headerBg from './assests/headerBg.png';
import MyButton from '../../screens/MyButton';
import HeaderCard from '../../screens/HeaderCard';
import First from './assests/first.png'
import Second from './assests/second.png'
import Features from '../../screens/Features/Features';
import About from '../../screens/About/About';
import Footer from '../Footer/Footer';
import ContactForm from '../../screens/Contact/Contact';

export default function HomePage() {
  const theme = useTheme();
  const headerDetailOne = "About book ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero"
  const headerDetailTwo = "About chatbot ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero.Lorem ipsum dolor amet, consectetur adipiscing elit. Faucibus in libero"

  return (
    <div style={{ gap: '1rem' , background: 'rgba(255, 255, 255, 1)'}}>

      {/* HomePage Header Start*/}

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
            <Typography variant="h4" sx={{ borderLeft: '2px solid #FFB400', paddingLeft: '1rem', fontSize: '3.25rem', marginBottom: '0.5rem', [theme.breakpoints.down('md')]: { fontSize: '2.5rem' } }}>
              Gain tax knowledge, <br /> from your law assistant!
            </Typography>
            <Typography variant="body2" sx={{ fontSize: '1.125rem', marginBottom: '1rem', [theme.breakpoints.down('md')]: { fontSize: '1rem' } }}>
              Lorem ipsum dolor sit amet consectetur.
            </Typography>
            <MyButton button={"Get Started"} />
          </Box>
        </AppBar>
      </div>

      {/* HomePage Header End*/}

      {/* HomePage Header Card Start*/}

      <Box
        sx={{
          display: 'flex',
          justifyContent: 'space-around',
          alignItems: 'center',
          paddingTop: '8px',
          p: 2,
          background: 'rgba(255, 255, 255, 1)',
          position: 'relative',
          bottom: '2rem',
          borderRadius: '2rem',
          border: '1px solid rgba(29, 71, 69, 1)',
          width: '100%',
          maxWidth: '80rem',
          margin: 'auto',
          flexDirection: { xs: 'column', sm: 'row' },
        }}
      >
        <HeaderCard pic={First} title={'Book'} detail={headerDetailOne} />
        <HeaderCard pic={Second} title={'ChatBot'} detail={headerDetailTwo} />
      </Box>

      {/* HomePage Header Card Start*/}

      {/* Features Start */}

        <Features />

      {/* Features End */}

      {/* About Start */}

        <About />
        <ContactForm />
      {/* About End */}
      
      {/* Footer Start */}

        <Footer />

      {/* Footer End */}

    </div>
  )
}
