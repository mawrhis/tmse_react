import Posts from './posts';
import React, { Component, memo, useState } from 'react';
import Data from '../public/data/data';
import { createUseStyles } from 'react-jss';

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

  return (
    <div>
      <Posts data={Data}/>
    </div>
  )
};

export default memo(Index);