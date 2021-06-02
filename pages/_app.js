import "slick-carousel/slick/slick.css";
import '../public/styles/index.scss';
import i18n from '../i18n/index.js';
import React, { useState, useEffect } from 'react';
import { I18nextProvider } from 'react-i18next';
import { useRouter } from 'next/router';
import Loader from '../components/Loader';
import BaseHeader from '../components/BaseHeader';
import BaseFooter from '../components/BaseFooter';

export const MenuContext = React.createContext(null);

export const NotificationContext = React.createContext(null);

function MyApp({ Component, pageProps }) {
  const [isLoading, setIsLoading] = useState(true);
  const [activeMenuLink, setActiveMenuLink] = useState(null);

  const router = useRouter();

  useEffect(() => {
    let activeLang;
    async function fetchData() {
      activeLang = localStorage.getItem('lang');
      if (!activeLang) {
        activeLang = await findLocalLang();
        localStorage.setItem('lang', activeLang);
      }
      setIsLoading(false);
    }

    fetchData();
    // router.push(`/${activeLang}`);
  }, [])

  async function findLocalLang() {
    const data = await fetch('https://ip-geolocation.whoisxmlapi.com/api/v1?apiKey=at_uHhziqi9nuWkqc62dhzcDYxoBHNad');
    const response = await data.json();
    let lang = 'en';

    switch(response.location.country) {
      case 'UZ':
        lang = 'uz';
        break;
      case 'RU':
      case 'KZ':
      case 'KG':
        lang = 'ru';
        break;
      default:
        break;
    }
    return lang;
  }

  return <>
    {/*
      isLoading ? (<Loader />) : (
        <I18nextProvider i18n={i18n}>
          <MenuContext.Provider value={setActiveMenuLink}>
            <BaseHeader targetId={activeMenuLink} />
            <Component {...pageProps} />
            <BaseFooter />
          </MenuContext.Provider>
        </I18nextProvider>
      )
    */}

    <I18nextProvider i18n={i18n}>
      <MenuContext.Provider value={setActiveMenuLink} >
        <BaseHeader targetId={activeMenuLink} />
        <Component {...pageProps} />
        <BaseFooter />
      </MenuContext.Provider>
    </I18nextProvider>

  </>
}

export default MyApp
