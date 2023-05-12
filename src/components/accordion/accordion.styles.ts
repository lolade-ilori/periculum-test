import styled from 'styled-components'

export const AccordionCard = styled.div <{active?: boolean}> `
    border: solid 1px #407BFF;
    border-bottom: none; 

    .accordion-header {
        display: flex;
        align-items: center;
        cursor: pointer;
        justify-content: space-between;
        padding: 30px 25px;
        background-color: #fff;

        p {
            margin: 0;
            font-weight: 700;
            font-size: 17px;
        }

        img {
            width: 22px;
        }
    }
`

export const AccordionContent = styled.div <{active?: boolean}> `
        background-color: #D9E5FF;
        padding: ${(props:any) => props.active ? '30px 25px' : '0' } ;
        border-left: solid 7px #407BFF;
        border-bottom: solid 1px #D9E5FF;
        max-height: ${(props:any) => props.active ? 'auto' : 0};
        transition: max-height 0.3s ease;
        overflow: hidden;

        .content-text {
            font-size: 17px;
            color: #000;
            font-weight: 500;
        }
`