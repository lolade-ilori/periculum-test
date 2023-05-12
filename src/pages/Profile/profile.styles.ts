import { SubHeaderWrap } from './../Homepage/home.styles';
import styled from "styled-components"

export const ProfileWrap = styled.div `
    position: relative;
    padding-bottom: 90px;
`

export const H21 = styled.h2 `
    color: #000;
    font-size: 18px;
    font-weight: 700;
`

export const ProfileHeadWrap = styled(SubHeaderWrap) `
    margin-top: 10px;
`

export const OverviewOverall = styled.div `
    margin-top: 40px;
`

export const OverviewCardFlex = styled.div `
    display: flex;
    background-color: #407BFF;
    column-gap: 1px;
    align-items: center;
`

export const AccordionOverall = styled.div `
    margin-top: 50px;

    .accordion-wrap {
        border-bottom: solid 1px #407BFF;
    }
`