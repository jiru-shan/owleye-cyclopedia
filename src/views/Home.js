import React from 'react';
import Popup from 'reactjs-popup';

function Home() 
{
    return(
    <div>
        <Popup trigger={<button> Trigger</button> } position="center" modal>
        <div>Popup content here !!</div>
        </Popup>
    </div>);
}

export default Home;