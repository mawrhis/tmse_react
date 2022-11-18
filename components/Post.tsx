import React from 'react';
import styles from './Post.module.scss';

const gif = [31, 43, 60];

const imgSuffix = (number) => {
  const isGif = gif.find((num) => num === number);
  if (isGif) {
    return 'gif';
  }
  return 'png';
};

const comicFile = (number) => {
  let n = '';
  const numberSize = number.toString().length;
  if (numberSize === 3) {
    n = number;
  } else if (numberSize === 2) {
    n = `0${number}`;
  } else if (numberSize === 1) {
    n = `00${number}`;
  }

  const suffix = imgSuffix(number);
  return `${n}.${suffix}`;
};

const Post = ({ ...props }) => {
  return (
    <div className={styles.post}>
      <h1 className={styles.postTitle}>{props.postTitle}</h1>
      <img alt={comicFile(props.post)} src={`/img/comics/${comicFile(props.post)}`} />
    </div>
  );
};

export default Post;
