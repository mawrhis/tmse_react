import Layout from '../components/MyLayout';
import Header from '../components/Header';
import Post from '../components/Post'
import React, { Component, memo, useState } from 'react';
import { createUseStyles } from 'react-jss';
import { Item } from '.';


interface PostsProps {
  data: Item[] ;
}

const useStyles = createUseStyles({
});

const Posts = ({ data }: PostsProps) => {
const classes = useStyles();
const [postNumber, setPostNumber] = useState(data.length - 1)
const onRandomPostClick = () => {
    let postSum = data.length
    setPostNumber(Math.floor(Math.random() * postSum - 1))
};

const isLastPost = postNumber === data.length;
const isFirstPost = postNumber === 1;

const currentPost = data.find((post) => postNumber === post.id)

console.log('data', data.length)
  return (
    <div>
    <Layout>
      <Header 
        // onNextPostClick={onNextPostClick} 
        // onNewestPostClick={onNewestPostClick}
        // OnOldestPostClick={OnOldestPostClick} 
        // previousPost={setPostNumber(postNumber + 1)} 
        isFirstPost={isFirstPost}
        isLastPost={isLastPost}
        onRandomPostClick={onRandomPostClick}
        onNextPostClick={() => setPostNumber(postNumber + 1)}
        onPreviousPostClick={() => setPostNumber(postNumber - 1)}
        />
      <Post post={postNumber} postTitle={currentPost.title || ''} postContent={currentPost.content}></Post>
    </Layout>
  </div>
  )
};

export default memo(Posts);