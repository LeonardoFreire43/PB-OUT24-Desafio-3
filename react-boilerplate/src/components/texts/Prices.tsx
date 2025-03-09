import React, { FunctionComponent } from 'react';
import styles from './Price.module.css';

const Price: FunctionComponent = () => {
  return (
    <div>
      <b className={styles.a}>$120</b>
      <b className={styles.b}>$240</b>
      <b className={styles.c}>$260</b>
      <b className={styles.d}>$180</b>
      <b className={styles.e}>$130</b>
      <b className={styles.f}>$160</b>
      <b className={styles.g}>$212</b>
      <b className={styles.h}>$232</b>
      <b className={styles.i}>$145</b>
      <b className={styles.k}>$80</b>
      <b className={styles.j}>$210</b>
        <div className={styles.parent}>
            <div className={styles.div}>-20%</div>
        </div>
        <div className={styles.parent1}>
            <div className={styles.div}>-30%</div>
        </div>
        <div className={styles.parent2}>
            <div className={styles.div}>-20%</div>
        </div>
    </div>
  );
};

export default Price;
