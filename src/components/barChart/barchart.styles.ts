import styled from "styled-components"

export const BarchartWrap = styled.div `
    flex: 30%;
    background-color: #fff;

    .inner-chart-box {
        padding: 15px;

        .chart-header {
            width: 100%;
            display: flex;
            justify-content: center;
            align-items: center;
            padding: 13px 0;
            background-color: #2A38A4;
            font-size: 18px;
            font-weight: 700;
            color: #fff;
        }

        .chart {
            display: flex;
            justify-content: center;
            margin-top: 15px;
        }
    }
`