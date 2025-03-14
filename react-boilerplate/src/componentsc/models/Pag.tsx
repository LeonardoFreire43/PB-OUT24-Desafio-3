import { FunctionComponent } from 'react';
import styles from './Pag.module.css';
import React from 'react';

const Pag: FunctionComponent = () => {
  return (
    <div className={styles.buttonParent}>
      <div className={styles.button}>
        <div className={styles.buttonBase}>
          <img className={styles.arrowLeftIcon} alt="" src="/FRAMESDESKTOP/arrow-left-desktop.svg" />
          <div className={styles.text}>Previous</div>
        </div>
      </div>
      <div className={styles.paginationNumbers}>
        <div className={styles.paginationNumberBase}>
          <div className={styles.content}>
            <div className={styles.text}>1</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.text}>2</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.text}>3</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.text}>...</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.text}>8</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.text}>9</div>
          </div>
        </div>
        <div className={styles.paginationNumberBase1}>
          <div className={styles.content}>
            <div className={styles.text}>10</div>
          </div>
        </div>
      </div>
      <div className={styles.button}>
        <div className={styles.buttonBase}>
          <div className={styles.text}>Next</div>
          <img className={styles.arrowLeftIcon} alt="" src="/FRAMESDESKTOP/arrow-right-desktop.svg" />
        </div>
      </div>
    </div>
  );
};

export default Pag;
