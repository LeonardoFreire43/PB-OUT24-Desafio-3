import { FunctionComponent } from 'react';
import styles from './Products.module.css';
import React from 'react';

const Products: FunctionComponent = () => {
  return (
    <div>
      <b className={styles.newArrivals}>NEW ARRIVALS</b>);
      <b className={styles.topSelling}>top selling</b>);
      <b className={styles.browseByDress}>BROWSE BY dress STYLE</b>);
      <b className={styles.ourHappyCustomers}>OUR HAPPY CUSTOMERS</b>);
    </div>
  );
};

export default Products;
