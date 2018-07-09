import React, {Component} from 'react'
import ErrorBoundary from "./ErrorBoundary";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      user: {
        name: 'react'
      }
    }
  }

  onClick = () => {
    this.setState({user: null})
  }

  render () {
    return (
      <div>
        <ErrorBoundary>
          <Profile user={this.state.user}></Profile>
        </ErrorBoundary>
        <button onClick={this.onClick}>更新</button>
      </div>
    )
  }
}

const Profile = ({user}) => <div>name: {user.name}</div>

export default App