import React from 'react'
import DateRangeDropdown from '../../components/dateRangedropdown'
import DropDown from '../../components/dropdown'
import { H11, HomeWrap, SubHeaderWrap } from './home.styles'

const Homepage = () => {
  return (
    <HomeWrap>
        <div className="header-sect">
            <H11>Welcome to your Dashboard</H11>
        </div>
        
        <SubHeaderWrap>
            <DropDown />
            <DateRangeDropdown />
        </SubHeaderWrap>
    </HomeWrap>
  )
}

export default Homepage