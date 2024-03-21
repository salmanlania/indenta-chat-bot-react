import { useState, useEffect } from 'react';
import { AppBar, Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ControlPointSharpIcon from '@mui/icons-material/ControlPointSharp';

export default function Features() {
  const [selectedItem, setSelectedItem] = useState('Learn from chatbot assistant');
  const [scrollTriggered, setScrollTriggered] = useState(false);

  const handleListItemClick = (item) => {
    setSelectedItem(item);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScrollTriggered(true);
      } else {
        setScrollTriggered(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const featuresList = ['Learn from chatbot assistant', 'Communication with chatbot', 'E-book', 'Search by index or sections', 'Dummy feature'];
  const contentMap = {
    'Learn from chatbot assistant': 'Content for Learn from chatbot assistant',
    'Communication with chatbot': 'Content for Communication with chatbot',
    'E-book': 'Content for E-book',
    'Search by index or sections': 'Content for Search by index or sections',
    'Dummy feature': 'Content for Dummy feature',
  };

  return (
    <div id='features' style={{ paddingBottom: '1rem', maxWidth: '1500px', margin: '0 auto' }}>
      <Box display="flex" flexDirection={{ xs: 'column', md: 'row' }} alignItems="flex-start" sx={{ justifyContent: 'center' }}>
        <AppBar position='static' sx={{ background: 'rgba(29, 71, 69, 1)', width: { xs: '100%', md: '50%' }, boxShadow: 'none', padding: '5rem', transform: scrollTriggered ? 'translateX(0)' : 'translateX(-100%)', transition: 'transform 1s' }}>
          <Box>
            <Typography variant='h4' sx={{ fontSize: '1.9rem', color: 'white' }}>Features</Typography>
            <Divider />
            <List>
              {featuresList.map((item, index) => (
                <ListItem
                  key={index}
                  sx={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    cursor: 'pointer',
                    textDecoration: selectedItem === item ? 'underline' : 'none', // Conditionally apply underline
                  }}
                  onClick={() => handleListItemClick(item)}
                >
                  <CheckIcon sx={{ color: 'rgba(255, 180, 0, 1)' }} />
                  <ListItemText primary={item} sx={{ color: 'rgba(230, 230, 232, 1)', marginLeft: '0.5rem' }} />
                  <Box sx={{ marginRight: { xs: 0, md: '40%' }, marginLeft: { xs: '1.5rem', md: 0 } }}>
                    <ControlPointSharpIcon sx={{ color: 'rgba(255, 180, 0, 1)', cursor: 'pointer' }} />
                  </Box>
                </ListItem>
              ))}
            </List>
          </Box>
        </AppBar>
        <Box
          sx={{
            backgroundColor: 'white',
            boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)',
            overflow: 'hidden',
            height: '16rem',
            width: { xs: '100%', md: 'calc(50% - 10rem)' },
            margin: { xs: '2rem 0', md: '0 0 0 5rem' },
            padding: '2rem',
            position: 'relative',
            right: { xs: '0', md: '7rem' },
            top: { xs: '0', md: '6.5rem' },
            bottom: { xs: '15rem', md: '0' },
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            transform: scrollTriggered && selectedItem === 'Learn from chatbot assistant' ? 'scaleX(100%)' : 'scaleX(0)',
            transition: 'transform 1s',
            maxWidth: '1200px', // Added max-width for larger screens
            margin: '0 auto', // Centering the content horizontally
          }}
        >
          <Box p={2} textAlign="center">
            <Typography variant='body1' sx={{ fontSize: '1.5rem', fontWeight: 'bold' }}>{contentMap[selectedItem]}</Typography>
          </Box>
        </Box>
      </Box>
    </div>
  );
}
