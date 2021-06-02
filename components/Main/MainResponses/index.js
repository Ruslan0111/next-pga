import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import BaseSectionTitle from '../../BaseSectionTitle';

import Slider from "react-slick";

function PrevArrow({ className, style, onClick }) {
  return (
    <button
      className={`${className} ${styles['prev-btn']}`}
      style={{style}}
      onClick={onClick}
    >
      <img src="/images/arrow-right2.svg" alt="" />
    </button>
  );
}

function NextArrow({ className, style, onClick }) {
  return (
    <button
      className={`${className} ${styles['next-btn']}`}
      style={{style}}
      onClick={onClick}
    >
      <img src="/images/arrow-right2.svg" alt="" />
    </button>
  );
}

function MainResponses() {
  const { t } = useTranslation();
  
  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  return (
    <div className={styles.main__responses}>
      <div className="container">
        <div className={`${styles.main__responses__inner} d-flex`}>
          
          <div className={styles.main__responses__left}>
            <Slider
              asNavFor={slider2}
              ref={el => setSlider1(el)}
              arrows={false}
              swipeToSlide={true}
            >
              <img src="/images/client.png" alt="" />
              <img src="/images/client.png" alt="" />
              <img src="/images/client.png" alt="" />
            </Slider>
          </div>
          
          <div className={styles.main__responses__right}>
            <div className={styles['main__responses__right-inner']}>
              <BaseSectionTitle
                titleSmall="main.response"
                titleBig="main.clientsOpinion"
                titleSmallColor="#ffffff"
                titleBigColor="#ffffff"
                borderColor="#ffffff"
              />
              <Slider
                asNavFor={slider1}
                ref={el => setSlider2(el)}
                swipeToSlide={true}
                prevArrow={<PrevArrow />}
                nextArrow={<NextArrow />}
              >
                <div>
                  <div className={`${styles.clients__name} pn-bold`}>
                    Towney Liakos
                    <span className="pn-light text-sm">
                      { t('main.newYork') }
                    </span>
                  </div>
                  <p className={`${styles['main__responses-text']} text-md`}>
                    { t('main.responseT') }
                  </p>
                </div>
                <div>
                  <div className={`${styles.clients__name} pn-bold`}>
                    Towney Liakos
                    <span className="pn-light text-sm">
                      { t('main.newYork') }
                    </span>
                  </div>
                  <p className={`${styles['main__responses-text']} text-md`}>
                    { t('main.responseT') }
                  </p>
                </div>
                <div>
                  <div className={`${styles.clients__name} pn-bold`}>
                    Towney Liakos
                    <span className="pn-light text-sm">
                      { t('main.newYork') }
                    </span>
                  </div>
                  <p className={`${styles['main__responses-text']} text-md`}>
                    { t('main.responseT') }
                  </p>
                </div>
              </Slider>
              <div className={`${styles.main__responses__cards} d-flex align-center`}>
                <div className={`${styles.main__responses__card} d-flex align-center`}>
                  <img className="p-2" src="/images/crosshair.svg" alt="" />
                  <p className="pn-bold text-sm">
                    <span className="pn-light text-sm">50+</span>
                    { t('main.goal') }
                  </p>
                </div>
                <div className={`${styles.main__responses__card} d-flex align-center`}>
                  <img className="p-2" src="/images/smile.svg" alt="" />
                  <p className="pn-bold text-sm">
                    <span className="pn-light text-sm">200+</span>
                    { t('main.happyClients') }
                  </p>
                </div>
                <div className={`${styles.main__responses__card} d-flex align-center`}>
                  <img className="p-2" src="/images/briefcase.svg" alt="" />
                  <p className="pn-bold text-sm">
                    <span className="pn-light text-sm">100+</span>
                    { t('main.projects') }
                  </p>
                </div>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default MainResponses;