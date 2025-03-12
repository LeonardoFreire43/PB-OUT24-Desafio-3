import { FunctionComponent, useState } from 'react';
import { Link } from 'react-router-dom';  // Importe o Link
import styles from './Nav.module.css';
import React from 'react';

const Nav: FunctionComponent = () => {
  const [search, setSearch] = useState('');
  const [isPopupVisible, setIsPopupVisible] = useState(false);

  // Função de pesquisa
  const handleSearch = () => {
    if (search.trim() !== '') {
      console.log('Buscando por:', search);
      // Página de resultados ou filtrar os produtos
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSearch();
    }
  };

  // Função para abrir/fechar o pop-up de login
  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  return (
    <div className={styles.shopcoParent}>
      <b className={styles.shopco}>SHOP.CO</b>
      <div className={styles.frameParent}>
        <div className={styles.shopParent}>
          <Link to="/products" className={styles.shop}> {/* Alterado para /products */} 
            Shop
          </Link>
          <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Arrow.svg" />
        </div>
        <a href="#on-sale" className={styles.shop}>On Sale</a>
        <a href="#new-arrivals" className={styles.shop}>New Arrivals</a>
        <a href="#brands" className={styles.shop}>Brands</a>
      </div>

      {/* Barra de pesquisa funcional */}
      <div className={styles.frameGroup}>
        <img
          className={styles.frameIcon1}
          alt="Search"
          src="/FRAMESDESKTOP/magnifying glass-desktop.svg"
          onClick={handleSearch} 
          style={{ cursor: 'pointer' }}
        />
        <input
          type="text"
          className={styles.searchInput}
          placeholder="Search for products..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={handleKeyDown} 
        />
      </div>

      <div className={styles.frameContainer}>
        {/* Ícone do Carrinho de Compras com redirecionamento */}
        <img 
          className={styles.frameIcon1} 
          alt="Carrinho de Compras" 
          src="/FRAMESDESKTOP/ShoppingCart-Desktop.svg" 
          onClick={() => window.location.href = '#shopping-section'} 
          style={{ cursor: 'pointer' }} 
        />

        {/* Ícone de Pessoa que abre o pop-up de login */}
        <img 
          className={styles.frameIcon1} 
          alt="Pessoa" 
          src="/FRAMESDESKTOP/Person-desktop.svg" 
          onClick={togglePopup} 
          style={{ cursor: 'pointer' }} 
        />
      </div>

      {/* Pop-up de Login */}
      {isPopupVisible && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.closeBtn} onClick={togglePopup}>&times;</span>
            <h2>Please login</h2>
            <button 
              onClick={() => {
                // Lógica para redirecionar para a página de registro (ainda não implementada)
                console.log("Register");
              }}
            >
                Create a new account
            </button>
            <button 
              onClick={() => {
                // Lógica para redirecionar para a página de login (ainda não implementada)
                console.log("Login");
              }}
            >
                I already have an account     
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Nav;
