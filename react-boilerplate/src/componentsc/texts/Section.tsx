import { FunctionComponent } from 'react';
import { Link, useParams } from 'react-router-dom'; // Importe o Link e useParams
import styles from './Section.module.css';
import React from 'react';

const Section: FunctionComponent = () => {
  const { category } = useParams<{ category: string }>(); // Obtenha a categoria da URL

  return (
    <div className={styles.frameParent}>
      <div className={styles.homeParent}>
        <Link to="/" className={styles.home}> 
          Home
        </Link>
        <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Arrow.svg" />
      </div>
      <div className={styles.categoryName}>{category}</div> {/* Exiba a categoria */}
    </div>
  );
};

export default Section;
