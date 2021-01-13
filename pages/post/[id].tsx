import Layout from '../../components/MyLayout';
import Header from '../../components/Header';
import Post from '../../components/Post'
import React, { Component, memo, useEffect, useState } from 'react';
import Data from '../../public/data/data';
import { createUseStyles } from 'react-jss';
import { Item } from '../.';
import router, { Router } from 'next/router';


interface PostsProps {
  data: Item[] ;
}

const useStyles = createUseStyles({
});

const PostsRoute = ({ data = Data }: PostsProps) => {
const classes = useStyles();
const [postNumber, setPostNumber] = useState(data.length)
const onRandomPostClick = () => {
    let postSum = data.length
    setPostNumber(Math.floor(Math.random() * postSum - 1))
};

const isLastPost = postNumber === data.length;
const isFirstPost = postNumber === 1;

const currentPost = data.find((post) => postNumber === post.id)

useEffect(() => {
  router.push(`${postNumber}`, `${postNumber}`);
},[postNumber])

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

export default memo(PostsRoute);