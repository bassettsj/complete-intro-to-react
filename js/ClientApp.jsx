import React from 'react'
import ReactDOM from 'react-dom'

const App = () => (
  <div className='app-container'>
    <div className='home-info'>
      <h1 className='title'>svideo</h1>
      <input type='text' className='search' placeholder='search' />
      <button className='browse-all'>or Browse All?</button>
    </div>
  </div>
)

ReactDOM.render(<App />, document.getElementById('app'))
