import * as React from 'react';
import { useState } from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Outlet, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import bgLogin from './assests/bgLogin.png'
import book from './assests/book.png'

function Copyright(props) {
    return (
        <Typography variant="body2" color="text.secondary" align="center" {...props}>
            {'Copyright © '}
            <Link color="inherit" href="https://mui.com/">
                Law Tax Consultant Chatbot
            </Link>{' '}
            {new Date().getFullYear()}
            {'.'}
        </Typography>
    );
}

const defaultTheme = createTheme();

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('admin');
    const [password, setPassword] = useState('admin123');

    const handleSubmit = async (event) => {
        event.preventDefault();
        Swal.fire({
            icon: 'success',
            title: 'Login Successful!',
            text: 'Welcome back!',
            confirmButtonText: 'OK',
        });
        navigate('/book');

        // try {
        //     if (!email || !password) {
        //         throw new Error('Please enter both email and password!');
        //     }

        //     else if (email === "admin" && password === "admin") {
        //         await Swal.fire({
        //             icon: 'success',
        //             title: 'Login Successful!',
        //             text: 'Welcome back!',
        //             confirmButtonText: 'OK',
        //         });

        //         navigate('/book');
        //     }

        //     else if (email !== "admin" && password !== "admin") {
        //         await Swal.fire({
        //             icon: 'error',
        //             title: 'Oops...',
        //             text: "Please Enter Correct Email Address or Password",
        //         });
        //         setEmail('')
        //         setPassword('')
        //     }
        // } catch (error) {
        //     await Swal.fire({
        //         icon: 'error',
        //         title: 'Oops...',
        //         text: error.message,
        //     });
        // }
    };

    return (
        <ThemeProvider theme={defaultTheme}>
            <Grid container component="main" sx={{ height: '100vh' }}>
                <CssBaseline />
                <Grid
                    item
                    xs={false}
                    sm={4}
                    md={7}
                    sx={{
                        backgroundImage: `url(${bgLogin})`,
                        backgroundRepeat: 'no-repeat',
                        backgroundColor: (t) =>
                            t.palette.mode === 'light' ? t.palette.grey[50] : t.palette.grey[900],
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                    }}
                />
                <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
                    <div>
                        <img src={book} style={{ float: 'right', width: '70px', marginTop: '20px', marginRight: '1rem' }} />
                    </div>
                    <Box
                        sx={{
                            my: 8,
                            mx: 'auto', // Center the box horizontally
                            maxWidth: '400px', // Limiting width for the content
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            marginTop: '160px',
                        }}
                    >
                        <Typography component="h1" variant="h4" sx={{ fontWeight: 'bold', marginBottom: '1rem' }}>
                            Sign in
                        </Typography>
                        <Box component="form" validate sx={{ width: '100%' }}>
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                id="email"
                                label="Email Address"
                                name="email"
                                autoComplete="email"
                                autoFocus
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                sx={{ width: '100%' }} // Set width to 100%
                            />
                            <TextField
                                margin="normal"
                                required
                                fullWidth
                                name="password"
                                label="Password"
                                type="password"
                                id="password"
                                autoComplete="current-password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                sx={{ width: '100%' }} // Set width to 100%
                            />
                            <FormControlLabel
                                control={<Checkbox value="remember" color="primary" />}
                                label="Remember me"
                                sx={{ mb: 1 }} // Add margin bottom
                            />
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                sx={{ mb: 2 }}
                                onClick={handleSubmit}
                            >
                                Sign In
                            </Button>
                            <Grid container>
                                <Grid item xs>
                                    {/* Add any content you want */}
                                </Grid>
                                <Grid item>
                                    <Link sx={{ cursor: 'pointer' }} variant="body2" onClick={() => navigate('/book')}>
                                        {"Forgot password?"}
                                    </Link>
                                </Grid>
                            </Grid>
                        </Box>
                    </Box>
                </Grid>
            </Grid>
            <Outlet />
        </ThemeProvider>
    );
}