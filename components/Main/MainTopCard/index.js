import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import Image from 'next/image';

function MainTopCard({ icon, title, description, btn }) {
  const { t } = useTranslation();

  return (
    <div className={`${styles['main__top-card']} d-flex p-3`}>
      <div>
        <div className={`${styles['main__top-card__title']} d-flex align-center`}>
          <div className={styles['main__top-card__img']}>
            <Image src={icon} alt="" width={24} height={24} />
          </div>
          <p className="text-md pn-bold">
            { t(`main.${title}`) }
          </p>
        </div>
        <p className={`${styles['main__top-card__description']} my-1 text-sm pn-light`}>
          { t(`main.${description}`) }
        </p>
      </div>
      <a className={`${styles['main__top-card__link']} text-sm`} href="#">
        { t(`main.${btn}`) }
        <div className={styles['main__top-card__link-img']}>
          <Image src="/images/arrows-right.svg" alt="" width={9} height={7} />
        </div>
      </a>
    </div>
  )
}

export default MainTopCard;