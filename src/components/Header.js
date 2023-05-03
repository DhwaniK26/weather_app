import React from 'react'
import '../assets/stylesheets/header.css'

export default function Header() {
    return (
        <>
            <nav class="navbar">
                <div class="container">
                    <a class="navbar-brand">Weather App</a>
                    <form class="d-flex" role="search">
                        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                        <button class="border-0 border-radius-25" type="submit">Search</button>
                    </form>
                </div>
            </nav>
        </>
    )
}
