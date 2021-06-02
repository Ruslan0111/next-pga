import styles from './index.module.scss';
import { imageUrl } from '../../globalVars';
import Image from 'next/image';

function ProductsCard({ card }) {
  const lang = localStorage.getItem('lang');

  return (
    <div className={styles['products-card']}>
      <img src={imageUrl + card.image} alt="Product" />
      <div className={styles['products-card__info']}>
        <div>
          <h4 className="mb-1 pn-bold text-md">{ card.name[lang] }</h4>
          <p className={`${styles['products-card__text']} pn-light`}>
            { card.description[lang] }
          </p>
        </div>
        <div className={`${styles['products-card__specifications']} d-flex`}> 
          {
            card.extras.slice(0, 4).map(item => {
              return (
                <div className={`${styles['products-card__specifications-item']} d-flex align-center`} key={item.id}>
                  <div className={styles['products-card__specifications-item-img']}>
                    <img src={imageUrl + item.attribute.image} alt="Icon" />
                  </div>
                  <p className="pn-semibold">
                    { item.attribute.name[lang] }
                    <span className="pn-light text-sm">{ item.value[lang] }</span>
                  </p>
                </div>
              )
            })
          }          
        </div>
      </div>
    </div>
  )
}

export default ProductsCard;