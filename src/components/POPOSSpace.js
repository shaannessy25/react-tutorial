import React from 'react';
import { Link } from 'react-router-dom'
import './POPOSSpace.css'

function POPOSSpace(props) {
    const { name, image, address, hours, id } = props
    return (
        <div className='POPOSSpace'>
            <Link to={`/details/${id}`}>
                <img src={`${process.env.PUBLIC_URL}images/${image}`} widht='300' height='300' alt='not working' />  
            </Link>
            <Link to={`/details/${id}`}>
                <h1>{name}</h1>
            </Link>
            <div>{address}</div>
            <div className='Time'>{hours}</div>
        </div>
    )
}

export default POPOSSpace