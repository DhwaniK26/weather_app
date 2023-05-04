import React from 'react'
import '../assets/stylesheets/header.css'

export default function Header({ myFunc }) {
    return (
        <>
            <nav className="navbar">
                <div className="container">
                    <a className="navbar-brand">Weather App</a>
                    <div className="d-flex" name="location">
                        <input className="form-control me-2" type="search" placeholder="Search" id="search" onKeyDown={
                            (e) => {
                                if(e.key == "Enter") {
                                    myFunc(e.target.value, "Place")
                                }
                            }
                        }/>
                        <button className="border-0 border-radius-25" onClick={() => myFunc(document.getElementById("search").value, "Place")} type="submit">Search</button>
                    </div>
                </div>
            </nav >
        </>
    )
}
