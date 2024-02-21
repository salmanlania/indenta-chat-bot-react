import React, { useState } from 'react';
import { Tabs, Tab, Paper, Typography, Box, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Grid, List, ListItem, ListItemText, } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ChatApp from '../ChatApp/ChatApp';
import './LawBook.css'

import CoprateTax from '../Chat-Bot-E-Book-Corporate-Tax/CoprateTax';
import Ct from '../Chat-Bot-E-Book-Corporate-Tax/Ct';
import CtPartThree from '../Chat-Bot-E-Book-Corporate-Tax/CtPartThree';
import CtPartFour from '../Chat-Bot-E-Book-Corporate-Tax/CtPartFour';
import CtPartFive from '../Chat-Bot-E-Book-Corporate-Tax/CtPartFive';
import CtPartSix from '../Chat-Bot-E-Book-Corporate-Tax/CtPartSix';
import CtPartSeven from '../Chat-Bot-E-Book-Corporate-Tax/CtPartSeven';
import CtPartEight from '../Chat-Bot-E-Book-Corporate-Tax/CtPartEight';
import CtPartNine from '../Chat-Bot-E-Book-Corporate-Tax/CtPartNine';
import CtPartTen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTen';
import CtPartEleven from '../Chat-Bot-E-Book-Corporate-Tax/CtPartEleven';
import CtPartTwelve from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTwelve';
import CtPartThirteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartThirteen';
import CtPartFourteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartFourteen';
import CtPartFifteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartFifteen';
import CtPartSixteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartSixteen';

const LawBook = () => {
    const [mainTabValue, setMainTabValue] = useState(0);
    const [nestedTabValue, setNestedTabValue] = useState(0);

    const handleMainTabChange = (event, newValue) => {
        setMainTabValue(newValue);
    };

    const handleNestedTabChange = (event, newValue) => {
        setNestedTabValue(newValue);
    };

    return (
        <div style={{ background: 'F5F5F5' }}>
            <Grid>
                <Tabs
                    value={mainTabValue}
                    onChange={handleMainTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    sx={{ height: '3rem' }}
                >
                    <Tab label="Corporate tax" />
                    <Tab label="Value-added tax" />
                </Tabs>

                {/* Content for Tab 1 */}
                <TabPanel value={mainTabValue} index={0}>
                    <Grid container spacing={4}>
                        <Grid item xs={12} md={7} sx={{ padding: '0' }}>
                            <Typography paragraph>
                                <React.Fragment>
                                    <CssBaseline />
                                    <Box
                                        maxWidth="lg"
                                        className='customGrid'
                                        sx={{
                                            maxHeight: '60vh',
                                            overflowY: 'scroll',
                                            overflowX: 'hidden',
                                            bgcolor: '#fff',
                                            padding: '1rem',
                                            border: '1px black solid',
                                            maxWidth: '250% !important',
                                            marginLeft: '2rem',
                                            '@media (max-width:600px)': {
                                                width: '100%', // Adjust width for smaller screens
                                            },
                                            '&::-webkit-scrollbar': {
                                                width: '12px',
                                            },
                                            '&::-webkit-scrollbar-thumb': {
                                                background: '#888',
                                                borderRadius: '6px',
                                            },
                                            '&::-webkit-scrollbar-thumb:hover': {
                                                background: '#555',
                                            },
                                            '&::-webkit-scrollbar-track': {
                                                background: 'transparent',
                                                borderRadius: '6px',
                                            },
                                        }}
                                    >
                                        <CoprateTax /> <hr />
                                        <Ct /> <hr />
                                        <CtPartThree /> <hr />
                                        <CtPartFour /> <hr />
                                        <CtPartFive /> <hr />
                                        <CtPartSix /> <hr />
                                        <CtPartSeven /> <hr />
                                        <CtPartEight /> <hr />
                                        <CtPartNine /> <hr />
                                        <CtPartTen /> <hr />
                                        <CtPartEleven /> <hr />
                                        <CtPartTwelve /> <hr />
                                        <CtPartThirteen /> <hr />
                                        <CtPartFourteen /> <hr />
                                        <CtPartFifteen /> <hr />
                                        <CtPartSixteen /> <hr />

                                        <span id='comeToBottom'></span>
                                    </Box>
                                </React.Fragment>
                            </Typography>
                        </Grid>
                        <Grid className='customGrid' item xs={12} md={4} sx={{ border: '3px black solid', height: '60vh', width: '10rem', marginTop: '2rem', marginLeft: '1rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                            <Tabs
                                value={nestedTabValue}
                                onChange={handleNestedTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                                sx={{ maxWidth: '30rem' }}
                            >
                                <Tab label="Index" sx={{ fontWeight: 'bold', color: 'black' }} />
                            </Tabs>
                            <TabPanel value={nestedTabValue} index={0}>
                                <div style={
                                    {
                                        maxHeight: '20rem',
                                        maxWidth: '25rem',
                                        cursor: 'pointer',
                                        overflowY: 'scroll',
                                        overflowX: 'hidden',
                                        '&::-webkit-scrollbar': {
                                            width: '12px',
                                        },
                                        '&::-webkit-scrollbar-thumb': {
                                            background: '#888',
                                            borderRadius: '6px',
                                        },
                                        '&::-webkit-scrollbar-thumb:hover': {
                                            background: '#555',
                                        },
                                        '&::-webkit-scrollbar-track': {
                                            background: 'transparent',
                                            borderRadius: '6px',
                                        },
                                    }
                                }
                                >
                                    <TableContainer component={Paper} >
                                        <Table>
                                            <TableHead>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell style={{ width: '5%', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>S.NO</TableCell>
                                                    <TableCell style={{ width: '40%', fontWeight: 'bold', fontSize: '18px' }}>TITLE</TableCell>
                                                    {/* <TableCell style={{ width: '15%', textAlign: 'center' }}>Pg #</TableCell> */}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>1</TableCell>
                                                    <TableCell><a href='#firstHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Introduction</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>2</TableCell>
                                                    <TableCell><a href='#secondHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is Corporate Tax?</a></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>3</TableCell>
                                                    <TableCell><a href='#thirdHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is subject to Corporate Tax?</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>4</TableCell>
                                                    <TableCell><a href='#fourthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is exempt from Corporate Tax?</a></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>5</TableCell>
                                                    <TableCell><a href='#fifthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How is a Taxable Person subject to Corporate Tax?</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>6</TableCell>
                                                    <TableCell><a href='#sixthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is a Resident Person?</a></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>7</TableCell>
                                                    <TableCell><a href='#seventhHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is a Non-Resident Person?</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>8</TableCell>
                                                    <TableCell><a href='#eightHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is a Permanent Establishment?</a></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>9</TableCell>
                                                    <TableCell><a href='#ninthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is Corporate Tax imposed on?</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>10</TableCell>
                                                    <TableCell><a href='#tenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What income is exempt?</a></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>11</TableCell>
                                                    <TableCell><a href='#eleventhHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What expenses are deductible?</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>12</TableCell>
                                                    <TableCell><a href='#twelvethHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is the Corporate Tax rate?</a></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>13</TableCell>
                                                    <TableCell><a href='#thirteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is the Withholding Tax rate?</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>14</TableCell>
                                                    <TableCell><a href='#fourteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>When can a Free Zone Person be a Qualifying Free Zone Person?</a></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>15</TableCell>
                                                    <TableCell><a href='#fifteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What are Tax Groups, and when can they be formed?</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>16</TableCell>
                                                    <TableCell><a href='#sixteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How to calculate the Taxable Income of a Tax Group?</a></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>17</TableCell>
                                                    <TableCell><a href='#seventeenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Registering, filing and paying Corporate Tax</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>18</TableCell>
                                                    <TableCell><a href='#eighteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How to prepare for Corporate Tax?</a></TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </TabPanel>

                            {/* <TabPanel value={nestedTabValue} index={1} >
                                <div style={{ maxHeight: '20rem', overflow: 'auto', maxWidth: '25rem', width: '40rem', }}>
                                    <React.Fragment>
                                        <CssBaseline />
                                        <Container maxWidth="sm">
                                            <Box sx={{ bgcolor: '#fff', height: '40vh', border: '1px black solid' }} />
                                        </Container>
                                    </React.Fragment>
                                </div>
                            </TabPanel> */}
                        </Grid>
                    </Grid>
                    <ChatApp className='chatAppLaw' />
                </TabPanel>

                {/* Content for Tab 2 */}
                <TabPanel value={mainTabValue} index={1}>
                    <Typography paragraph>Nothing to show...</Typography>
                </TabPanel>
            </Grid >
        </div >
    );
};

const TabPanel = (props) => {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && <Box p={3}>{children}</Box>}
        </div>
    );
};

export default LawBook;