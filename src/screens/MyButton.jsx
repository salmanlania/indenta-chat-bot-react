import React from 'react';
import { Button, useTheme } from '@mui/material';

const MyButton = ({ children, ...props }) => {
    const theme = useTheme();
    return (
        <Button variant="contained" color="primary" sx={{ width: 'fit-content', background: '#FFB400', padding: '5px 26px', color: 'black', fontWeight: 'bold','&:hover': {background: '#FFB400',}, [theme.breakpoints.down('md')]: { fontSize: '0.875rem' } }}
            {...props}
        >
            {children}
        </Button>
    );
};

export default MyButton;