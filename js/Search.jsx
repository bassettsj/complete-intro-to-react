import React from 'react'
import data from '../public/data'
import ShowCard from './ShowCard'

const Search = () => (
  <div className='container'>
    <div className='shows'>
      {data.shows.map((show, index) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

export default Search
