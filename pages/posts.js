import Layout from '../components/MyLayout';
import Header from '../components/Header';
import Post from '../components/Post'
import React, { Component } from 'react';

class Posts extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      post: 1,
      title:'',
      content:''
    };
    this.nextPost = this.nextPost.bind(this); //study - binding function
    this.previousPost = this.previousPost.bind(this);
    this.randomPost = this.randomPost.bind(this);
  }


  componentDidMount() {
    this.setState({post: this.props.data.length})
    this.currentPostData(this.props.data.length)
  }

  currentPostData(postNumber) {
    let post
    for (post in this.props.data) {
      if (this.props.data[post].id === postNumber) {
        this.setState({title: this.props.data[post].title})
        this.setState({content: this.props.data[post].content})
      }
    }
  }

  nextPost() {
    let postNumber = this.state.post
    postNumber++
    this.setState({post: postNumber})
    this.currentPostData(postNumber)
    console.log('next post')
  }

  previousPost() {
    let postNumber = this.state.post
    postNumber--
    this.setState({post: postNumber})
    this.currentPostData(postNumber)
    console.log('previous post')
  }

  randomPost() {
    let postSum = this.props.data.length
    let randomPostNumber = Math.floor(Math.random() * postSum)
    console.log(randomPostNumber)
    this.setState({post: randomPostNumber})
    this.currentPostData(randomPostNumber)
  }

  render() {
    return (
      <div>
        <Layout>
          <Header nextPost={this.nextPost} previousPost={this.previousPost} randomPost={this.randomPost}></Header>
          {this.state.post}
          <Post post={this.state.post} postTitle={this.state.title} postContent={this.state.content}></Post>
        </Layout>
      </div>
    );
  }
}

export default Posts;