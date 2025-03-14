import { FunctionComponent } from 'react';
import styles from './Products.module.css';
import React from 'react';

const Products: FunctionComponent = () => {
  return (
    <div>
      <b id="new-arrivals" className={styles.newArrivals}>NEW ARRIVALS</b>
      <b id="top-selling" className={styles.topSelling}>TOP SELLING</b>
      <b id="browse-by-dress" className={styles.browseByDress}>BROWSE BY DRESS STYLE</b>
      <b id="our-happy-customers" className={styles.ourHappyCustomers}>OUR HAPPY CUSTOMERS</b>
    </div>
  );
};

export default Products;