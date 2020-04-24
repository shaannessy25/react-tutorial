import React from 'react';



function POPOSSpace(props) {
    const { name, image, address } = props
    return (
        <div>
            <img src={`${process.env.PUBLIC_URL}images/${image}`} widht='300' height='300' alt='not working' />
            <h1>{name}</h1>
            <div>{address}</div>
        </div>
    )
}

export default POPOSSpace