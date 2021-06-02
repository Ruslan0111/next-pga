import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

function ProductSpecifications() {
  const { t } = useTranslation();

  return (
    <div className={styles.product__specifications}>
      <div className="container">
        <div className={`${styles.product__specifications__inner} d-flex`}>
          <div className={styles.product__specifications__item}>
            <img src="/images/sliders.svg" alt="" />
            <span className="pn-bold tet-md">{ t('products.diameter') }</span>
            <span className="pn-light text-md">16–1600 мм</span>
          </div>
          <div className={styles.product__specifications__item}>
            <img src="/images/sliders.svg" alt="" />
            <span className="pn-bold tet-md">{ t('products.pressure') }</span>
            <span className="pn-light text-md">до PN 25</span>
          </div>
          <div className={styles.product__specifications__item}>
            <img src="/images/sliders.svg" alt="" />
            <span className="pn-bold tet-md">{ t('products.material') }</span>
            <span className="pn-light text-md">ПЭ 100, ПЭ 100+, ПЭ 80</span>
          </div>
          <div className={styles.product__specifications__item}>
            <img src="/images/sliders.svg" alt="" />
            <span className="pn-bold tet-md">{ t('products.sdr') }</span>
            <span className="pn-light text-md">9; 11; 13,6; 17; 21; 26</span>
          </div>
          <div className={styles.product__specifications__item}>
            <img src="/images/sliders.svg" alt="" />
            <span className="pn-bold tet-md">{ t('products.temperature') }</span>
            <span className="pn-light text-md">0–40°С кратковременно -60°С - +80°С</span>
          </div>
          <div className={styles.product__specifications__item}>
            <img src="/images/sliders.svg" alt="" />
            <span className="pn-bold tet-md">{ t('products.expiration') }</span>
            <span className="pn-light text-md">≥ 50 лет</span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductSpecifications;