import React from 'react'
import { MonthlyBalanceOverall } from '../../pages/Homepage/home.styles'
import { H21, OverviewCardFlex } from '../../pages/Profile/profile.styles'
import OverviewCard from '../overviewCard'
import { AverageCardWrap } from './averageCard.styles'

const AverageCard = ({bg, flex, textHead, subtextHead, contentList}:any) => {

  return (
    <AverageCardWrap bg={bg} flex={flex}>
        <div className="inner-card-wrap">
            <div className="header-text">
                <h4>{textHead}</h4>
                <p>{subtextHead}</p>
            </div>

            <div className="card-flex-content">
                {
                    contentList?.map((item:any, id:string) => {
                        return (
                            <div className="sub-card-contents" key={id}>
                                <p>{item?.smallTxt}</p>
                                <h5>{item?.value}</h5>
                            </div>
                        )
                    })
                }
            </div>

        </div>
    </AverageCardWrap>
  )
}

export default AverageCard