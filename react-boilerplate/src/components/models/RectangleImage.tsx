import React, { FunctionComponent } from 'react';
import styles from './RectangleImage.module.css';

const RectangleImage: FunctionComponent = () => {
  return (
    <img className={styles.rectangleIcon} alt="" src="/FRAMESDESKTOP/MODEL-DESKTOP.svg" />
  );
};

export default RectangleImage;
