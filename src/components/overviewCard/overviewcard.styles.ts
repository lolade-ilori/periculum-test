import styled from "styled-components"

export const OverviewCardWrap = styled.div `
    background-color: #fff;
    flex: 33%;
    height: 100%;
    border: solid 1px #fff;


    .inner-card {
        padding: 35px 25px;

        img {
            width: 20px;
            height: 20px;
        }

        .card-text-header {
            font-size: 15px;
            color: #000;
            font-weight: 500;
            margin-top:10px;
        }

        .card-info {
            font-size: 25px;
            color: #000;
            font-weight: 700;
            margin-top: 5px;
        }
    }
`