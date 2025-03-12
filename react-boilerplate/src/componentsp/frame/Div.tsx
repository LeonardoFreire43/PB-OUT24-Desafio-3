import { FunctionComponent } from 'react';
import styles from './Div.module.css';
import React from 'react';

const Div:FunctionComponent = () => {
  	return (
        <div>
            <div className={styles.lineDiv} />
            <div className={styles.lineDiv1} />
            <div className={styles.lineDiv2} />
            <div className={styles.lineDiv3} />
        </div>
    );
};

export default Div;
