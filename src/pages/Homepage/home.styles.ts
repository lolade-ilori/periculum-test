import { OverviewCardWrap } from './../../components/overviewCard/overviewcard.styles';
import styled from "styled-components"

export const HomeWrap = styled.div `
    position: relative;
    padding-bottom: 120px;
    /* border: solid 1px red; */
`

export const H11 = styled.h2 `
    color: #000;
    font-size: 22px;
    font-weight: 700;
`

export const SubHeaderWrap = styled.div `
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 35px;
`

export const ChartOverall = styled.div `
    margin-top: 35px;
    display: flex;
    column-gap: 20px;
    align-items: center
`

export const AverageCardOverall = styled.div `
    margin-top: 35px;
    display: flex;
    column-gap: 20px;
`

export const MonthlyBalanceOverall = styled.div `
    margin-top: 45px;
`

export const DistributionSubhead = styled.div `
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    column-gap: 15px;
    padding-left: 15px;
    margin-top: 15px;
`

export const InfoSubwrap = styled.div <{bg?: string}>`
    display: flex;
    align-items: center;
    column-gap: 5px;

    .circle-color {
        background-color: ${(props:any) => props.bg};
        width: 15px;
        height: 15px;
        border-radius: 50%;
    }

    p {
        margin: 0;
        color: #000;
        font-size: 13px;
        white-space: nowrap;
        font-weight: 500;
    }
`

export const BarChartOverall = styled.div `
    margin-top: 20px;
    display: flex;
    flex-wrap: wrap;
    column-gap: 15px;
    row-gap: 25px;
`