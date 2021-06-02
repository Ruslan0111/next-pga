import styles from './index.module.scss';
import { Fragment } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

function BaseSectionTop({ title, links }) {
  const { t } = useTranslation();

  return (
    <div className={styles.base__section__top}>
      <div className={`${styles['base__section__top-container']} container`}>
        <h1 className={`${styles['base__section__top-title']} pn-bold`}>
          { t(title) }
        </h1>
        <div className={`${styles['base__section__top-links']} text-sm`}>
          <Link href="/"><a>{ t('header.main') }</a></Link>
          {
            links.map((link, index) => {
              return (
                <Fragment key={index}>
                  {' / '}
                  <Link href={link.to}>
                    <a>{ t(link.title) }</a>
                  </Link>
                </Fragment>
              )
            })
          }
        </div>
      </div>
    </div>
  )
}

export default BaseSectionTop;