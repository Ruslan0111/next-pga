import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import BaseSectionTitle from '../../BaseSectionTitle';

function AboutVideo() {
  const { t } = useTranslation();

  return (
    <div className={styles.about__video}>
      <div className={styles.about__video__inner}>
        <div className={styles.about__video__right}>
          <div className={styles['about__video__right-inner']}>
            <img src="/images/about-video.png" alt="" />
          </div>
          <button className={styles.about__video__btn}>
            <img src="/images/play.svg" alt="" />
          </button>
        </div>
        <div className={styles.about__video__left}>
          <div className={styles.about__video__content}>
            <BaseSectionTitle titleSmall="aboutUs.videoBlog" titleBig="aboutUs.companyVideo" />
            <p className="text-md">{ t('aboutUs.videoT1') }</p>
            <div>
              <span className="text-md">{ t('aboutUs.videoT2') }</span>
              <span className="text-sm pn-bold">{ t('aboutUs.videoT3') }</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutVideo;