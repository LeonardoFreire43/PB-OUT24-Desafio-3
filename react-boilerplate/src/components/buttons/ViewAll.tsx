import { FunctionComponent } from 'react';
import styles from './ViewAll.module.css';
import React from 'react';

const ViewAll: FunctionComponent = () => {
  const handleClick = () => {
    alert('Redirecting to all clothes...');
  };

  return (
    <div>
      <div className={styles.viewAll}>
        <button className={styles.viewAllParent} onClick={handleClick}>View</button>
      </div>
      <div className={styles.viewAll1}>
        <button className={styles.viewAllParent1} onClick={handleClick}>View</button>
      </div>
      <div>
        <div className={styles.lineDiv4} />
        <div className={styles.lineDiv5} />
        <div className={styles.lineDiv6} />
      </div>
    </div>
  );
};

export default ViewAll;
