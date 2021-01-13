import React, { Component, memo, useEffect, useState } from 'react';
import Data from '../public/data/data';
import { createUseStyles } from 'react-jss';
import router, { Router } from 'next/router';
import Link from 'next/link';

export interface Item {
  id: number
  content: string
  published: string
  tags: string[] | string
  title?: string
}

interface IndexProps {}

const useStyles = createUseStyles({
});

const Index = ({ }: IndexProps) => {
const classes = useStyles();
// console.log('Data', Data);

useEffect(()=> {
  router.push('/post/1', '/post/1');
})

  return (
    <div>
      <Link href='post/1'>odkaz</Link>
    </div>
  )
};

export default memo(Index);