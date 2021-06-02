import { useRouter } from 'next/router';
import { useState, useEffect } from 'react';

function RouterComponent({ lang, children }) {
  const router = useRouter();

  const [returnNull, setReturnNull] = useState(true);

  useEffect(() => {

    const path = trimPath(window.location.pathname);
    let activeLang;

    if (lang !== 'uz' && lang !== 'ru' && lang !== 'en') {
      activeLang = localStorage.getItem('lang');

      router.push(`${path}/${activeLang}`, null, { shallow: true });
      return null;
    } else {
      // activeLang = lang;
      // localStorage.setItem('lang', activeLang);
      setReturnNull(false);
    }
  }, [lang]);

  if (returnNull) {
    return null;
  } else {
    return [children];
  }

  function trimPath(path) {
    while (path.endsWith('/')) {
      path = path.slice(0, path.length - 1);
    }

    return path;
  }
}

export default RouterComponent;