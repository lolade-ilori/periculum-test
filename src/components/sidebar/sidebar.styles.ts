import styled from 'styled-components'

export const SidebarContainer = styled.div `
    width: 70px;
    position: fixed;
    top: 0;
    left: 0;
    background-color: #fff;
    box-shadow: 0px 15px 30px #F3F7FF;
    z-index: 50;
    height: 100vh;

    & nav {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        padding: 50px 15px;
        height: 100%;

        .top-nav-wrapper {
            margin-top: 50px;
            display: flex;
            flex-direction: column;
            row-gap: 60px;

            img {
                cursor: pointer;
            }
        }

        .footer-nav-wrapper {
            img {
                cursor: pointer;
            }
        }
    }
`

export const NavIcon = styled.img <{active?: boolean}>`
    filter: ${(props:any) => props.active ? 'invert(53%) sepia(62%) saturate(6622%) hue-rotate(213deg) brightness(108%) contrast(101%)' : 'invert(55%) sepia(4%) saturate(1850%) hue-rotate(188deg) brightness(91%) contrast(79%)'}
`