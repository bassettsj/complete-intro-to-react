import React from 'react'
import ReactDOM from 'react-dom'
import { IndexRoute, Router, Route, hashHistory } from 'react-router'
import Layout from './Layout'
import Landing from './Landing'
import Search from './Search'

const App = () => (
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Landing} />
      <Route path='/search' component={Search} />
    </Route>
  </Router>
)

ReactDOM.render(<App />, document.getElementById('app'))
