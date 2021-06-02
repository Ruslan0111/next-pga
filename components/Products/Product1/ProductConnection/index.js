import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useState, useEffect } from 'react';

import Slider from "react-slick";

function ProductConnection() {
  const { t } = useTranslation();

  const [step, setStep] = useState(null);
  const [method, setMethod] = useState(1);

  useEffect(() => {
    setStep(+document.querySelector('.slick-current').dataset.index + 1)
  }, []);

  const [slider1, setSlider1] = useState(null);
  const [slider2, setSlider2] = useState(null);

  return (
    <div className={styles.product__connection}>
      <div className={styles.product__connection__inner}>
        <div className={styles.product__connection__left}>
          <div className="container">
            <div className="pr-2">
              <h1 className={styles.product__connection__title}>{ t('products.connectionT') }</h1>
              <button
                className={`${styles.product__connection__btn} ${method === 1 ? styles['product__connection__btn--active'] : ''}`}
                onClick={() => setMethod(1)}
              >1</button>
              <button
                className={`${styles.product__connection__btn} ${method === 2 ? styles['product__connection__btn--active'] : ''}`}
                onClick={() => setMethod(2)}
              >2</button>
              <h3 className="pn-bold">
                { t(`products.${method === 1 ? 'connectionMethod1' : 'connectionMethod2'}`) }
                <span className="pn-light text-sm">{ t('products.connectionMethod1T') }</span>
              </h3>
              <p className={`${styles.steps} pn-light`}>
                <span className="pn-bold">{ t('products.step') } {step}</span> {step} / 6
              </p>
              <Slider
                asNavFor={slider2}
                ref={el => setSlider1(el)}
                arrows={false}
                afterChange={index => setStep(index + 1)}
                swipeToSlide={true}
                infinite={false}
                dots={true}
                appendDots={dots => (
                  <div>
                    <ul> {dots} </ul>
                  </div>
                )}
              >
                <p className={`${styles.product__connection__text} pn-light text-sm`}>
                  { t('products.stepD1') }
                </p>
                <p className={`${styles.product__connection__text} pn-light text-sm`}>
                  { t('products.stepD1') }
                </p>
                <p className={`${styles.product__connection__text} pn-light text-sm`}>
                  { t('products.stepD1') }
                </p>
                <p className={`${styles.product__connection__text} pn-light text-sm`}>
                  { t('products.stepD1') }
                </p>
                <p className={`${styles.product__connection__text} pn-light text-sm`}>
                  { t('products.stepD1') }
                </p>
                <p className={`${styles.product__connection__text} pn-light text-sm`}>
                  { t('products.stepD1') }
                </p>
              </Slider>
            </div>
          </div>
        </div>
        <div className={styles.product__connection__right}>
          <Slider
            asNavFor={slider1}
            ref={el => setSlider2(el)}
            arrows={false}
            afterChange={index => setStep(index + 1)}
            swipeToSlide={true}
            infinite={false}
          >
            <img src="/images/connection.png" alt="" />
            <img src="/images/connection.png" alt="" />
            <img src="/images/connection.png" alt="" />
            <img src="/images/connection.png" alt="" />
            <img src="/images/connection.png" alt="" />
            <img src="/images/connection.png" alt="" />
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default ProductConnection;