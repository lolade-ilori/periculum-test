import React, { useState } from 'react'
import AverageCard from '../../components/averageCard'
import BarChart from '../../components/barChart'
import DateRangeDropdown from '../../components/dateRangedropdown'
import DoughnutChart from '../../components/doughnutChart'
import DropDown from '../../components/dropdown'
import OverviewCard from '../../components/overviewCard'
import PieChart from '../../components/pieChart'
import { H21, OverviewCardFlex } from '../Profile/profile.styles'
import { AverageCardOverall, BarChartOverall, ChartOverall, DistributionSubhead, H11, HomeWrap, InfoSubwrap, MonthlyBalanceOverall, SubHeaderWrap } from './home.styles'

const Homepage = () => {
    const [dropdownValue, setDropdownValue] = useState<string>('Segmentation Analysis')

    const averageAgeList:any = [
        {smallTxt: 'The Agric Clients', value: '62'},
        {smallTxt: 'The Micro Techs', value: '71'},
        {smallTxt: 'The Retail Techs', value: '43'},
        {smallTxt: 'The Loyalists', value: '50'},
        {smallTxt: 'The Corporates', value: '27'},
    ]

    const transactionList:any = [
        {smallTxt: 'The Agric Clients', value: '₦ 6,875'},
        {smallTxt: 'The Micro Techs', value: '₦ 2,491'},
        {smallTxt: 'The Retail Techs', value: '₦ 1,689'},
        {smallTxt: 'The Loyalists', value: '₦ 300,816'},
        {smallTxt: 'The Corporates', value: '₦ 20,880,542'},
    ]

    const overviewList:any = [
        {header: 'The Agric Clients', content: '₦ 9,526'},
        {header: 'The Micro Techs', content: '---2,491'},
        {header: 'The Retail Techs', content: '₦ 2,491'},
        {header: 'The Loyalists', content: '₦ 2,491'},
        {header: 'The Corporates', content: '₦ 9,526'},
    ]

    const distributionList:any = [
        {color: '#FFBC73', text: `Social Protection (SP)`},
        {color: '#4CAF50', text: `Education and Leadership Development (Education)`},
        {color: '#FF725E', text: `Energy & Environment (EE)
        `},
        {color: '#2A38A4', text: `Enterprise development & financial inclusion (E+E)`},
        {color: '#407BFF', text: `Food & Agriculture (F&A)
        `},
    ]

    const barChartList:any = [
        {header: 'The Agric Clients'},
        {header: 'The Micro Techs'},
        {header: 'The Corporates'},
        {header: 'The Retail Techs'},
        {header: 'The Loyalists'},
    ]

  return (
    <HomeWrap>
        <div className="header-sect">
            <H11>Welcome to your Dashboard</H11>
        </div>
        
        <SubHeaderWrap>
            <DropDown dropdownValue={dropdownValue} setDropdownValue={setDropdownValue} />
            <DateRangeDropdown />
        </SubHeaderWrap>

        <ChartOverall>
            <PieChart />
            <DoughnutChart/>
        </ChartOverall>

        <AverageCardOverall>
            <AverageCard 
                bg={'#2A38A4'}
                flex={'35%'}
                textHead={'Average Age'}
                subtextHead={'(in years)'}
                contentList={averageAgeList}
            />
            <AverageCard 
                bg={'#407BFF'}
                flex={'55%'}
                textHead={'Average Transactional Value'}
                subtextHead={'(Credit)'}
                contentList={transactionList}
            />
        </AverageCardOverall>

        <MonthlyBalanceOverall>
                <H21>AVERAGE MONTHLY BALANCE</H21>

                <OverviewCardFlex>
                    {
                        overviewList.map((item:any, id:string) => {
                            return (
                                <OverviewCard 
                                    key={id}
                                    header={item?.header}
                                    content={item?.content}
                                    flex={'23%'}
                                />
                            )
                        })
                    }
                </OverviewCardFlex>
        </MonthlyBalanceOverall>

        <MonthlyBalanceOverall>
            <H21>PILLAR DISTRIBUTION</H21>

            <DistributionSubhead>
                {
                    distributionList?.map((item:any, id:string) => {
                        return (
                            <InfoSubwrap bg={item?.color} key={id}>
                                <div className="circle-color"></div>
                                <p>{item?.text}</p>
                            </InfoSubwrap>
                        )
                    })
                }
            </DistributionSubhead>

            <BarChartOverall>
                {
                    barChartList.map((item:any, id: any) => {
                        return (
                            <BarChart 
                                key={id}
                                header={item?.header}
                            />
                        )
                    })
                }
            </BarChartOverall>
        </MonthlyBalanceOverall>
    </HomeWrap>
  )
}

export default Homepage