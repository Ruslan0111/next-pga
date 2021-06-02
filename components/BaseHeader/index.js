import styles from  './index.module.scss';
import Link from 'next/link';
import HeaderMenu from './HeaderMenu.js'

function BaseHeader({ targetId }) {
  return (
    <header className={styles.header}>
      <div className="container">
        <div className={styles.header__body}>
          <Link href="/">
            <a className={styles.header__logo}>
              <img src="data:image/png;base64,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" alt="" />
            </a>
          </Link>
          <HeaderMenu targetId={targetId} />
        </div>
      </div>
    </header>
  )
}

export default BaseHeader;