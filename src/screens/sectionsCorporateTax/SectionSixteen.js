import React from 'react'
import {Typography} from '@mui/material';

export default function SectionSixteen() {
    const corporateTax = {
        sixteen: {
            firstPara: 'To determine the Taxable Income of a Tax Group, the parent company must prepare consolidated financial accounts covering each subsidiary that is a member of the Tax Group for the relevant Tax Period. Transactions between the parent company and each group member and transactions between the group members would be eliminated for the purposes of calculating the Taxable Income of the Tax Group.'
        },
    }

    return (
        <div>
            <Typography paragraph sx={{ fontWeight: '300', color: 'black', fontSize: '14px', padding: '0' }} >
                {corporateTax.sixteen.firstPara}
            </Typography>

            {/* sixteen para end */}
        </div>
    )
}
