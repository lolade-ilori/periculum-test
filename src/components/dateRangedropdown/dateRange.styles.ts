import styled from "styled-components"
import { DropDownBox, DropdownWrapper } from "../dropdown/dropdown.styles"

export const DateRangeWrapper = styled(DropdownWrapper) `
    background-color: transparent;
    width: 250px;
    border: solid 1px #407BFF;
    cursor: default;

    & .inner-wrapper {
        img {
            cursor: pointer;
        }
    }
`

export const DateRangeDropBox = styled(DropDownBox) `
    top: 53px;

    .inner-drop {
        padding: 14px 10px;
        row-gap: 8px;

        h3 {
            font-size: 13px;
            font-weight: 700;
            margin: 0;
        }

        .drop-options {
            label {
                margin-bottom: 7px;
                color: #000;
                font-weight: 500;
                font-size: 11px;
            }
        }
    }
`

export const DateInput = styled.input `
    border-radius: 5px;
    outline: none;
    border: solid 1px #407BFF;
    background-color: rgba(64,123,255, 0.10);
    padding: 10px 15px;
    width: 100%;    
    
    &::placeholder {
        color: #8F9CA8;
        font-size: 13px;
    }
`

export const DoneBtn = styled.button <{active?: boolean}>`
    outline: none;
    border: none;
    background-color: ${(props:any) => props.active ? '#DCE5FF' : '#407BFF'} ;
    color: ${(props:any) => props.active ? '#86ABFF' : '#fff'};
    font-size: 13px;
    font-weight: 700;
    padding: 8px;
    width: 80px;
    cursor: pointer;
`