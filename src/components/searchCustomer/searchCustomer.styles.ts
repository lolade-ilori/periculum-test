import { DropdownWrapper, DropDownBox } from './../dropdown/dropdown.styles';
import styled from 'styled-components'

export const SearchWrapper = styled.div `
    display: flex;
    align-items: center;
    column-gap: 20px;
`

export const SearchInputBox = styled(DropdownWrapper) `
    width: 280px;

    & .inner-wrapper {
        justify-content: unset;
        column-gap: 15px;

        span {
            color: #8F9CA8
        }
    }
`

export const SearchInputDropBox = styled(DropDownBox) `
    .inner-drop {
        padding: 16px 14px;

        .drop-options {
            display: flex;
            flex-direction: column;

            label {
                font-size: 13px;
                font-weight: 500;
                margin-bottom: 5px;
            }

            .flex-wrap {
                display: flex;
                align-items: center;
                justify-content: space-between;
                margin-bottom: 15px;
            }

            input {
                border: solid 1px #407BFF;
                border-radius: 5px;
                outline: none;
                padding: 13px 15px;
            }
        }
    }
`

export const ClearBtn = styled.button `
    outline: none;
    border: none;
    padding: 14px 25px;
    color: #407BFF;
    font-size: 14px;
    cursor: pointer;
    background-color: #DCE5FF;
`

export const SearchBtn = styled.button `
    outline: none;
    border: none;
    color: #fff;
    font-size: 15px;
    cursor: pointer;
    background-color: #407BFF;
    padding: 12px 25px;
    font-weight: 600;
`

export const RadioBtn = styled.div `
    border-radius: 50%;
    width: 20px;
    height: 20px;
    border: solid 1.5px #407BFF;
    background-color: transparent;
`

export const SelectWrapper = styled.div `
    display: flex;
    align-items: center;
    column-gap: 8px;
    flex: 43%;

    p {
        font-size: 15px;
        color: #000;
        font-weight: 500;
        margin: 0;
    }
`