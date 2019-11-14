import { useRouter } from 'next/router';
import injectSheet from 'react-jss';

const styles =  {    
  post: {
    width: '100%',
    '& img':{
      maxWidth: '100%',
      width: '900px'
    }
  },
  postTitle: {
    textAlign: 'center',
    margin: '.5rem 0',
    color: '#5a5a5a',
    fontFamily: 'Sans-serif, Arial'
  }
}

const Post = ( {classes, ...props} ) => {
const router = useRouter();
  return (
    <div className={classes.post}>
      <h1 className={classes.postTitle}>{props.postTitle}</h1>
      <img src={`/img/comics/${comicFile(props.post)}`}></img>
    </div>
  );
};

const gif = [31, 43, 60]

const comicFile = function(number) {
  let n = Number.NEGATIVE_INFINITY
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


export default injectSheet(styles)(Post);