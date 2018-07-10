import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'
import { post } from '../../utils/request'
import url from '../../utils/url'
import './Login.css'

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      username: '',
      password: '',
      redirectToReffer: false
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSubmit (e) {
    e.preventDefault()
    const username = this.state.username;
    const password = this.state.password;
    if (username.length === 0 || password.length === 0) {
      return alert('用户名或密码不能为空')
    }

    const params = {
      username,
      password
    }
    post(url.login(), params).then(data => {
      if (data.error) {
        alert(data.error.message || 'login failed')
      } else {
        sessionStorage.setItem('userId', data.userId)
        sessionStorage.setItem('username', username)
        this.setState({
          redirectToReffer: true
        })
      }
    })
  }

  render () {
    const { from } = this.props.location.state || { from: {pathname: '/'} }
    const {redirectToReffer} = this.state
    if (redirectToReffer) {
      return <Redirect to={from} />
    }
    return (
      <form className="login" onSubmit={this.handleSubmit}>
        <div>
          <label htmlFor="">
            用户名:
            <input type="text"
              name="username"
              value={this.state.username}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <div>
          <label htmlFor="">
          密码：
            <input type="password"
              name="password"
              value={this.state.password}
              onChange={this.handleChange}
            />
          </label>
        </div>
        <input type="submit" value="登录" />
      </form>
    )
  }
}

export default Login