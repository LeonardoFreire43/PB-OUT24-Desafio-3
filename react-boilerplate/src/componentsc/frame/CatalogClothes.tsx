import React, { FunctionComponent, useState } from 'react';
import styles from './CatalogClothes.module.css';
import Filter from '../models/Filter';

const CatalogClothes: FunctionComponent = () => {
  const [dressStyle, setDressStyle] = useState('Casual');

  const handleDressStyleChange = (style: string) => {
    setDressStyle(style);
  };

  return (
    <div>
      <div className={styles.catalogGrid}>
        <div className={styles.catalogItem}>
          <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Gradient-Graphic T-shirt.svg" />
          <b className={styles.catalogText}>Gradient Graphic T-shirt</b>
          <div className={styles.frameParent}>
            <div className={styles.starParent}>
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
              <img className={styles.starIcon} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
            </div>
            <div className={styles.div}>
              <span>3.5/</span>
              <span className={styles.span}>5</span>
            </div>
            <b className={styles.b}>$145</b>
          </div>
        </div>
        <div className={styles.catalogItem}>
          <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Polo-With-Tipping-Details.svg" />
          <b className={styles.catalogText}>Polo with Tipping Details</b>
          <div className={styles.frameParent}>
            <div className={styles.starParent}>
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
              <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
            </div>
            <div className={styles.div}>
              <span>4.5/</span>
              <span className={styles.span}>5</span>
            </div>
            <b className={styles.b}>$180</b>
          </div>
        </div>
        <div className={styles.catalogItem}>
          <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Black-Striped T-shirt.svg" />
          <b className={styles.catalogText}>Black Striped T-shirt</b>
          <div className={styles.frameParent}>
            <div className={styles.starParent}>
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
              <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
            </div>
            <div className={styles.div}>
              <span>3.5/</span>
              <span className={styles.span}>5</span>
            </div>
            <div className={styles.parent}>
              <b className={styles.b2}>$120</b>
              <b className={styles.b1}>$150</b>
              <div className={styles.wrapper}>
                <div className={styles.div}>-30%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.catalogItem}>
          <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Skinny-Fit-Jeans-desktop.png" />
          <b className={styles.catalogText}>Skinny Fit Jeans</b>
          <div className={styles.frameParent}>
            <div className={styles.starParent}>
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
              <img className={styles.starIcon} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
            </div>
            <div className={styles.div}>
              <span>3.5/</span>
              <span className={styles.span}>5</span>
            </div>
            <div className={styles.parent}>
              <b className={styles.b2}>$240</b>
              <b className={styles.b1}>$260</b>
              <div className={styles.wrapper}>
                <div className={styles.div}>-20%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.catalogItem}>
          <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Checkered Shirt-Desktop.svg" />
          <b className={styles.catalogText}>Checkered Shirt</b>
          <div className={styles.frameParent}>
            <div className={styles.starParent}>
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
              <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
            </div>
            <div className={styles.div}>
              <span>4.5/</span>
              <span className={styles.span}>5</span>
            </div>
            <b className={styles.b}>$180</b>
          </div>
        </div>
        <div className={styles.catalogItem}>
          <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Sleeve-Striped T-shirt-desktop.svg" />
          <b className={styles.catalogText}>Sleeve Striped T-shirt</b>
          <div className={styles.frameParent}>
            <div className={styles.starParent}>
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
              <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
            </div>
            <div className={styles.div}>
              <span>4.5/</span>
              <span className={styles.span}>5</span>
            </div>
            <b className={styles.b}>$180</b>
          </div>
        </div>
        <div className={styles.catalogItem}>
          <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Vertical- Striped-Shirt-desktop.svg" />
          <b className={styles.catalogText}>Vertical Striped Shirt</b>
          <div className={styles.frameParent}>
            <div className={styles.starParent}>
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
              <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
            </div>
            <div className={styles.div}>
              <span>4.5/</span>
              <span className={styles.span}>5</span>
            </div>
            <div className={styles.parent}>
              <b className={styles.b2}>$130</b>
              <b className={styles.b1}>$160</b>
              <div className={styles.wrapper}>
                <div className={styles.div}>-30%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.catalogItem}>
          <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Courage-Graphic-T-shirt-desktop.svg" />
          <b className={styles.catalogText}>Courage Graphic T-shirt</b>
          <div className={styles.frameParent}>
            <div className={styles.starParent}>
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
            </div>
            <div className={styles.div}>
              <span>5.0/</span>
              <span className={styles.span}>5</span>
            </div>
            <div className={styles.parent}>
              <b className={styles.b2}>$240</b>
              <b className={styles.b1}>$260</b>
              <div className={styles.wrapper}>
                <div className={styles.div}>-20%</div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.catalogItem}>
          <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Loose-Fit-Bermuda-desktop.svg" />
          <b className={styles.catalogText}>Loose Fit Bermuda Shorts</b>
          <div className={styles.frameParent}>
            <div className={styles.starParent}>
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
              <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
            </div>
            <div className={styles.div}>
              <span>3.5/</span>
              <span className={styles.span}>5</span>
            </div>
            <b className={styles.b}>$145</b>
          </div>
        </div>
      </div>
      <div className={styles.showing110Of100ProductsParent}>
        <div className={styles.showing110Of}>Showing 1-10 of 100 Products</div>
        <div className={styles.sortByMostPopularParent}>
          <div className={styles.showing110Of}>
            <b className={styles.casual}>{dressStyle}</b>
            <span>{`Sort by: `}</span>
            <span className={styles.mostPopular}>Most Popular</span>
          </div>
          <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/ArrowDown2.svg" />
        </div>
      </div>
    </div>
  );
};

export default CatalogClothes;
