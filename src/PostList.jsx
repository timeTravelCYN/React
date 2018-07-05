import React, { Component } from 'react'
import PostItem from './PostItem'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.state = {
      posts: []
    }
    this.timer = null
    this.handleVote = this.handleVote.bind(this)
  }

  componentDidMount() {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          { id: 1, title: '学习 React', author: '陈二狗', date: '2018-07-05 20:11', vote: 0},
          { id: 2, title: '巩固自己的技能', author: '陈二狗', date: '2018-07-05 20:12', vote: 0},
          { id: 3, title: '找一份更好的工作', author: '陈二狗', date: '2018-07-05 20:13', vote: 0}
        ]
      })
    }, 1000);
  }

  componentWillUnmount () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  handleVote (id) {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === id ? {...item, vote: ++item.vote} : item;
      return newItem
    })
    this.setState({
      posts: posts
    })
  }

  render () {
    return (
      <div>
        帖子列表：
        <ul>
          {
            this.state.posts.map(item =>
              <PostItem
                post={item}
                onVote={this.handleVote}
              />
            )
          }
        </ul>
      </div>
    )
  }
}

export default PostList