import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import BaseSectionTitle from '../../BaseSectionTitle';

function MainQualityIndicators() {
  const { t } = useTranslation();

  return (
    <div className={styles['main__quality-indicators']}>
      <div className="container">
        <div className={`${styles['main__quality-indicators__inner']} d-flex`}>
          <div className={styles['main__quality-indicators__left']}>
            <div className={styles['main__quality-indicators__left-inner']}>
              <BaseSectionTitle
                titleSmall="main.productsQuality"
                titleBig="main.qualityIndicators"
                titleSmallColor="#ffffff"
                titleBigColor="#ffffff"
                borderColor="#ffffff"
              />
              <p className={`${styles['main__quality-indicators-text']} text-md`}>
                { t('main.qualityT') }
              </p>
              <div className={`${styles['main__quality-indicators__cards']} d-flex align-center`}>
                <div className={`${styles['main__quality-indicators__card']} d-flex align-center`}>
                  <img className="p-2" src="/images/activity.svg" alt="" />
                  <p>
                    { t('main.qualitySmallCard1') }
                  </p>
                </div>
                <div className={`${styles['main__quality-indicators__card']} d-flex align-center`}>
                  <img className="p-2" src="/images/check-circle.svg" alt="" />
                  <p>
                    { t('main.qualitySmallCard2') }
                  </p>
                </div>
                <div className={`${styles['main__quality-indicators__card']} d-flex align-center`}>
                  <img className="p-2" src="/images/alert-triangle.svg" alt="" />
                  <p>
                    { t('main.qualitySmallCard3') }
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles['main__quality-indicators__right']}>
            <img src="/images/quality-indicators.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainQualityIndicators;