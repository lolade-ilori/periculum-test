import styled from 'styled-components'

export const PericulumHeader = styled.header `
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    background-color: #2F74DD;
    z-index: 100;

    & nav {
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 0px 40px;
        position: relative;
        height: inherit;

        h5 {
            color: #fff;
            text-transform: uppercase;
            font-size: 15px;
            font-weight: 700;
        }

        .settings-icon-wrap {
            img {
                width: 20px;
            }
        }
    }
`