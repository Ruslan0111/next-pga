import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

function ProductDescription() {
  const { t } = useTranslation();

  return (
    <div className={styles.product__description}>
      <div className={styles.product__description__inner}>
        <div className={styles.product__description__left}>
          <div className="container">
            <div className={`${styles['product__description__left-inner']} pr-2`}>
              <h1 className="pn-bold">{ t('products.product1T') }</h1>
              <p className="text-md">{ t('products.product1D') }</p>
            </div>
          </div>
        </div>
        <div className={`${styles.product__description__right} d-flex align-center`}>
          <img src="/images/products-description.png" alt="" />
        </div>
      </div>
    </div>
  )
}

export default ProductDescription;