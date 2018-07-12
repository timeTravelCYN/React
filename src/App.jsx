import React, {Component} from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import asyncComponent from './Components/AsyncComponent/AsyncComponent'
console.log(asyncComponent)
const asyncHome = asyncComponent(() => import('./Components/Home/Home'))
const asyncLogin = asyncComponent(() => import('./Components/Login/Login'))

class App extends Component {
  render () {
    return (
      <Router>
        <Switch>
          <Route path='/' exact component={asyncHome}/>
          <Route path='/login' component={asyncLogin}/>
          <Route path='/posts' component={asyncHome}/>
        </Switch>
      </Router>
    )
  }
}

export default App
