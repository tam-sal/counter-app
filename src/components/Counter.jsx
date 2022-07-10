import React from 'react'
import '../stylesheets/Counter.css'

function Counter({ numClicks }) {
  return (
    <div className='counter-box'>
      {numClicks}
    </div>
  )
}

export default Counter