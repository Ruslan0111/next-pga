import styles from './index.module.scss';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link'
import ProductsCard from '../../ProductsCard';

function MainTopProducts() {
  const { t } = useTranslation();

  const [cards, setCards] = useState([]);
  const [activeLang, setActiveLang] = useState(null);

  async function fetchCards() {
    const response = await fetch('https://pga.uz/api/products');
    const data = await response.json();

    return data;
  }

  useEffect(async () => {
    setCards(await fetchCards());
    setActiveLang(localStorage.getItem('lang'));
  }, [])

  return (
    <div className={styles.products__cards}>
      <div className="container">
        <div className={`${styles.products__cards__inner} d-flex`}>
          {
            cards.map(card => {
              return (
                <div
                  className={styles['products__cards-item']}
                  key={card.id}
                >
                  <Link href={`/products/tube/${activeLang}`}>
                    <a><ProductsCard card={card} /></a>
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