import React, { memo, useEffect } from 'react';
import { useRouter } from 'next/router';
import Data from '../../public/data/data';
import { Item } from '..';

interface PostProps {
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

const Post = ({ data }: PostProps) => {
  const router = useRouter();

  useEffect(() => {
    // router.push(`/post/${data.length}`, `/post/${data.length}`);
  });

  if (router === undefined) {
    return null;
  }

  return <></>;
};

export default memo(Post);
