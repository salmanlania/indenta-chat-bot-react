import React, { useState } from 'react';
import { Tabs, Tab, Paper, Typography, Box, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Grid, Container, List, ListItem, ListItemText, } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ChatApp from '../ChatApp/ChatApp';
import './LawBook.css'

const generateAlphabets = () => {
    let result = '';
    for (let i = 0; i < 10; i++) {
        result += String.fromCharCode(65 + (i % 26));
    }
    return result;
};

const LawBook = () => {
    const [mainTabValue, setMainTabValue] = useState(0);
    const [nestedTabValue, setNestedTabValue] = useState(0);
    const indexData = generateAlphabets();

    const handleMainTabChange = (event, newValue) => {
        setMainTabValue(newValue);
    };

    const handleNestedTabChange = (event, newValue) => {
        setNestedTabValue(newValue);
    };

    const corporateTax = {
        first: {
            heading: '1.Introduction',
            firstPara: 'The Federal Decree-Law No. 47 of 2022 on the Taxation of Corporations and Businesses (hereinafter referred to as the “Corporate Tax Law”) was issued by His Highness Sheikh Mohamed bin Zayed Al Nahyan, President of the United Arab Emirates (“UAE President”), on 3 October 2022.',
            secondPara: 'The Corporate Tax Law provides the legislative basis for the introduction and implementation of a Federal Corporate Tax (“Corporate Tax”) in the UAE and is effective for financial years starting on or after 1 June 2023.',
            thirdPara: 'The introduction of Corporate Tax is intended to help the UAE achieve its strategic objectives and accelerate its development and transformation. The certainty of a competitive Corporate Tax regime that adheres to international standards, together with the UAE’s extensive network of double tax treaties, will cement the UAE’s position as a leading jurisdiction for business and investment.',
            fourthPara: 'Given the position of the UAE as an international business hub and global financial centre, the UAE Corporate Tax regime builds from best practices globally and incorporates principles that are internationally known and accepted. This ensures that the UAE Corporate Tax regime will be readily understood and is clear in its implications'
        },
        second: {
            heading: '2.What is Corporate Tax?',
            firstPara: 'Corporate Tax is a form of direct tax levied on the net income of corporations and other businesses. ',
            secondPara: 'Corporate Tax is sometimes also referred to as “Corporate Income Tax” or “Business Profits Tax” in other jurisdictions.',
        },
        third: {
            heading: '3.Who is subject to Corporate Tax?',
            firstPara: 'Corporate Tax is a form of direct tax levied on the net income of corporations and other businesses. ',
            secondParaListOne: '● UAE companies and other juridical persons that are incorporated or effectively managed and controlled in the UAE;',
            secondParaListTwo: '● Natural persons (individuals) who conduct a Business or Business Activity in the UAE as specified in a Cabinet Decision to be issued in due course; and',
            secondParaListThree: '● Non-resident juridical persons (foreign legal entities) that have a Permanent Establishment in the UAE (which is explained under Section 8).',
            thirdPara: 'Juridical persons established in a UAE Free Zone are also within the scope of Corporate Tax as “Taxable Persons” and will need to comply with the requirements set out in the Corporate Tax Law. However, a Free Zone Person that meets the conditions to be considered a Qualifying Free Zone Person can benefit from a Corporate Tax rate of 0% on their Qualifying Income (the conditions are included in Section 14).',
            fourthPara: 'Non-resident persons that do not have a Permanent Establishment in the UAE or that earn UAE sourced income that is not related to their Permanent Establishment may be subject to Withholding Tax (at the rate of 0%). Withholding tax is a form of Corporate Tax collected at source by the payer on behalf of the recipient of the income. Withholding taxes exist in many tax systems and typically apply to the cross-border payment of dividends, interest, royalties and other types of income.'
        },
        fourth: {
            heading: '4.Who is exempt from Corporate Tax?',
            firstPara: 'Certain types of businesses or organizations are exempt from Corporate Tax given their importance and contribution to the social fabric and economy of the UAE. These are known as Exempt Persons and include:',
        },
    }
    const corporateTaxFirstArray = [corporateTax.first.firstPara, corporateTax.first.secondPara, corporateTax.first.thirdPara, corporateTax.first.fourthPara]

    const corporateTaxSecondArray = [corporateTax.second.firstPara, corporateTax.second.secondPara]

    const corporateTaxThirdArrayList = [corporateTax.third.secondParaListOne, corporateTax.third.secondParaListOne, corporateTax.third.secondParaListThree]

    const corporateTaxThirdArray = [corporateTax.third.thirdPara, corporateTax.third.fourthPara]

    return (
        <div>
            <Grid>
                <Tabs
                    value={mainTabValue}
                    onChange={handleMainTabChange}
                    indicatorColor="primary"
                    textColor="primary"
                    centered
                    sx={{  height: '3rem' }}
                >
                    <Tab label="Corporate tax"  />
                    <Tab label="Value-added tax"  />
                </Tabs>

                {/* Content for Tab 1 */}
                <TabPanel value={mainTabValue} index={0}>
                    <Grid container spacing={4} >
                        <Grid item xs={12} md={7} >
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
                                        }}
                                    >
                                        <Typography variant="h5" sx={{ marginBottom: '1rem' }} id="firstHeading">
                                            {corporateTax.first.heading}
                                        </Typography>
                                        {corporateTaxFirstArray.map((i) => (
                                            <Typography paragraph sx={{ fontWeight: '300', color: 'black' }} key={i}>
                                                {i}
                                            </Typography>
                                        ))}

                                        {/* first para end */}

                                        <Typography variant="h5" sx={{ marginBottom: '1rem' }} id="secondHeading">
                                            {corporateTax.second.heading}
                                        </Typography>
                                        {corporateTaxSecondArray.map((i) => (
                                            <Typography paragraph sx={{ fontWeight: '300', color: 'black' }} key={i}>
                                                {i}
                                            </Typography>
                                        ))}

                                        {/* second para end */}

                                        <Typography variant="h5" sx={{ marginBottom: '1rem' }} id="thirdHeading">
                                            {corporateTax.third.heading}
                                        </Typography>
                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black' }} >
                                            {corporateTax.third.firstPara}
                                        </Typography>
                                        {corporateTaxThirdArrayList.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}
                                        {corporateTaxThirdArray.map((i) => (
                                            <Typography paragraph sx={{ fontWeight: '300', color: 'black' }} key={i}>
                                                {i}
                                            </Typography>
                                        ))}

                                        {/* third para end */}

                                        <Typography variant="h5" sx={{ marginBottom: '1rem' }} id="fourthHeading">
                                            {corporateTax.fourth.heading}
                                        </Typography>
                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black' }} >
                                            {corporateTax.fourth.firstPara}
                                        </Typography>
                                        {/* fourth para end */}

                                    </Box>
                                </React.Fragment>
                            </Typography>
                        </Grid>
                        <Grid className='customGrid' item xs={12} md={4} sx={{ border: '3px black solid', height: '60vh', width: '10rem', marginTop: '2rem', marginLeft: '1rem',  boxShadow: 'rgba(0, 0, 0, 0.24) 0px 3px 8px' }}>
                            <Tabs
                                value={nestedTabValue}
                                onChange={handleNestedTabChange}
                                indicatorColor="primary"
                                textColor="primary"
                                centered
                                // variant=""
                                sx={{ maxWidth: '30rem' }}
                            >
                                <Tab label="Index" sx={{fontWeight : 'bold', color : 'black'}} />
                                {/* <Tab label="Section" /> */}
                                {/* Add other tabs for the Title Tab as needed */}
                            </Tabs>

                            {/* Content for Title Table tab */}
                            <TabPanel value={nestedTabValue} index={0}>
                                <div style={{ maxHeight: '20rem', overflow: 'auto', maxWidth: '25rem', cursor: 'pointer' }}>
                                    <TableContainer component={Paper} >
                                        <Table>
                                            <TableHead>
                                                <TableRow sx={{background : '#CDDCE8'}}>
                                                    <TableCell style={{ width: '5%', textAlign: 'center', fontWeight : 'bold' , fontSize : '18px' }}>S.NO</TableCell>
                                                    <TableCell style={{ width: '40%', fontWeight : 'bold' , fontSize : '18px' }}>TITLE</TableCell>
                                                    {/* <TableCell style={{ width: '15%', textAlign: 'center' }}>Pg #</TableCell> */}
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                <TableRow>
                                                    <TableCell>1</TableCell>
                                                    <TableCell ><a style={{ textDecoration: 'none', fontSize: '1rem' , color : 'black' }} href='#firstHeading'>Introduction</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{background : '#CDDCE8'}}>
                                                    <TableCell>2</TableCell>
                                                    <TableCell ><a style={{ textDecoration: 'none', fontSize: '1rem' , color : 'black' }} href='#secondHeading'>What is Corporate Tax?</a></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell >3</TableCell>
                                                    <TableCell ><a style={{ textDecoration: 'none', fontSize: '1.1rem' , color : 'black' }} href='#thirdHeading'>Who is subject to Corporate Tax?</a></TableCell>
                                                </TableRow>
                                                <TableRow sx={{background : '#CDDCE8'}}>
                                                    <TableCell >4</TableCell>
                                                    <TableCell ><a style={{ textDecoration: 'none', fontSize: '1rem' , color : 'black' }} href='#fourthHeading'>Who is exempt from Corporate Tax?</a></TableCell>
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
            </Grid>
        </div>
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


