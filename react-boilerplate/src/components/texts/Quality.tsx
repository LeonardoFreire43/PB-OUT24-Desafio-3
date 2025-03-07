import { FunctionComponent } from 'react';
import styles from './Quality.module.css';
import React from 'react';

const Quality: FunctionComponent = () => {
  return (
    <div>
      <div className={styles.internationalBrands}>International Brands</div>
      <div className={styles.highQualityProducts}>High-Quality Products</div>
      <div className={styles.happyCustomers}>Happy Customers</div>
    </div>
  );
};

export default Quality;
