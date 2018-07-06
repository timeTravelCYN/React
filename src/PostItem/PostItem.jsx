import React from 'react'
import PropTypes from 'prop-types'
import './PostItem.css'
import like from '../image/like-default.png';

function PostItem (props) {
  const onHandleClick = () => {
    props.onVote(props.post.id)
  }
  const {post} = props
  return (
    <li className="item">
      <div className="title">
        {post.title}
      </div>
      <div>
        创建人：{post.author}
      </div>
      <div>
        创建时间：{post.date}
      </div>
      <div className="like">
        <span><img src={like} onClick={onHandleClick}/></span>
        <span>{post.vote}</span>
      </div>
    </li>
  )
}

PostItem.PropTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    title: PropTypes.string,
    author: PropTypes.string,
    date: PropTypes.string,
    vote: PropTypes.number
  }).isRequired,
  onVote: PropTypes.func.isRequired
}

export default PostItem