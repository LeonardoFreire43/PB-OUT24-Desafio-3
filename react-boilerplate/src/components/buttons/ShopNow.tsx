import { FunctionComponent } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './ShopNow.module.css';
import React from 'react';

const ShopNow: FunctionComponent = () => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/products'); // Redireciona para a página de produtos
  };

  return (
    <div className={styles.shopNowParent}>
      <button className={styles.shopNow} onClick={handleClick}>Shop Now</button>
    </div>
  );
};

export default ShopNow;