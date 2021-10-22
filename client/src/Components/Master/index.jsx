import React from 'react';
import { useParams} from 'react-router-dom';
import Delivery from '../Delivery';
import Dining from '../Dining';
import NightLife from '../NightLife';
import Nutrition from '../Nutrition';

function Master() {
    const { type } = useParams();
    return (
        <>
            {type === 'delivery' && <Delivery />}
            {type === 'dining' && <Dining />}
            {type === 'night' && <NightLife />}
            {type === 'nutri' && <Nutrition />}
        </>
    )
};

export default Master;
