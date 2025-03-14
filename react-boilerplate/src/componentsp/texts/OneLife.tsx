import { FunctionComponent, useState, useEffect } from "react";
import styles from "./OneLife.module.css";
import React from "react";
import { useLocation } from "react-router-dom";

const OneLife: FunctionComponent = () => {
  const location = useLocation();
  const [selectedImage, setSelectedImage] = useState<string>("/FRAMESDESKTOP/One-life.svg");
  const [productName, setProductName] = useState<string>("One Life Graphic T-shirt");
  const [productPrice, setProductPrice] = useState<number>(260);
  const [productDiscountPrice, setProductDiscountPrice] = useState<number>(300);
  const [productDiscount, setProductDiscount] = useState<number>(40);

  useEffect(() => {
    // Verifica se há dados passados pela navegação
    if (location.state) {
      const { imageSrc, name, price, discountPrice, discount } = location.state;
      setSelectedImage(imageSrc);
      setProductName(name);
      setProductPrice(price);
      setProductDiscountPrice(discountPrice);
      setProductDiscount(discount);
    }
  }, [location.state]);

  return (
    <div>
      <b className={styles.oneLifeGraphic}>{productName}</b>
      <div className={styles.Stars}>
        <div className={styles.starParent}>
          <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
          <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 2-desktop.svg" />
          <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 3-desktop.svg" />
          <img className={styles.frameChild} alt="" src="/FRAMESDESKTOP/Star 4-desktop.svg" />
          <img className={styles.frameChild1} alt="" src="/FRAMESDESKTOP/Star 5-desktop.svg" />
          <div className={styles.div}>
            <span>4.5/</span>
            <span className={styles.span}>5</span>
          </div>
        </div>
      </div>
      <div className={styles.parent}>
        <b className={styles.b}>${productPrice}</b>
        <b className={styles.b1}>${productDiscountPrice}</b>
      </div>
      <div className={styles.parent1}>
        <div className={styles.price}>-{productDiscount}%</div>
      </div>
      <div className={styles.thisGraphicTShirt}>
        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
      </div>
      <div className={styles.selectColors}>No other colors available</div>
      <div>
        {/* Mostrar imagem baseada na cor selecionada */}
        <img
          className={styles.imageIcon}
          alt="Selected image"
          src={selectedImage}
        />
      </div>
    </div>
  );
};

export default OneLife;