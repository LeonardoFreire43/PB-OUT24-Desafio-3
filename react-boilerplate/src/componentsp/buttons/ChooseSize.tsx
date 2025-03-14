import { FunctionComponent, useState } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import styles from './ChooseSize.module.css';
import React from 'react';

const Choose: FunctionComponent = () => {
  const location = useLocation();
  const [selectedSize, setSelectedSize] = useState<string | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [showPopup, setShowPopup] = useState(false);
  const navigate = useNavigate();

  const handleSizeClick = (size: string) => {
    setSelectedSize(size);
  };

  const increaseQuantity = () => {
    setQuantity(prev => prev + 1);
  };

  const decreaseQuantity = () => {
    setQuantity(prev => (prev > 1 ? prev - 1 : 1));
  };

  const handleAddToCart = () => {
    const { name, price, discountPrice, discount } = location.state || {};

    if (!name || !price || !discountPrice || !discount) {
      console.error('Missing product data');
      return;
    }

    const item = {
      name,
      size: selectedSize,
      quantity,
      price,
      discountPrice,
      discount,
      color: 'Predefined Color', // Cor predefinida
    };

    const cartItems = JSON.parse(localStorage.getItem('cartItems') || '[]');
    cartItems.push(item);
    localStorage.setItem('cartItems', JSON.stringify(cartItems));

    setShowPopup(true);
    setTimeout(() => {
      setShowPopup(false);
      navigate('/cart');
    }, 1000);
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div>
      <div className={styles.frameParent}>
        {['Small', 'Medium', 'Large', 'X-Large'].map(size => (
          <button
            key={size}
            className={`${styles.sizeButton} ${size === 'Small' ? styles.sizeButtonSmall : ''} ${selectedSize === size ? styles.selected : ''}`}
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