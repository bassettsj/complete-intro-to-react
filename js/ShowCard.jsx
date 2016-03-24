import React, { PropTypes } from 'react'

const ShowCard = (props) => (
  <div className='show-card'>
    <img className='show-card-img' src={`public/img/posters/${props.poster}`} alt={`poster of ${props.title}`} />
    <div className='show-card-text'>
      <h3 className='show-card-title'>{props.title}</h3>
      <h4 className='show-card-year'>({props.year})</h4>
      <p className='show-card-description'>{props.description}</p>
    </div>
  </div>
)

const { string } = PropTypes

ShowCard.propTypes = {
  poster: string.isRequired,
  title: string.isRequired,
  year: string.isRequired,
  description: string.isRequired
}

export default ShowCard
