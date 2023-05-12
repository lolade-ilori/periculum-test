import React from 'react'
import { PieChartWrap } from './piechart.styles'
import {Chart as ChartJS, ArcElement, Tooltip, Legend} from 'chart.js'
import { Pie } from "react-chartjs-2";

ChartJS.register (
    ArcElement,Tooltip, Legend
)

const PieChart = () => {

    const data = {
        labels: ['The Retail Techs', 'Agric Clients', 'The Micro Techs', 'The Loyalists', 'The Corporates'],
        datasets: [
            {
                label: 'SP',
                data: [461261, 336602, 291843, 23326, 70003],
                backgroundColor: [
                    '#C4A2FC',
                    '#15CC93',
                    '#4C3EDB',
                    '#FFBC73',
                    '#407BFF',
                ],
                borderWidth: 1,
                barPercentage: 0.2,
                borderRadius: 3,
            },
        ],
        
    }

    const option:any = {
        plugins: {
            legend: {
              position: 'right',
              labels: {
                usePointStyle: true,
                pointStyle: 'circle'
              }
            }
          }
    }

  return (
    <PieChartWrap>
        <div className="inner-pie-chart">
            <h5>Total Population</h5>

            <div className="pie-wrapper">
                <Pie 
                    data={data}
                    width={"60%"}
                    options={option}
                />
            </div>
        </div>
    </PieChartWrap>
  )
}

export default PieChart