import React, { Component } from 'react'
import data from '../public/data'
import ShowCard from './ShowCard'
import _ from 'lodash'

export default class Search extends Component {
  constructor (...args) {
    super(...args)
    this.state = {
      searchTerm: ''
    }

    this.handleSearchTermEvent = this.handleSearchTermEvent.bind(this)
  }

  handleSearchTermEvent (e) {
    this.setState({ searchTerm: e.target.value })
  }

  render () {
    const searchShows = _.memoize((show) => {
      if (this.state.searchTerm.length) {
        return `${show.title} ${show.description}`.toUpperCase().indexOf(this.state.searchTerm.toUpperCase()) >= 0
      } else {
        return true
      }
    })

    return (
      <div className='container'>
        <header className='header'>
          <h1 className='brand'>sVideo</h1>
          <input type='search' placeholder='search' className='search-input' value={this.state.searchTerm} onChange={this.handleSearchTermEvent} />
        </header>
        <div className='shows'>
          {data.shows.filter(searchShows).map((show, index) => (
            <ShowCard {...show} key={show.imdbID} />
          ))}
        </div>
      </div>
    )
  }
}

export default Search
