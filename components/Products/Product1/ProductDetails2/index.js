import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

function ProductDetails2() {
  const { t } = useTranslation();

  return (
    <div className={styles.product__details2}>
      <div className="container">
        <div className={`${styles.product__details2__inner} d-flex`}>
          <div className={styles.product__details2__left}>
            <h2 className="pn-bold">{ t('products.detailsT') }</h2>
            <p className="text-md">{ t('products.detailsD') }</p>
          </div>
          <div className={styles.product__details2__right}>
            <img src="/images/details-2.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductDetails2;