import React from 'react'
import mask from './mask.png';
import vaccine from './vaccine.png';
import san from './san.png';
import health from './health.png'

function Startup() {
    return (
        <div className='startup'>
            <div><img src={mask} alt='mask' height='70' width='70' /><h1>Wear Mask</h1></div>
            <div><img src={san} alt='san' height='70' width='70' /><h1>Wash Hands</h1></div>
            <div><img src={vaccine} alt='vaccine' height='70' width='70' /><h1>Get Vaccinated</h1></div>
            <div><img src={health} alt='health' height='70' width='70' /><h1>Stay Safe</h1></div>
        </div>
    )
}

export default Startup
