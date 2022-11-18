import React, { memo, useEffect } from 'react';
import router from 'next/router';
import Data from '../public/data/data';

export interface Item {
  content: string;
  id: number;
  published: string;
  tags: string[] | string;
  title?: string;
}

const Index = () => {
  // We don't need the static css any more once we have launched our application.
  if (typeof window !== 'undefined' && window.document) {
    const ssStyles = document?.getElementById('server-side-styles');
    ssStyles?.parentNode?.removeChild(ssStyles);
  }

  useEffect(() => {
    router.push(`/post/${Data.length}`, `/post/${Data.length}`);
  });

  return <></>;
};

export default memo(Index);
