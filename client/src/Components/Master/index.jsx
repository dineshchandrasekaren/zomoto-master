import React from 'react';
import { useParams} from 'react-router-dom';
function Master() {
    return (
        <>{useParams().type}</>
    )
};

export default Master
