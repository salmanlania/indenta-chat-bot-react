import React from 'react';
import { Box, Toolbar, Typography } from '@mui/material';

export default function Header() {
    return (
        <Toolbar sx={{ width: 'fit-content', margin: 'auto', paddingLeft: '1.5rem', paddingRight: '1.5rem', borderBottom: '2px solid #2B4C65' , borderTop: '2px solid #2B4C65' , display : 'flex' , alignItems : 'center' , marginTop : '0.6rem' , marginBottom : '0.6rem'}}>
            <Typography variant="h5" sx={{ flexGrow: 1, textAlign: 'center', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '0.4rem', width: '100%' }}>
                Emara Tax
            </Typography>
        </Toolbar>

    );
};