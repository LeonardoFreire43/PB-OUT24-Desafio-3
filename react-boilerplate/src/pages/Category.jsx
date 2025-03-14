import React, { useEffect } from 'react';
import './global.css';
import Nav from '../componentsc/nav/Nav';
import Frame from '../componentsc/frame/frame';
import Section from '../componentsc/texts/Section';
import Filter from '../componentsc/models/Filter';
import CatalogClothes from '../componentsc/frame/CatalogClothes';
import Pag from '../componentsc/models/Pag';
import Email from '../componentsc/frame/Email';
import Rec from '../componentsc/frame/Rec';
import Rodape from '../componentsc/texts/Rodape';
import Line from '../componentsc/frame/Line';

export function Category() {
  useEffect(() => {
    window.scrollTo(0, 0); // Rola a página para o topo
  }, []);

  return (
    <div>
      <Nav />
      <Frame />
      <Section />
      <Filter />
      <CatalogClothes />
      <Pag />
      <Email />
      <Rec />
      <Rodape />
      <Line />
    </div>
  );
}