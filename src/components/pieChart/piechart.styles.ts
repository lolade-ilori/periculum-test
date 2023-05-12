import styled from 'styled-components'

export const PieChartWrap = styled.div `
    background-color: #fff;
    flex: 45%;
    
    .inner-pie-chart {
        padding: 30px;
        padding-bottom: 0px;

        h5 {
            font-size: 19px;
            font-weight: 700;
            margin: 0;

            span {
                font-size: 12px;
                font-weight: 500;
            }
        }

        .pie-wrapper {
            padding: 0px 20px;
            display: flex;
            /* justify-content: center; */
            align-items: center;

            canvas {
                width: 432px !important;
                height: 432px !important;
            }
        }
    }
`