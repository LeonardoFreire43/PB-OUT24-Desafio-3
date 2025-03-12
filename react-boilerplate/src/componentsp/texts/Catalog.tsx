import { FunctionComponent, useState } from 'react';
import styles from './Catalog.module.css';
import React from 'react';

const Catalog: FunctionComponent = () => {
  const [activeSection, setActiveSection] = useState('ratingReviews');

  const handleSectionClick = (section: string) => {
    setActiveSection(section);
  };

  return (
    <>
      <div className={styles.Section}>
        <div
          className={`${styles.ratingReviews} ${activeSection === 'ratingReviews' ? styles.active : ''}`}
          onClick={() => handleSectionClick('ratingReviews')}
        >
          {`Rating & Reviews`}
        </div>
        <div
          className={`${styles.faqs} ${activeSection === 'faqs' ? styles.active : ''}`}
          onClick={() => handleSectionClick('faqs')}
        >
          FAQs
        </div>
        <div
          className={`${styles.productDetails} ${activeSection === 'productDetails' ? styles.active : ''}`}
          onClick={() => handleSectionClick('productDetails')}
        >
          Product Details
        </div>
      </div>
      <div className={styles.lineDiv6}>
        <div className={`${styles.activeLine} ${styles[activeSection]}`} />
      </div>

      {activeSection === 'ratingReviews' && (
        <div className={styles.content}>
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
                <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.samanthaDParent}>
                  <b className={styles.samanthaD}>Samantha D.</b>
                  <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                </div>
                <div className={styles.iAbsolutelyLove}>
                  "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. 
                  As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Menu.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on August 14, 2023</div>
        </div>
        <div className={styles.content}>
        <div className={styles.frameParent1}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
                <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.samanthaDParent}>
                  <b className={styles.samanthaD}>Joel D.</b>
                  <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                </div>
                <div className={styles.iAbsolutelyLove}>
                  "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. 
                  As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Menu.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on January 11, 2023</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.frameParent2}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
                <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.samanthaDParent}>
                  <b className={styles.samanthaD}>James G.</b>
                  <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                </div>
                <div className={styles.iAbsolutelyLove}>
                  "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. 
                  As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Menu.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on November 12, 2022</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.frameParent3}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
                <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.samanthaDParent}>
                  <b className={styles.samanthaD}>Mary S.</b>
                  <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                </div>
                <div className={styles.iAbsolutelyLove}>
                  "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. 
                  As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Menu.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on August 24, 2023</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.frameParent4}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
                <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.samanthaDParent}>
                  <b className={styles.samanthaD}>Berry H.</b>
                  <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                </div>
                <div className={styles.iAbsolutelyLove}>
                  "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. 
                  As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Menu.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on March 01, 2025</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.frameParent5}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
                <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.samanthaDParent}>
                  <b className={styles.samanthaD}>Victoria H.</b>
                  <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                </div>
                <div className={styles.iAbsolutelyLove}>
                  "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. 
                  As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Menu.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on December 02, 2022</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.frameParent6}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
                <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.samanthaDParent}>
                  <b className={styles.samanthaD}>Samuel F.</b>
                  <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                </div>
                <div className={styles.iAbsolutelyLove}>
                  "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. 
                  As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Menu.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on August 04, 2024</div>
        </div>
      </div>
      <div className={styles.content}>
        <div className={styles.frameParent7}>
          <div className={styles.frameGroup}>
            <div className={styles.frameContainer}>
              <div className={styles.starParent}>
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
                <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
                <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
              </div>
              <div className={styles.frameDiv}>
                <div className={styles.samanthaDParent}>
                  <b className={styles.samanthaD}>Bob J.</b>
                  <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                </div>
                <div className={styles.iAbsolutelyLove}>
                  "I absolutely love this t-shirt! The design is unique and the fabric feels so comfortable. 
                  As a fellow designer, I appreciate the attention to detail. It's become my favorite go-to shirt."
                </div>
              </div>
            </div>
            <div className={styles.frameWrapper}>
              <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Menu.svg" />
            </div>
          </div>
          <div className={styles.postedOnAugust}>Posted on September 22, 2023</div>
        </div>
      </div>
      </div>
      
      )}
      {activeSection === 'faqs' && (
        <div className={styles.content}>
          <p>FAQs Content</p>
        </div>
      )}
      {activeSection === 'productDetails' && (
        <div className={styles.content}>
          <p>Product Details Content</p>
        </div>
      )}
    </>
  );
};

export default Catalog;