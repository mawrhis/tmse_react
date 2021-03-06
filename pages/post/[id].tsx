import Layout from '../../components/MyLayout';
import Header from '../../components/Header';
import Post from '../../components/Post'
import React, { memo, useEffect, useState } from 'react';
import Data from '../../public/data/data';
import { Item } from '../.';
import { useRouter } from 'next/router'
interface PostsProps {
  data: Item[] ;
}

export async function getStaticProps() {
  const data = Data;

  return {
    props: {
      data,
    },
    revalidate: 1,
  }
}

const pagesToGenerate = () => {
  let paths = []
  Data.forEach((item, index) => paths.push({params: {id: (index + 1).toString()}}))
  return paths;
}

export async function getStaticPaths() {
  return {
    paths: [
      ...pagesToGenerate()
    ],
    fallback: false // See the "fallback" section below
  };
}

const PostsRoute = ({ data = Data }: PostsProps) => {
  const router = useRouter();
if (router === undefined) {
  return null;
}

const { id } = router.query;
const [postNumber, setPostNumber] = useState(parseInt(id as string));
const onRandomPostClick = () => {
    let postSum = data.length
    setPostNumber(Math.floor(Math.random() * postSum - 1))
};

const isLastPost = postNumber === data.length;
const isFirstPost = postNumber === 1;

const currentPost = data.find((post) => postNumber === post.id);

useEffect(() => {
  router.push(`${postNumber}`, `${postNumber}`);
},[postNumber])

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
      <Post post={postNumber} postTitle={currentPost.title} postContent={currentPost.content}></Post>
    </Layout>
  </div>
  )
};

export default memo(PostsRoute);