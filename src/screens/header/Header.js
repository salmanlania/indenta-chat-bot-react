import React from 'react';
import { AppBar, Toolbar, Typography } from '@mui/material';

export default function Header() {
    return (
        <AppBar position="static" sx={{ background: 'white', color: 'black', margin: '8px auto', maxWidth: '50rem' }}>
            <Toolbar>
                <Typography variant="h4" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold' , textTransform : 'uppercase', letterSpacing : '0.7rem'}}>
                   Emara Tax
                </Typography>
            </Toolbar>
        </AppBar>

    );
};