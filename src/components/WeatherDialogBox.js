import React from 'react'
import '../assets/stylesheets/weatherdialogbox.css'
import weathericon from '../assets/weathericom.png'

export default function WeatherDialogBox(props) {
    return (
        <div className='container dialogbox text-center p-3'>
            <div className='heading-text text-center'>Weather App</div>
            <div className='a'>
                <img src={weathericon} className='weather-img' /><br />
                <span className='temp_cel'>{props.temperature}° C</span><br />
                <span className='temp_text pt-2'>{props.condition}</span>
                <div className='temp_state p-2'><i className='fa fa-map-marker' style={{ paddingRight: "10px" }}></i>
                    {props.place}
                </div>
            </div>
            <div className='container d-flex justify-content-around pt-3 align-items-center'>
                <div className='text'>
                    <span className='text_title'>Feels Like</span>
                    <div className='d-flex align-items-center'>
                        <i className='fa fa-thermometer-2' style={{ paddingRight: "10px", fontSize: "30px" }}></i>
                        {props.feels_like}° C
                    </div>
                </div>
                <div className='text'>
                    <span className='text_title'>Humidity</span><br />
                    <div className='d-flex align-items-center'>
                        <i className='fa fa-tint' style={{ paddingRight: "10px", fontSize: "30px" }}></i>
                        {props.humidity}%
                    </div>
                </div>
            </div>
        </div>
    )
}
