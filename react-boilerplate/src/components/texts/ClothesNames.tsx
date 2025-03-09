import { FunctionComponent } from 'react';
import styles from './ClothesNames.module.css';
import React from 'react';

const ClothesNames: FunctionComponent = () => {
  return (
    <div>
      <b className={styles.tShirtWithTapeContainer}>
        T-<span className={styles.shirt}>SHIRT</span> {` `}
        <span className={styles.shirt}>WITH</span> T
        <span className={styles.shirt}>APE</span> D
        <span className={styles.shirt}>ETAILS</span>
      </b>

      <b className={styles.skinnyFitJeansContainer}>
        S<span className={styles.kinny}>KINNY</span> F
        <span className={styles.kinny}>IT</span> J
        <span className={styles.kinny}>EANS</span>
      </b>

      <b className={styles.checkeredShirt}>
        C<span className={styles.heckered}>HECKERED</span> S
        <span className={styles.heckered}>HIRT</span>
      </b>

      <b className={styles.sleeveStripedTShirtContainer}>
        S<span className={styles.leeve}>LEEVE</span> S
        <span className={styles.leeve}>TRIPED</span> T-
        <span className={styles.leeve}>SHIRT</span>
      </b>

      <b className={styles.verticalStripedShirtContainer}>
        V<span className={styles.shirt}>ERTICAL</span> S
        <span className={styles.shirt}>TRIPED</span> S
        <span className={styles.shirt}>HIRT</span>
      </b>

      <b className={styles.courageGraphicTShirtContainer}>
        C<span className={styles.shirt}>OURAGE</span> G
        <span className={styles.shirt}>RAPHIC</span> T-
        <span className={styles.shirt}>SHIRT</span>
      </b>

      <b className={styles.looseFitBermudaContainer}>
        L<span className={styles.shirt}>OOSE</span> F
        <span className={styles.shirt}>IT</span> B
        <span className={styles.shirt}>ERMUDA</span> S
        <span className={styles.shirt}>HORTS</span>
      </b>

      <b className={styles.fadedSkinnyJeansContainer}>
        F<span className={styles.shirt}>ADED</span> S
        <span className={styles.shirt}>KINNY</span> J
        <span className={styles.shirt}>EANS</span>
      </b>

      <b className={styles.b9}>$212</b>
      <b className={styles.b10}>$232</b>

      <div className={styles.wrapper3}>
        <b className={styles.shop}>$210</b>
      </div>

      <b className={styles.b12}>$145</b>
      <b className={styles.b13}>$80</b>
    </div>
  );
};

export default ClothesNames;
