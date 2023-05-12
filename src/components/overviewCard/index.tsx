import React from 'react'
import { OverviewCardWrap } from './overviewcard.styles'

const OverviewCard = ({image, header, content, flex}:any) => {
  return (
    <OverviewCardWrap flex={flex}>
        <div className="inner-card">
            {
                image ?
                <img src={image}/> :
                <div className="empty-space"></div>
            }
            

            <div className="card-text-header">
                {header}
            </div>

            <div className="card-info">
                {content}
            </div>

            {
                !image &&
                <div className="empty-space"></div>
            }
        </div>
    </OverviewCardWrap>
  )
}

export default OverviewCard