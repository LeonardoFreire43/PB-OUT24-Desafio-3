import { FunctionComponent, useState, useEffect } from "react";
import styles from "./OneLife.module.css";
import React from "react";

const OneLife: FunctionComponent = () => {
  const [selectedColor, setSelectedColor] = useState<string>("brown");
  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null); // Estado para a imagem clicada

  // Lista de cores e suas identificações
  const colors = [
    {
      id: "brown",
      color: "#4f4631",
      images: [
        "/FRAMESDESKTOP/One-life.svg",
        "/FRAMESDESKTOP/One-life2.svg",
        "/FRAMESDESKTOP/One-life3.svg",
      ],
    },
    {
      id: "green",
      color: "#314f4a",
      images: [
        "/FRAMESDESKTOP/teste1.jpg",
        "/FRAMESDESKTOP/teste2.jpg",
        "/FRAMESDESKTOP/teste3.webp",
        "/FRAMESDESKTOP/teste4.jpg",
      ],
    },
    { id: "blue", color: "#31344f", images: [] },
  ];

  const selectedImages = colors.find((item) => item.id === selectedColor)?.images || [];

  useEffect(() => {
    // Aqui você pode realizar outras ações, se necessário, quando a cor for carregada
  }, [selectedColor]);

  const handleImageClick = (index: number) => {
    setSelectedImageIndex(index); // Altera o índice da imagem selecionada
  };

  return (
    <div>
      <b className={styles.oneLifeGraphic}>One Life Graphic T-shirt</b>
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
        <b className={styles.b}>$260</b>
        <b className={styles.b1}>$300</b>
      </div>
      <div className={styles.parent1}>
        <div className={styles.price}>-40%</div>
      </div>
      <div className={styles.thisGraphicTShirt}>
        This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
      </div>
      <div className={styles.selectColors}>Select Colors</div>
      <div className={styles.groupParent2}>
        {/* Bolinhas de cores */}
        {colors.map((item) => (
          <div
            key={item.id}
            className={styles.colorCircle}
            style={{ backgroundColor: item.color }}
            onClick={() => setSelectedColor(item.id)}
          >
            {/* Mostra a seta dentro da bolinha selecionada */}
            {selectedColor === item.id && (
              <img className={styles.selectedIcon} src="/FRAMESDESKTOP/Color select.svg" alt="Selected" />
            )}
          </div>
        ))}
      </div>

      <div>
        {/* Mostrar imagens baseadas na cor selecionada */}
        {selectedImages.length > 0 && selectedImages[0] && (
          <img
            className={`${styles.imageIcon} ${styles.image1Icon} ${selectedImageIndex === 0 ? styles.imageIconLarge : ""}`}
            alt="Selected image 1"
            src={selectedImages[0]}
            onClick={() => handleImageClick(0)}
          />
        )}
        {selectedImages.length > 1 && selectedImages[1] && (
          <img
            className={`${styles.imageIcon} ${styles.image2Icon} ${selectedImageIndex === 1 ? styles.imageIconLarge : ""}`}
            alt="Selected image 2"
            src={selectedImages[1]}
            onClick={() => handleImageClick(1)}
          />
        )}
        {selectedImages.length > 2 && selectedImages[2] && (
          <img
            className={`${styles.imageIcon} ${styles.image5Icon} ${selectedImageIndex === 2 ? styles.imageIconLarge : ""}`}
            alt="Selected image 3"
            src={selectedImages[2]}
            onClick={() => handleImageClick(2)}
          />
        )}
        {selectedImages.length > 3 && selectedImages[3] && (
          <img
            className={`${styles.imageIcon} ${styles.image6Icon} ${selectedImageIndex === 3 ? styles.imageIconLarge : ""}`}
            alt="Selected image 4"
            src={selectedImages[3]}
            onClick={() => handleImageClick(3)}
          />
        )}
      </div>
    </div>
  );
};

export default OneLife;
