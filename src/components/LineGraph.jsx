import React, { useState } from 'react'
import { Line } from 'react-chartjs-2'
import { useGlobalContext } from '../context'
import numeral from 'numeral'

const options = {
    legend: {
        display: false,
    },
    elements: {
        point: {
            redius: 0,
        },
    },
    maintainAspectRation: false,
    tooltips: {
        mode: 'index',
        intersect: false,
        callbacks: {
            label: function(tooltipItem, data){
                return numeral(tooltipItem.value).format("+0,0")
            },
        },
    },
    scales: {
        xAxes: [
            {
                type: "time",
                time: {
                    format: "MM/DD/YY",
                    tooltipFormat: "ll"
                }
            }
        ],
        yAxes: [
            {
                gridLines: {
                    display: false,
                },
                ticks: {
                    callback: function(value, index, values){
                        return numeral(value).format("0a")
                    }
                }
            }
        ]
    }
}
function LineGraph() {
    const {graphData} = useGlobalContext();
    // console.log(graphData);
    return (
        <div>
            {graphData?.length > 0 && (
                <Line 
                    options={options}
                    data={{
                        datasets: [
                            {
                                backgroundColor: "rgba(204, 16, 52, 0.5",
                                borderColor: "#CC1034",
                                data: graphData
                            }
                        ]
                    }}
                />
            )}
        </div>
    )
}

export default LineGraph
