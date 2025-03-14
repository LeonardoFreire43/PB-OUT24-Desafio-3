import { FunctionComponent, useState, useEffect } from 'react';
import styles from './Cart.module.css';
import React from 'react';

const Cart2: FunctionComponent = () => {
  const [cartItems, setCartItems] = useState<any[]>([]);

  useEffect(() => {
    const items = JSON.parse(localStorage.getItem('cartItems') || '[]');
    setCartItems(items);
  }, []);

  const handleRemoveItem = (index: number) => {
    const updatedItems = cartItems.filter((_, i) => i !== index);
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleIncreaseQuantity = (index: number) => {
    const updatedItems = cartItems.map((item, i) => {
      if (i === index) {
        return { ...item, quantity: item.quantity + 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const handleDecreaseQuantity = (index: number) => {
    const updatedItems = cartItems.map((item, i) => {
      if (i === index && item.quantity > 1) {
        return { ...item, quantity: item.quantity - 1 };
      }
      return item;
    });
    setCartItems(updatedItems);
    localStorage.setItem('cartItems', JSON.stringify(updatedItems));
  };

  const subtotal = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const totalDiscount = cartItems.reduce((acc, item) => acc + (item.price - item.discountPrice) * item.quantity, 0);
  const deliveryFee = 15;
  const total = subtotal - totalDiscount + deliveryFee;

  return (
    <div className={styles.cartContainer}>
      <div className={styles.itemsPanel}>
        <h2>Shopping Cart</h2>
        {cartItems.map((item, index) => (
          <div key={index} className={styles.cartItem}>
            <div className={styles.itemDetails}>
              <div>Name: {item.name}</div>
              <div>Size: {item.size}</div>
              <div>Color: {item.color}</div>
              <div>Price: ${item.price}</div>
              <div>Discount Price: ${item.discountPrice}</div>
              <div>Discount: {item.discount}%</div>
              <div>Quantity: {item.quantity}</div>
              <div className={styles.quantityControls}>
                <button className={styles.quantityButton} onClick={() => handleDecreaseQuantity(index)}>-</button>
                <span>{item.quantity}</span>
                <button className={styles.quantityButton} onClick={() => handleIncreaseQuantity(index)}>+</button>
              </div>
            </div>
            <button className={styles.remove} onClick={() => handleRemoveItem(index)}>Remove</button>
          </div>
        ))}
      </div>
      <div className={styles.orderSummaryParent}>
        <b className={styles.orderSummary}>Order Summary</b>
        <div className={styles.frameParent}>
          <div className={styles.subtotalParent}>
            <div className={styles.subtotal}>Subtotal</div>
            <b className={styles.b}>${subtotal.toFixed(2)}</b>
          </div>
          <div className={styles.subtotalParent}>
            <div className={styles.subtotal}>Discount</div>
            <b className={styles.b1}>{totalDiscount.toFixed(2)}</b>
          </div>
          <div className={styles.subtotalParent}>
            <div className={styles.subtotal}>Delivery Fee</div>
            <b className={styles.b}>${deliveryFee.toFixed(2)}</b>
          </div>
          <div className={styles.frameChild} />
          <div className={styles.totalParent}>
            <div className={styles.subtotal}>Total</div>
            <b className={styles.b3}>${total.toFixed(2)}</b>
          </div>
        </div>
        <div className={styles.frameGroup}>
          <div className={styles.frameContainer}>
            <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Buy-Icon.svg" />
            <input type="text" placeholder="Add promo code" className={styles.promoInput} />
          </div>
          <div className={styles.applyWrapper}>
            <button className={styles.apply}>Apply</button>
          </div>
        </div>
        <div className={styles.goToCheckoutParent}>
          <button className={styles.apply}>Go to Checkout</button>
          <img className={styles.arrowDownBold1Icon} alt="" src="/FRAMESDESKTOP/Arrow-right-bold.svg" />
        </div>
      </div>
    </div>
  );
};

export default Cart2;