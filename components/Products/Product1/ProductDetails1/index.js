import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

function ProductDetails1() {
  const { t } = useTranslation();

  return (
    <div className={styles.product__details1}>
      <div className="container">
        <div className={`${styles.product__details1__inner} d-flex`}>
          <div className={styles.product__details1__left}>
            <img src="/images/details-1.png" alt="" />
          </div>
          <div className={styles.product__details1__right}>
            <h2 className="pn-bold">{ t('products.detailsT') }</h2>
            <p className="text-md">{ t('products.detailsD') }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails1;