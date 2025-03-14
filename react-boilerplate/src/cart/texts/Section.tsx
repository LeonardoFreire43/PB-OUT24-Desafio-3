import { FunctionComponent } from 'react';
import { Link, useParams } from 'react-router-dom'; // Importe o Link e useParams
import styles from './Section.module.css';
import React from 'react';

const Section: FunctionComponent = () => {

  return (
    <div className={styles.frameParent}>
      <div className={styles.homeParent}>
        <Link to="/" className={styles.home}> 
          Home
        </Link>
        <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Arrow.svg" />
      </div>
      <div className={styles.categoryName}>Cart</div> 
    </div>
  );
};

export default Section;
