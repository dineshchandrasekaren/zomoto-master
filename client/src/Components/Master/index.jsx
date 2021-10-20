import React from 'react';
import { useParams} from 'react-router-dom';
import Delivery from '../Delivery';
import Dining from '../Dining';

function Master() {
    const { type } = useParams();
    return (
        <>
            {type === 'delivery' && <Delivery />}
         {type==='dining' && <Dining/>}   
        </>
    )
};

export default Master
