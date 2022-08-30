import injectSheet from 'react-jss';
import styles from './MyLayout.module.sass'


const Layout = ({...props}) => (
  <div>
    <div className={styles.container}>
      {props.children}
    </div>
  </div>
);

export default (Layout);