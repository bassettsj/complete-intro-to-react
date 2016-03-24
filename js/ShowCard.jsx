import React from 'react'

const ShowCard = (props) => (
  <div className='show-card'>
    <img className='show-card-img' src={`public/img/posters/${props.show.poster}`} alt={`poster of ${props.show.title}`} />
    <div className='show-card-text'>
      <h3 className='show-card-title'>{props.show.title}</h3>
      <h4 className='show-card-year'>({props.show.year})</h4>
      <p className='show-card-description'>{props.show.description}</p>
    </div>
  </div>
)

export default ShowCard
