import { useRouter } from 'next/router';
import injectSheet from 'react-jss';
import styles from './Post.module.sass'

const Post = ( { ...props} ) => {
const router = useRouter();
  return (
    <div className={styles.post}>
      <h1 className={styles.postTitle}>{props.postTitle}</h1>
      <img src={`/img/comics/${comicFile(props.post)}`}></img>
    </div>
  );
};

const gif = [31, 43, 60]

const comicFile = function(number) {
  let n = ''
  let numberSize = number.toString().length
  if (numberSize === 3) {
    n = number
  } else if (numberSize === 2) {
    n = '0' + number
  } else if (numberSize === 1) {
    n = '00' + number
  }

  let suffix = imgSuffix(number)
  return n + '.' + suffix
}

const imgSuffix = function(number) {
    let isGif = gif.find((num) => num === number)
    if (isGif) {
      return 'gif'
    } else {
      return 'png'
    }
}


export default (Post);