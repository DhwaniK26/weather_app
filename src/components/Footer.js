import React from 'react'

export const Footer = () => {
    let footer_text_subheading = {
        color: "#1b172b",
        padding: "10px",
        paddingBottom: "40px",
        textAlign: "center",

    }
    
    return (
        <>
            <div className="container-flex footer">
                <div className="container d-flex flex-column align-items-center">
                    <div className='footer-text-1' style={{ color: "#1b172b", padding: "25px", fontSize: "36px", fontWeight: "600", textAlign: "center", paddingTop: "30px" }}>
                        Weather App
                    </div>
                    <div className='footer-text-2' style={footer_text_subheading}>
                        © 2023 WeatherApp.com : All Rights Copyright Reserved To <a className='text_decoration' href="!#">Patil Virendra & Kumar Ayush</a>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
