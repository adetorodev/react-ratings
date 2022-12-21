import React from 'react'
import StartRatings from './StartRatings'

function Color({ title, color, rating}) {
  return (
    <section>
        <h1>{title}</h1>
        <div style={{height: 50, backgroundColor: color}} />
        <StartRatings selectedStars={rating} />
    </section>
  )
}

export default Color