import { FunctionComponent } from 'react';
import styles from './Clothes2.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Clothes2: FunctionComponent = () => {
const navigate = useNavigate();
  
const handleNavigation = (category: string) => {
  navigate(`/category/${category}`);

  };
  return (
    
    <div>
      <div>
      <a href="#" onClick={() => handleNavigation('All-Clothes')}>
          <img className={styles.image7Icon} alt="" src="/FRAMESDESKTOP/Vertical- Striped-Shirt-desktop.svg" />
        </a>
        <a href="#" onClick={() => handleNavigation('All-Clothes')}>
          <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Courage-Graphic-T-shirt-desktop.svg" />
        </a>
        <a href="#" onClick={() => handleNavigation('All-Clothes')}>
          <img className={styles.image9Icon} alt="" src="/FRAMESDESKTOP/Loose-Fit-Bermuda-desktop.svg" />
        </a>
        <a href="#" onClick={() => handleNavigation('All-Clothes')}>
          <img className={styles.image10Icon} alt="" src="/FRAMESDESKTOP/Faded-Skinny-Jeans-desktop.svg" />
        </a>
      </div>

      <div className={styles.frameParent5}>
        <div className={styles.starParent1}>
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
          <img className={styles.frameChild4} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
        </div>
        <div className={styles.shop}>
          <span>4.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      
      <div className={styles.frameParent6}>
        <div className={styles.starParent1}>
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
          <img className={styles.frameChild4} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
        </div>
        <div className={styles.shop}>
          <span>3.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      
      <div className={styles.frameParent7}>
        <div className={styles.starParent1}>
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
          <img className={styles.frameChild4} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
        </div>
        <div className={styles.shop}>
          <span>4.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      
      <div className={styles.frameParent8}>
        <div className={styles.starParent1}>
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
          <img className={styles.frameInner1} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
          <img className={styles.frameChild4} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
        </div>
        <div className={styles.shop}>
          <span>4.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
    </div>
  );
};

export default Clothes2;

