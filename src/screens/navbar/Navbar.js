import React from 'react';
import { AppBar, Toolbar, Typography, Button, IconButton, useMediaQuery, Drawer, List, ListItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useNavigate, Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';

export default function Navbar() {
    const navigate = useNavigate()
    const isMobile = useMediaQuery('(max-width:600px)');
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);

    const handleToggleMobileMenu = () => {
        setMobileMenuOpen(!mobileMenuOpen);
    };

    const handleLogout = () => {
        Swal.fire({
            title: 'Logout Successful!',
            text: 'You have been successfully logged out.',
            icon: 'success',
            confirmButtonText: 'OK'
        }).then(() => {
            navigate('/login') || navigate('/')
        })
    };

    return (
        <AppBar position="static" color="primary" sx={{background : '#9CB1C1', fontFamily: '"Anta", sans-serif !important'}}>
            <Toolbar>
                {isMobile ? (
                    <IconButton edge="start" color="inherit" aria-label="menu" onClick={handleToggleMobileMenu}>
                        <MenuIcon />
                    </IconButton>
                ) : null}

                <Typography variant="h4" style={{ flexGrow: 1, textAlign: 'center', letterSpacing: '3px', textTransform: 'uppercase', fontWeight: 'bold' , color : 'black'}}>
                    UAE Tax Consultant
                </Typography>

                {isMobile ? null : (
                    <Button color="inherit" sx={{ background: '#009739' }} onClick={handleLogout}>
                        Logout
                    </Button>
                )}
            </Toolbar>

            <Drawer anchor="left" open={mobileMenuOpen} onClose={handleToggleMobileMenu}>
                <List>
                    <ListItem button onClick={handleLogout}>
                        <Button color="inherit" sx={{ background: 'red' }} onClick={handleLogout}>
                            Logout
                        </Button>
                    </ListItem>
                    {/* Add other mobile menu items as needed */}
                </List>
            </Drawer>
            <Outlet />
        </AppBar>
    );
};
