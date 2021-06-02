import Loader from '../components/Loader';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

export default function Home() {
  let activeLang;
  const router = useRouter();
  useEffect(() => {
    activeLang = localStorage.getItem('lang');
    router.push(`/${activeLang}`, null, { shallow: true });
  });

  return (
    <Loader />
  )
}
