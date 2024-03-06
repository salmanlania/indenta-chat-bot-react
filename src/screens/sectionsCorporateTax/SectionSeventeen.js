import React from 'react'
import { Paper, Typography, Table, TableContainer, TableHead, TableBody, TableRow, TableCell } from '@mui/material';

export default function SectionSeventeen() {
    const corporateTax = {
        seventeen: {
            heading: '17.Registering, filing and paying Corporate Tax',
            firstPara: 'All Taxable Persons (including Free Zone Persons) will be required to register for Corporate Tax and obtain a Corporate Tax Registration Number. The Federal Tax Authority may also request certain Exempt Persons to register for Corporate Tax.',
            secondPara: 'Taxable Persons are required to file a Corporate Tax return for each Tax Period within 9 months from the end of the relevant period. The same deadline would generally apply for the payment of any Corporate Tax due in respect of the Tax Period for which a return is filed.',
            thirdPara: 'Illustrated below are examples of the registration, filing and payment deadlines associated for Taxable Persons with a Tax Period (Financial Year) ending on 31 May or 31 December (respectively).  '
        },
    }

    const corporateTaxSeventeenArray = [corporateTax.seventeen.firstPara, corporateTax.seventeen.secondPara, corporateTax.seventeen.thirdPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="seventeenthHeading">
                {corporateTax.seventeen.heading}
            </Typography>

            {corporateTaxSeventeenArray.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}
            <span style={{ border: '1px solid black' }}>EMPTY BOX</span>

            {/* seventeen para end */}
        </div>
    )
}
