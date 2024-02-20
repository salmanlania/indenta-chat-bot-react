import React, { useState } from 'react';
import { Tabs, Tab, Paper, Typography, Box, Table, TableContainer, TableHead, TableBody, TableRow, TableCell, Grid, List, ListItem, ListItemText, } from '@mui/material';
import CssBaseline from '@mui/material/CssBaseline';
import ChatApp from '../ChatApp/ChatApp';
import './LawBook.css'

const LawBook = () => {
    const [mainTabValue, setMainTabValue] = useState(0);
    const [nestedTabValue, setNestedTabValue] = useState(0);

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
            secondPara: 'In addition to not being subject to Corporate Tax, Government Entities, Government Controlled Entities that are specified in a Cabinet Decision, Extractive Businesses and NonExtractive Natural Resource Businesses may also be exempted from any registration, filing and other compliance obligations imposed by the Corporate Tax Law, unless they engage in an activity which is within the charge of Corporate Tax.'
        },
        fifth: {
            heading: '5.How is a Taxable Person subject to Corporate Tax?',
            firstPara: 'In line with the tax regimes of most countries, the Corporate Tax Law taxes income on both a residence and source basis. The applicable basis of taxation depends on the classification of the Taxable Person.',
            secondPara: '●A “Resident Person” is taxed on income derived from both domestic and foreign sources (i.e. a residence basis).',
            thirdPara: '●A “Non-Resident Person” will be taxed only on income derived from sources within the UAE (i.e. a source basis). ',
            fourthPara: 'Residence for Corporate Tax purposes is not determined by where a person resides or is domiciled but instead by specific factors that are set out in the Corporate Tax Law.  If a Person does not satisfy the conditions for being either a Resident or a Non-Resident person then they will not be a Taxable Person and will not therefore be subject to Corporate Tax.'
        },
        sixth: {
            heading: '6.Who is a Resident Person?',
            firstPara: 'Companies and other juridical persons that are incorporated or otherwise formed or recognised under the laws of the UAE will automatically be considered a Resident Person for Corporate Tax purposes. This covers juridical persons incorporated in the UAE under either mainland legislation or applicable Free Zone regulations, and would also include juridical persons created by a specific statute (e.g. by a special decree).',
            secondPara: 'Foreign companies and other juridical persons may also be treated as Resident Persons for Corporate Tax purposes where they are effectively managed and controlled in the UAE. This shall be determined with regard to the specific circumstances of the entity and its activities, with a determining factor being where key management and commercial decisions are in substance made.',
            thirdPara: 'Natural persons will be subject to Corporate Tax as a “Resident Person” on income from both domestic and foreign sources, but only insofar as such income is derived from a Business or Business Activity conducted by the natural person in the UAE. Any other income earned by a natural person would not be within the scope of Corporate Tax.'
        },
        seventh: {
            heading: '7.Who is a Non-Resident Person?',
            firstPara: 'Non-Resident Persons are juridical persons who are not Resident Persons and: ',
            secondPara: '●have a Permanent Establishment in the UAE; or',
            thirdPara: '●derive State Sourced Income.',
            fourthPara: 'Non-Resident Persons will be subject to Corporate Tax on Taxable Income that is attributable to their Permanent Establishment (which is explained under Section 8). Certain UAE sourced income of a Non-Resident Person that is not attributable to a Permanent Establishment in the UAE will be subject to Withholding Tax at the rate of 0%.'
        },
        eighth: {
            heading: '8.What is a Permanent Establishment?',
            firstPara: 'The concept of Permanent Establishment is an important principle of international tax law used in corporate tax regimes across the world. The main purpose of the Permanent Establishment concept in the UAE Corporate Tax Law is to determine if and when a foreign person has established sufficient presence in the UAE to warrant the business profits of that foreign person to be subject to Corporate Tax.',
            secondPara: 'The definition of Permanent Establishment in the Corporate Tax Law has been designed on the basis of the definition provided in Article 5 of the OECD Model Tax Convention on Income and Capital and the position adopted by the UAE under the Multilateral Instrument to Implement Tax Treaty Related Measures to Prevent Base Erosion and Profit Shifting. This allows foreign persons to use the relevant Commentary of Article 5 of the OECD Model Tax Convention when assessing whether they have a Permanent Establishment or not in the UAE. This assessment should consider the provisions of any bilateral tax agreement between the country of residence of the Non-Resident Person and the UAE.',
        },
        ninth: {
            heading: '9.What is Corporate Tax imposed on? ',
            firstPara: 'Corporate Tax is imposed on Taxable Income earned by a Taxable Person in a Tax Period. Corporate Tax would generally be imposed annually, with the Corporate Tax liability calculated by the Taxable Person on a self-assessment basis. This means that the calculation and payment of Corporate Tax is done through the filing of a Corporate Tax Return with the Federal Tax Authority by the Taxable Person.',
            secondPara: 'The definition of Permanent Establishment in the Corporate Tax Law has been designed on the basis of the definition provided in Article 5 of the OECD Model Tax Convention on IThe starting point for calculating Taxable Income is the Taxable Person’s accounting income (i.e. net profit or loss before tax) as per their financial statements. The Taxable Person will then need to make certain adjustments to determine their Taxable Income for the relevant Tax Period. For example, adjustments to accounting income may need to be made for income that is exempt from Corporate Tax and for expenditure that is wholly or partially non-deductible for Corporate Tax purposes.',
        },
        tenth: {
            heading: '10.What income is exempt?',
            firstPara: 'The Corporate Tax Law also exempts certain types of income from Corporate Tax. This means that a Taxable Persons will not be subject to Corporate Tax on such income and cannot claim a deduction for any related expenditure. Taxable Persons who earn exempt income will remain subject to Corporate Tax on their Taxable Income.',
            secondPara: 'The main purpose of certain income being exempt from Corporate Tax is to prevent double taxation on certain types of income. Specifically, dividends and capital gains earned from domestic and foreign shareholdings will generally be exempt from Corporate Tax. Furthermore, a Resident Person can elect, subject to certain conditions, to not take into account income from a foreign Permanent Establishment for UAE Corporate Tax purposes. ',
        },
        eleventh: {
            heading: '11.What expenses are deductible? ',
            firstPara: 'In principle, all legitimate business expenses incurred wholly and exclusively for the purposes of deriving Taxable Income will be deductible, although the timing of the deduction may vary for different types of expenses and the accounting method applied. For capital assets, expenditure would generally be recognized by way of depreciation or amortization deductions over the economic life of the asset or benefit.',
            secondPara: 'Expenditure that has a dual purpose, such as expenses incurred for both personal and business purposes, will need to be apportioned with the relevant portion of the expenditure treated as deductible if incurred wholly and exclusively for the purpose of the taxable person’s business.',
            thirdPara: 'Certain expenses which are deductible under general accounting rules may not be fully deductible for Corporate Tax purposes. These will need to be added back to the Accounting Income for the purposes of determining the Taxable Income. Examples of expenditure that is or may not be deductible (partially or in full) include:'
        },
        twelve: {
            heading: '12.What is the Corporate Tax rate?',
            firstPara: 'Corporate Tax will be levied at a headline rate of 9% on Taxable Income exceeding AED 375,000. Taxable Income below this threshold will be subject to a 0% rate of Corporate Tax. '
        },
        thirteen: {
            heading: '13.What is the Withholding Tax rate?',
            firstPara: 'A 0% withholding tax may apply to certain types of UAE sourced income paid to non residents. Because of the 0% rate, in practice, no withholding tax would be due and there will be no withholding tax related registration and filing obligations for UAE businesses or foreign recipients of UAE sourced income.',
            secondPara: 'Withholding tax does not apply to transactions between UAE resident persons'
        },
        fourteen: {
            heading: '14.When can a Free Zone Person be a Qualifying Free Zone Person?',
            firstPara: 'A Free Zone Person that is a Qualifying Free Zone Person can benefit from a preferential Corporate Tax rate of 0% on their “Qualifying Income” only. ',
            secondPara: 'In order to be considered a Qualifying Free Zone Person, the Free Zone Person must:',
            thirdPara: '●maintain adequate substance in the UAE;',
            fourthPara: '●not have made an election to be subject to Corporate Tax at the standard rates; and',
            fifthPara: '●comply with the transfer pricing requirements under the Corporate Tax Law. ',
            sixthPara: 'The Minister may prescribe additional conditions that a Qualifying Free Zone Person must meet.',
            seventhPara: 'If a Qualifying Free Zone Person fails to meet any of the conditions, or makes an election to be subject to the regular Corporate Tax regime, they will be subject to the standard rates of Corporate Tax from the beginning of the Tax Period where they failed to meet the conditions.',
        },
        fifteen: {
            heading: '15.What are Tax Groups, and when can they be formed?',
            firstPara: 'Two or more Taxable Persons who meet certain conditions (see below) can apply to form a “Tax Group” and be treated as a single Taxable Person for Corporate Tax purposes.',
            secondPara: 'To form a Tax Group, both the parent company and its subsidiaries must be resident juridical persons, have the same Financial Year and prepare their financial statements using the same accounting standards.',
            thirdPara: 'Additionally, to form a Tax Group, the parent company must: ',
            fourthPara: '●own at least 95% of the share capital of the subsidiary; ',
            fifthPara: '●hold at least 95% of the voting rights in the subsidiary; and ',
            sixthPara: '●is entitled to at least 95% of the subsidiary’s profits and net assets.',
            seventhPara: 'The ownership, rights and entitlement can be held either directly or indirectly through subsidiaries, but a Tax Group cannot include an Exempt Person or Qualifying Free Zone Person.',
        },
        sixteen: {
            heading: '16. How to calculate the Taxable Income of a Tax Group?',
            firstPara: 'To determine the Taxable Income of a Tax Group, the parent company must prepare consolidated financial accounts covering each subsidiary that is a member of the Tax Group for the relevant Tax Period. Transactions between the parent company and each group member and transactions between the group members would be eliminated for the purposes of calculating the Taxable Income of the Tax Group.'
        },
        seventeen: {
            heading: '17.Registering, filing and paying Corporate Tax',
            firstPara: 'All Taxable Persons (including Free Zone Persons) will be required to register for Corporate Tax and obtain a Corporate Tax Registration Number. The Federal Tax Authority may also request certain Exempt Persons to register for Corporate Tax.',
            secondPara: 'Taxable Persons are required to file a Corporate Tax return for each Tax Period within 9 months from the end of the relevant period. The same deadline would generally apply for the payment of any Corporate Tax due in respect of the Tax Period for which a return is filed.',
            thirdPara: 'Illustrated below are examples of the registration, filing and payment deadlines associated for Taxable Persons with a Tax Period (Financial Year) ending on 31 May or 31 December (respectively).  '
        },
        eighteen: {
            heading: '18.How to prepare for Corporate Tax?',
            firstPara: '1.Read the Corporate Tax Law and the supporting information available on the websites of the Ministry of Finance and the Federal Tax Authority. ',
            secondPara: '2.Use the available information to determine whether your business will be subject to Corporate Tax and if so, from what date.',
            thirdPara: '3.Understand the requirements for your business under the Corporate Tax Law, including, for example:',
            fourthPara: 'a.Whether and by when your business needs to register for Corporate Tax;',
            fifthPara: 'b.What is the accounting / Tax Period for your business; ',
            sixthPara: 'c.By when your business would need to file a Corporate Tax return;',
            seventhPara: ' d.What elections or applications your business may or should make for Corporate Tax purposes; ',
            eighthPara: 'e.What financial information and records your business will need to keep for Corporate Tax purposes;'
        },
    }

    const corporateTaxFirstArray = [corporateTax.first.firstPara, corporateTax.first.secondPara, corporateTax.first.thirdPara, corporateTax.first.fourthPara]

    const corporateTaxSecondArray = [corporateTax.second.firstPara, corporateTax.second.secondPara]

    const corporateTaxThirdArrayList = [corporateTax.third.secondParaListOne, corporateTax.third.secondParaListOne, corporateTax.third.secondParaListThree]

    const corporateTaxThirdArray = [corporateTax.third.thirdPara, corporateTax.third.fourthPara]

    const corporateTaxfifthArray = [corporateTax.fifth.firstPara, corporateTax.fifth.secondPara, corporateTax.fifth.thirdPara, corporateTax.fifth.fourthPara]

    const corporateTaxSixthArray = [corporateTax.sixth.firstPara, corporateTax.sixth.secondPara, corporateTax.sixth.thirdPara]

    const corporateTaxSeventhArray = [corporateTax.fifth.firstPara, corporateTax.fifth.secondPara, corporateTax.fifth.thirdPara, corporateTax.fifth.fourthPara]

    const corporateTaxEighthArray = [corporateTax.eighth.firstPara, corporateTax.eighth.secondPara, corporateTax.eighth.thirdPara]

    const corporateTaxNinthArray = [corporateTax.ninth.firstPara, corporateTax.ninth.secondPara, corporateTax.ninth.thirdPara]

    const corporateTaxTenthArray = [corporateTax.tenth.firstPara, corporateTax.tenth.secondPara, corporateTax.tenth.thirdPara]

    const corporateTaxEleventhArray = [corporateTax.eleventh.firstPara, corporateTax.eleventh.secondPara, corporateTax.eleventh.thirdPara]

    const corporateTaxThirteenArray = [corporateTax.thirteen.firstPara, corporateTax.thirteen.secondPara]

    const corporateTaxFourteennArray = [corporateTax.fourteen.firstPara, corporateTax.fourteen.secondPara, corporateTax.fourteen.thirdPara, corporateTax.fourteen.fourthPara, corporateTax.fourteen.fifthPara, corporateTax.fourteen.sixthPara, corporateTax.fourteen.seventhPara]

    const corporateTaxFifteennArray = [corporateTax.fourteen.firstPara, corporateTax.fourteen.secondPara, corporateTax.fourteen.thirdPara, corporateTax.fourteen.fourthPara, corporateTax.fifteen.fifthPara, corporateTax.fifteen.sixthPara, corporateTax.fifteen.seventhPara]

    const corporateTaxSeventeenArray = [corporateTax.seventeen.firstPara, corporateTax.seventeen.secondPara, corporateTax.seventeen.thirdPara]

    const corporateTaxEighteenArray = [corporateTax.eighteen.firstPara, corporateTax.eighteen.secondPara, corporateTax.eighteen.thirdPara, corporateTax.eighteen.fourthPara, corporateTax.eighteen.fifthPara, corporateTax.sixth.sixthPara, corporateTax.eighteen.seventhPara, corporateTax.eighteen.eighthPara]

    const ct = {
        first: {
            heading: '1. What is CT?',
            firstPara: 'CT is a form of direct tax levied on the net income or profit of corporations and other businesses. CT is sometimes also referred to as “Corporate Income Tax” or “Business Profits Tax” in other jurisdictions.',
        },
        second: {
            heading: '2. Why is the UAE introducing CT?',
            firstPara: 'A competitive CT regime based on international best practices is expected to cement the UAE’s position as a leading global hub for business and investment and accelerate the UAE’s development and transformation to achieve its strategic objectives.',
        },
        third: {
            heading: '3. Is the UAE the first country to introduce CT?',
            firstPara: 'Most countries in the world have a comprehensive CT regime, including most of the countries in the Middle East.a',
        },
        fourth: {
            heading: '4. When will the UAE CT regime become effective? ',
            firstPara: 'The UAE CT regime will become effective for financial years starting on or after 1 June 2023.',
            secondPara: 'Examples',
            thirdPara: '● A business that has a financial year starting on 1 July 2023 and ending on 30 June 2024 will become subject to UAE CT from 1 July 2023 (which is the beginning of the first financial year that starts on or after 1 June 2023)',
            fourthPara: '● A business that has a financial year starting on 1 January 2023 and ending on 31 December 2023 will become subject to UAE CT from 1 January 2024 (which is the beginning of the first financial year that starts on or after 1 June 2023)'
        },
        fifth: {
            heading: '5. Who will be subject to UAE CT?',
            firstPara: 'UAE CT applies to juridical persons incorporated in the UAE and juridical persons effectively managed and controlled in the UAE, as well as to foreign juridical persons that have a permanent establishment (see section Foreign persons) in the UAE (see question ‘Who is considered resident for UAE CT purposes?’ under section Scope and rate). Individuals will be subject to CT only if they are engaged in a business or business activity in the UAE, either directly or through an unincorporated partnership or sole proprietorship. A Cabinet Decision will be issued in due course specifying further information on what would bring a natural person within the scope of UAE CT.',
        },
        sixth: {
            heading: '6. Will UAE entities owned by UAE or GCC nationals be subject to UAE CT?',
            firstPara: 'Yes – the UAE CT does not differentiate between nationality or residence. Juridical persons that are incorporated or resident in the UAE, or that have a permanent establishment in the UAE, will be subject to UAE CT. This applies irrespective of the residence and nationality of the individual founders or (ultimate) owners of the entity.',
        },
        seventh: {
            heading: '7. Will UAE CT be applicable to businesses in each Emirate?',
            firstPara: 'Yes. The UAE CT is a Federal tax and will therefore apply across all the Emirates.',
        },
        eighth: {
            heading: '8. Will I have to pay UAE CT alongside Emirate level taxes?',
            firstPara: 'Businesses engaged in the extraction of the UAE’s natural resources and in certain non extractive activities that are subject to Emirate level taxation will be outside the scope of UAE CT, subject to meeting certain conditions. Other businesses may be subject to both Federal CT and Emirate level taxation. Emirate level taxes paid will not be able to be credited against or otherwise reduce the amount of Federal CT payable.',
        },
        ninth: {
            heading: '9. Will UAE CT replace VAT in the UAE?',
            firstPara: 'No, CT and VAT are two different types of taxes. Both will continue to apply in the UAE. ',
        },
        tenth: {
            heading: '10. Will I have to pay UAE CT alongside VAT in the UAE?',
            firstPara: 'If you are a registered business for VAT, you will have to pay VAT and CT separately. If your business is not VAT registered you may still have to pay CT. '
        },
        eleventh: {
            heading: '11. Will I continue to pay service fees to local and Federal Governments now that the UAE has introduced CT?',
            firstPara: 'Yes. Applicable service fees will continue to be payable to the relevant Emirate and Federal Governments. Business set up, licence renewal and other Government fees and charges incurred wholly and exclusively in the ordinary course of business are deductible expenses for UAE CT purposes.',
        },
        twelveth: {
            heading: '12. Will UAE CT replace Excise Tax in the UAE? ',
            firstPara: 'No, CT and Excise Tax are two different types of taxes. Both will continue to apply in the UAE.',
        },
        thirteen: {
            heading: '13. Will I need to consider the UAE’s international agreements for UAE CT purposes?',
            firstPara: 'In-force International agreements (including international agreements for the avoidance of double taxation) to which the UAE is a party should be considered under the UAE CT regime. In case of a conflict between the Corporate Tax Law and an international agreement with respect to the right to tax a certain item of income, the relevant international agreement may limit the application of UAE CT.',
        },
        fourteen: {
            heading: '14. What will be the role of the Federal Tax Authority?',
            firstPara: 'The Federal Tax Authority will be responsible for the administration, collection and enforcement of UAE CT and other federal taxes. For the purpose of the administration, collection and enforcement of CT, the Federal Tax Authority will issue guides, respond to clarifications and provide awareness as required.',
        },
        fifteen: {
            heading: '15. What will be the role of the Ministry of Finance? ',
            firstPara: 'The Ministry of Finance will remain the ‘competent authority’ for purposes of bilateral/multilateral tax agreements and the international exchange of information for tax purposes. The Ministry of Finance also has the authority to issue further guidance and implementing regulations for UAE CT and other federal taxes.',
        },
        sixteen: {
            heading: '16. What should I be doing to prepare for UAE CT? ',
            firstPara: 'To assess what the UAE CT regime means for your business, as a starting point, you should: ',
        },
    }

    const ctFirst = [ct.fourth.firstPara, ct.fourth.secondPara, ct.fourth.thirdPara, ct.fourth.fourthPara]

    const ctPartThree = {
        first: {
            heading: '1. I am already registered for VAT purposes. Do I have to register for UAE CT?',
            firstPara: 'Yes. Taxpayers will be required to register for UAE CT (and update their details, if required), even if they are already registered for VAT.',
        },
        second: {
            heading: '2. What is a self-assessment regime? ',
            firstPara: 'A self-assessment regime is one where taxpayers are responsible for calculating, reporting and paying their taxes.',
        },
        third: {
            heading: '3. Who will be required to register for UAE CT purposes?',
            firstPara: 'All taxpayers, as prescribed by the Minister, will be required to register for UAE CT and obtain a Corporate Tax Registration Number. The Federal Tax Authority may also request certain Exempt Persons to register for UAE CT.',
        },
        fourth: {
            heading: '4. When do I register for UAE CT? ',
            firstPara: 'Taxpayers are required to register before they file their first CT return.',
        },
        fifth: {
            heading: '5. Is there a registration threshold for UAE CT?',
            firstPara: 'There is no registration threshold for UAE CT.',
        },
        sixth: {
            heading: '6. How do I register for UAE CT?',
            firstPara: 'Taxpayers will be able to electronically register for UAE CT through the website of the Federal Tax Authority. Further guidance on this will be provided in due course.',
        },
        seventh: {
            heading: '7. How often will UAE businesses need to file a UAE CT return?',
            firstPara: 'Only one UAE CT return will need to be filed per Tax Period. The CT return will generally be due within 9 months following the end of the Tax Period. No provisional or advance UAE CT filings will be required.',
        },
        eighth: {
            heading: '8. I do not have any income / or my company is dormant, do I have to complete a UAE CT return?',
            firstPara: 'Taxpayers are required to file a CT return, irrespective of the level of income or the status of the company.',
        },
        ninth: {
            heading: '9. I did not make a profit for the Tax Period, do I have to complete a UAE CT return?',
            firstPara: 'Taxpayers are required to file a CT return, irrespective of whether they have made a profit or not. Taxpayers with tax losses should ensure they file a CT return in order to ensure that these losses can be used to reduce taxable income of future years.',
        },
        tenth: {
            heading: '10. Can I file one UAE CT return for all the companies I own?',
            firstPara: 'If the companies meet the requirements to form a Tax Group (see section ‘Tax Groups’) and their application to form a Tax Group is approved, they can file a single UAE CT return covering all the members of the Tax Group.',
            secondPara: 'Where companies cannot form a Tax Group, they will each be required to file a UAE CT return on a standalone basis.'
        },
        eleventh: {
            heading: '11. Will the CT return need to be filed electronically?',
            firstPara: 'UAE CT returns will need to be filed electronically. Further guidance on this will be provided in due course.',
        },
        twelveth: {
            heading: '12. When do I need to pay my UAE CT liability?',
            firstPara: 'UAE CT will generally need to be paid before the end of the 9 months following the end of the relevant Tax Period.',
        },
        thirteen: {
            heading: '13. How do I pay my UAE CT liability?',
            firstPara: 'Further guidance on the approved payment methods will be provided in due course.',
        },
        fourteen: {
            heading: '14. Will there be a requirement to pay UAE CT in advance?',
            firstPara: 'No. UAE businesses will not be required to make advance UAE CT payments. The CT liability for a Tax Period will generally be due for payment by the end of the 9th month following the end of the relevant Tax Period.',
        },
        fifteen: {
            heading: '15. Are there any consequences for non-compliance under the UAE CT regime?',
            firstPara: 'Similar to other taxes in the UAE (e.g. VAT), businesses will be subject to penalties for non compliance with the UAE CT regime.',
        },
    }

    const ctPartFour = {
        first: {
            heading: '1. Will the UAE CT regime tax large multinationals at the global minimum tax rate?',
            firstPara: 'The UAE is a member of the OECD BEPS Inclusive Framework and is committed to addressing the challenges faced by tax jurisdictions internationally. As such, the introduction of a CT regime helps to provide the UAE with a framework to adopt the Pillar Two rules.',
            secondPara: 'Until such time as the Pillar Two rules are adopted by the UAE, multinationals will be subject to CT under the regular UAE CT regime.',
            thirdPara: 'Further information will be released in due course on the implementation of the Pillar Two rules in the UAE.'
        },
        second: {
            heading: '2. What is meant by “large” multinationals?',
            firstPara: 'A multinational corporation is a corporation that operates in its home country, as well as in other countries through a foreign subsidiaries, branches or other entity forms of presence / registration. Merely earning foreign sourced income from outside its home country without a foreign presence or registration in a foreign country would not make a business a multinational corporation.',
            secondPara: 'In the context of the global minimum effective tax rate as proposed under ‘Pillar Two’ of the OECD Base Erosion and Profit Shifting project, ”large” refers to a multinational corporation that has consolidated global revenues in excess of the UAE Dirham equivalent of EUR 750 million.'
        },
    }

    const ctPartFourArrayFirst = [ctPartFour.first.firstPara, ctPartFour.first.secondPara, ctPartFour.first.thirdPara]

    const ctPartFourArraySecond = [ctPartFour.second.firstPara, ctPartFour.second.secondPara]

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
                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="firstHeading">
                                            {corporateTax.first.heading} <a href='#comeToBottom'>Go To Bottom</a>
                                        </Typography>
                                        {corporateTaxFirstArray.map((i) => (
                                            <Typography paragraph sx={{ fontWeight: '300', color: 'black', fontSize: '14px' }} key={i}>
                                                {i}
                                            </Typography>
                                        ))}

                                        {/* first para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="secondHeading">
                                            {corporateTax.second.heading}
                                        </Typography>
                                        {corporateTaxSecondArray.map((i) => (
                                            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} key={i}>
                                                {i}
                                            </Typography>
                                        ))}

                                        {/* second para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="thirdHeading">
                                            {corporateTax.third.heading}
                                        </Typography>
                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {corporateTax.third.firstPara}
                                        </Typography>
                                        {corporateTaxThirdArrayList.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText sx={{ fontSize: '14px' }}>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}
                                        {corporateTaxThirdArray.map((i) => (
                                            <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} key={i}>
                                                {i}
                                            </Typography>
                                        ))}

                                        {/* third para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="fourthHeading">
                                            {corporateTax.fourth.heading}
                                        </Typography>
                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {corporateTax.fourth.firstPara}
                                        </Typography>
                                        <TableContainer component={Paper}>
                                            <Table>
                                                <TableHead>
                                                    <TableRow>
                                                        <TableCell sx={{ fontWeight: '600', border: '2px solid #000', fontSize: '14px' }}>Automatically exempt</TableCell>
                                                        <TableCell sx={{ border: '2px solid #000', maxWidth: '150px', fontSize: '14px' }}>
                                                            <li>Government Entities </li>
                                                            <li>Government Controlled Entities that are specified in a Cabinet Decision </li>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableHead>
                                                <TableBody>
                                                    {/* Row 1 */}
                                                    <TableRow>
                                                        <TableCell sx={{ border: '2px solid #000', maxWidth: '140px', fontSize: '14px' }}>Exempt if notified to the Ministry of Finance (and subject to meeting certain conditions)  </TableCell>
                                                        <TableCell sx={{ border: '2px solid #000', maxWidth: '160px', fontSize: '14px' }}>
                                                            <ul>
                                                                <li>Extractive Businesses</li>
                                                                <li>Non-Extractive Natural Resource Businesses</li>
                                                            </ul>
                                                        </TableCell>
                                                    </TableRow>

                                                    {/* Row 2 */}
                                                    <TableRow>
                                                        <TableCell sx={{ border: '2px solid #000', fontWeight: '600', fontSize: '14px' }}>Exempt if listed in a Cabinet Decision </TableCell>
                                                        <TableCell sx={{ border: '2px solid #000', fontSize: '14px' }}>
                                                            <li>Qualifying Public Benefit Entities</li>
                                                        </TableCell>
                                                    </TableRow>

                                                    {/* Row 3 */}
                                                    <TableRow>
                                                        <TableCell sx={{ border: '2px solid #000', maxWidth: '70px', fontSize: '14px' }}>Exempt if applied to and approved by the Federal Tax Authority (and subject to meeting certain conditions)</TableCell>
                                                        <TableCell sx={{ border: '2px solid #000', maxWidth: '100px', fontSize: '14px' }}>
                                                            <li>Public or private pension and social security funds </li>
                                                            <li>Qualifying Investment Funds </li>
                                                            <li>Wholly-owned and controlled UAE subsidiaries of a Government Entity, a Government Controlled Entity, a Qualifying Investment Fund, or a public or private pension or social security fund.</li>
                                                        </TableCell>
                                                    </TableRow>
                                                </TableBody>
                                            </Table>
                                        </TableContainer>
                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '3rem', fontSize: '14px', padding: '0' }} >
                                            {corporateTax.fourth.secondPara}
                                        </Typography>

                                        {/* fourth para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', padding: '0', fontWeight: 'bold' }} id="fifthHeading">
                                            {corporateTax.fifth.heading}
                                        </Typography>

                                        {corporateTaxfifthArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* fifth para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="sixthHeading">
                                            {corporateTax.sixth.heading}
                                        </Typography>

                                        {corporateTaxSixthArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem sx={{ fontSize: '14px' }}>
                                                    <ListItemText sx={{ fontSize: '14px !important' }}>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* sixth para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="seventhHeading">
                                            {corporateTax.seventh.heading}
                                        </Typography>

                                        {corporateTaxSeventhArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* seventh para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="eighthHeading">
                                            {corporateTax.eighth.heading}
                                        </Typography>

                                        {corporateTaxEighthArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* eight para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="ninthHeading">
                                            {corporateTax.ninth.heading}
                                        </Typography>

                                        {corporateTaxNinthArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* ninth para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="tenthHeading">
                                            {corporateTax.tenth.heading}
                                        </Typography>

                                        {corporateTaxTenthArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* tenth para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="eleventhHeading">
                                            {corporateTax.eleventh.heading}
                                        </Typography>

                                        {corporateTaxEleventhArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell sx={{ fontWeight: '600', border: '2px solid #000', background: 'yellow', fontSize: '14px' }}>Types Of Expenditures </TableCell>
                                                    <TableCell sx={{ border: '2px solid #000', fontWeight: '600', background: 'yellow', fontSize: '14px' }}>Limitation to deductibility</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {/* Row 1 */}
                                                <TableRow>
                                                    <TableCell sx={{ border: '2px solid #000', maxWidth: '140px', fontSize: '14px' }}>
                                                        <ul>
                                                            <li>Bribes</li>
                                                            <li>Fines and penalties (other than amounts awarded as compensation for damages or breach of contract). </li>
                                                            <li>Donations, grants, or gifts made to an entity that is not a Qualifying Public Benefit Entity.</li>
                                                            <li>Dividends and other profits distributions.</li>
                                                            <li>Corporate Tax imposed under the Corporate Tax Law</li>
                                                            <li>Expenditure not incurred wholly and exclusively for the purposes of the Taxable person’s Business.</li>
                                                            <li>Expenditure incurred in deriving income that is exempt from Corporate Tax.</li>
                                                        </ul>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '2px solid #000', maxWidth: '160px', margin: '0', textAlign: 'start', position: 'relative', bottom: '12rem', fontSize: '14px' }}>No deduction</TableCell>
                                                </TableRow>

                                                {/* Row 2 */}
                                                <TableRow>
                                                    <TableCell sx={{ border: '2px solid #000', fontWeight: '600', fontSize: '14px' }}>
                                                        <ol>
                                                            <li>lient entertainment expenditure</li>
                                                        </ol>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '2px solid #000' }}>Partial deduction of 50% of the amount of the expenditure</TableCell>
                                                </TableRow>

                                                {/* Row 3 */}
                                                <TableRow>
                                                    <TableCell sx={{ border: '2px solid #000', maxWidth: '70px', fontSize: '14px' }}>
                                                        <ol>
                                                            <li style={{ opacity: '0' }}></li>
                                                            <li style={{ position: 'relative', bottom: '50px', marginLeft: '10px' }}>Interest expenditure</li>
                                                        </ol>
                                                    </TableCell>
                                                    <TableCell sx={{ border: '2px solid #000', maxWidth: '100px' }}>Deduction of net interest expenditure exceeding a certain de minimis threshold upto 30% of the amount of earnings before the deduction of interest, tax, depreciation and amortization (except for certain activities)</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>

                                        {/* eleventh para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '3rem', fontWeight: 'bold' }} id="twelvethHeading">
                                            {corporateTax.twelve.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {corporateTax.twelve.firstPara} <br />
                                            Corporate Tax will be charged on Taxable Income as follows:
                                        </Typography>

                                        <Table>
                                            <TableHead>
                                                <TableRow>
                                                    <TableCell sx={{ fontWeight: '600', border: '2px solid #000', background: 'yellow', fontSize: '14px' }}>Resident Taxable Persons</TableCell>
                                                </TableRow>
                                            </TableHead>
                                            <TableBody>
                                                {/* Row 1 */}
                                                <TableRow>
                                                    <TableCell sx={{ border: '2px solid #000', maxWidth: '140px', fontSize: '14px' }}>Taxable Income not exceeding AED 375,000 (this amount is to be confirmed in a Cabinet Decision)</TableCell>
                                                    <TableCell sx={{ border: '2px solid #000', maxWidth: '160px', fontSize: '14px', margin: '0', textAlign: 'start' }}>0%</TableCell>
                                                </TableRow>

                                                {/* Row 2 */}
                                                <TableRow>
                                                    <TableCell sx={{ border: '2px solid #000', fontWeight: '600', fontSize: '14px' }}>
                                                        Taxable income exceeding AED 375,000
                                                    </TableCell>
                                                    <TableCell sx={{ border: '2px solid #000', fontSize: '14px' }}>9%</TableCell>
                                                </TableRow>

                                                {/* Row 3 */}
                                                <TableRow>
                                                    <TableCell sx={{ border: '2px solid #000', maxWidth: '70px', fontWeight: 'bold', background: 'yellow', fontSize: '14px' }}>
                                                        Qualifying Free Zone Persons
                                                    </TableCell>
                                                    <TableCell sx={{ border: '2px solid #000' }}></TableCell>
                                                </TableRow>
                                                <TableRow>
                                                    <TableCell sx={{ border: '2px solid #000', maxWidth: '140px', fontSize: '14px' }}>Qualifying Income  (this amount is to be confirmed in a Cabinet Decision)</TableCell>
                                                    <TableCell sx={{ border: '2px solid #000', maxWidth: '160px', margin: '0', textAlign: 'start', fontSize: '14px' }}>0%</TableCell>
                                                </TableRow>

                                                {/* Row 2 */}
                                                <TableRow>
                                                    <TableCell sx={{ border: '2px solid #000', fontSize: '14px' }}>
                                                        Taxable Income that does not meet the Qualifying Income Definition
                                                    </TableCell>
                                                    <TableCell sx={{ border: '2px solid #000', fontSize: '14px' }}>9%</TableCell>
                                                </TableRow>
                                            </TableBody>
                                        </Table>

                                        {/* twelve para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="thirteenthHeading">
                                            {corporateTax.thirteen.heading}
                                        </Typography>

                                        {corporateTaxThirteenArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* thirteen para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="fourteenthHeading">
                                            {corporateTax.fourteen.heading}
                                        </Typography>

                                        {corporateTaxFourteennArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* fourteen para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="fifteenthHeading">
                                            {corporateTax.fifteen.heading}
                                        </Typography>

                                        {corporateTaxFifteennArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* fifteen para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="sixteenthHeading">
                                            {corporateTax.sixteen.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', fontSize: '14px', padding: '0' }} >
                                            {corporateTax.sixteen.firstPara}
                                        </Typography>

                                        {/* sixteen para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="seventeenthHeading">
                                            {corporateTax.seventeen.heading}
                                        </Typography>

                                        {corporateTaxSeventeenArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}
                                        <span style={{ border: '1px solid black' }}>EMPTY BOX</span>

                                        {/* seventeen para end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', fontWeight: 'bold' }} id="eighteenthHeading">
                                            {corporateTax.eighteen.heading}
                                        </Typography>

                                        {corporateTaxEighteenArray.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* eighteen para end */}

                                        <hr />

                                        {/* Others */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '2rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.first.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.first.firstPara}
                                        </Typography>


                                        {/* first sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.second.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.second.firstPara}
                                        </Typography>

                                        {/* second sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.third.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.third.firstPara}
                                        </Typography>

                                        {/* third sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.fourth.heading}
                                        </Typography>

                                        {ctFirst.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px', gap: '0' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* fourth sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.fifth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.fifth.firstPara}
                                        </Typography>

                                        {/* fifth sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.sixth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.sixth.firstPara}
                                        </Typography>

                                        {/* sixth sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.seventh.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.seventh.firstPara}
                                        </Typography>

                                        {/* seven sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.eighth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.eighth.firstPara}
                                        </Typography>

                                        {/* eighth sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.ninth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.ninth.firstPara}
                                        </Typography>

                                        {/* ninth sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.tenth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.tenth.firstPara}
                                        </Typography>

                                        {/* tenth sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.eleventh.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.eleventh.firstPara}
                                        </Typography>

                                        {/* eleven sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.twelveth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.twelveth.firstPara}
                                        </Typography>

                                        {/* twelve sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.thirteen.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.thirteen.firstPara}
                                        </Typography>

                                        {/* thirteen sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.fourteen.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.fourteen.firstPara}
                                        </Typography>

                                        {/* fourteen sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.fifteen.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.fifteen.firstPara}
                                        </Typography>

                                        {/* fifteen sub end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ct.sixteen.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ct.sixteen.firstPara}
                                            <br />
                                            1. Read the Corporate Tax Law and the supporting information available on the websites of
                                            the Ministry of Finance and the Federal Tax Authority.
                                            <br />
                                            2. Use the available information to determine whether your business will be subject to UAE
                                            CT and if so, from what date.
                                            <br />
                                            3. Understand the requirements for your business under the Corporate Tax Law, including,
                                            for example:
                                            <br />
                                            a. Whether your business needs to register for UAE CT.
                                            <br />
                                            b. What is the accounting / Tax Period for your business.
                                            <br />
                                            c. By when your business would need to file a UAE CT return.
                                            <br />
                                            d. What elections or applications can or should your business make for UAE CT purposes.
                                            <br />
                                            e. How UAE CT may impact your business’ obligations and liabilities under contracts with
                                            customers and suppliers.
                                            <br />
                                            f. What financial information and records your business will need to keep for UAE CT
                                            purposes.
                                            <br />
                                            4. Regularly check the websites of the Ministry of Finance and the Federal Tax Authority for
                                            further information and guidance on the UAE CT regime.
                                        </Typography>

                                        {/* sixteen sub end */}

                                        {/* CTPartThree */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.first.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.first.firstPara}
                                        </Typography>

                                        {/* ct part three one end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.second.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.second.firstPara}
                                        </Typography>

                                        {/* ct part three two end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.third.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.third.firstPara}
                                        </Typography>

                                        {/* ct part three three end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.fourth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.fourth.firstPara}
                                        </Typography>

                                        {/* ct part three four end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.fifth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.fifth.firstPara}
                                        </Typography>

                                        {/* ct part three five end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.sixth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.sixth.firstPara}
                                        </Typography>

                                        {/* ct part three six end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.seventh.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.seventh.firstPara}
                                        </Typography>

                                        {/* ct part three seven end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.eighth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.eighth.firstPara}
                                        </Typography>

                                        {/* ct part three eight end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.ninth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.ninth.firstPara}
                                        </Typography>

                                        {/* ct part three nine end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.tenth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.tenth.firstPara}
                                        </Typography>

                                        {/* ct part three ten end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.eleventh.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.eleventh.firstPara}
                                        </Typography>

                                        {/* ct part three eleven end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.twelveth.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.twelveth.firstPara}
                                        </Typography>

                                        {/* ct part three twelve end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.thirteen.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.thirteen.firstPara}
                                        </Typography>

                                        {/* ct part three thirteen end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.fourteen.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.fourteen.firstPara}
                                        </Typography>

                                        {/* ct part three fourteen end */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartThree.fifteen.heading}
                                        </Typography>

                                        <Typography paragraph sx={{ fontWeight: '300', color: 'black', padding: '0', fontSize: '14px' }} >
                                            {ctPartThree.fifteen.firstPara}
                                            <br />
                                            Further information on the UAE CT compliance obligations and applicable penalties will be released in due course.
                                        </Typography>

                                        {/* ct part three fifteen end */}

                                        {/* ctPartFour  */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartFour.first.heading}
                                        </Typography>

                                        {ctPartFourArrayFirst.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px', gap: '0' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* ctPartFour first end  */}

                                        <Typography variant="h6" sx={{ marginBottom: '1rem', marginTop: '1rem', fontWeight: 'bold', color: 'purple' }} id="firstHeading">
                                            {ctPartFour.second.heading}
                                        </Typography>

                                        {ctPartFourArraySecond.map((i) => (
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px', gap: '0' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* ctPartFour first end  */}

                                        {/* ctPartFive  */}

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
                                            <List paragraph sx={{ fontWeight: '300', color: 'black', marginTop: '0', padding: '0', fontSize: '14px', gap: '0' }} key={i}>
                                                <ListItem>
                                                    <ListItemText>
                                                        {i}
                                                    </ListItemText>
                                                </ListItem>
                                            </List>
                                        ))}

                                        {/* ctPartFive seventh end  */}
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
                                // variant=""
                                sx={{ maxWidth: '30rem' }}
                            >
                                <Tab label="Index" sx={{ fontWeight: 'bold', color: 'black' }} />
                                {/* <Tab label="Section" /> */}
                                {/* Add other tabs for the Title Tab as needed */}
                            </Tabs>

                            {/* Content for Title Table tab */}
                            <TabPanel value={nestedTabValue} index={0}>
                                <div style={{ maxHeight: '20rem', overflow: 'auto', maxWidth: '25rem', cursor: 'pointer' }}>
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


