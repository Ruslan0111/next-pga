import './index.scss';
import { useContext, useEffect } from 'react';
import { NotificationContext } from '../../App';
import successIcon from '../../assets/images/success.svg';
import errorIcon from '../../assets/images/warning.svg';

function BaseNotification({ type, reference }) {
  const {setShowNotification, setNotificationType} = useContext(NotificationContext);

  useEffect(() => {
    const timerId = setTimeout(() => {
      setShowNotification(false);
    }, 3000);

    return () => {
      clearTimeout(timerId);
    }
  });

  const data = {
    icon: successIcon,
    title: 'Success',
    text: 'Your message has been sent, thank you for your message!',
  };

  if (type === 'error') {
    data.icon = errorIcon;
    data.title = 'Error';
    data.text = 'Something went wrong, please contact to the administrator.';
  }

  return (
    <div ref={reference} className="base__notification d-flex">
      <img src={data.icon} alt="" />
      <div>
        <h4>{ data.title }</h4>
        <p>{ data.text }</p>
      </div>
      <button onClick={() => setShowNotification(false)}>X</button>
    </div>
  )
}

export default BaseNotification;