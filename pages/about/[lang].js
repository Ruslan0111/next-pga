import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { MenuContext } from '../_app.js';
import RouterComponent from '../../components/RouterComponent';
import BaseSectionTop from '../../components/BaseSectionTop';
import AboutCompany from '../../components/About/AboutCompany';
import AboutVideo from '../../components/About/AboutVideo';
import AboutTeam from '../../components/About/AboutTeam';
import Partners from '../../components/Partners';

function AboutUs() {
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
      title: 'aboutUs.about',
      to: '/about'
    }
  ];

  useEffect(() => {
    setActiveMenuLink(3);
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, [])

  return (
    <>
      <RouterComponent lang={activeLang}>
        <BaseSectionTop title="aboutUs.about" links={links} />
        <AboutCompany />
        <AboutVideo />
        <AboutTeam />
        <Partners titleSmall="aboutUs.trustedPartners" titleBig="aboutUs.ourPartners" />
      </RouterComponent>
    </>
  )
}

export default AboutUs;