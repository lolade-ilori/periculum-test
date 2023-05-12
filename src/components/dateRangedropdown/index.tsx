import React, { useEffect, useState } from 'react'
import { DateInput, DateRangeDropBox, DateRangeWrapper, DoneBtn } from './dateRange.styles'

import calendar from '../../assets/images/svg/calendar.svg'

const DateRangeDropdown = () => {
    const [showDropdown, setShowDropdown] = useState<boolean>(false)
    const [btnActive, setBtnActive] = useState<boolean>(true)
    const [startDate, setStartDate] = useState('')
    const [endDate, setEndDate] = useState('')

    useEffect(() => {
        if(startDate && endDate) {
            setBtnActive(false)
        }else {
            setBtnActive(true)
        }
    }, [startDate, endDate])

  return (
    <DateRangeWrapper>
        <div className="inner-wrapper">
            <p>Loan Data Period</p>

            <img src={calendar} onClick={() => setShowDropdown(!showDropdown)} />
        </div>

        <DateRangeDropBox dropActive={showDropdown}>
            <div className="inner-drop">
                <h3>Insert date range</h3>

                <div className="drop-options">
                    <label>Start date</label>
                    <DateInput type={'date'} placeholder='Input date' value={startDate} onChange={(e:any) => setStartDate(e.target.value)} />
                </div>

                <div className="drop-options">
                    <label>End date</label>
                    <DateInput type={'date'} placeholder='Input date' value={endDate} onChange={(e:any) => setEndDate(e.target.value)}/>
                </div>

                <DoneBtn active={btnActive} disabled={btnActive}>
                    Done
                </DoneBtn>
            </div>
        </DateRangeDropBox>
    </DateRangeWrapper>
  )
}

export default DateRangeDropdown