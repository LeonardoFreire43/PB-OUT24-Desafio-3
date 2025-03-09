import React from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Section.module.css';

const Section = () => {
  const navigate = useNavigate(); // Certifique-se de que BrowserRouter está no main.tsx

  const handleNavigation = (path: string) => {
    navigate(path);
  };

  return (
    <div className={styles.container}>
      {/* Seção Casual */}
      <div className={styles.image11Parent} onClick={() => handleNavigation('/casual')}>
        <img className={styles.image11Icon} alt="Casual" src="/FRAMESDESKTOP/Casual.png" />
        <b className={styles.label}>Casual</b>
      </div>

      {/* Seção Gym */}
      <div className={styles.image14Parent} onClick={() => handleNavigation('/gym')}>
        <img className={styles.image14Icon} alt="Gym" src="/FRAMESDESKTOP/Gym.png" />
        <b className={styles.label}>Gym</b>
      </div>

      {/* Seção Formal */}
      <div className={styles.image13Parent} onClick={() => handleNavigation('/formal')}>
        <img className={styles.image13Icon} alt="Formal" src="/FRAMESDESKTOP/Formal.png" />
      </div>

      {/* Seção Party */}
      <div className={styles.image12Parent} onClick={() => handleNavigation('/party')}>
        <img className={styles.image12Icon} alt="Party" src="/FRAMESDESKTOP/Party.png" />
        <b className={styles.label}>Party</b>
      </div>
    </div>
  );
};

export default Section;
