import styles from './index.module.scss';
import { useState, useContext, useEffect } from 'react';
// import { NotificationContext } from '../../App';
import { useTranslation } from 'react-i18next';

function Tubes() {
  // const {setShowNotification, setNotificationType} = useContext(NotificationContext);
  
  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  function scrollToForm() {
    let section = document.getElementById('buy-form');
    section.scrollIntoView({
      block: 'center',
      behavior: "smooth"
    });
  }

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: name,
      phone: phone
    };

    fetch('https://pga.uz/api/sendmail', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json;charset=utf-8'
      },
      body: JSON.stringify(data)
    })
      .then(response => {
        if (response.status === 200) {
          setNotificationType('success');
        } else {
          setNotificationType('error');
        }
        setShowNotification(true);
      })
  }

  return (
    <main className={styles.tubes__main}>
      <div className="container">
        <h1 className={`pn-bold ${styles.tubes__title}`}>{ t('tubes.title') }</h1>
        <p className="text-md">{ t('tubes.aboutCompany') }</p>  
      </div>

      <section className="pipes text-md">
        <div className="container">
          <div className={styles.pipes__card}>
            <div className={styles['pipes__card-info']}>
              <h2 className="pn-bold">{ t('tubes.product1T') }</h2>
              <p>{ t('tubes.product1D') }</p>
              <h3 className="pn-semibold">{ t('tubes.product1Sizes') }</h3>
              <ul className={styles['pipes__card-list']}>
                <li>{ t('tubes.diametr') }: { t('tubes.from') } { t('tubes.and') } { t('tubes.to') }</li>
                <li>{ t('tubes.thickness') }: { t('tubes.from') } { t('tubes.and') } { t('tubes.to') }</li>
                <li>{ t('tubes.weight') }:</li>
                <li>{ t('tubes.price') }:</li>
              </ul>
              <button className={styles['pipes__card-btn']} onClick={scrollToForm}>{ t('tubes.checkoutPrice') }</button>
            </div>
            <div className={styles['pipes__card-img']}>
              <img src="/images/pga-1.png" alt="" />
            </div>
          </div>
          <div className={styles.pipes__card}>
            <div className={styles['pipes__card-info']}>
              <h2 className="pn-bold">{ t('tubes.product2T') }</h2>
              <p>{ t('tubes.product2D') }</p>
              <h3 className="pn-semibold">{ t('tubes.product2Sizes') }</h3>
              <ul className={styles['pipes__card-list']}>
                <li>{ t('tubes.diametr') }: { t('tubes.from') } { t('tubes.and') } { t('tubes.to') }</li>
                <li>{ t('tubes.thickness') }: { t('tubes.from') } { t('tubes.and') } { t('tubes.to') }</li>
                <li>{ t('tubes.weight') }:</li>
                <li>{ t('tubes.price') }:</li>
              </ul>
              <button className={styles['pipes__card-btn']} onClick={scrollToForm}>{ t('tubes.checkoutPrice') }</button>
            </div>
            <div className={styles['pipes__card-img']}>
              <img src="/images/pga-2.png" alt="" />
            </div>
          </div>
          <div className={styles.pipes__card}>
            <div className={styles['pipes__card-info']}>
              <h2 className="pn-bold">{ t('tubes.product3T') }</h2>
              <p>{ t('tubes.product3D') }</p>
              <h3 className="pn-semibold">{ t('tubes.product3Sizes') }</h3>
              <ul className={styles['pipes__card-list']}>
                <li>{ t('tubes.diametr') }: { t('tubes.from') } { t('tubes.and') } { t('tubes.to') }</li>
                <li>{ t('tubes.thickness') }: { t('tubes.from') } { t('tubes.and') } { t('tubes.to') }</li>
                <li>{ t('tubes.weight') }:</li>
                <li>{ t('tubes.price') }:</li>
              </ul>
              <button className={styles['pipes__card-btn']} onClick={scrollToForm}>{ t('tubes.checkoutPrice') }</button>
            </div>
            <div className={styles['pipes__card-img']}>
              <img src="/images/pga-3.png" alt="" />
            </div>
          </div>
        </div>
      </section>

      <section className={styles.pipes__header}>
        <div className="container">
          <h2 className="pn-bold">{ t('tubes.title2') }</h2>
          <p className="text-md">{ t('tubes.description2') }</p>
        </div>
      </section>

      <section className={styles.fitings}>
        <div className="container">
          <div className={styles.fitings__header}>
            <h2 className="pn-bold">{ t('tubes.fitingsT') }</h2>
            <p>{ t('tubes.fitingsD') }</p>
          </div>
          <div className={styles.fitings__cards}>
            <div className={styles.fitings__card}>
              <div className={styles['fitings__card-info']}>
                <h4>{ t('tubes.fitingsCard1T') }</h4>
                <p>{ t('tubes.fitingsCard1D') }</p>
                <button className={styles['fitings__card-btn']} onClick={scrollToForm}>{ t('tubes.more') }</button>
              </div>
              <div className={styles['fitings__card-img']}>
                <img src="http://pga.uz/images/2020-06-07-17-11-47-310.png" />
              </div>
            </div>
            <div className={styles.fitings__card}>
              <div className={styles['fitings__card-info']}>
                <h4>{ t('tubes.fitingsCard2T') }</h4>
                <p>{ t('tubes.fitingsCard2D') }</p>
                <button className={styles['fitings__card-btn']} onClick={scrollToForm}>{ t('tubes.more') }</button>
              </div>
              <div className={styles['fitings__card-img']}>
                <img src="http://pga.uz/images/2020-06-07-17-11-47-310.png" />
              </div>
            </div>
            <div className={styles.fitings__card}>
              <div className={styles['fitings__card-info']}>
                <h4>{ t('tubes.fitingsCard3T') }</h4>
                <p>{ t('tubes.fitingsCard3D') }</p>
                <button className={styles['fitings__card-btn']} onClick={scrollToForm}>{ t('tubes.more') }</button>
              </div>
              <div className={styles['fitings__card-img']}>
                <img src="http://pga.uz/images/2020-06-07-17-12-56-548.png" />
              </div>
            </div>
            <div className={styles.fitings__card}>
              <div className={styles['fitings__card-info']}>
                <h4>{ t('tubes.fitingsCard4T') }</h4>
                <p>{ t('tubes.fitingsCard4D') }</p>
                <button className={styles['fitings__card-btn']} onClick={scrollToForm}>{ t('tubes.more') }</button>
              </div>
              <div className={styles['fitings__card-img']}>
                <img src="http://pga.uz/images/2020-06-07-17-12-56-548.png" />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.offers}>
        <div className="container">
          <h2 className="pn-bold">{ t('tubes.offersT') }</h2>
          <div className={styles.offers__cards}>
            <div className={styles.offers__card}>
              <div className={styles['offers__card-info']}>
                <h4 className={styles['offers__card-title']}>{ t('tubes.offersCard1T') }</h4>
                <p className={styles['offers__card-text']}>{ t('tubes.offersCard1D') }</p>
              </div>
              <button className={styles['offers__card-btn']} onClick={scrollToForm}>
                { t('tubes.offersBtn') }
              </button>
            </div>
            <div className={styles.offers__card}>
              <div className={styles['offers__card-info']}>
                <h4 className={styles['offers__card-title']}>{ t('tubes.offersCard2T') }</h4>
                <p className={styles['offers__card-text']}>{ t('tubes.offersCard2D') }</p>
              </div>
              <button className={styles['offers__card-btn']} onClick={scrollToForm}>
                { t('tubes.offersBtn') }
              </button>
            </div>
            <div className={styles.offers__card}>
              <div className={styles['offers__card-info']}>
                <h4 className={styles['offers__card-title']}>{ t('tubes.offersCard3T') }</h4>
                <p className={styles['offers__card-text']}>{ t('tubes.offersCard3D') }</p>
              </div>
              <button className={styles['offers__card-btn']} onClick={scrollToForm}>
                { t('tubes.offersBtn') }
              </button>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.buy} id="buy">
        <div className="container">
          <h2>{ t('tubes.buyT') }</h2>
          <p className="text-md">{ t('tubes.buyD') }</p>
          <div className={styles.buy__inner}>
            <form className={styles.buy__form} id="buy-form" onSubmit={handleSubmit}>
              <input id="nameInput" className={styles['buy__form-input']} onChange={e => setName(e.target.value)} required type="text" placeholder={ t('tubes.name') } />
              <input id="phoneInput" className={styles['buy__form-input']} onChange={e => setPhone(e.target.value)} required type="number" placeholder={ t('tubes.phone') } />
              <button type="submit" id="submitBtn" className={styles['buy__form-btn']}>{ t('tubes.send') }</button>
            </form>
            <ul className={styles.buy__address}>
              <li>{ t('tubes.location') }</li>
              <li>
                <span>+998(71)262-51-09</span>
                +998(71)269-02-03
              </li>
              <li>Info@pga.uz</li>
              <li>www.Pga.uz</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  )
}

export default Tubes;