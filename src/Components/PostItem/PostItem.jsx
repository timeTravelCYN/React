import React from 'react'
import './PostItem.css'
import { getFormatDate } from '../../utils/date'
import like from '../../image/like.png'

function PostItem(props) {
  const { post } = props
  return (
    <li className="postItem">
      <div className="title">
        {post.title}
      </div>
      <div>
        创建人: <span>{post.author.username}</span>
      </div>
      <div>
        更新时间: <span>{getFormatDate(post.updatedAt)}</span>
      </div>
      <div className="like">
        <span>
          <img src={like} alt="vote"/>
        </span>
        <span>
          {post.vote}
        </span>
      </div>
    </li>
  )
}

export default PostItem