import React, { useState } from 'react'
import SearchCustomerBox from '../../components/searchCustomer'
import { H11 } from '../Homepage/home.styles'
import { BankProfileOverall, BankProfileTable, CategoryBox, CustomerTable, PaginationWrap, ReportsHeaderFlex, ReportsPageWrap, SortBtn, StatusWrap, TableOverall } from './reports.styled'
import { H21 } from '../Profile/profile.styles'

import filter from '../../assets/images/svg/filter.svg'
import greenTick from '../../assets/images/svg/green-tick.svg'
import redTick from '../../assets/images/svg/red-tick.svg'


const Reports = () => {
    const [customerActive, setCustomerActive] = useState(false)

  return (
    <ReportsPageWrap>
        <div className="header-sect">
            <H11>All Customers</H11>
        </div>

        <ReportsHeaderFlex>
            <SearchCustomerBox />

            <SortBtn>
                <img src={filter} />
                <p>Sort</p>
            </SortBtn>
        </ReportsHeaderFlex>

        <TableOverall>
            <CustomerTable>
                <thead>
                    <tr>
                        <th>Customer name</th>
                        <th>Customer id</th>
                        <th>Category</th>
                        <th>loan period</th>
                        <th>status</th>
                    </tr>
                </thead>


                <tbody>
                    <tr>
                        <td>John Doe</td>
                        <td>1DNFEA3</td>
                        <td>
                            <CategoryBox bg={'#C9ECE2'} txt={'#04674B'}>agric client</CategoryBox>
                        </td>
                        <td>NOV 2020 - MAY 2021</td>
                        <td>
                            <StatusWrap active>
                                <img src={greenTick}/>
                                <p>active</p>
                            </StatusWrap>
                        </td>
                    </tr>

                    <tr>
                        <td>John Doe</td>
                        <td>1DNFEA3</td>
                        <td>
                            <CategoryBox bg={'#C9ECE2'} txt={'#04674B'}>agric client</CategoryBox>
                        </td>
                        <td>NOV 2020 - MAY 2021</td>
                        <td>
                            <StatusWrap active>
                                <img src={greenTick}/>
                                <p>active</p>
                            </StatusWrap>
                        </td>
                    </tr>

                    <tr>
                        <td>John Doe</td>
                        <td>1DNFEA3</td>
                        <td>
                            <CategoryBox bg={'#9BBAFF'} txt={'#002370'}>
                                CORPORATES
                            </CategoryBox>
                        </td>
                        <td>NOV 2020 - MAY 2021</td>
                        <td>
                            <StatusWrap active>
                                <img src={greenTick}/>
                                <p>active</p>
                            </StatusWrap>
                        </td>
                    </tr>

                    <tr>
                        <td>John Doe</td>
                        <td>1DNFEA3</td>
                        <td>
                            <CategoryBox bg={'#FFE1C0'} txt={'#BE6402'}>LOYALISTS</CategoryBox>
                        </td>
                        <td>NOV 2020 - MAY 2021</td>
                        <td>
                            <StatusWrap>
                                <img src={redTick}/>
                                <p>dormant</p>
                            </StatusWrap>
                        </td>
                    </tr>

                    <tr>
                        <td>John Doe</td>
                        <td>1DNFEA3</td>
                        <td>
                            <CategoryBox bg={'#C4A2FC'} txt={'#2D0076'}>RETAIL TECHS</CategoryBox>
                        </td>
                        <td>NOV 2020 - MAY 2021</td>
                        <td>
                            <StatusWrap>
                                <img src={redTick}/>
                                <p>dormant</p>
                            </StatusWrap>
                        </td>
                    </tr>

                    <tr>
                        <td>John Doe</td>
                        <td>1DNFEA3</td>
                        <td>
                            <CategoryBox bg={'#D4D9FF'} txt={'#2A38A4'}>MICRO TECH</CategoryBox>
                        </td>
                        <td>NOV 2020 - MAY 2021</td>
                        <td>
                            <StatusWrap active>
                                <img src={greenTick}/>
                                <p>active</p>
                            </StatusWrap>
                        </td>
                    </tr>

                    <tr>
                        <td>John Doe</td>
                        <td>1DNFEA3</td>
                        <td>
                            <CategoryBox bg={'#D4D9FF'} txt={'#2A38A4'}>MICRO TECH</CategoryBox>
                        </td>
                        <td>NOV 2020 - MAY 2021</td>
                        <td>
                            <StatusWrap active>
                                <img src={greenTick}/>
                                <p>active</p>
                            </StatusWrap>
                        </td>
                    </tr>

                    <tr>
                        <td>John Doe</td>
                        <td>1DNFEA3</td>
                        <td>
                            <CategoryBox bg={'#9BBAFF'} txt={'#002370'}>
                                CORPORATES
                            </CategoryBox>
                        </td>
                        <td>NOV 2020 - MAY 2021</td>
                        <td>
                            <StatusWrap >
                                <img src={redTick}/>
                                <p>dormant</p>
                            </StatusWrap>
                        </td>
                    </tr>

                    <tr>
                        <td>John Doe</td>
                        <td>1DNFEA3</td>
                        <td>
                            <CategoryBox bg={'#C9ECE2'} txt={'#04674B'}>agric client</CategoryBox>
                        </td>
                        <td>NOV 2020 - MAY 2021</td>
                        <td>
                            <StatusWrap >
                                <img src={redTick}/>
                                <p>dormant</p>
                            </StatusWrap>
                        </td>
                    </tr>
                </tbody>
            </CustomerTable>

            <PaginationWrap></PaginationWrap>
        </TableOverall>

        <BankProfileOverall>
            <H21>Bank Profile Comparison</H21>

            <BankProfileTable>
                <thead>
                    <tr>
                        <th>
                            customers
                        </th>

                        <th>
                            total number
                        </th>

                        <th>
                            transaction value
                        </th>

                        <th>loans taken</th>
                        <th>loans perfomance</th>
                    </tr>
                </thead>

                <tbody>
                    <tr>
                        <td>EGF BANK CUSTOMERS</td>
                        <td>1,113,040 Customers</td>
                        <td>KES 124Bn</td>
                        <td>200,000 Ksh</td>
                        <td>
                            <ul>
                                <li>94% Normal</li>
                                <li>1.85% Watch</li>
                                <li>4.17% NPL</li>
                            </ul>
                        </td>
                    </tr>

                    <tr>
                        <td>NON-EGF BANK CUSTOMERS</td>
                        <td>7,903,091 Customers</td>
                        <td>KES 943Bn</td>
                        <td>22.2M Loans Taken Total Value of 1.18Tn</td>
                        <td>
                            <ul>
                                <li>94% Normal</li>
                                <li>1.85% Watch</li>
                                <li>4.17% NPL</li>
                            </ul>
                        </td>
                    </tr>
                </tbody>
            </BankProfileTable>
        </BankProfileOverall>


    </ReportsPageWrap>
  )
}

export default Reports