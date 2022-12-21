import React, { useState } from 'react'
import { FaStar } from "react-icons/fa"
import Star from './Star'



const createArray = length => [...Array(length)];

function StartRatings({style={}, totalStars = 5, ...props }) {
    const [ selectedStars, setSelectedStars ] = useState(0)
    return (
        <div style={{ padding: "5px", ...style }} {...props}>
            {createArray(totalStars).map((n,i) => (
                <Star key={i} selected={selectedStars > i} onSelect={() => setSelectedStars(i +1)} />
            ))}
            <p>
                {selectedStars} of {totalStars} stars
            </p>
        </div>
    )
}


export default StartRatings