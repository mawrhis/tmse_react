import { useRouter } from 'next/router';
import injectSheet from 'react-jss';

const styles = {
}

const Post = ( props ) => {
const router = useRouter();
  return (
    <div>
      <h1>{props.postTitle}</h1>
      <p>This is the blog post content.</p>
      <p><img src={props.postContent}></img></p>
    </div>
  );
};

// const imageSource = function( string ) {
//   // console.log('imageSource');
//   let str = string;
//   str.split(' ')
//   .filter((string) => string.includes('src'))
//   console.log('str', str);
// }

export default injectSheet(styles)(Post);