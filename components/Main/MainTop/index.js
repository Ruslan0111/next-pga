import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';
import MainTopCard from '../MainTopCard';

function MainTop(props) {
  const { t } = useTranslation();

  const icon1 = '/images/sliders.svg';
  const icon2 = '/images/clock.svg';
  const icon3 = '/images/users.svg';

  return (
    <>
      <div className={styles.main__top}>
        <div className="container">
          <h1 className={`${styles['main__top-title']} text-lg`}>
            <span className={`${styles['main__top-title-small']} pn-light text-md`}>{ t('main.title') }</span>
            <span className={`${styles['main__top-title-big']} pn-bold text-xl`}>{ props.maintitle }</span>
            { t('main.description') }
          </h1>
          <button className={`${styles['main__top-btn']} pn-semibold text-md`}>{ t('main.more') }</button>
          <div className={styles['main__top-cards']}>
            <div className="container">
              <div className={`${styles['main__top-cards__inner']} d-flex`}>
                <MainTopCard icon={icon1} title="cardT1" description="cardD1" btn="moreServices" />
                <MainTopCard icon={icon2} title="cardT2" description="cardD2" btn="more" />
                <MainTopCard icon={icon3} title="cardT3" description="cardD3" btn="more" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default MainTop;