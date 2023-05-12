import React, { useState } from 'react'
import { DropDownBox, DropdownWrapper } from './dropdown.styles'
import {useNavigate } from 'react-router-dom'

import arrowDown from '../../assets/images/svg/arrow-down.svg'

const DropDown = () => {
    const [dropdownValue, setDropdownValue] = useState<string>('Segmentation Analysis')
    const navigate = useNavigate()
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

    const options:any = [
        {name: 'Segmentation Analysis', page: '/'},
        {name: 'Customers’ Profile', page: '/profile'}
    ]

    const handleOptionClick = (item: any) => {
        setDropdownValue(item.name)
        navigate(item.page)
    }

  return (
    <DropdownWrapper onClick={() => setShowDropdown(!showDropdown)}>
        <div className="inner-wrapper">
            <p>{dropdownValue}</p>

            <img src={arrowDown}/>
        </div>

        <DropDownBox dropActive={showDropdown}>
            <div className="inner-drop">
                {
                    options?.map((item:any, id:string) => {
                        return (
                            <div className="drop-options" key={id} onClick={() => handleOptionClick(item)}>
                                {item.name}
                            </div>
                        )
                    })
                }
            </div>
        </DropDownBox>
    </DropdownWrapper>
  )
}

export default DropDown