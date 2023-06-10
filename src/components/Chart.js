import React, { useEffect, useState } from 'react'
import { Line } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Tooltip } from 'chart.js';

export default function Chart({ weatherData, unit }) {
    ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip);
    ChartJS.defaults.color = "aliceblue";

    const [chartData, setChartData] = useState(null);

    const chartOptions = {
        responsive: true
    };

    useEffect(() => {
        const createChartData = () => {
            setChartData({
                labels: weatherData.map((element) => new Date(element.date_epoch * 1000).toLocaleDateString('en-US', { day: 'numeric', month: 'short', year: 'numeric' })),
                datasets: [
                    {
                        data: weatherData.map((element) => unit === 'metric' ? element.day.avgtemp_c : element.day.avgtemp_f),
                        fill: false,
                        borderColor: 'aliceblue',
                        tension: 0.1,
                    },
                ],
            })
        }
        createChartData()
    }, [weatherData, unit])

    return (
        chartData ? (
            <Line data={chartData} options={chartOptions} className='p-3' />
        ) : null
    );

}
