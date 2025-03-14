import { FunctionComponent, useState } from 'react';
import styles from './Email.module.css';
import React from 'react';

const Email: FunctionComponent = () => {
  const [email, setEmail] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');

  // Função de validação de e-mail
  const validateEmail = (email: string) => {
    const regex = /^[a-zA-Z0-9._%+-]+@(gmail\.com|hotmail\.com|gov\.br)$/;
    return regex.test(email);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handleSubmit = () => {
    if (email === '') {
      setPopupMessage('Invalid email'); // Caso o campo esteja vazio
    } else if (validateEmail(email)) {
      setPopupMessage('Email successfully validated'); // Caso o e-mail seja válido
    } else {
      setPopupMessage('Invalid email'); // Caso o e-mail seja inválido
    }
    setShowPopup(true); // Exibe o pop-up
  };

  const closePopup = () => {
    setShowPopup(false); // Fecha o pop-up
  };

  return (
    <div id="email-section" className={styles.stayUptoDateAboutOurLatesParent}> {/* Adicione o id aqui */}
      <b className={styles.stayUptoDate}>STAY UPTO DATE ABOUT OUR LATEST OFFERS</b>
      <div className={styles.frameParent}>
        <div className={styles.frameGroup}>
          <img className={styles.frameIcon} alt="" src="/FRAMESDESKTOP/Email-desktop.svg" />
          
          {/* Alterado para incluir o input dentro da div */}
          <div className={styles.enterYourEmail}>
            <input
              type="email"
              value={email}
              onChange={handleEmailChange}
              placeholder="Enter your email"
              className={styles.emailInput}
            />
          </div>
        </div>
        <button onClick={handleSubmit} className={styles.subscribeToNewsletterWrapper}>
          <div className={styles.subscribeToNewsletter}>Subscribe to Newsletter</div>
        </button>
      </div>

      {/* Pop-up */}
      {showPopup && (
        <div className={styles.popup}>
          <div className={styles.popupContent}>
            <span className={styles.closeButton} onClick={closePopup}>×</span>
            <p>{popupMessage}</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Email;