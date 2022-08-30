import React, { memo, useEffect, useState } from 'react';
import { useRouter } from 'next/router'
import Data from '../../public/data/data';
import { Item } from '..';

interface PostProps {
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

const Post = ({}: PostProps) => {
const router = useRouter();
if (router === undefined) {
return null;
}



useEffect(()=> {
  router.push(`/post/${Data.length}`, `/post/${Data.length}`);
})

  return (   
  <></>
  )
};

export default memo(Post);