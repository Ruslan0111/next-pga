import styles from './index.module.scss';
import { useTranslation } from 'react-i18next';

function NewsMailingForm() {
  const { t } = useTranslation();

  return (
    <div className={styles.footer__email}>
      <div className={styles.footer__email__inner}>
        <div className={styles['footer__email-left']}>
          <img alt="example" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADkAAAA5CAYAAACMGIOFAAAABHNCSVQICAgIfAhkiAAAAlRJREFUaEPtmD0sBEEYhl8FCoWfhkYUKo1rqCR+CjokQqmjpFJSUVLRoUBJpSQiJDSq0xCJhKhUSEj8RMhrM7m5tfZ2ztjZPd/XXDN/z/d8M3OzZR/rFR8o8SgTyBIxLCZLRCTEpJhMUQakXFMkK3SpYlJMpigDUq4pkmX54KlqAppH3fGfzhnPbV6u9Z1A367xRNY6bFQaDyWQgSnTTT7dAJdrxpk17tA6nesSu8n3Z2CvH7g9NF53pA7l1UBmGmiZdAipps7OAkUcCKGgta1AxwpQm8lvFrtJffq7LHA0BtydRpIU2igzA+glqjeOHfLtAWBJqXi9B2j1fKk4UF5PHctAfVeuv3+O2CG5F2+2AWZeh709APZHAC4wavDubZsHKmpyPVgV+8PA0IXDPUnInV7ga/+ser+61eNxLwlhweTQXuNgfivucVYFY/QlAZBqCUF76XIdOJkKtsrrqHsz397TtWdP39uJgiQsF85TkftLxeMVQKvqqgm6Gtj2bNGz5y/zxEFysYRoX/j+H5cALF//1UAonsw/lXYiIZXBxgEPSD+U/PuTYAQMO6QSDams9mx5ZawHoWiWJVooEg+pAFomcleNuhp4yESJ1EAShldMQ1c0ezp8qiCjWAtqI5CFM/e7R7P6x1N4nt+1EJOF8ycmA3Okf/74F+XK9yMfy38d+vsy9vfkX8MFjS+QwVk3P3j4Z7vO93EpTqNFfBk0h4wTyNJcAmkpkc6HEZPOFVhagJi0lEjnw4hJ5wosLUBMWkqk82HEpHMFlhYgJi0l0vkwn6jydT9EF4mYAAAAAElFTkSuQmCC" />
          <h3 className="pn-bold">{ t('subscribeT1') }<br />{ t('subscribeT2') }</h3>
        </div>
        <div className={styles['footer__email-right']}>
          <input placeholder={ t('emailPlaceholder') } type="text" />
          <button type="button">
            <span className="text-md">{ t('subscribe') }</span>
          </button>
        </div>
      </div>
    </div>
  )
}

export default NewsMailingForm;