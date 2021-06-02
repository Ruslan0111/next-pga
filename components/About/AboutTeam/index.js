import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

function AboutTeam() {
  const { t } = useTranslation();

  return (
    <div className={styles.about__team}>
      <div className="container">
        <div className={styles.about__team__title}>
          <span className="text-sm pn-light">
            { t('aboutUs.meetOurTeam') }
          </span>
          <h2 className="pn-bold">
            { t('aboutUs.teamProfs') }
          </h2>
        </div>
        <div className={`${styles.about__team__cards} d-flex`}>
          <div className={styles.about__team__card}>
            <img src="/images/profi-1.png" alt="" />
          </div>
          <div className={styles.about__team__card}>
            <img src="/images/profi-2.png" alt="" />
          </div>
          <div className={styles.about__team__card}>
            <img src="/images/profi-3.png" alt="" />
          </div>
          <div className={styles.about__team__card}>
            <img src="/images/profi-4.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutTeam;