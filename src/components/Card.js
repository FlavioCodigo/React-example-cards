import React from 'react'
import lobo1 from '../assets/img/lobo1.jpg' 

function Card() {
  return (
    <div className='card'>
      <img src={lobo1} alt='' />
      <div className='card-body'>
        <div className='card-title'>Card</div>
        <div className='card-text text-secondary'>
          lorem ipsum dolor sit amet, consectetur adipiscing Lorem ipsum dolor
          sit amet, consectetur adip
        </div>
      </div>
    </div>
  )
}

export default Card
