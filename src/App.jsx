import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Home from './Components/Home/Home'
import Login from './Components/Login/Login'

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/login' component={Login}/>
          <Route path='/posts' component={Home}/>
        </Switch>
      </Router>
    )
  }
}

export default App
