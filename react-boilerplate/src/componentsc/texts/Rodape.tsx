import React, { FunctionComponent } from 'react';
import styles from './Rodape.module.css';

const Rodape: FunctionComponent = () => {
  return (
    <div className={styles.frameParent21}>
      <div className={styles.frameParent22}>
        <div className={styles.shopcoGroup}>
          <b className={styles.shop}>SHOP.CO</b>
          <div className={styles.weHaveClothes}>
            We have clothes that suits your style and which you’re proud to wear. From women to men.
          </div>
        </div>
        <div className={styles.social}>
          <img className={styles.icon} alt="Social Icon 1" src="/FRAMESDESKTOP/Social-desktop.svg" />
        </div>
      </div>
      <div className={styles.helpMenuParent}>
        <div className={styles.helpMenu}>Company</div>
        <div className={styles.aboutFeaturesWorksContainer}>
          <p className={styles.about}>About</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.about}>Features</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.about}>Works</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.about}>Career</p>
        </div>
      </div>
      <div className={styles.helpMenuParent}>
        <div className={styles.helpMenu}>Help</div>
        <div className={styles.aboutFeaturesWorksContainer}>
          <p className={styles.blankLine}>Customer Support</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Delivery Details</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Terms & Conditions</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Privacy Policy</p>
        </div>
      </div>
      <div className={styles.helpMenuParent}>
        <div className={styles.helpMenu}>FAQ</div>
        <div className={styles.aboutFeaturesWorksContainer2}>
          <p className={styles.blankLine}>Account</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Manage Deliveries</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Orders</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Payments</p>
        </div>
      </div>
      <div className={styles.helpMenuParent}>
        <div className={styles.helpMenu}>Resources</div>
        <div className={styles.aboutFeaturesWorksContainer}>
          <p className={styles.blankLine}>Free eBooks</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Development Tutorial</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>How to - Blog</p>
          <p className={styles.blankLine}>&nbsp;</p>
          <p className={styles.blankLine}>Youtube Playlist</p>
        </div>
      </div>
      <div className={styles.badgeParent}>
        <img className={styles.badgeIcon} alt="Badge 1" src="/FRAMESDESKTOP/Visa-desktop.svg" />
        <img className={styles.badgeIcon} alt="Badge 2" src="/FRAMESDESKTOP/Mastercard-desktop.svg" />
        <img className={styles.badgeIcon} alt="Badge 3" src="/FRAMESDESKTOP/PayPal-desktop.svg" />
        <img className={styles.badgeIcon} alt="Badge 4" src="/FRAMESDESKTOP/ApplePay-desktop.svg" />
        <img className={styles.badgeIcon} alt="Badge 5" src="/FRAMESDESKTOP/GooglePay-desktop.svg" />
      </div>
      <div className={styles.allRightsReserved}>
        Shop.co © 2000-2023, All Rights Reserved
      </div>
    </div>
  );
};

export default Rodape;
