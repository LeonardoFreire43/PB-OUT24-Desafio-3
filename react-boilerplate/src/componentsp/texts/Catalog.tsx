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
      <div className={styles.loadMoreReviewsParent}>
          <div className={styles.loadMoreReviews}>Load More Reviews</div>
          </div>
      </div>
      )}
      {activeSection === 'faqs' && (
        <div>
        <div className={styles.FaqsAll}>
          <div className={styles.Coment}>
          The answers are clear and direct, making it easy for customers to find the information they need without confusion. For example, the explanation of sizes is well-detailed, helping shoppers select the right size.
          It might be helpful to add a size conversion chart, as different brands can have variations in sizing. This would be a big plus in preventing exchanges and frustrations.
          </div>
          <div className={styles.samanthaDParent}>
            <b className={styles.samanthaD}>Joseph J.</b>
            <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
          </div>
          <div className={styles.postedOnAugust}>Posted on March 17, 2021</div>
        </div>
        <div className={styles.FaqsAll1}>
          <div className={styles.Coment}>
          The FAQ covers a broad range of topics, such as exchanges, returns, and delivery times. This shows a commitment to the customer, as they can resolve common questions before making a purchase.
          One addition could be a section on how to order a gift, with options for wrapping and personalized cards. This would be an attractive feature for many customers.
          </div>
          <div className={styles.samanthaDParent}>
            <b className={styles.samanthaD}>Miguel A.</b>
            <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
          </div>
          <div className={styles.postedOnAugust}>Posted on April 12, 2022</div>
        </div>
        <div className={styles.FaqsAll2}>
          <div className={styles.Coment}>
          The FAQ section has a simple, accessible design with questions well-organized by categories (such as "Sizing," "Shipping," "Payments," etc.), which makes it easy for visitors to navigate.
          While the design is functional, integrating a search feature within the FAQ section would be helpful for customers to find answers more quickly, especially on sites with a large amount of content.
          </div>
          <div className={styles.samanthaDParent}>
            <b className={styles.samanthaD}>Ana L.</b>
            <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
          </div>
          <div className={styles.postedOnAugust}>Posted on April 12, 2022</div>
        </div>
        <div className={styles.FaqsAll3}>
          <div className={styles.Coment}>
          The FAQ section has a simple, accessible design with questions well-organized by categories (such as "Sizing," "Shipping," "Payments," etc.), which makes it easy for visitors to navigate.
          While the design is functional, integrating a search feature within the FAQ section would be helpful for customers to find answers more quickly, especially on sites with a large amount of content.
          </div>
          <div className={styles.samanthaDParent}>
            <b className={styles.samanthaD}>Kerry M.</b>
            <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Verified-desktop.svg" />
          </div>
          <div className={styles.postedOnAugust}>Posted on August 12, 2022</div>
        </div>
        </div>
      )}
      {activeSection === 'productDetails' && (
        <div className={styles.content1}>
        <div className={styles.productCard}>
          <h2>Product Description: All-Clothes</h2>
          <table className={styles.productTable}>
            <tbody>
              <tr>
                <td><strong>Material Composition:</strong></td>
                <td>100% Cotton</td>
              </tr>
              <tr>
                <td colSpan={2}>Soft and breathable fabric that ensures comfort throughout the day.</td>
              </tr>
              <tr>
                <td><strong>Size Chart:</strong></td>
                <td>
                  <table className={styles.sizeChart}>
                    <thead>
                      <tr>
                        <th>Size</th>
                        <th>Chest</th>
                        <th>Length</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <td>Small (S)</td>
                        <td>34" - 36" (86 - 91 cm)</td>
                        <td>26" (66 cm)</td>
                      </tr>
                      <tr>
                        <td>Medium (M)</td>
                        <td>38" - 40" (97 - 102 cm)</td>
                        <td>27" (69 cm)</td>
                      </tr>
                      <tr>
                        <td>Large (L)</td>
                        <td>42" - 44" (107 - 112 cm)</td>
                        <td>28" (71 cm)</td>
                      </tr>
                      <tr>
                        <td>X-Large (XL)</td>
                        <td>46" - 48" (117 - 122 cm)</td>
                        <td>29" (74 cm)</td>
                      </tr>
                    </tbody>
                  </table>
                </td>
              </tr>
              <tr>
                <td><strong>Care Instructions:</strong></td>
                <td>
                  <ul>
                    <li>Machine wash cold with like colors.</li>
                    <li>Tumble dry on low heat or air dry to maintain fabric quality.</li>
                    <li>Iron on low if necessary; do not iron directly on print.</li>
                    <li>Do not bleach or dry clean.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><strong>Features:</strong></td>
                <td>
                  <ul>
                    <li>Regular fit, designed for everyday wear.</li>
                    <li>Crewneck for a classic, comfortable look.</li>
                    <li>Short sleeves for casual style.</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><strong>Additional Information:</strong></td>
                <td>
                  <ul>
                    <li>Available in multiple colors: Black, White, Navy Blue, Grey, and more.</li>
                    <li>Perfect for layering or wearing on its own with jeans, shorts, or skirts.</li>
                    <li>Ideal for casual outings, daily wear, or as a comfortable base layer.</li>
                  </ul>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      )}
    </>
  );
};

export default Catalog;