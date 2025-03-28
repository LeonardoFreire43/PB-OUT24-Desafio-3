import { FunctionComponent } from 'react';
import { Link } from 'react-router-dom'; // Importe o Link
import styles from './Section.module.css';
import React from 'react';

const Rectangle2: FunctionComponent = () => {
  return (
    <div className={styles.frameParent}>
      <div className={styles.homeParent}>
        <Link to="/" className={styles.home}> 
          Home
        </Link>
        <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Arrow.svg" />
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home}>Shop</div>
        <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Arrow.svg" />
      </div>
      <div className={styles.homeParent}>
        <div className={styles.home}>Men</div>
        <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Arrow.svg" />
      </div>
      <div className={styles.tShirts}>T-shirts</div>
    </div>
  );
};

export default Rectangle2;
