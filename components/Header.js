import Link from 'next/link';
import injectSheet from 'react-jss'
import Button from './Button.js'

const styles =  {    
  logo: {
    width: '100%',
    textAlign: 'center',
    marginTop: '1rem',
    '& img':{
      position: 'relative',
      width: '100%'
    }
  },
  menu: {
    width: '100%',
    margin: '0 auto',
    display: 'flex',
    justifyContent: 'center'
  } 
}

const Header = ({classes, ...props}) => (
<div>
  <div className={classes.logo}>
    <Link href="/">
      <a><img src="/img/logo.png"/></a>
    </Link>
  </div>
  <div className={classes.menu}>
    <Button click={props.nextPost} text={'next'}></Button>
    <Button click={props.randomPost} text={'random'}></Button>
    <Button click={props.previousPost} text={'previous'}></Button>
  </div>
</div>
);

export default injectSheet(styles)(Header);