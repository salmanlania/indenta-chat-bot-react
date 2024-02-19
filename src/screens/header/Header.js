import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
    return (
        <AppBar position="static"  sx={{background : 'white' , color : 'black'}}>
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center' , fontWeight : 'bold' }}>
                    VAT- USER GUIDE | REGISTRATION, AMENDMENTS & DE-REGISTRATION
                </Typography>
            </Toolbar>
        </AppBar>
    );
};