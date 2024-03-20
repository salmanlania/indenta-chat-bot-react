import React, { useState } from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, Box, useMediaQuery, Drawer, List, ListItem, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import MyButton from '../MyButton';

export default function Navbar() {
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width:600px)');
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const [anchorEl, setAnchorEl] = React.useState(null);

    const handleToggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleMenuClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleMenuClose = () => {
        setAnchorEl(null);
    };

    const handleMenuItemClick = (action) => {
        switch (action) {
            case 'Home':
                navigate('/');
                break;
            case 'Book':
                navigate('/book');
                break;
            case 'About':
                navigate('/about');
                console.log('About clicked');
                break;
            case 'Logout':
                navigate('/login');
                break;
            default:
                console.log(`Unknown action: ${action}`);
        }
        handleMenuClose();
    };


    const handleLogout = () => {
        Swal.fire({
            title: 'Logout Successful!',
            text: 'You have been successfully logged out.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/login')
        })
    };

    const sxStyles = {
        myButton: {
          color: 'white',
          marginRight: '20px',
          '&:hover': {
            textDecoration: 'underline',
          },
        },
      };      

    return (
        <AppBar position="static" style={{ backgroundColor: 'transparent', boxShadow: 'none' }}>
            <Toolbar>
                <Typography variant="h6" style={{ flexGrow: 0, textAlign: 'center', color: 'white', cursor: 'pointer' }} onClick={() => navigate('/')}>
                    Your Logo
                </Typography>
                <Box sx={{ display: { xs: 'none', md: 'flex' }, flexGrow: 1, justifyContent: 'center' }}>
                    <Button color="inherit" sx={{color: 'white',marginRight: '20px','&:hover': {textDecoration: 'underline',transform: 'scale(1.1)',},transition: 'transform 0.3s',}} onClick={() => navigate('/')}>
                        Home
                    </Button>
                    <Button color="inherit" sx={{color: 'white',marginRight: '20px','&:hover': {textDecoration: 'underline',transform: 'scale(1.1)',},transition: 'transform 0.3s',}} onClick={() => navigate('/about')}>
                        About Us
                    </Button>
                    <Button color="inherit" sx={{color: 'white',marginRight: '20px','&:hover': {textDecoration: 'underline',transform: 'scale(1.1)',},transition: 'transform 0.3s',}} onClick={() => navigate('/book')}>
                        Book
                    </Button>
                    <Button color="inherit" sx={{color: 'white',marginRight: '20px','&:hover': {textDecoration: 'underline',transform: 'scale(1.1)',},transition: 'transform 0.3s',}} onClick={() => navigate('/book')}>
                        Features
                    </Button>
                    <Button color="inherit" sx={{color: 'white',marginRight: '20px','&:hover': {textDecoration: 'underline',transform: 'scale(1.1)',},transition: 'transform 0.3s',}} onClick={() => navigate('/book')}>
                        Contact
                    </Button>
                </Box>
                <Box sx={{ display: { xs: 'flex', md: 'none' } }}>
                    <IconButton
                        edge="end"
                        color="inherit"
                        aria-label="menu"
                        onClick={handleMenuClick}
                        sx={{ float: 'right' }}
                    >
                        <MenuIcon />
                    </IconButton>
                    <Menu
                        anchorEl={anchorEl}
                        open={Boolean(anchorEl)}
                        onClose={handleMenuClose}
                    >
                        <MenuItem onClick={() => handleMenuItemClick('Home')}>Home</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('About')}>About Us</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('Features')}>Features</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('Contact')}>Contact</MenuItem>
                        <MenuItem onClick={() => handleMenuItemClick('Logout')}>Logout</MenuItem>
                    </Menu>
                </Box>
                <Box sx={{ display: { xs: 'none', md: 'flex' } }} onClick={handleLogout}>
                    {/* <Button color="inherit" style={{ marginLeft: '20px', border: '1px solid #2B4C65', color: 'black', background: '#FFB400', paddingLeft: '20px', paddingRight: '20px' }}>
                        Logout
                    </Button> */}
                    <MyButton>Logout</MyButton>
                </Box>
            </Toolbar>
        </AppBar>

    );
};
