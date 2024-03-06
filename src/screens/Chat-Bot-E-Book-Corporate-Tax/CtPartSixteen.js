import React from 'react'
import { Typography } from '@mui/material';

export default function CtPartSixteen() {

    const ctPartSixteen = {
        first: {
            heading: '1. How will the UAE CT regime apply to partnerships?',
            firstPara: 'The Corporate Tax Law makes a distinction between unincorporated and incorporated partnerships.',
            secondPara: '“Unincorporated Partnerships” (as defined in the Corporate Tax Law) are essentially a contractual relationship or arrangement between two or more persons, as opposed to being a distinct juridical person separate from their partners / members. Unincorporated partnerships are treated as ‘transparent’ for UAE CT purposes. This means that an unincorporated partnership is not subject to UAE CT in its own right. Instead, each partner is subject to UAE CT on their share of the income from the business conducted through the partnership.',
            thirdPara: 'Incorporated partnerships include limited liability partnerships, partnerships limited by shares and other types of partnerships where none of the partners have unlimited liability for the partnership’s obligations or other partners` actions. Such partnerships are subject to CT in the same manner as a corporate entity (see section ‘Juridical persons’).',
        },
        second: {
            heading: '2. Will each partner in an “unincorporated” partnership be required to register and file a UAE CT return?',
            firstPara: 'Natural persons that are engaged in a business or business activity through an unincorporated partnership are individually subject to UAE CT on their share of the income from the unincorporated partnership. Each partner would be required to register for UAE CT purposes, and comply with the requirements of the Corporate Tax Law.',
            secondtPara: 'The partners in an unincorporated partnership can make an application to the Federal Tax Authority for the unincorporated partnership to be treated as a separate and standalone taxable person for the purposes of UAE CT. If the application is approved, the unincorporated partnership will file a CT return on behalf of the partners in the partnership.',
        },
        third: {
            heading: '3. How will foreign partnerships be treated under the Corporate Tax Law?',
            firstPara: 'For UAE CT purposes, a foreign partnership will generally be considered as an Unincorporated Partnership subject to meeting certain conditions, including that the partnership is not subject to tax in the relevant foreign jurisdiction (see question ‘How will the UAE CT regime apply to partnerships?’ under section Partnerships).',
        },
    }

    const ctPartSixteenArrayFirst = [ctPartSixteen.first.firstPara, ctPartSixteen.first.secondtPara, ctPartSixteen.first.thirdPara]

    const ctPartSixteenArraySecond = [ctPartSixteen.second.firstPara, ctPartSixteen.second.secondtPara]

    return (
        <div>
            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                {ctPartSixteen.first.heading}
            </Typography>

            {ctPartSixteenArrayFirst.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSixteen first end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                {ctPartSixteen.second.heading}
            </Typography>

            {ctPartSixteenArraySecond.map((i) => (
                <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                    {i}
                </Typography>
            ))}

            {/* ctPartSixteen second end  */}

            <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                {ctPartSixteen.third.heading}
            </Typography>

            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                {ctPartSixteen.third.firstPara}
            </Typography>

            {/* ctPartSixteen third end  */}
        </div>
    )
}
