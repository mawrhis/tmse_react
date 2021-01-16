import React, { Component, memo, useEffect, useState } from 'react';
import Data from '../public/data/data';
import { createUseStyles } from 'react-jss';
import router, { Router } from 'next/router';
import Link from 'next/link';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';

export interface Item {
  id: number
  content: string
  published: string
  tags: string[] | string
  title?: string
}

interface IndexProps {}


const Index = ({ }: IndexProps) => {
// console.log('Data', Data);

// We don't need the static css any more once we have launched our application.
if (typeof window != 'undefined' && window.document) {
  const ssStyles = document?.getElementById('server-side-styles')
  ssStyles?.parentNode?.removeChild(ssStyles)
}

useEffect(()=> {
  router.push(`/post/${Data.length}`, `/post/${Data.length}`);
})

  return (
    <div>
      <Link href='post/1'>odkaz</Link>
    </div>
  )
};

export default memo(Index);