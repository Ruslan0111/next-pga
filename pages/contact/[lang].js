import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { MenuContext } from '../_app.js';
import BaseSectionTop from '../../components/BaseSectionTop';
import RouterComponent from '../../components/RouterComponent';
import ContactForm from '../../components/Contact/ContactForm';
// import ContactMap from '../../components/Contact/ContactMap';

import dynamic from 'next/dynamic'
const ContactMap = dynamic(() => import('../../components/Contact/ContactMap'), { ssr: false });

function ContactUs() {
  const router = useRouter();
  let { lang } = router.query;

  const [activeLang, setActiveLang] = useState('uz');
  useEffect(() => {
    if (!lang) {
      setActiveLang(localStorage.getItem('lang'));
    } else {
      setActiveLang(lang);
    }
  }, []);

  const setActiveMenuLink = useContext(MenuContext);

  const links = [
    {
      title: 'header.contact',
      to: '/contact'
    }
  ];

  useEffect(() => {
    setActiveMenuLink(5);
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, [])

  return (
    <>
      <RouterComponent lang={activeLang}>
        <BaseSectionTop title="header.contact" links={links} />
        <ContactForm />
        <ContactMap />
      </RouterComponent>
    </>
  )
}

export default ContactUs;