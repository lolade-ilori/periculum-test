import styled from "styled-components"

export const AverageCardWrap = styled.div <{bg?: string, flex?: string}>`
    background-color: ${(props:any) => props.bg};
    flex: ${(props:any) => props.flex};

    .inner-card-wrap {
        padding: 20px;

        .header-text {
            color: #fff;
            h4 {
                font-weight: 700;
                margin: 0;
                font-size: 19px;
            }

            p {
                font-size: 12px;
                font-weight: 500;
                margin: 0;
                margin-top: 2px;
            }
        }

        .card-flex-content {
            display: flex;
            align-items: center;
            column-gap: 10px;
            justify-content: space-between;
            margin-top: 30px;
            padding-bottom: 10px;

            .sub-card-contents {
                color: #fff;
                p {
                    font-size: 10px;
                    font-weight: 500;
                    margin: 0;
                    white-space: nowrap;
                }

                h5 {
                    font-size: 25px;
                    font-weight: 700;
                    margin: 0;
                    white-space: nowrap;
                    margin-top: 8px;
                }
            }
        }
    }
`