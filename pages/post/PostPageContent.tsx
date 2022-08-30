import React, { memo, useEffect, useState } from 'react';
import { createUseStyles } from 'react-jss';
import Layout from '../../components/MyLayout';
import PostContent from '../../components/Post';
import Header from '../../components/Header';
import { useRouter } from 'next/router'
import Data from '../../public/data/data';
import { Item } from '..';

interface PostPageContentProps {
  isLastPost: boolean;
  isFirstPost: boolean;
  onRandomPostClick: () => void;
  setPostNumber: (number: number) => void;
  postNumber: number;
  currentPost: Item;
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

const PostPageContent = ({isLastPost, isFirstPost, onRandomPostClick, setPostNumber, postNumber, currentPost }: PostPageContentProps) => {
const router = useRouter();
if (router === undefined) {
return null;
}

useEffect(() => {
  router.push(`${postNumber}`, `${postNumber}`);
},[postNumber])

  return (   
  <div>
    <Layout>
      <Header 
        isFirstPost={isFirstPost}
        isLastPost={isLastPost}
        onRandomPostClick={onRandomPostClick}
        onNextPostClick={() => setPostNumber(postNumber + 1)}
        onPreviousPostClick={() => setPostNumber(postNumber - 1)}
        />
      <PostContent post={postNumber} postTitle={currentPost.title} postContent={currentPost.content}></PostContent>
    </Layout>
  </div>
  )
};

export default memo(PostPageContent);