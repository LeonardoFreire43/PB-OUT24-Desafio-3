import { FunctionComponent } from 'react';
import styles from './Line.module.css';
import React from 'react';

const Line: FunctionComponent = () => {
  return (
    <div>
      <div className={styles.lineDiv} />
    </div>
  );
};

export default Line;
