import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
    return (
        <AppBar position="static" >
            <Toolbar>
                <Typography variant="h6" sx={{ flexGrow: 1, textAlign: 'center',  }}>
                    VAT- USER GUIDE | REGISTRATION, AMENDMENTS & DE-REGISTRATION
                </Typography>
            </Toolbar>
        </AppBar>
    );
};