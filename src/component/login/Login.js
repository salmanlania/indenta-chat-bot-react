import React, { useState } from 'react';
import { useNavigate , Outlet} from 'react-router-dom';
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
import Swal from 'sweetalert2';
import bgLogin from './assests/bgLogin.png';
import book from './assests/book.png';
import MyButton from '../../screens/MyButton';
import Navbar from '../navbar/Navbar';

const defaultTheme = createTheme();

export default function Login() {
    const navigate = useNavigate();
    const [email, setEmail] = useState('admin@gmail.com');
    const [password, setPassword] = useState('admin123');

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            // Make HTTP POST request to your FastAPI backend for authentication
            const response = await fetch('http://192.168.100.70:8000/login/', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email, password }),
            });

            const data = await response.json();

            if (response.ok) {
                Swal.fire({
                    icon: 'success',
                    title: 'Login Successfully',
                    text: 'Welcome Back',
                    confirmButtonText: 'OK',
                    customClass: {
                        title: 'swal-title',
                        content: 'swal-text',
                        icon: 'swal-icon success',
                        confirmButton: 'swal-button',
                    },
                }).then((result) => {
                    if (result.isConfirmed) {
                        navigate('/chatbot');
                    }
                });
            } else {
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: data.detail || 'You`ve entered wrong email or password',
                });
            }
        } catch (error) {
            console.error('Error during login:', error.message);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: error.message || 'An error occurred during login.',
            });
        }
    };

    return (
<div>
            <Navbar />
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
                    <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square sx={{ paddingLeft: '2rem', paddingRight: '2rem' }}>
                        <div>
                            <img src={book} style={{ float: 'right', width: '70px', marginTop: '20px', marginRight: '1rem' }} />
                        </div>
                        <Box
                            sx={{
                                my: 8,
                                mx: 'auto',
                                maxWidth: '400px',
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
                                    sx={{ width: '100%' }} 
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
                                    sx={{ width: '100%' }} 
                                />
                                <FormControlLabel
                                    control={<Checkbox value="remember" color="primary" />}
                                    label="Remember me"
                                    sx={{ mb: 1 }} 
                                />
                                <MyButton onClick={handleSubmit} button={'Sign In'} style={{ width: '100%', marginBottom: '5px' }} />
                                <Grid container>
                                    <Grid item xs>
                                        <Link sx={{ cursor: 'pointer' }} variant="body1" onClick={() => navigate('/signup')}>
                                            {"Create an Account"}
                                        </Link>
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
        </div>

    );
}