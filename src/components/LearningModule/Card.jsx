import React from 'react'
import './Card.css'
function Card({logo, title, text, color}) {
  return (
    <div className='card' > 
    {/* style={{backgroundColor:color}} */}
      <img className='card-logo' src={logo} alt='logo'/>
      <p className='card-title'>{title}</p>
      <p className='card-text'>{text}</p>
    </div>
  )
}

export default Card
