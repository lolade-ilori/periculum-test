import styled from "styled-components"

export const DropdownWrapper = styled.div `
    background-color: #fff;
    width: 400px;
    position: relative;
    cursor: pointer;

    & .inner-wrapper {
        display: flex;
        align-items: center;
        justify-content: space-between;
        padding: 14px 20px;

        p {
            font-size: 14px;
            font-weight: 500;
            margin: 0;
        }

        img {
            width: 15px;
        }
    }
`

export const DropDownBox = styled.div <{dropActive?: boolean}>` 
    position: absolute;
    width: 100%;
    top: 60px;
    left: 0;
    background-color: #fff;
    box-shadow: 0px 15px 30px rgba(0, 0, 0, 0.06);
    display: ${(props:any) => props.dropActive ? 'block' : 'none'};
    z-index: ${(props:any) => props.dropActive ? '300' : '-20'};

    .inner-drop {
        padding: 30px;
        display: flex;
        flex-direction: column;
        row-gap: 15px;

        .drop-options {
            color: #000;
            font-weight: 700;
            font-size: 16px;

            .customerid-input {
                
            }
        }
    }
`