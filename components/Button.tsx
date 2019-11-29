import injectSheet from 'react-jss'
import Link from 'next/link';

const styles =  {    
  button: {
    width: '100px',
    height: '32px',
    margin: '.5rem',
    left: '-1px',
    top: '-3px',

    background: 'white',
    fontWeight: '600',
    fontSize: '14px',
    textAlign: 'center',
    color: 'grey',
    borderRadius: '5px',
    border: 'solid 1px white',
    boxShadow: 'inset 0px 0px 5px 5px rgba(255,255,255,1)',
    transition: 'background 500ms, color 300ms, box-shadow 150ms',

    '&:hover': {
      background: '#1EB6A7',
      color: 'white',
      cursor: 'pointer',
      border: 'solid 2px grey',
      boxShadow: 'inset 0px 0px 5px 5px rgba(30,182,167,1)',
      transition: 'background 300ms, color 300ms, box-shadow 150ms',
    },

    '&:disabled': {
      cursor: 'default',
      color: 'lightGrey',
    },
    '&:disabled:hover': {
      backgroundColor: 'white',
      boxShadow: 'none',
      border: 'none',
    } 
  }
}

const Button = ({classes, ...props}) => (
<div>
  <div >
    <button onClick={props.click} className={classes.button} disabled={props.disabled}>{props.text}</button>
  </div>
  <Link href="/p/[id]" as={`/p/${props.id}`}>
    <a>{props.id}</a>
  </Link>
</div>
);

export default injectSheet(styles)(Button);