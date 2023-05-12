import styled from "styled-components"
import { preProcessFile } from "typescript"

export const ReportsPageWrap = styled.div`
    position: relative;
    padding-bottom: 120px;
`

export const ReportsHeaderFlex = styled.div `
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const SortBtn = styled.div`
    display: flex;
    justify-content: center;
    column-gap: 10px;
    background-color: #407BFF;
    cursor: pointer;
    padding: 14px 20px;

    img {
        width: 20px;
    }

    p {
        color: #fff;
        font-size: 14px;
        margin: 0;
        font-weight: 700;
    }
`

export const TableOverall = styled.div `
    margin-top: 20px;
`

export const CustomerTable = styled.table `
    width: 100%;
    border-collapse: collapse;
    border-collapse: separate;
    border-spacing: 0 8px;
    table-layout: fixed;

    & thead tr {

        th {
            text-align: start;
            text-transform: uppercase;
            font-weight: 600;
            color: #292D32;
            padding: 13px 0;
        }

        th:nth-child(1) {
            padding-left: 20px;
        }

    }

    & tbody {
        tr {
            background-color: #fff; 
            td {
                padding: 10px 0;
                /* background-color: #fff; */
                margin-bottom: 15px;
            }

            td:nth-child(1) {
                padding-left: 20px;
            }
        }
    }

`

export const CategoryBox = styled.div <{bg?: string, txt?: string }>`
    padding: 8px 14px;
    color: ${(props:any) => props.txt};
    text-transform: uppercase;
    background-color: ${(props:any) => props.bg};
    display: flex;
    justify-content: center;
    width: 120px;
    font-size: 14px;
    white-space: nowrap;
`

export const StatusWrap = styled.div <{active?: boolean}> `
    display: flex;
    column-gap: 12px;
    align-items: center;

    p {
        margin: 0;
        font-weight: 500;
        font-size: 13px;
        text-transform: uppercase;
        color: ${(props:any) => props.active ? '#15CC93' : '#FF5037'} ;
    }

    img {
        width: 17px;
    }
`

export const PaginationWrap = styled.div `
    background-color: #fff;
    padding: 24px 30px;
    display: flex;
    justify-content: center
    width: 100%;
    margin-top: 20px;
`

export const BankProfileOverall = styled.div `
    margin-top: 50px;

    & h2 {
        text-transform: uppercase;
    }
`

export const BankProfileTable = styled.table `
    width: 100%;
    border-collapse: collapse;
    table-layout: fixed;

    & thead {
        tr {
            background-color: #fff; 
            border-bottom: solid 1px #407BFF;

            th {
                text-align: start;
                text-transform: uppercase;
                font-weight: 600;
                color: #292D32;
                padding: 17px 0;
            }

            th:nth-child(1) {
                padding-left: 20px;
            }
        }
    }

    & tbody {
        tr {
            background-color: #fff; 
            td {

            }

            td:nth-child(1) {
                padding-left: 20px;
            }
        }
    }
`