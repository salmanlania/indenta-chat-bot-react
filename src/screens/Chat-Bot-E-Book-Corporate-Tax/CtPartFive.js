import React from 'react'
import {Typography } from '@mui/material';

export default function CtPartFive() {

    const ctPartFive = {
        first: {
            heading: '1. Will the income of UAE branches of a UAE business be subject to UAE CT?',
            firstPara: 'Yes. The income of UAE branches will be included in the taxable income and UAE CT return of their UAE “parent” or “head office”.',
        },
        second: {
            heading: '2. Will UAE branches of foreign businesses be subject to UAE CT?',
            firstPara: 'Where no election is made or the income of the foreign branch or permanent establishment is not eligible for an exemption from CT, the UAE CT payable on the income of the foreign branch or permanent establishment can be reduced by the corporate tax (or similar) paid on the relevant income in the foreign jurisdiction.',
        },
        third: {
            heading: '3. Are UAE branches separate juridical persons?',
            firstPara: 'No. UAE branches of a domestic or a foreign juridical person are an extension of their “parent” or “head office” and, therefore, are not considered separate juridical persons',
        },
        fourth: {
            heading: '4. Are UAE branches of a UAE juridical person required to separately register or file for UAE CT?',
            firstPara: 'UAE branches of a UAE juridical person are not required to separately register or file for UAE CT',
        },
        fifth: {
            heading: '5. Will the income of foreign branches of a UAE business be subject to UAE CT? ',
            firstPara: 'The income of foreign branches or foreign permanent establishments of a UAE business will be included in the taxable income and UAE CT return of their UAE “head office”, unless the UAE business elects to claim an exemption for its foreign branch profits. This exemption is available for foreign branch profits that have already been subject to tax in the foreign jurisdiction.',
        },
        sixth: {
            heading: '6. Will a UAE branch constitute a taxable Permanent Establishment for the foreign business? ',
            firstPara: 'A UAE branch of a foreign business would generally be subject to UAE CT, unless the activities of the branch do not give rise to a permanent establishment in the UAE for CT purposes (see section ‘Foreign persons’).',
        },
        seventh: {
            heading: '7. What are preparatory or auxiliary activities?',
            firstPara: 'Preparatory or auxiliary activities are those performed in preparation or in support of more substantive business activities of the foreign entity. Examples of preparatory and auxiliary activities include storage, display or delivery of goods or merchandise belonging to the foreign entity, limited marketing and promotional activities, performing market research and attending seminars or conventions.',
            secondPara: 'Where relevant, the application of an international agreement for the avoidance of double taxation should be taken into consideration when determining whether a permanent establishment exists or whether the activities performed are preparatory or auxiliary in nature.',
        },
    }

    const ctPartFiveArrayFirst = [ctPartFive.seventh.firstPara, ctPartFive.seventh.secondPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                {ctPartFive.first.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFive.first.firstPara}
            </Typography>

            {/* ctPartFive first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                {ctPartFive.second.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFive.second.firstPara}
            </Typography>

            {/* ctPartFive second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                {ctPartFive.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFive.third.firstPara}
            </Typography>

            {/* ctPartFive third end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                {ctPartFive.fourth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFive.fourth.firstPara}
            </Typography>

            {/* ctPartFive fourth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                {ctPartFive.fifth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFive.fifth.firstPara}
            </Typography>

            {/* ctPartFive fifth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                {ctPartFive.sixth.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartFive.sixth.firstPara}
            </Typography>

            {/* ctPartFive sixth end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                {ctPartFive.seventh.heading}
            </Typography>

            {ctPartFiveArrayFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartFive seventh end  */}
        </div>
    )
}
