import styles from './index.module.scss';
import { useState, useContext } from 'react';
// import { NotificationContext } from '../../../App';
import { useTranslation } from 'react-i18next';
import BaseSectionTitle from '../../BaseSectionTitle';

function ContactForm() {
  // const {setShowNotification, setNotificationType} = useContext(NotificationContext);

  const { t } = useTranslation();

  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [city, setCity] = useState('');
  const [message, setMessage] = useState('');

  function handleSubmit(e) {
    e.preventDefault();

    const data = {
      name: name,
      phone: phone,
      city: city,
      email: email,
      description: message
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
    <div className={styles.contact__form}>
      <div className="container">
        <div className={`${styles.contact__form__inner} d-flex`}>
          <div className={styles.contact__form__left}>
            <BaseSectionTitle titleSmall="contactUs.contact" titleBig="contactUs.form" />
            <p className="text-md">{ t('contactUs.team') }</p>
            <form onSubmit={handleSubmit}>
              <div className={`${styles['input-line']} d-flex text-md`}>
                <input className="pn-regular" name="name" onChange={e => setName(e.target.value)} type="text" required placeholder={ t('contactUs.name') } />
                <input className="pn-regular" name="phone" onChange={e => setPhone(e.target.value)} type="text" required placeholder={ t('contactUs.phone') } />
              </div>
              <div className={`${styles['input-line']} d-flex text-md`}>
                <input className="pn-regular" name="email" onChange={e => setEmail(e.target.value)} type="text" required placeholder={ t('contactUs.email') } />
                <input className="pn-regular" name="city" onChange={e => setCity(e.target.value)} type="text" required placeholder={ t('contactUs.city') } />
              </div>
              <textarea className="pn-regular" name="message" onChange={e => setMessage(e.target.value)} placeholder={ t('contactUs.message') }></textarea>
              <button className="pn-semibold text-sm" type="submit">{ t('contactUs.book') }</button>
            </form>
          </div>
          <div className={styles.contact__form__right}>
            <img src="/images/form.png" alt="" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactForm;