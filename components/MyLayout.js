import injectSheet from 'react-jss';

const styles =  {
  container: {
    display: 'grid',
    margin: '0 auto',
    width: '100%',
    gridTemplateColumns: '100%',
    gridTemplateRows: '200px auto',
    gridColumnGap: '1rem',
    gridRowGap: '1rem',


    '@media (min-width: 900px)': {
      width: '900px',
      gridTemplateColumns: '900px'
    }
  }
}

const Layout = ({classes, ...props}) => (
  <div>
    <div className={classes.container}>
      {props.children}
    </div>
  </div>
);

export default injectSheet(styles)(Layout);