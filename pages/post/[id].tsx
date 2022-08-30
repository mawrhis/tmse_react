import PostPageContent from '../../components/PostPageContent'
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
  
  const currentPost = data.find((post) => postNumber || data.length === post.id);

  return (
   <PostPageContent onRandomPostClick={onRandomPostClick} isLastPost={isLastPost} postNumber={postNumber} currentPost={currentPost} isFirstPost={isFirstPost} setPostNumber={setPostNumber} ></PostPageContent>
  )
};

export default memo(PostsRoute);