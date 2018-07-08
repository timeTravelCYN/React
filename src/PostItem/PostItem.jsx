import React, {Component} from 'react'
import PropTypes from 'prop-types'
import './PostItem.css'
import like from '../image/like-default.png';

class PostItem extends Component {
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      post: props.post
    }
    this.handleVote = this.handleVote.bind(this)
    this.handleEditPost = this.handleEditPost.bind(this)
    this.handleTitleChange = this.handleTitleChange.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.post !== nextProps.posts) {
      this.setState({
        post: nextProps.post
      })
    }
  }

  handleVote () {
    this.props.onVote(this.props.post.id)
  }

  handleEditPost () {
    const editing = this.state.editing
    if (editing) {
      this.props.onSave({
        ...this.state.post,
        date: this.getFormatDate()
      })
    }

    this.setState({
      editing: !editing
    })
  }

  handleTitleChange (e) {
    const newPost = {
      ...this.state.post,
      title: e.target.value
    }
    this.setState({
      post: newPost
    })
  }

  getFormatDate () {
    const date = new Date();
    const year = date.getFullYear();
    let month = date.getMonth() + 1 + "";
    month = month.length === 1 ? "0" + month : month;
    let day = date.getDate() + "";
    day = day.length === 1 ? "0" + day : day;
    let hour = date.getHours() + "";
    hour = hour.length === 1 ? "0" + hour : hour;
    let minute = date.getMinutes() + "";
    minute = minute.length === 1 ? "0" + minute : minute;
    return `${year}-${month}-${day} ${hour}:${minute}`;
  }

  render () {
    const {post} = this.state;
    return (
      <li className="item">
        <div className="title">
          {this.state.editing
            ? <form>
              <textarea
                value={post.title}
                onChange={this.handleTitleChange}
              />
            </form>
            :`${post.title}`}
        </div>
        <div>
          创建人：<span>{post.author}</span>
        </div>
        <div>
          创建时间：<span>{post.date}</span>
        </div>
        <div className="like">
          <span>
            <img src={like} alt="vote" onClick={this.handleVote}/>
          </span>
          <span>{post.vote}</span>
        </div>
        <div>
          <button onClick={this.handleEditPost}>
            {this.state.editing ? '保存' : '编辑'}
          </button>
        </div>
      </li>
    )
  }
  
}

PostItem.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    vote: PropTypes.number
  }).isRequired,
  onVote: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
}

export default PostItem