import React, { Component } from 'react'
import './PostEditor.css'

class PostEditor extends Component {
  constructor(props) {
    super(props)
    const { post } = this.props;
    this.state = {
      title: (post && post.title) || '',
      content: (post && post.content) || ''
    }
    this.handleCancelClick = this.handleCancelClick.bind(this)
    this.handleSaveClick = this.handleSaveClick.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange (e) {
    this.setState({
      [e.target.name]: e.target.value
    })    
  }

  handleCancelClick () {
    this.props.onCancel()
  }

  handleSaveClick() {
    const data = {
      title: this.state.title,
      content: this.state.content
    }
    this.props.onSave(data)
  }

  render () {
    return (
      <div className="postEditor">
        <input type="text" name="title" placeholder="标题" value={this.state.title} onChange={this.handleChange}/>
        <textarea name="content" placeholder="内容" value={this.state.content} onChange={this.handleChange} />
        <button onClick={this.handleCancelClick}>取消</button>
        <button onClick={this.handleSaveClick}>保存</button>
      </div>
    )
  }
}

export default PostEditor