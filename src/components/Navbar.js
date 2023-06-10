import React, { useEffect, useState } from 'react'

export default function Navbar(props) {

    const [currentDate, setCurrentDate] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentDate(new Date());
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <nav className='top-bar container-flex p-1'>
            <div className='container p-3'>
                <div className='row justify-content-center justify-content-lg-between'>
                    <div className='col-12 col-lg-4 col-xl-4 text-center text-lg-start my-2'>
                        <span className='date-time'>
                            {currentDate.toLocaleDateString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: 'numeric', hour: '2-digit', minute: '2-digit' })}
                        </span>
                    </div>

                    <div className='row col-12 col-lg-7 col-xl-5 align-items-center justify-content-evenly text-center'>
                        <div className='searchbar col-12 col-md-7'>
                            <input id="searchfield" className="input-field" onKeyDown={(e) => {
                                if (e.key === 'Enter') {
                                    var searchValue = document.getElementById('searchfield').value
                                    if (searchValue.length > 0) props.searchPlace(searchValue)
                                }
                            }} type="text" placeholder="Search a city or postcode" />
                            <button className='input-field search-button' onClick={() => {
                                var searchValue = document.getElementById('searchfield').value
                                if (searchValue.length > 0) props.searchPlace(searchValue)
                            }}><i className="fa-solid fa-search" style={{ color: "#1e1f23" }} /></button>
                        </div>
                        <select className="input-field col-4 col-md-3 my-2" onChange={(e) => props.changeUnit(e.target.value)}>
                            <option className="input-field" value="metric">Metric</option>
                            <option className="input-field" value="imperial">Imperial</option>
                        </select>
                        <button className='input-field location-button col-md-1 col-4' onClick={props.fetchMyLocation}><i className="fa-solid fa-location-arrow" style={{ color: "#ffffff" }} /></button>
                    </div>
                </div>
            </div>
        </nav>
    )
}
