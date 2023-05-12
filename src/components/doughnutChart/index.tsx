import React from 'react'
import { PieChartWrap } from '../pieChart/piechart.styles'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Doughnut, Pie } from "react-chartjs-2";

ChartJS.register (
    ArcElement,Tooltip, Legend
)

const DoughnutChart = () => {
    const data = {
        labels: ['The Retail Techs', 'Agric Clients', 'The Micro Techs', 'The Loyalists', 'The Corporates'],
        datasets: [
            {
                label: 'The Retail Techs',
                data: [461261, 0, 0, 0, 0],
                backgroundColor: [
                    '#407BFF',
                    '#C4A2FC',
                    '#15CC93',
                    '#4C3EDB',
                    '#FFBC73',                    
                ],
                borderWidth: 1,
                barPercentage: 0.2,
                order: 2,
                // borderRadius: 3,
            },
            {
                label: 'The Retail Techs',
                data: [114634, 336602, 0, 0, 0],
                backgroundColor: [
                    '#E2E7EE',
                    '#C4A2FC',
                    '#15CC93',
                    '#4C3EDB',
                    '#FFBC73',                    
                ],
                borderWidth: 1,
                barPercentage: 0.2,
                order: 2,
                borderRadius: 10,
            },
            {
                label: 'The Retail Techs',
                data: [0, 6602, 0, 102332, 0],
                backgroundColor: [
                    '#407BFF',
                    '#E2E7EE',
                    '#15CC93',
                    '#4C3EDB',
                    '#FFBC73',                    
                ],
                borderWidth: 1,
                barPercentage: 0.2,
                order: 2,
                borderRadius: 12,
            },
            {
                label: 'The Retail Techs',
                data: [0, 0, 291843, 0, 72003],
                backgroundColor: [
                    '#407BFF',
                    '#C4A2FC',
                    '#15CC93',
                    '#4C3EDB',
                    '#E2E7EE',                    
                ],
                borderWidth: 1,
                barPercentage: 0.2,
                borderRadius: 12,
            },
            {
                label: 'The Retail Techs',
                data: [1261, 0, 0, 0, 70003],
                backgroundColor: [
                    '#E2E7EE',
                    '#C4A2FC',
                    '#15CC93',
                    '#4C3EDB',
                    '#FFBC73',                    
                ],
                borderWidth: 1,
                barPercentage: 0.2,
                // borderRadius: ,
            },
        ],
    }

    const options:any = {
        plugins: {
            legend: {
              position: 'right',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle'
              }
            }
        },
        cutout: '50%',
        offset: 0,
    }

  return (
    <PieChartWrap>
        <div className="inner-pie-chart">
            <h5>Active Clients <span>(percentage)</span></h5>

            <div className="pie-wrapper">
                <Doughnut 
                    data={data}
                    options={options}
                />
            </div>
        </div>
    </PieChartWrap>
  )
}

export default DoughnutChart