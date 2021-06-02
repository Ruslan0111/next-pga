import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import BaseSectionTitle from '../../BaseSectionTitle';
import AboutSmall from '../../AboutSmall';

function MainAbout() {
  const { t } = useTranslation();

  return (
    <div className={styles.about__company}>
      <div className="container">
        <div className={`${styles.about__company__inner} d-flex`}>
          <div className={styles['about__company-left']}>
            <img src="/images/about.png" alt="" />
          </div>
          <div className={`${styles['about__company-right']} d-flex`}>
            <BaseSectionTitle titleSmall="main.about" titleBig="pga" />
            <p className="py-1 text-md">
              { t('aboutUs.aboutT1') }
            </p>
            <p className="py-1 text-md">
              { t('aboutUs.aboutT2') }
            </p>
            <p className="py-1 text-md">
              { t('aboutUs.aboutT3') }
            </p>
            <p className="py-1 text-md">
              { t('aboutUs.aboutT4') }
            </p>
            <div className={`${styles.about__company__cards} d-flex`}>
              <div><AboutSmall icon="/images/award.svg" text="aboutUs.aboutCardT1" /></div>
              <div><AboutSmall icon="/images/sliders.svg" text="aboutUs.aboutCardT2" /></div>
              <div><AboutSmall icon="/images/user-check.svg" text="aboutUs.aboutCardT3" /></div>
              <div><AboutSmall icon="/images/zap.svg" text="aboutUs.aboutCardT4" /></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainAbout;