import React, { useState } from 'react'
import DateRangeDropdown from '../../components/dateRangedropdown'
import DropDown from '../../components/dropdown'
import OverviewCard from '../../components/overviewCard'
import { AccordionOverall, H21, OverviewCardFlex, OverviewOverall, ProfileHeadWrap, ProfileWrap } from './profile.styles'

import profile from '../../assets/images/svg/profile.svg'
import dollar from '../../assets/images/svg/dollar-square.svg'
import wallet from '../../assets/images/svg/wallet.svg'
import Accordion from '../../components/accordion'

const CustomerProfile = () => {
    const [clicked, setClicked] = useState("0")

    const overviewList:any = [
        {image: profile, header: 'Total Customers', content: '1.11 million' },
        {image: dollar, header: 'Total Transactional Value', content: '124 Billion' },
        {image: wallet, header: 'Average Monthly Balance', content: '₦ 200,526' }
    ]

    const accordionList:any = [
        {header: 'Status', content: '41% of EGF customers with the bank are dormant'},
        {header: 'Gender', content: '56% OF EGF Customers are Male, 43% are Female, and 0.6% are Unknown'},
        {header: 'Age', content: 'EGF Customers have an average of 56 years'},
        {header: 'Loan Uptake', content: '5% Of EGF Customers have taken a loan at some point'},
        {header: 'Tenure', content: '5% Of EGF Customers have taken a loan at some point'}
    ]

    const handleToggle = (index:any) => {
        if(clicked === index) {
            return setClicked("0")
        }

        setClicked(index)
    } 


  return (
    <ProfileWrap>
        <ProfileHeadWrap>
            <DropDown />
            <DateRangeDropdown />
        </ProfileHeadWrap>

        <OverviewOverall>
            <H21>OVERVIEW</H21>

            <OverviewCardFlex>
                {
                    overviewList.map((item:any, id:string) => {
                        return (
                            <OverviewCard 
                                key={id}
                                image={item?.image}
                                header={item?.header}
                                content={item?.content}
                            />
                        )
                    })
                }
            </OverviewCardFlex>
        </OverviewOverall>

        <AccordionOverall>
            <H21>PROFILE</H21>

            <div className="accordion-wrap">
                {
                    accordionList?.map((item:any, id:string) => {
                        return (
                            <Accordion 
                                key={id}
                                list={item}
                                header={item?.header}
                                content={item?.content}
                                onToggle={() => handleToggle(id)}
                                active={clicked === id}
                            />
                        )
                    })
                }
                
            </div>
        </AccordionOverall>
    </ProfileWrap>
  )
}

export default CustomerProfile