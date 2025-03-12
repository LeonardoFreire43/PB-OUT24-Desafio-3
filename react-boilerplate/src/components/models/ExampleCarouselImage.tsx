import React from 'react';

const ExampleCarouselImage: React.FC<{ text: string }> = ({ text }) => {
  return (
    <div>
      <img
        className="d-block w-100"
        src="/FRAMESDESKTOP/Casual.svg" // Substitua pelo caminho correto da imagem
        alt={text}
      />
      <div>{text}</div>
    </div>
  );
};

export default ExampleCarouselImage;
