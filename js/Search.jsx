import React from 'react'
import data from '../public/data'
import ShowCard from './ShowCard'

const Search = () => (
  <div className='container'>
    <header className='header'>
      <h1 className='brand'>sVideo</h1>
      <input type='search' placeholder='search' className='search-input' />
    </header>
    <div className='shows'>
      {data.shows.map((show, index) => (
        <ShowCard {...show} key={show.imdbID} />
      ))}
    </div>
  </div>
)

export default Search
