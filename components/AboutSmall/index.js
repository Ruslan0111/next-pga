import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

function AboutSmall({ icon, text }) {
  const { t } = useTranslation();

  return (
    <div className={`${styles['about-small']} d-flex align-center`}>
      <div className={`${styles['about-small-img']} d-flex justify-center align-center`}>
        <img src={icon} alt="" />
      </div>
      <p className="pn-semibold text-sm">
        { t(text) }
      </p>
    </div>
  )
}

export default AboutSmall;