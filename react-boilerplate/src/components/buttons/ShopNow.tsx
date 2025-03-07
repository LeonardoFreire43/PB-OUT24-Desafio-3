import { FunctionComponent } from 'react';
import styles from './ShopNow.module.css';
import React from 'react';

const ShopNow: FunctionComponent = () => {
  const handleClick = () => {
    alert('Redirecting to shop...');
  };

  return (
    <div className={styles.shopNowParent}>
      <button className={styles.shopNow} onClick={handleClick}>Shop Now</button>
    </div>
  );
};

export default ShopNow;
