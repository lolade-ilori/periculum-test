import React from 'react'
import { OverviewCardWrap } from './overviewcard.styles'

const OverviewCard = ({image, header, content}:any) => {
  return (
    <OverviewCardWrap>
        <div className="inner-card">
            <img src={image}/>

            <div className="card-text-header">
                {header}
            </div>

            <div className="card-info">
                {content}
            </div>
        </div>
    </OverviewCardWrap>
  )
}

export default OverviewCard