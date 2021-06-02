import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import BaseSectionTitle from '../../BaseSectionTitle';
import NewsCard from '../../NewsCard';

function MainLatestNews() {
  const { t } = useTranslation();

  return (
  <div className={styles['main__latest-news']}>
      <div className="container">
        <div className={`${styles['main__latest-news__top']} d-flex align-center`}>
          <BaseSectionTitle titleSmall="main.worksExcellent" titleBig="main.latestNews" />
          <button className={`${styles['main__latest-news__btn']} d-flex align-center pl-3 text-sm`}>
            { t('main.viewMore') }
            <div className="d-flex justify-center align-center">
              <img src="/images/arrow-right.svg" alt="" />
            </div>
          </button>
        </div>
        <div className={`${styles['main__latest-news__cards']} d-flex mt-3`}>
          <div className={styles['main__latest-news__card']}>
            <NewsCard img="/images/news-card-1.png" title="main.newsCardT1" date="main.newsCardDate1" />
          </div>
          <div className={styles['main__latest-news__card']}>
            <NewsCard img="/images/news-card-2.png" title="main.newsCardT2" date="main.newsCardDate2" />
          </div>
          <div className={styles['main__latest-news__card']}>
            <NewsCard img="/images/news-card-1.png" title="main.newsCardT3" date="main.newsCardDate3" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLatestNews;