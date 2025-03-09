import React, { useRef } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import styles from './Carrossel.module.css';

const Carrossel: React.FC = () => {
  const sliderRef = useRef<Slider>(null); // Referência para o carrossel

  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    arrows: false,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };

  // Funções para navegar
  const handlePrev = () => {
    if (sliderRef.current) {
      sliderRef.current.slickPrev();
    }
  };

  const handleNext = () => {
    if (sliderRef.current) {
      sliderRef.current.slickNext();
    }
  };

  return (
    <div className={styles.sliderContainer}>
      <Slider {...settings}>
        <div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.starParent}>
                  <img className={styles.frameChild} alt="Star 1" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 2" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 3" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 4" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 5" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.sarahMParent}>
                    <b className={styles.sarahM}>Alex J.</b>
                    <img className={styles.frameIcon} alt="Frame" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                  </div>
                  <div className={styles.imBlownAway}>
                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Outros slides */}
        <div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.starParent}>
                  <img className={styles.frameChild} alt="Star 1" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 2" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 3" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 4" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 5" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.sarahMParent}>
                    <b className={styles.sarahM}>Sarah M.</b>
                    <img className={styles.frameIcon} alt="Frame" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                  </div>
                  <div className={styles.imBlownAway}>
                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.starParent}>
                  <img className={styles.frameChild} alt="Star 1" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 2" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 3" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 4" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 5" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.sarahMParent}>
                    <b className={styles.sarahM}>Jack B.</b>
                    <img className={styles.frameIcon} alt="Frame" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                  </div>
                  <div className={styles.imBlownAway}>
                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.starParent}>
                  <img className={styles.frameChild} alt="Star 1" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 2" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 3" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 4" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 5" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.sarahMParent}>
                    <b className={styles.sarahM}>Louis F.</b>
                    <img className={styles.frameIcon} alt="Frame" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                  </div>
                  <div className={styles.imBlownAway}>
                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.starParent}>
                  <img className={styles.frameChild} alt="Star 1" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 2" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 3" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 4" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 5" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.sarahMParent}>
                    <b className={styles.sarahM}>Lycaon H.</b>
                    <img className={styles.frameIcon} alt="Frame" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                  </div>
                  <div className={styles.imBlownAway}>
                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.starParent}>
                  <img className={styles.frameChild} alt="Star 1" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 2" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 3" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 4" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 5" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.sarahMParent}>
                    <b className={styles.sarahM}>Mary J.</b>
                    <img className={styles.frameIcon} alt="Frame" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                  </div>
                  <div className={styles.imBlownAway}>
                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.starParent}>
                  <img className={styles.frameChild} alt="Star 1" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 2" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 3" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 4" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 5" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.sarahMParent}>
                    <b className={styles.sarahM}>Belford B.</b>
                    <img className={styles.frameIcon} alt="Frame" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                  </div>
                  <div className={styles.imBlownAway}>
                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className={styles.frameParent}>
            <div className={styles.frameWrapper}>
              <div className={styles.frameGroup}>
                <div className={styles.starParent}>
                  <img className={styles.frameChild} alt="Star 1" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 2" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 3" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 4" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                  <img className={styles.frameChild} alt="Star 5" src="/FRAMESDESKTOP/Star 1-desktop.svg" />
                </div>
                <div className={styles.frameContainer}>
                  <div className={styles.sarahMParent}>
                    <b className={styles.sarahM}>Joseph D.</b>
                    <img className={styles.frameIcon} alt="Frame" src="/FRAMESDESKTOP/Verified-desktop.svg" />
                  </div>
                  <div className={styles.imBlownAway}>
                    "I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations."
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Slider>
    </div>
  );
}

export default Carrossel;
