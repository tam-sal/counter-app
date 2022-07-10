import React from 'react'
import '../stylesheets/Button.css'

function Button({ btnText, isCounter, handleClick }) {
  return (
    <button
      className={isCounter ? 'click-btn' : 'reset-btn'}
      onClick={handleClick}
    >
      {btnText}

    </button>
  )
}

export default Button