import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import BaseSectionTitle from '../../BaseSectionTitle';
import AboutSmall from '../../AboutSmall';

function MainAbout() {
  const { t } = useTranslation();

  return (
    <div className={styles.main__about}>
      <div className="container">
        <div className={`${styles.main__about__inner} d-flex`}>
          <div className={styles['main__about-left']}>
            <img src="/images/about-big.png" alt="" />
            <div>
              <img src="/images/about-small.png" alt="" />
            </div>
          </div>
          <div className={styles['main__about-right']}>
            <BaseSectionTitle titleSmall="main.about" titleBig="pga" />
            <p className="mt-1 text-md">
              { t('main.aboutT1') }
            </p>
            <p className="mt-1 text-md">
              { t('main.aboutT2') }
            </p>
            <p className="mt-1 text-md">
              { t('main.aboutT3') }
            </p>
            <button className={`${styles['main__about-btn']} mt-3 py-1 px-2 text-sm`}>{ t('main.more') }</button>
            <div className={`${styles['main__about__cards']} d-flex`}>
              <div className="d-flex align-center"><AboutSmall icon="/images/award.svg" text="main.aboutSmallCard1" /></div>
              <div className="d-flex align-center"><AboutSmall icon="/images/zap.svg" text="main.aboutSmallCard2" /></div>
              <div className="d-flex align-center"><AboutSmall icon="/images/user-check.svg" text="main.aboutSmallCard3" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAbout;