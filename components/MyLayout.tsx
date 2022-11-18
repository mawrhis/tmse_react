import React from 'react';
import styles from './MyLayout.module.scss';

const Layout = ({ ...props }) => (
  <div>
    <div className={styles.container}>{props.children}</div>
  </div>
);

export default Layout;
