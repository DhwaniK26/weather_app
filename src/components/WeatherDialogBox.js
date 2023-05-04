import React, { useEffect, useState } from 'react'
import '../assets/stylesheets/weatherdialogbox.css'
import Weather from '../models/Weather';
import weathericon from '../assets/weathericon.png'

export default function WeatherDialogBox({ location, searchType }) {
    const [weather, setWeather] = useState(null);

    useEffect(() => {
        const onMapHover = async (place, type) => {
            var urlHeader = "https://api.openweathermap.org/data/2.5/weather?units=metric&appid=b317aca2e83ad16e219ff2283ca837d5";
            if (type === "latLang") {
                urlHeader += "&lat=" + place.latitude + "&lon=" + place.longitude;
            } else if (type === "Place") {
                urlHeader += "&q=" + place;
            }

            await fetch(urlHeader).then((response) => {
                if (response.ok) {
                    response.json().then((response) => {
                        setWeather(new Weather(response.name, response.main.temp, response.weather[0].description.charAt(0).toUpperCase() + response.weather[0].description.slice(1), response.main.feels_like, response.main.humidity))
                    })
                }
            })
        }
        onMapHover(location, searchType)
    }, [location, searchType]);

    return (
        <>
            {
                weather ? (
                    <div className='container dialogbox text-center p-3' >
                        <div className='heading-text text-center'>Weather App</div>
                        <div className='a'>
                            <img src={weathericon} className='weather-img' /><br />
                            <span className='temp_cel'>{weather.temperature}° C</span><br />
                            <span className='temp_text pt-2'>{weather.message}</span>
                            <div className='temp_state p-2'><i className='fa fa-map-marker' style={{ paddingRight: "10px" }}></i>
                                {weather.place}
                            </div>
                        </div>
                        <div className='container d-flex justify-content-around pt-3 align-items-center'>
                            <div className='text'>
                                <span className='text_title'>Feels Like</span>
                                <div className='d-flex align-items-center'>
                                    <i className='fa fa-thermometer-2' style={{ paddingRight: "10px", fontSize: "30px" }}></i>
                                    {weather.feels_like}° C
                                </div>
                            </div>
                            <div className='text'>
                                <span className='text_title'>Humidity</span><br />
                                <div className='d-flex align-items-center'>
                                    <i className='fa fa-tint' style={{ paddingRight: "10px", fontSize: "30px" }}></i>
                                    {weather.humidity}%
                                </div>
                            </div>
                        </div>
                    </div>) : null
            }
        </>
    )
}
