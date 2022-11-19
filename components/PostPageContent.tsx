import React, { memo } from 'react';
import Data from '../public/data/data';
import { Item } from '../pages';
import Layout from './MyLayout';
import PostContent from './Post';
import Header from './Header';

interface PostPageContentProps {
  currentPost: Item;
  isFirstPost: boolean;
  isLastPost: boolean;
  onRandomPostClick: () => void;
  postNumber: number;
  setPostNumber: (number: number) => void;
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

const PostPageContent = ({
  isLastPost,
  isFirstPost,
  onRandomPostClick,
  setPostNumber,
  postNumber,
  currentPost,
}: PostPageContentProps) => {
  return (
    <div>
      <Layout>
        <Header
          isFirstPost={isFirstPost}
          isLastPost={isLastPost}
          onNextPostClick={() => setPostNumber(postNumber + 1)}
          onPreviousPostClick={() => setPostNumber(postNumber - 1)}
          onRandomPostClick={onRandomPostClick}
        />
        <PostContent
          post={postNumber}
          postContent={currentPost.content}
          postTitle={currentPost.title}
        />
      </Layout>
    </div>
  );
};

export default memo(PostPageContent);
