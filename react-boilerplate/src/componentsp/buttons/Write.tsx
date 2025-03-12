import { FunctionComponent, useState, useEffect, useRef } from "react";
import styles from "./Write.module.css";
import React from "react";

const Write: FunctionComponent = () => {
  const [showOptions, setShowOptions] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  // Função para fechar o painel ao clicar fora dele
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(event.target as Node)) {
        setShowOptions(false);
      }
    };

    if (showOptions) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showOptions]);

  // Função para alternar a visibilidade do painel
  const toggleOptions = () => {
    setShowOptions((prev) => !prev);
  };

  return (
    <div className={styles.frameParent}>
      <img 
        className={styles.frameIcon} 
        alt="Painel" 
        src="/FRAMESDESKTOP/Painel.svg" 
        onClick={toggleOptions}
      />

      {/* Mini painel com opções */}
      {showOptions && (
        <div ref={panelRef} className={styles.optionsPanel}>
          <div className={styles.option}>Default</div>
          <div className={styles.option}>Compact</div>
        </div>
      )}

      <div className={styles.latestParent}>
        <div className={styles.latest}>Latest</div>
        <img className={styles.frameIcon1} alt="" src="/FRAMESDESKTOP/ArrowDown2.svg" />
      </div>

      <div className={styles.writeAReviewWrapper}>
        <div className={styles.latest}>Write a Review</div>
      </div>
    </div>
  );
};

export default Write;
