import { useEffect, useContext, useState } from 'react';
import { useRouter } from 'next/router';
import { MenuContext } from '../_app.js';
import RouterComponent from '../../components/RouterComponent';
import TubesPage from '../../components/Tubes';

function Tubes() {
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

  useEffect(() => {
    setActiveMenuLink(4);
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, [])

  return (
    <>
      <RouterComponent lang={activeLang}>
        <TubesPage />
      </RouterComponent>
    </>
  )
}

export default Tubes;