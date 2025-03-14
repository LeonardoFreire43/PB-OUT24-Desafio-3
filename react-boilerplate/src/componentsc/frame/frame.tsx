import { FunctionComponent, useState } from 'react';
import styles from './Frame.module.css';
import React from 'react';

const Frame: FunctionComponent = () => {
  const [isVisible, setIsVisible] = useState(true);

  const handleIconClick = () => {
    setIsVisible(false);
  };

  return (
    <div className={`${styles.signUpAndGet20OffToYouParent} ${!isVisible ? styles.hidden : ''} ${styles.animationClass}`}>
      <div className={styles.signUpAndContainer}>
        <span>{`Sign up and get 20% off to your first order. `}</span>
        <a className={styles.signUpNow} href="#email-section">Sign Up Now</a> {/* Ajuste o href para #email-section */}
      </div>
      <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/X-desktop.svg" onClick={handleIconClick} />
    </div>
  );
};

export default Frame;