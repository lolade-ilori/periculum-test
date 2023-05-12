import React from 'react'
import { BarchartWrap } from './barchart.styles'
import {Chart as ChartJS, BarElement, CategoryScale, LinearScale, Tooltip, Legend} from 'chart.js'
import { Bar } from "react-chartjs-2";

ChartJS.register (
    BarElement, CategoryScale, LinearScale, Tooltip, Legend
)

const BarChart = ({header}:any) => {

    const data = {
        type: 'bar',
        labels: ['SP', 'F&A', 'EE', 'E + E', 'Education'],
        datasets: [
            {
                label: 'SP',
                data: [18000, 16500, 12500, 12000, 10000],
                backgroundColor: [
                    '#FFBC73',
                    '#407BFF',
                    '#FF725E',
                    '#2A38A4',
                    '#4CAF50',
                ],
                borderWidth: 1,
                barPercentage: 0.2,
                borderRadius: 3,
            },
        ],
        
    }

    const options:any = {
        scales: {
            x:  {
                grid : {
                    drawOnChartArea: false,
                    display: false,
                    drawBorder: false,
                    drawTicks: false,
                }
            },
            y:  {
                border : {
                    display: false,
                    drawBorder: false,
                },
                ticks : {
                    padding: 10,
                }
            }
        },

        plugins : {
            legend : {
                display: false,
            }
        }
    }


  return (
    <BarchartWrap>
        <div className="inner-chart-box">
            <div className="chart-header">
                {header}
            </div>

            <div className="chart">
                <Bar 
                    // style ={backgroundColor: '#fff'}
                    data={data}
                    options={options}
                />
            </div>
        </div>
    </BarchartWrap>
  )
}

export default BarChart