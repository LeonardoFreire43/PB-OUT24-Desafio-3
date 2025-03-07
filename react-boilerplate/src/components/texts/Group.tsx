import { FunctionComponent } from 'react';
import styles from './Group.module.css';
import React from 'react';

const Group: FunctionComponent = () => {
  return (
    <div>
      <img className={styles.groupIcon} alt="" src="/FRAMESDESKTOP/VERSACE-DESKTOP.svg" />
      <img className={styles.zaraLogo11Icon} alt="" src="/FRAMESDESKTOP/zara-logo-desktop.svg" />
      <img className={styles.gucciLogo11Icon} alt="" src="/FRAMESDESKTOP/gucci-logo-desktop.svg" />
      <img className={styles.pradaLogo11Icon} alt="" src="/FRAMESDESKTOP/prada-logo-desktop.svg" />
      <img className={styles.groupIcon1} alt="" src="/FRAMESDESKTOP/Calvin-klein-desktop.svg" />
    </div>
  );
};

export default Group;
