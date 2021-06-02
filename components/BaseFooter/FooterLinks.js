import styles from './FooterLinks.module.scss';

function FooterLinks({ links }) {
  return (
    <div className={styles['footer__links-item']}>
      <ul>
        <li className="pn-bold text-md">{ links.title }</li>
        {
          Object.keys(links.links).map((link, index) => {
            return <li
              className="text-sm"
              key={`footer__link${index}`}
            >
              <a
                href={links.links[link]}
                className={styles.footer__link}
              >{ link }</a>
            </li>
          })
        }
      </ul>
    </div>
  )
}

export default FooterLinks;