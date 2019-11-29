import Layout from '../components/MyLayout';
import Header from '../components/Header';
import Post from '../components/Post'
import React, { Component } from 'react';


const FIRST_POST = 1

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

  lastPost() {
    return (this.props.data.length === this.state.post) ? true : false
  }

  firstPost() {
    return (FIRST_POST === this.state.post) ? true : false
  }

  nextPost() {
    let postNumber = this.state.post
    postNumber++
    this.setState({post: postNumber})
    this.currentPostData(postNumber)
  }

  previousPost() {
    let postNumber = this.state.post
    postNumber--
    this.setState({post: postNumber})
    this.currentPostData(postNumber)
  }

  randomPost() {
    let postSum = this.props.data.length
    let randomPostNumber = Math.floor(Math.random() * postSum)
    this.setState({post: randomPostNumber})
    this.currentPostData(randomPostNumber)
  }

  render() {
    console.log(this.state.post)
    return (
      <div>
        <Layout>
          <Header 
            nextPost={this.nextPost} 
            lastPost={this.lastPost()}
            firstPost={this.firstPost()} 
            previousPost={this.previousPost} 
            randomPost={this.randomPost}
            next={this.state.post + 1}
            prev={this.state.post - 1}
            >
            </Header>
          <Post post={this.state.post} postTitle={this.state.title} postContent={this.state.content}></Post>
        </Layout>
      </div>
    );
  }
}

export default Posts;