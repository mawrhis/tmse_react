import Link from 'next/link';
import Button from './Button'
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';

interface HeaderProps {
  onPreviousPostClick: () => void;
  onNextPostClick: () => void;
  onRandomPostClick: () => void;
  isFirstPost: boolean;
  isLastPost: boolean;
}

const useStyles = createUseStyles(
  {    
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
);

const Header = ({ onNextPostClick, onPreviousPostClick, onRandomPostClick, isFirstPost, isLastPost }: HeaderProps) => {
const classes = useStyles();

  return (
    <div>
  <div className={classes.logo}>
    <Link href="/">
      <a><img src="/img/logo.png"/></a>
    </Link>
  </div>
  <div className={classes.menu}>
    <Button 
      click={onPreviousPostClick} 
      text={'previous'}
      disabled={isFirstPost}
      ></Button>
    <Button click={onRandomPostClick} text={'random'}></Button>
    <Button 
      click={onNextPostClick} 
      disabled={isLastPost}
      text={'next'}>
      </Button>
  </div>
</div>
  )
};

export default memo(Header);