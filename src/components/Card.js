import React from 'react'

function Card({title, imgSource, url, text}) {

  return (
    <div className='card text-center bg-dark'>
      <img src={imgSource} alt='' />
      <div className='card-body text-light'>
        <h4 className='card-title'>{title}</h4>
        <p className='card-text text-secondary'>
          {text}
        </p>
        <a href={url} className='btn btn-secondary rounded-0'>
          Más Info 
        </a>
      </div>
    </div>
  )
}

export default Card
