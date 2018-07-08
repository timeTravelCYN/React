import React, { Component } from 'react'

class RadioDemo extends Component {
  constructor(props) {
    super(props)
    this.state = {
      react: true,
      redux: false,
      mobx: false
    }

    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange(e) {
    Object.keys(this.state).forEach(key => {
      this.setState({
        [key]: false
      })
    })
    this.setState({
      [e.target.name]: e.target.checked
    })
  }

  handleSubmit(e) {
    e.preventDefault()
  }

  render() {
    return (
      <form action="" onSubmit={this.handleSubmit}>
        <label htmlFor="">react
          <input type="radio" name="react" value="react" checked={this.state.react} onChange={this.handleChange} />
        </label>
        <label htmlFor="">redux
          <input type="radio" name="redux" value="redux" checked={this.state.redux} onChange={this.handleChange} />
        </label>
        <label htmlFor="">mobx
          <input type="radio" name="mobx" value="mobx" checked={this.state.mobx} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    )
  }
}

export default RadioDemo