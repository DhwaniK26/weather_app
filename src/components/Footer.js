import React from 'react'
import '../assets/stylesheets/footer.css'

export const Footer = () => {

    return (
        <>
            <div className="container-flex footer">
                <div className="container d-flex flex-column align-items-center">
                    <div className='footer-text-1'>
                        Weather App
                    </div>
                    <div className='footer-text-2'>
                        © 2023 WeatherApp.com : All Rights Copyright Reserved To <a className='text_decoration' href="!#">Patil Virendra & Kumar Ayush</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
