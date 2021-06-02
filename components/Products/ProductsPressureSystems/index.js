import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

function ProductsPressureSystems() {
  const { t } = useTranslation();

  return (
    <div className={styles['products__pressure-systems']}>
      <div className="container">
        <div className={`${styles['products__pressure-systems__inner']} d-flex`}>
          <div className={styles['products__pressure-systems__left']}>
            <h1 className="pn-bold">{ t('products.pressureSystemsT') }</h1>
            <p className="text-md">{ t('products.pressureSystemsD') }</p>
          </div>
          <div className={styles['products__pressure-systems__right']}>
            <img src="/images/pressure-systems.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductsPressureSystems;