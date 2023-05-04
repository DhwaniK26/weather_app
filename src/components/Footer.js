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
                        © 2023 WeatherApp.com :All rights reserved To <a className='text_decoration' href="https://github.com/virendra2902">Patil Virendra</a> & <a href='https://github.com/kumarayush2104' className='text_decoration'>Ayush Kumar</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
