import styles from './HeaderMenu.module.scss';
import { useState, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

function HeaderMenu({ targetId }) {
  const { t, i18n } = useTranslation();

  
  // let directPath = window.location.pathname;
  let path;
  let lang;
  // const [lang, setLang] = useState(null);

  // const [directPath, setDirectPath] = useState('');
  let directPath;
  useEffect(() => {
    // setDirectPath(window.location.pathname);
    directPath = window.location.pathname;
    path = directPath.split('/');

    lang = path[path.length - 1];
    // setLang(path[path.length - 1]);
    if (lang !== 'uz' && lang !== 'ru' && lang !== 'en') {
      lang = localStorage.getItem('lang');
      // setLang(localStorage.getItem('lang'));
    } else {
      // setDirectPath(directPath.slice(0, directPath.length - 3));
      directPath = directPath.slice(0, directPath.length - 3);
    }
  });

  // path = directPath.split('/');

  // lang = path[path.length - 1];
  // if (lang !== 'uz' && lang !== 'ru' && lang !== 'en') {
  //   lang = localStorage.getItem('lang');
  // } else {
  //   // setDirectPath(directPath.slice(0, directPath.length - 3));
  //   directPath = directPath.slice(0, directPath.length - 3);
  // }

  const [isMenuActive, setIsMenuActive] = useState(false);

  const [headerLinks, setHeaderLinks] = useState([
    {label: 'main', link: '/', isActive: false, id: 1},
    {label: 'products', link: '/products', isActive: false, id: 2},
    {label: 'about', link: '/about', isActive: false, id: 3},
    {label: 'tubes', link: '/tubes', isActive: false, id: 4},
    {label: 'contact', link: '/contact', isActive: false, id: 5}
  ])

  const [langs, setLangs] = useState([
    {bigLabel: "O'zbekcha", smallLabel: "UZ", isActive: false, id: 1},
    {bigLabel: "Русский", smallLabel: "RU", isActive: false, id: 2},
    {bigLabel: "English", smallLabel: "EN", isActive: false, id: 3}
  ])

  useEffect(() => {
    setTimeout(() => {
      i18n.changeLanguage(lang);
    })
    highlightLang(lang);
    localStorage.setItem('lang', lang);
  }, [])

  useEffect(() => {
    highlightMenuLink(targetId);
  }, [targetId])

  function handleBurgerClick() {
    setIsMenuActive(!isMenuActive);
    document.querySelector('body').classList.toggle('lock');
  }

  function highlightMenuLink(targetId) {
    if (targetId === 10) {
      targetId = 2;
    }
    setHeaderLinks(
      headerLinks.map(item => {
        return {
          ...item,
          isActive: Number(targetId) === item.id
        }
      })
    )
    closeMenu();
  }

  function handleLangClick(targetLang) {
    i18n.changeLanguage(targetLang);
    localStorage.setItem('lang', targetLang);
    highlightLang(targetLang);
  }

  function highlightLang(lang) {
    setLangs(
      langs.map(item => {
        return {
          ...item,
          isActive: lang === item.smallLabel.toLowerCase()
        }
      })
    )
    closeMenu();
  }

  function closeMenu(item) {
    setIsMenuActive(false);
    document.querySelector('body').classList.remove('lock');
  }

  return <>
    <a href="tel:+998712625109" className={styles.header__tel}>+998 (71) 262-51-09</a>
    <div className={`${styles.header__burger} ${isMenuActive ? styles.active : ''}`} onClick={handleBurgerClick}>
      <span></span>
    </div>
    <nav className={`${styles.header__menu} ${isMenuActive ? styles.active : ''}`}>
      <ul className={styles.header__list}>
        {
          headerLinks.map((item) => {
            return <li key={`header__link${item.id}`}>
              <Link
                href={item.link}
                shallow={true}
              >
                <a
                  className={`${styles.header__link} ${item.isActive ? styles['header__link--active'] : ''}`}
                  onClick={ () => closeMenu(item) }
                >{t(`header.${item.label}`)}</a>
              </Link>
            </li>
          })
        }
      </ul>
      <div className={styles.header__langs}>
        <ul className={isMenuActive ? styles.big : styles.small}>
          {
            langs.map(lang => {
              return <li
                key={`header__lang${lang.id}`}
                className={lang.isActive ? styles['active-lang'] : ''}
                onClick={() => handleLangClick(lang.smallLabel.toLowerCase())}
              >
                <Link
                  // href={`${directPath}/${lang.smallLabel.toLowerCase()}`}
                  href={`${lang.smallLabel.toLowerCase()}`}
                >{isMenuActive ? lang.bigLabel : lang.smallLabel}</Link>
              </li>
            })
          }
        </ul>
      </div>
    </nav>
  </>
}

export default HeaderMenu;