import React, {Component} from 'react'
import PostItem from '../PostItem/PostItem'
import './PostList.css'

class PostList extends Component {
  constructor (props) {
    super(props)
    this.state = {
      posts: []
    }
    this.timer = null
    this.handleVoteClick = this.handleVoteClick.bind(this)
    this.handleSave = this.handleSave.bind(this)
  }

  componentDidMount () {
    this.timer = setTimeout(() => {
      this.setState({
        posts: [
          { id: 1, title: '学习 React', author: '陈二狗', date: '2018-07-05 20:11', vote: 0 },
          { id: 2, title: '巩固自己的技能', author: '陈二狗', date: '2018-07-05 20:12', vote: 0 },
          { id: 3, title: '找一份更好的工作', author: '陈二狗', date: '2018-07-05 20:13', vote: 0 }
        ]
      })
    }, 1000);
  }

  componentWillUnmount () {
    if (this.timer) {
      clearTimeout(this.timer)
    }
  }

  handleVoteClick (id) {
    const posts = this.state.posts.map(item => {
      const post = id === item.id ? {...item, vote: ++item.vote} : item;
      return post
    })
    this.setState({
      posts
    })
  }

  handleSave (post) {
    const posts = this.state.posts.map(item => {
      const newItem = item.id === post.id ? post: item;
      return newItem
    })
    this.setState({
      posts
    })
  }

  render () {
    return (
      <div className="container">
        <h2>帖子列表</h2>
        <ul>
          {
            this.state.posts.map(item => 
              <PostItem
                key={item.id}
                post={item}
                onVote={this.handleVoteClick}
                onSave={this.handleSave}
              />
            )
          }
        </ul>
      </div>
    )
  }
}

export default PostList