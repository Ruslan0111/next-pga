import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import { useState } from 'react';
import BaseSectionTitle from '../../BaseSectionTitle';

function MainLatestProjects() {
  const { t } = useTranslation();

  const [btns, setBtns] = useState([
    {
      text: "main.allProjects",
      isActive: true,
      id: 1
    },
    {
      text: "main.production",
      isActive: false,
      id: 2
    },
    {
      text: "main.polimerGallery",
      isActive: false,
      id: 3
    }
  ]);

  function handleClick(btn) {
    setBtns(
      btns.map(item => {
        return {
          ...item,
          isActive: item.id === btn.id
        }
      })
    )
  }

  return (
    <div className={styles.main__projects}>
      <div className="container">
        <div className={`${styles['main__projects-top']} d-flex align-center`}>
          <BaseSectionTitle titleSmall="main.recentlyCompleted" titleBig="main.latestProjects" />
          <ul className="d-flex text-sm">
            {
              btns.map((item) => {
                return (
                  <li key={item.id}>
                    <button
                     className={item.isActive ? styles.active : ''}
                     onClick={() => handleClick(item)}
                    >{ t(item.text) }</button>
                  </li>
                )
              })
            }
          </ul>
        </div>
        <div className={`${styles['main__projects-cards']} d-flex`}>
          <div className={`${styles['main__projects-card']} mt-2`}>
            <img src="/images/latest-news-1.png" alt="" />
          </div>
          <div className={`${styles['main__projects-card']} mt-2`}>
            <img src="/images/latest-news-2.png" alt="" />
          </div>
          <div className={`${styles['main__projects-card']} mt-2`}>
            <img src="/images/latest-news-3.png" alt="" />
          </div>
          <div className={`${styles['main__projects-card']} mt-2`}>
            <img src="/images/latest-news-4.png" alt="" />
          </div>
          <div className={`${styles['main__projects-card']} mt-2`}>
            <img src="/images/latest-news-5.png" alt="" />
          </div>
          <div className={`${styles['main__projects-card']} mt-2`}>
            <img src="/images/latest-news-6.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default MainLatestProjects;