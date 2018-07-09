import React, {Component} from 'react'
import Modal from './Modal';
import './style.css'
class App extends Component {
  constructor(props) {
    super(props)
    this.state = {showModal: true}
  }

  closeModal = () => {
    this.setState({showModal: false})
  }

  render () {
    return (
      <div>
        <h2>DashBoard</h2>
        {
          this.state.showModal && (<Modal onClose={this.closeModal}>Modal Dialog</Modal>)
        }
      </div>
    )
  }
}
export default App