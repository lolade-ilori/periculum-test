import styled from "styled-components"

export const OverviewCardWrap = styled.div <{flex?: string}> `
    background-color: #fff;
    flex: ${(props:any) => props.flex};
    height: 100%;
    border: solid 1px #fff;


    .inner-card {
        padding: 35px 25px;

        .empty-space {
            padding: 10px;
        }

        img {
            width: 20px;
            height: 20px;
        }

        .card-text-header {
            font-size: 16px;
            color: #000;
            font-weight: 500;
            margin-top:10px;
        }

        .card-info {
            font-size: 28px;
            color: #000;
            font-weight: 700;
            margin-top: 5px;
        }
    }
`