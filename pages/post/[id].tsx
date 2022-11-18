import React, { memo, useState } from 'react';
import { useRouter } from 'next/router';
import PostPageContent from '../../components/PostPageContent';
import Data from '../../public/data/data';
import { Item } from '..';

interface PostsProps {
  data: Item[];
}

export async function getStaticProps() {
  const data = Data;

  return {
    props: {
      data,
    },
    revalidate: 1,
  };
}

const pagesToGenerate = () => {
  const paths = [];
  Data.forEach((item, index) => paths.push({ params: { id: (index + 1).toString() } }));
  return paths;
};

export async function getStaticPaths() {
  return {
    paths: [...pagesToGenerate()],
    fallback: false, // See the "fallback" section below
  };
}

const PostsRoute = ({ data = Data }: PostsProps) => {
  const router = useRouter();

  const { id } = router.query;
  const [postNumber, setPostNumber] = useState(parseInt(id as string, 10));
  const onRandomPostClick = () => {
    const postSum = data.length;
    setPostNumber(Math.floor(Math.random() * postSum - 1));
  };

  const isLastPost = postNumber === data.length;
  const isFirstPost = postNumber === 1;

  const currentPost = data.find((post) => post.id === postNumber);

  return (
    <PostPageContent
      currentPost={currentPost}
      isFirstPost={isFirstPost}
      isLastPost={isLastPost}
      postNumber={postNumber}
      setPostNumber={setPostNumber}
      onRandomPostClick={onRandomPostClick}
    />
  );
};

export default memo(PostsRoute);
