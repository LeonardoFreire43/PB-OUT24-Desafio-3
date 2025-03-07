import { FunctionComponent } from 'react';
import styles from './Numbers.module.css';
import React from 'react';

const Numbers: FunctionComponent = () => {
  return (
    <>
      <b className={styles.a}>200+</b>
      <b className={styles.b}>2,000+</b>
      <b className={styles.c}>30,000+</b>
    </>
  );
};

export default Numbers;
