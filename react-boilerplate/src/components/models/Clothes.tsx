import { FunctionComponent } from 'react';
import styles from './Clothes.module.css';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Clothes: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleImageClick = (category: string) => {
    navigate(`/category/${category}`);
  };

  return (
    <div>
      <div>
        <a href="#" onClick={() => handleImageClick("All-Clothes")}>
          <img className={styles.image7Icon} alt="T-shirt with Tape Details" src="/FRAMESDESKTOP/T-shirt-with Tape-Details-desktop.svg" />
        </a>
        <a href="#" onClick={() => handleImageClick("All-Clothes")}>
          <img className={styles.image8Icon} alt="Image 8" src="/FRAMESDESKTOP/image 8.svg" />
        </a>
        <a href="#" onClick={() => handleImageClick("All-Clothes")}>
          <img className={styles.image9Icon} alt="Checkered Shirt" src="/FRAMESDESKTOP/Checkered Shirt-Desktop.svg" />
        </a>
        <a href="#" onClick={() => handleImageClick("All-Clothes")}>
          <img className={styles.image10Icon} alt="Sleeve Striped T-shirt" src="/FRAMESDESKTOP/Sleeve-Striped T-shirt-desktop.svg" />
        </a>
      </div>
      <div className={styles.frameParent1}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
          <img className={styles.frameChild3} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
        </div>
        <div className={styles.shop}>
          <span>4.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      
      <div className={styles.frameParent2}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
          <img className={styles.frameChild3} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
        </div>
        <div className={styles.shop}>
          <span>3.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      
      <div className={styles.frameParent3}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
          <img className={styles.frameChild3} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
        </div>
        <div className={styles.shop}>
          <span>4.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      
      <div className={styles.frameParent4}>
        <div className={styles.starParent}>
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
          <img className={styles.frameInner} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
          <img className={styles.frameChild3} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
        </div>
        <div className={styles.shop}>
          <span>4.5/</span>
          <span className={styles.span}>5</span>
        </div>
      </div>
      
      <img className={styles.homepageInner} alt="" src="" />
      <img className={styles.homepageChild1} alt="" src="Frame 34.png" />
      <img className={styles.homepageChild2} alt="" src="Frame 38.png" />
    </div>
  );
};

export default Clothes;
