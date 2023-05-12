import React, { useState } from 'react'
import { ClearBtn, RadioBtn, SearchBtn, SearchInputBox, SearchInputDropBox, SearchWrapper, SelectWrapper } from './searchCustomer.styles'

import profile from '../../assets/images/svg/profile.svg'
import { DropDownBox } from '../dropdown/dropdown.styles'

const SearchCustomerBox = () => {
    const [searchText, setSearchText] = useState('')
    const [showDropdown, setShowDropdown] = useState<boolean>(false)

  return (
    <SearchWrapper>
        <SearchInputBox>
            <div className="inner-wrapper" onClick={() => setShowDropdown(!showDropdown)} >
                <img src={profile} />
                {
                    searchText ? 
                    <p>{searchText}</p> : 
                    <span>Segment Customer</span>
                }
            </div>


            <SearchInputDropBox dropActive={showDropdown}>
                <div className="inner-drop">
                    <div className="drop-options">
                        <label>Customer ID</label>
                        <input type="text" className='customerid-input' />
                    </div>

                    <div className="drop-options">
                        <label>Select</label>

                        <div className="flex-wrap">
                            <SelectWrapper>
                                <RadioBtn />
                                <p>Existing</p>
                            </SelectWrapper>

                            <SelectWrapper>
                                <RadioBtn />
                                <p>New</p>
                            </SelectWrapper>
                        </div>
                    </div>

                    <SearchBtn>
                        Search
                    </SearchBtn>

                </div>
            </SearchInputDropBox>
        </SearchInputBox>

        <ClearBtn>
            Clear
        </ClearBtn>
    </SearchWrapper>
  )
}

export default SearchCustomerBox