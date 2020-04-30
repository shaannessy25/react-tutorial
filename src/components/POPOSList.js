import React from 'react';
import POPOSSpace from './POPOSSpace';
import './POPOSList.css';
import data from '../sfpopos-data.json'



const titles = data.map((obj) => {
    return <h1>{obj.title}</h1>
})

function POPOSList() {
    const spaces = data.map(({title, address, images, hours }, i) => {
        return (
            <POPOSSpace
                id={i}
                key={title}
                address={address}
                image={images[0]}
                hours={hours}
            />    
        )
    })

    return (
        <div className='POPOSList'>
            { spaces }
        </div>
    )
}

console.log(titles);
export default POPOSList