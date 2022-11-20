import Link from 'next/link';
import React, { memo } from 'react';
import { createUseStyles } from 'react-jss';
import Button from './Button';

interface HeaderProps {
  isFirstPost: boolean;
  isLastPost: boolean;
  onNextPostClick: () => void;
  onPreviousPostClick: () => void;
  onRandomPostClick: () => void;
}

const useStyles = createUseStyles({
  logo: {
    width: '100%',
    textAlign: 'center',
    marginTop: '1rem',
    cursor: 'pointer',
    '& img': {
      position: 'relative',
      width: '100%',
    },
  },
  menu: {
    display: 'flex',
    justifyContent: 'center',
  },
  header: {
    marginBottom: '1rem',
    display: 'block',
  },
});

const Header = ({
  onNextPostClick,
  onPreviousPostClick,
  onRandomPostClick,
  isFirstPost,
  isLastPost,
}: HeaderProps) => {
  const classes = useStyles();

  return (
    <div className={classes.header}>
      <div className={classes.logo}>
        <Link href="/">
          <p>
            <img alt="logo" src="/img/logo.png" />
          </p>
        </Link>
      </div>
      <div className={classes.menu}>
        <Button click={onPreviousPostClick} disabled={isFirstPost} text="previous" />
        <Button click={onRandomPostClick} text="random" />
        <Button click={onNextPostClick} disabled={isLastPost} text="next" />
      </div>
    </div>
  );
};

export default memo(Header);
