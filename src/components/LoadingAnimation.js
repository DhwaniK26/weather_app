// Libraries
import React from 'react'

// Media
import LoadingAnimationImage from '../assets/spinner.gif'

export default function LoadingAnimation() {
    return (
        <div className='text-center h-100 d-flex align-items-center justify-content-center'>
            <img width="35%" src={LoadingAnimationImage} alt="Loading Animation" />
        </div>
    )
}
