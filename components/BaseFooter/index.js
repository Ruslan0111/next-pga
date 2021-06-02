import styles from './index.module.scss';
import FooterContacts from './FooterContacts.js';
import FooterLinks from './FooterLinks.js';
import NewsMailingForm from '../NewsMailingForm';
import { useTranslation } from 'react-i18next';

function BaseFooter() {
  const { t } = useTranslation();

  const footerLinks = [
    {
      title: t('footer.main'),
      links: {
        [t('footer.about')]: '#',
        [t('footer.products')]: '#',
        [t('footer.contacts')]: '#',
        [t('footer.partners')]: '#'
      } 
    },
    {
      title: t('footer.products'),
      links: {
        [t('footer.top')]: '#',
        [t('footer.all')]: '#',
        [t('footer.latest')]: '#'
      }
    },
    {
      title: t('footer.aboutUs'),
      links: {
        [t('footer.about')]: '#',
        [t('footer.latest')]: '#',
        [t('footer.partners')]: '#'
      } 
    },
    {
      title: t('footer.contactUs'),
      links: {
        [t('footer.ourContacts')]: '#',
        [t('footer.office')]: '#',
        [t('footer.contacts')]: '#',
        [t('footer.where')]: '#'
      } 
    }
  ]

  return (
    <footer className={styles.footer}>
      <div className="container">
        <NewsMailingForm />
        <div className={styles.footer__inner}>
          <FooterContacts />
          <div className={styles.footer__links}>
            {
              footerLinks.map(link => {
                return <FooterLinks key={link.title} links={link} />
              })
            }
          </div>
        </div>
      </div>
    </footer>
  )
}

export default BaseFooter;