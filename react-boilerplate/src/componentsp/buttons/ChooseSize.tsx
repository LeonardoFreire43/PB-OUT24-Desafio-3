import { useState } from 'react';
import styles from './ChooseSize.module.css';
import React from 'react';

const Choose = () => {
  const [selectedSize, setSelectedSize] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);

  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    setShowPopup(true); // Exibe o pop-up
  };

  const closePopup = () => {
    setShowPopup(false); // Fecha o pop-up
  };

  return (
    <div>
      <div className={styles.frameParent}>
        {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
          <button
            key={size}
            className={`${styles.sizeButton} ${selectedSize === size ? styles.selected : ''}`}
            onClick={() => handleSizeClick(size)}
            style={{
              backgroundColor: selectedSize === size ? '#000' : '#f0f0f0',
              color: selectedSize === size ? '#fff' : '#000'
            }}
          >
            {size}
          </button>
        ))}
      </div>
      <div className={styles.chooseSize}>Choose Size</div>

      <div className={styles.frameParent1}>
        <button className={styles.frameIcon25} onClick={decreaseQuantity}>
          <img alt="Minus" src="/FRAMESDESKTOP/Minus.svg" />
        </button>
        <div className={styles.div}>{quantity}</div>
        <button className={styles.frameIcon25} onClick={increaseQuantity}>
          <img alt="Plus" src="/FRAMESDESKTOP/PLUS1.png" />
        </button>
      </div>

      <button className={styles.addToCartParent} onClick={handleAddToCart}>
        Add to Cart
      </button>

      {showPopup && (
        <div className={styles.popupOverlay}>
          <div className={styles.popupContainer}>
            <button className={styles.popupCloseBtn} onClick={closePopup}>
              X
            </button>
            <div className={styles.popupMessage}>
              Item added to cart!
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Choose;
