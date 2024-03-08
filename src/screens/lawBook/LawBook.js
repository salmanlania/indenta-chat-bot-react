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
                    <Grid container spacing={4} >
                        <Grid item xs={15} md={7} sx={{ padding: '0', marginRight: '2rem' }}>
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
                                            marginLeft: '2rem',
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

                                        <a id='comeToBottom' href='#comeToTop'>Go To Top</a>
                                    </Box>
                                </React.Fragment>
                            </Typography>
                        </Grid>
                        <Grid className='customGrid' item xs={12} md={4} sx={{ border: '3px black solid', height: '56vh', marginTop: '2rem', boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px', background: '#CDDCE8', }}>
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
                                    <TableContainer component={Paper} >
                                        <Table>
                                            <TableHead>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell style={{ width: '5%', textAlign: 'center', fontWeight: 'bold', fontSize: '18px' }}>S.NO</TableCell>
                                                    <TableCell style={{ width: '40%', fontWeight: 'bold', fontSize: '18px', textAlign: 'center' }}>TITLE</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>1</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#firstHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Introduction</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>2</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#secondHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is Corporate Tax?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>3</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#thirdHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is subject to Corporate Tax?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>4</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#fourthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is exempt from Corporate Tax?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>5</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#fifthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How is a Taxable Person subject to Corporate Tax?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>6</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#sixthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is a Resident Person?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>7</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#seventhHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who is a Non-Resident Person?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>8</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#eightHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is a Permanent Establishment?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>9</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ninthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is Corporate Tax imposed on?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>10</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#tenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What income is exempt?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>11</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#eleventhHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What expenses are deductible?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>12</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#twelvethHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is the Corporate Tax rate?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>13</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#thirteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is the Withholding Tax rate?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>14</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#fourteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>When can a Free Zone Person be a Qualifying Free Zone Person?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>15</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#fifteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What are Tax Groups, and when can they be formed?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>16</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#sixteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How to calculate the Taxable Income of a Tax Group?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>17</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#seventeenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Registering, filing and paying Corporate Tax</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>18</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#eighteenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How to prepare for Corporate Tax?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>19</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctFirstHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>20</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctSecondHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Why is the UAE introducing CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>21</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctThirdHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Is the UAE the first country to introduce CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>22</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctFourthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>When will the UAE CT regime become effective?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>23</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctFifthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who will be subject to UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>24</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctSixthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will UAE entities owned by UAE or GCC nationals be subject to UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>25</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctSeventhHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will UAE CT be applicable to businesses in each Emirate? </a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>26</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctEighthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will I have to pay UAE CT alongside Emirate level taxes?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>27</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctNinthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will UAE CT replace VAT in the UAE?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>28</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctTenthHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will I have to pay UAE CT alongside VAT in the UAE?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>29</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctEleventhHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will I continue to pay service fees to local and Federal Governments now that the UAE has introduced CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>30</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctTwelvethHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will UAE CT replace Excise Tax in the UAE?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>31</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctThirteenHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will I need to consider the UAE’s international agreements for UAE CT purposes?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>32</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctFourteenHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What will be the role of the Federal Tax Authority?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>33</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctFifteenHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What will be the role of the Ministry of Finance?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>34</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctSixteenHeading' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What should I be doing to prepare for UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* =============================ctPartThree============================= */}

                                                <TableRow>
                                                    <TableCell>35</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>I am already registered for VAT purposes. Do I have to register for UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>36</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is a self-assessment regime?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>37</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Who will be required to register for UAE CT purposes?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>38</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeFourth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>When do I register for UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>39</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeFifth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Is there a registration threshold for UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>40</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeSixth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How do I register for UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>41</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeSeventh' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How often will UAE businesses need to file a UAE CT return?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>42</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeEighth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>I do not have any income / or my company is dormant, do I have to complete a UAE CT return?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>43</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeNinth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>I did not make a profit for the Tax Period, do I have to complete a UAE CT return?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>44</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeTenth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Can I file one UAE CT return for all the companies I own?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>45</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeEleventh' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will the CT return need to be filed electronically?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>46</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeTwelveth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>When do I need to pay my UAE CT liability?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>47</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeThirteenth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How do I pay my UAE CT liability?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>48</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeFourteenth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will there be a requirement to pay UAE CT in advance?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>49</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThreeFifteenth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Are there any consequences for non-compliance under the UAE CT regime?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPartThree End============================= */}

                                                {/* ============================= ctPart Four Start============================= */}

                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>50</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFourFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will the UAE CT regime tax large multinationals at the global minimum tax rate?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>51</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFourSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is meant by “large” multinationals?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPart Four End============================= */}

                                                {/* ============================= ctPart Five Start============================= */}

                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>52</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFiveFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will the income of UAE branches of a UAE business be subject to UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>53</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFiveSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will UAE branches of foreign businesses be subject to UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>54</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFiveThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Are UAE branches separate juridical persons?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>55</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFiveFourth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Are UAE branches of a UAE juridical person required to separately register or file for UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>56</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFiveFifth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will the income of foreign branches of a UAE business be subject to UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>57</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFiveSixth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will a UAE branch constitute a taxable Permanent Establishment for the foreign business?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>58</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFiveSeventh' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What are preparatory or auxiliary activities?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPart Five End============================= */}

                                                {/* ============================= ctPart Six Start============================= */}

                                                <TableRow>
                                                    <TableCell>59</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSixFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What expenditure will be deductible for the purposes of calculating taxable income?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>60</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSixSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What expenditure will be non-deductible for the purposes of calculating taxable income?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>61</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSixThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will my interest expenditure be fully deductible?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>62</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSixFourth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will dividends paid by UAE companies be deductible for CT purposes?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>63</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSixFifth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will service fees paid to local and Federal Governments be deductible for UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>64</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSixSixth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will Value Added Tax paid be deductible for UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPart Six End============================= */}

                                                {/* ============================= ctPart Seven Start============================= */}

                                                <TableRow>
                                                    <TableCell>65</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSevenFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What records should I keep for UAE CT purposes?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>66</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSevenSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How long must I keep my records for UAE CT purposes?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>67</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSevenThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Can I use the consolidated financial statements of the group to prepare the UAE CT return for my UAE business?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>68</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSevenFourth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will all entities that are subject to UAE CT be required to have audited financial statements?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>69</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSevenFifth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will the consolidated financial statements of a Tax Group need to be audited for CT purposes?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>70</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSevenSixth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will I need to submit my financial statements to the Federal Tax Authority?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>71</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSevenSeventh' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What currency do I use for UAE CT purposes?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>72</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartSevenEighth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What exchange rate do I use for UAE CT purposes?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPart Seven End============================= */}

                                                {/* ============================= ctPart Eight Start============================= */}

                                                <TableRow>
                                                    <TableCell>73</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartEightFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will foreign companies and other juridical persons be subject to UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>74</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartEightSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>'When will a non-resident person be subject to CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>75</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartEightThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>When will a foreign company be considered a resident person?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>76</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartEightFourth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Can a foreign individual be subject to UAE CT as a resident person?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>77</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartEightFifth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>When will a foreign individual be subject to UAE CT as a non-resident person?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>78</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartEightSixth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How do I know if I have a Permanent Establishment in the UAE?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>79</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartEightSeventh' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will the investment in UAE real estate constitute a taxable permanent establishment in the UAE?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>80</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartEightEighth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What determines whether income is sourced from the UAE?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>81</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartEightNinth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will UAE investment income earned by a foreign investor be subject to UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPart eight End============================= */}

                                                {/* ============================= ctPart nine Start============================= */}

                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>82</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartNineFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What UAE CT rates will apply to entities established in a Free Zone?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>83</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartNineSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Is the 0% Free Zone CT regime applicable automatically?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>84</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartNineThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is a Qualifying Free Zone Person?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>85</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartNineFourth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will a Free Zone entity be required to register and file a UAE CT return?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>86</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartNineFifth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will a different UAE CT treatment apply to entities established in a financial Free Zone?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>87</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartNineSixth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will Free Zone entities be subject to the global minimum tax (OECD, BEPS Pillar 2) rules?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPart nine End============================= */}

                                                {/* ============================= ctPart ten Start============================= */}

                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>88</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTenFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will there be any relief available for transfers between group companies?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>88</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTenSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is a Qualifying Group?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>90</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTenThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will there be any relief to facilitate mergers, spin-offs and other restructuring transactions?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPart ten End============================= */}

                                                {/* ============================= ctPart eleven Start============================= */}

                                                <TableRow>
                                                    <TableCell>91</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartElevenFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What income is exempt from UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>92</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartElevenSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Are all dividends and other profit distributions earned from UAE juridical persons exempt from UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>93</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartElevenThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Are all dividends and other profit distributions from foreign juridical persons exempt from UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>94</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartElevenFourth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Are capital gains exempt from UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>95</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartElevenFifth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is the participation exemption regime?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>96</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartElevenSixth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Can I benefit from a UAE CT exemption if I own less than a 5% shareholding in a company?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPart eleven End============================= */}

                                                {/* ============================= ctPart twelve Start============================= */}

                                                <TableRow>
                                                    <TableCell>97</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTwelveFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is an investment fund?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>98</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTwelveSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will investment funds be subject to UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>99</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTwelveThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is a recognised stock exchange?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>100</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTwelveFourth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will a UAE based investment fund manager be subject to UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>101</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTwelveFifth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>For the purpose of benefiting from the CT exemption, are both the investment fund and the fund manager required to be subject to regulatory oversight?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>102</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTwelveSixth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Could a UAE-based investment manager create a UAE taxable presence for its foreign customers?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>103</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTwelveSeventh' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Could the activities of a UAE-based investment manager result in a foreign investment fund / vehicle to be considered resident in the UAE for UAE CT purposes?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>104</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartTwelveEighth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Can investment holding companies and Special Purpose Vehicles used by an investment fund benefit from an exemption form UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPart twelve End============================= */}

                                                {/* ============================= ctPart thirteen Start============================= */}

                                                <TableRow>
                                                    <TableCell>105</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThirteenFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What is a juridical person?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>106</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThirteenSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What does it mean to have a ‘separate legal personality”?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>107</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThirteenThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>How do you determine whether a juridical person has a “Business” that is within the scope of UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>108</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThirteenFourth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Are foreign juridical persons subject to UAE CT in the same way as a UAE resident person?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>109</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThirteenFifth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>When is a foreign juridical person considered “effectively managed and controlled” in the UAE?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>110</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThirteenSixth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will UAE holding companies be subject to UAE CT?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>111</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartThirteenSeventh' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will a sole proprietorship or civil company be treated as a juridical person for CT purposes?</a>
                                                    </TableCell>
                                                </TableRow>

                                                {/* ============================= ctPart thirteen End============================= */}

                                                {/* ============================= ctPart Fourteen Start============================= */}

                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>112</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFourteenFirst' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What are “Tax Losses”?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>113</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFourteenSecond' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will the UAE CT regime allow prior year tax losses to reduce taxable income?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>114</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFourteenThird' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will a change in ownership of the taxable person restrict the ability to use its tax losses?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell>115</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFourteenFourth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>Will a group be able to utilise the tax losses of one group company against the taxable income of another group company?</a>
                                                    </TableCell>
                                                </TableRow>
                                                <TableRow sx={{ background: '#CDDCE8' }}>
                                                    <TableCell>116</TableCell>
                                                    <TableCell style={{ textAlign: 'center' }}>
                                                        <a href='#ctPartFourteenFifth' style={{ textDecoration: 'none', fontSize: '1rem', color: 'black' }}>What are the conditions for the transfer of tax losses within a group?</a>
                                                    </TableCell>
                                                </TableRow>

                                            </TableBody>
                                        </Table>
                                    </TableContainer>
                                </div>
                            </TabPanel>

                            {selectedSection && (
                                <TabPanel value={nestedTabValue} index={1}>
                                    <div style={{ maxHeight: '100%', overflow: 'auto', maxWidth: '100%', width: '100%', paddingLeft: '0' }}>
                                        <CssBaseline />
                                        <Container maxWidth="md" sx={{ bgcolor: '#fff', height: 'auto', overflow: 'auto', border: '1px black solid', padding: '0.5rem', '@media (max-width: 600px)': { maxWidth: '100%', padding: '0.5rem', }, }}>
                                            <div style={{ maxWidth: '100%', overflow: 'hidden', height: '38vh', overflowY: 'auto', overflowX: 'hidden' }}>
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