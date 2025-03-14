import { FunctionComponent } from 'react';
import styles from './YouMight.module.css';
import React from 'react';

const YouMight:FunctionComponent = () => {
  	return (
    <div>
        <b className={styles.youMightAlso}>You might also like</b>
        <div className={styles.Images}>
            <img className={styles.image7Icon} alt="" src="/FRAMESDESKTOP/Polo-with-contrast-trims.svg" />
            <img className={styles.image8Icon} alt="" src="/FRAMESDESKTOP/Gradient-Graphic T-shirt.svg" />
            <img className={styles.image9Icon} alt="" src="/FRAMESDESKTOP/Polo-With-Tipping-Details.svg" />
            <img className={styles.image10Icon} alt="" src="/FRAMESDESKTOP/Black-Striped T-shirt.svg" />
        </div>
        <div className={styles.Names}>
            <b className={styles.poloWithContrast}>Polo with Contrast Trims</b>
            <b className={styles.gradientGraphicTShirt}>Gradient Graphic T-shirt</b>
            <b className={styles.poloWithTipping}>Polo with Tipping Details</b>
            <b className={styles.blackStripedTShirt}>Black Striped T-shirt</b>
        
            <div className={styles.frameParent}>
        <div className={styles.starParent}>
            <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
            <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
            <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
            <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
        </div>
        <div className={styles.div}>
            <span>4.0/</span>
            <span className={styles.span}>5</span>
            </div>
        </div>
        <div className={styles.frameParent1}>
        <div className={styles.starParent}>
            <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
            <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
            <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
            <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
        </div>
        <div className={styles.div}>
            <span>3.5/</span>
            <span className={styles.span}>5</span>
            </div>
        </div>
        <div className={styles.frameParent2}>
        <div className={styles.starParent}>
            <img className={styles.frameChild2} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
            <img className={styles.frameChild2} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
            <img className={styles.frameChild2} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
            <img className={styles.frameChild2} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
            <img className={styles.frameChild2} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
            
        </div>
        <div className={styles.div}>
            <span>4.5/</span>
            <span className={styles.span}>5</span>
            </div>
        </div>
        <div className={styles.frameParent3}>
        <div className={styles.starParent}>
            <img className={styles.frameChild3} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
            <img className={styles.frameChild3} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
            <img className={styles.frameChild3} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
            <img className={styles.frameChild3} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
            <img className={styles.frameChild3} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
        </div>
        <div className={styles.div}>
            <span>5.0/</span>
            <span className={styles.span}>5</span>
            </div>
        </div>
    </div>
        <div className={styles.parent}>
            <b className={styles.a}>$212</b>
            <b className={styles.a1}>$242</b>
            <b className={styles.b}>$145</b>
            <b className={styles.c}>$180</b>
        <div className={styles.wrapper}>
        <div className={styles.div}>-20%</div>
        </div>
    </div>
        <div className={styles.parent1}>
            <b className={styles.d}>$120</b>
            <b className={styles.d1}>$150</b>
            <div className={styles.wrapper1}>
                <div className={styles.div1}>-30%</div>
            </div>
        </div>
    </div>
    );
    
};

export default YouMight;
