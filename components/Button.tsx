import injectSheet from 'react-jss';
import Link from 'next/link';
import React from 'react';

const styles = {
  button: {
    width: '100px',
    height: '32px',
    margin: '.5rem',
    left: '-1px',
    top: '-3px',

    background: '#199488',
    fontWeight: '600',
    fontSize: '14px',
    textAlign: 'center',
    color: 'white',
    borderRadius: '16px',
    border: 'none',
    // border: 'solid 1px white',
    // boxShadow: 'inset 0px 0px 5px 5px rgba(255,255,255,1)',
    transition: 'background 500ms, color 300ms, box-shadow 150ms',

    '&:hover': {
      background: '#1EB6A7',
      cursor: 'pointer',
      // border: 'solid 1px grey',
      // boxShadow: 'inset 0px 0px 5px 5px rgba(30,182,167,1)',
      transition: 'background 300ms, color 300ms, box-shadow 150ms',
    },

    '&:disabled': {
      backgroundColor: '#c7c7c7',
      cursor: 'default',
      // color: 'lightGrey',
    },
    '&:disabled:hover': {
      backgroundColor: '#c7c7c7',
      boxShadow: 'none',
      border: 'none',
    },
  },
};

const Button = ({ classes, ...props }) => (
  <div>
    <div>
      <button
        className={classes.button}
        disabled={props.disabled}
        type="button"
        onClick={props.click}
      >
        {props.text}
      </button>
    </div>
  </div>
);

export default injectSheet(styles)(Button);
