import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

function ProductsCard({ img, title, date }) {
  const { t } = useTranslation();

  return (
    <div className={styles['news-card']}>
      <div className={styles['news-card__img']}>
        <img src={img} alt="" />
        <button className="text-sm ms-light">{ t('main.production') }</button>
      </div>
      <div className="p-2">
        <h4 className="ms-bold text-md mb-1">
          { t(title) }
        </h4>
        <span className="text-uppercase pn-light text-sm">
          { t(date) }
        </span>
      </div>
    </div>
  )
}

export default ProductsCard;