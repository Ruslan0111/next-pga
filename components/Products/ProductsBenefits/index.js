import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';


function ProductsBenefits({ bgColor = '#FAFAFA' }) {
  const { t } = useTranslation();

  return (
    <div className={styles.products__benefits} style={{backgroundColor: bgColor}}>
      <div className="container">
        <h3 className="pn-semibold">{ t('products.benefits') }</h3>
        <div className={`${styles['products__benefits-cards']} d-flex`}>
          <div className={styles['products__benefits-card']}>
            <img src="/images/benefits-card-1.png" alt="" />
            <p>{ t('products.benefitsCardT1') }</p>
          </div>
          <div className={styles['products__benefits-card']}>
            <img src="/images/benefits-card-2.png" alt="" />
            <p>{ t('products.benefitsCardT2') }</p>
          </div>
          <div className={styles['products__benefits-card']}>
            <img src="/images/benefits-card-3.png" alt="" />
            <p>{ t('products.benefitsCardT3') }</p>
          </div>
          <div className={styles['products__benefits-card']}>
            <img src="/images/benefits-card-4.png" alt="" />
            <p>{ t('products.benefitsCardT4') }</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsBenefits;