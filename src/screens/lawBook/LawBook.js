import React, { useState } from 'react';
import { Tabs, Tab, Paper, Typography, Box, Popover, Table, TableContainer, TableHead, TableBody, TableRow, MenuItem, TableCell, Grid, Container, Button, Dialog, DialogContent, DialogTitle, IconButton, } from '@mui/material';
import FullscreenIcon from '@mui/icons-material/Fullscreen';
import FullscreenExitIcon from '@mui/icons-material/FullscreenExit';
import CssBaseline from '@mui/material/CssBaseline';
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
import CtPartSeventeen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartSeventeen';
import CtPartEighteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartEighteen';
import CtPartNinteen from '../Chat-Bot-E-Book-Corporate-Tax/CtPartNinteen';
import CtPartTwentieth from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTwentieth';
import CtPartTwentyfirst from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTwentyfirst'
import CtPartTwentyTwo from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTwentyTwo';
import CtPartTwentyThree from '../Chat-Bot-E-Book-Corporate-Tax/CtPartTwentyThree';

// SECTION IMPORTS

import SectionOne from '../sectionsCorporateTax/SectionOne'
import SectionTwo from '../sectionsCorporateTax/SectionTwo'
import SectionThree from '../sectionsCorporateTax/SectionThree'
import SectionFour from '../sectionsCorporateTax/SectionFour'
import SectionFive from '../sectionsCorporateTax/SectionFive'
import SectionSix from '../sectionsCorporateTax/SectionSix'
import SectionSeven from '../sectionsCorporateTax/SectionSeven'
import SectionEight from '../sectionsCorporateTax/SectionEight'
import SectionNine from '../sectionsCorporateTax/SectionNine'
import SectionTen from '../sectionsCorporateTax/SectionTen'
import SectionEleven from '../sectionsCorporateTax/SectionEleven'
import SectionTwelve from '../sectionsCorporateTax/SectionTwelve'
import SectionThirteen from '../sectionsCorporateTax/SectionThirteen'
import SectionFourteen from '../sectionsCorporateTax/SectionFourteen'
import SectionFifteen from '../sectionsCorporateTax/SectionFifteen'
import SectionSixteen from '../sectionsCorporateTax/SectionSixteen'
import SectionSeventeen from '../sectionsCorporateTax/SectionSeventeen'
import SectionEighteen from '../sectionsCorporateTax/SectionEighteen'
import LawBookIndexPage from './LawBookIndexPage';

const LawBook = () => {
    const [mainTabValue, setMainTabValue] = useState(0);
    const [nestedTabValue, setNestedTabValue] = useState(0);
    const [anchorEl, setAnchorEl] = useState(null);
    const [selectedSection, setSelectedSection] = useState(null);
    const [openPopup, setOpenPopup] = useState(false);

    const handleOpenPopup = (section) => {
        setOpenPopup(true);
        setSelectedSection(section);
    };

    const handleClosePopup = () => {
        setOpenPopup(false);
    };

    const handleMainTabChange = (event, newValue) => {
        setMainTabValue(newValue);
    };

    const handleNestedTabChange = (event, newValue) => {
        setNestedTabValue(newValue);
    };

    const handlePopoverOpen = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handlePopoverClose = (section) => {
        setSelectedSection(section);
        setAnchorEl(null);
    };

    const open = Boolean(anchorEl);

    return (
        <div>
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
                <TabPanel value={mainTabValue} index={0}>
                    <Grid container spacing={2} >
                        <Grid item xs={15} md={7} sx={{ padding: '0', marginRight: '5rem' }}>
                            <Typography paragraph>
                                <React.Fragment>
                                    <CssBaseline />
                                    <Box
                                        maxWidth="lg"
                                        className='customGrid'
                                        sx={{
                                            maxHeight: '56vh',
                                            overflowY: 'scroll',
                                            overflowX: 'hidden',
                                            bgcolor: '#CDDCE8',
                                            padding: '1rem',
                                            border: '1px black solid',
                                            maxWidth: '400% !important',
                                            '@media (max-width:600px)': {
                                                width: '100%',
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
                                        <CtPartSeventeen /> <hr />
                                        <CtPartEighteen /> <hr />
                                        <CtPartNinteen /> <hr />
                                        <CtPartTwentieth /> <hr />
                                        <CtPartTwentyfirst /> <hr />
                                        <CtPartTwentyTwo /> <hr />
                                        <CtPartTwentyThree /> <hr />

                                        {/* <a id='comeToBottom' href='#comeToTop'>Go To Top</a> */}
                                    </Box>
                                </React.Fragment>
                            </Typography>
                        </Grid>
                        <Grid className='customGrid' item xs={12} md={4} sx={{ border: '3px black solid', height: '56vh', marginTop: '1rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', background: '#CDDCE8', }}>
                            <Tabs
                                value={nestedTabValue}
                                onChange={handleNestedTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                                sx={{
                                    '@media (max-width: 600px)': {
                                        maxWidth: '100%',
                                    },
                                }}
                            >
                                <Tab label="Index" sx={{ fontWeight: 'bold', color: 'black' }} />
                                <Tab
                                    label="Section ˅"
                                    sx={{ fontWeight: 'bold', color: 'black' }}
                                    onClick={handlePopoverOpen}
                                />
                            </Tabs>

                            <Popover
                                open={open}
                                anchorEl={anchorEl}
                                onClose={handlePopoverClose}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'center',
                                }}
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'center',
                                }}
                            >
                                <Box p={2} sx={{ maxHeight: '200px', overflowY: 'auto' }}>
                                    <MenuItem onClick={() => handlePopoverClose('Section 1')}>Section 1</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 2')}>Section 2</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 3')}>Section 3</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 4')}>Section 4</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 5')}>Section 5</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 6')}>Section 6</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 7')}>Section 7</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 8')}>Section 8</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 9')}>Section 9</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 10')}>Section 10</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 11')}>Section 11</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 12')}>Section 12</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 13')}>Section 13</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 14')}>Section 14</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 15')}>Section 15</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 16')}>Section 16</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 17')}>Section 17</MenuItem>
                                    <MenuItem onClick={() => handlePopoverClose('Section 18')}>Section 18</MenuItem>
                                </Box>
                            </Popover>

                            <TabPanel value={nestedTabValue} index={0}>
                                <div style={
                                    {
                                        maxHeight: '40vh',
                                        maxWidth: '150% !important',
                                        cursor: 'pointer',
                                        overflowY: 'auto',
                                        paddingRight: '3px',
                                        overflowX: 'hidden',
                                        '&::-webkit-scrollbar': {
                                            width: '12px',

                                        },
                                        '&::-webkit-scrollbar-thumb': {

                                            borderRadius: '6px',
                                        },
                                        '&::-webkit-scrollbar-thumb:hover': {

                                        },
                                        '&::-webkit-scrollbar-track': {

                                            borderRadius: '6px',
                                        },
                                    }
                                }
                                >
                                    <TableContainer component={Paper}>
                                        <LawBookIndexPage />
                                    </TableContainer>
                                </div>
                            </TabPanel>

                            {selectedSection && (
                                <TabPanel value={nestedTabValue} index={1}>
                                    <div style={{ maxHeight: '100%', overflow: 'auto', maxWidth: '100%', width: '100%', paddingRight: '1rem' }}>
                                        <CssBaseline />
                                        <Container maxWidth="md" sx={{ bgcolor: '#fff', height: 'auto', overflow: 'auto', border: '1px black solid', padding: '0.5rem', '@media (max-width: 600px)': { maxWidth: '100%', padding: '0.5rem', }, }}>
                                            <div style={{ maxWidth: '100%', overflow: 'hidden', height: '36vh', overflowY: 'auto', overflowX: 'hidden' }}>
                                                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                                                    <Typography variant='h6' sx={{ textDecoration: 'underline' }}>{selectedSection}</Typography>
                                                    <Button onClick={() => handleOpenPopup(selectedSection)} sx={{ float: 'right', display: 'block' }}><FullscreenIcon sx={{ fontSize: '1.7rem' }} /></Button>
                                                </div>
                                                <div>
                                                    {selectedSection === 'Section 1' && <SectionOne />}
                                                    {selectedSection === 'Section 2' && <SectionTwo />}
                                                    {selectedSection === 'Section 3' && <SectionThree />}
                                                    {selectedSection === 'Section 4' && <SectionFour />}
                                                    {selectedSection === 'Section 5' && <SectionFive />}
                                                    {selectedSection === 'Section 6' && <SectionSix />}
                                                    {selectedSection === 'Section 7' && <SectionSeven />}
                                                    {selectedSection === 'Section 8' && <SectionEight />}
                                                    {selectedSection === 'Section 9' && <SectionNine />}
                                                    {selectedSection === 'Section 10' && <SectionTen />}
                                                    {selectedSection === 'Section 11' && <SectionEleven />}
                                                    {selectedSection === 'Section 12' && <SectionTwelve />}
                                                    {selectedSection === 'Section 13' && <SectionThirteen />}
                                                    {selectedSection === 'Section 14' && <SectionFourteen />}
                                                    {selectedSection === 'Section 15' && <SectionFifteen />}
                                                    {selectedSection === 'Section 16' && <SectionSixteen />}
                                                    {selectedSection === 'Section 17' && <SectionSeventeen />}
                                                    {selectedSection === 'Section 18' && <SectionEighteen />}
                                                </div>

                                                {/* Popup dialog */}
                                                <Dialog open={openPopup} onClose={handleClosePopup} maxWidth="md" fullWidth >
                                                    <DialogTitle>
                                                        {selectedSection}
                                                        <IconButton
                                                            edge="end"
                                                            color="inherit"
                                                            onClick={handleClosePopup}
                                                            aria-label="close"
                                                            sx={{
                                                                marginLeft: 'auto', order: { xs: 2, md: 3 }, ml: { xs: 1, md: 2 }, float: 'right'
                                                            }}
                                                        >
                                                            <FullscreenExitIcon />
                                                        </IconButton>
                                                    </DialogTitle>
                                                    <DialogContent >
                                                        {selectedSection === 'Section 1' && <SectionOne />}
                                                        {selectedSection === 'Section 2' && <SectionTwo />}
                                                        {selectedSection === 'Section 3' && <SectionThree />}
                                                        {selectedSection === 'Section 4' && <SectionFour />}
                                                        {selectedSection === 'Section 5' && <SectionFive />}
                                                        {selectedSection === 'Section 6' && <SectionSix />}
                                                        {selectedSection === 'Section 7' && <SectionSeven />}
                                                        {selectedSection === 'Section 8' && <SectionEight />}
                                                        {selectedSection === 'Section 9' && <SectionNine />}
                                                        {selectedSection === 'Section 10' && <SectionTen />}
                                                        {selectedSection === 'Section 11' && <SectionEleven />}
                                                        {selectedSection === 'Section 12' && <SectionTwelve />}
                                                        {selectedSection === 'Section 13' && <SectionThirteen />}
                                                        {selectedSection === 'Section 14' && <SectionFourteen />}
                                                        {selectedSection === 'Section 15' && <SectionFifteen />}
                                                        {selectedSection === 'Section 16' && <SectionSixteen />}
                                                        {selectedSection === 'Section 17' && <SectionSeventeen />}
                                                        {selectedSection === 'Section 18' && <SectionEighteen />}
                                                    </DialogContent>
                                                </Dialog>

                                            </div>
                                        </Container>
                                    </div>
                                </TabPanel>
                            )}
                            {!selectedSection && (
                                <TabPanel value={nestedTabValue} index={1}>
                                    <Container maxWidth="md" sx={{ bgcolor: '#fff', border: '1px black solid', maxWidth: '100%', width: '100%', maxHeight: '40vh', padding: '1rem' }}>
                                        <Box sx={{ width: '100%', maxHeight: '25rem', height: '40vh' }} />
                                    </Container>
                                </TabPanel>
                            )}

                        </Grid>
                    </Grid>
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