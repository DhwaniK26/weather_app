// Libraries
import React from 'react'

// Modules
import weatherIcons from '../modules/WeatherIcon'

const RenderHourlyCard = (hourlyData, unit) => {
    return hourlyData.map((element, index) => (
        <HourlyCard
            key={index}
            date={new Date(element.time_epoch * 1000).toLocaleDateString('en-US', {
                day: 'numeric',
                month: 'short',
                year: 'numeric',
                hour: '2-digit',
                minute: '2-digit',
                timeZoneOffset: '+5:30',
            })}
            temperature={unit === 'metric' ? element.temp_c : element.temp_f}
            icon={element.condition.code}
        />
    ));
};

function HourlyCard(props) {
    const icon = weatherIcons(props.icon)
    return (
        <div className='hourly-card p-2'>
            <div className='row align-items-center'>
                <div className="col-12 col-md-5 row align-items-center justify-content-center justify-content-lg-start">
                    <div className='col-4'>
                        <i className={`${icon} m-2`} style={{ fontSize: "30px" }} />
                    </div>
                    <h3 className='col-3'>{props.temperature}°</h3>
                </div>
                <h5 className='col-12 col-md-7 text-center'>{props.date}</h5>
            </div>
        </div>
    )
}

export default RenderHourlyCard;
