import React from 'react';
import POPOSSpace from './POPOSSpace';

function POPOSList() {
    return (
        <div className='POPOSList'>
            <POPOSSpace 
                name='50 California Street'
                address='50 California St.'
                image='50-california-st.jpg'
            />
            <POPOSSpace
                name='100 Pine Street'
                address='100 Pine St.'
                image='100-pine.jpg'
            />
            <POPOSSpace 
              name='343 Sansome Roof Garden'
              address='343 Sansome St.'
              image='343-sansome-roof-garden.jpg'
            />
            <POPOSSpace
              name='Embarcadero Center'
              address='50 Embarcadero St.'
              image='embarcadero-center.jpg'
            />
        </div>
    )
}



export default POPOSList