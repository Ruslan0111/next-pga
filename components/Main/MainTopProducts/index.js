import styles from './index.module.scss';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';
import BaseSectionTitle from '../../BaseSectionTitle';
import ProductsCard from '../../ProductsCard';

function MainTopProducts() {
  const { t } = useTranslation();

  const [cards, setCards] = useState([]);

  async function fetchCards() {
    const response = await fetch('https://pga.uz/api/products');
    const data = await response.json();

    return data;
  }

  useEffect(async () => {
    setCards(await fetchCards());
  }, [])

  return (
    <div className={styles['main__top-products']}>
      <div className="container">
        <div className={`${styles['main__top-products__top']} d-flex align-center`}>
          <BaseSectionTitle titleSmall="main.qualityProducts" titleBig="main.topProducts" />
          <button className={`${styles['main__top-products__btn']} d-flex align-center pl-3 text-sm`}>
            { t('main.viewMore') }
            <div className="d-flex justify-center align-center">
              <img src="/images/arrow-right.svg" alt="" />
            </div>
          </button>
        </div>
        <div className={`${styles['main__top-products__cards']} d-flex`}>
          {
            cards.map(card => {
              return (
                <div
                  className={styles['main__top-products__cards-item']}
                  key={card.id}
                >
                  <Link href="/products/tube">
                    <a>
                      <ProductsCard card={card} />
                    </a>
                  </Link>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default MainTopProducts;