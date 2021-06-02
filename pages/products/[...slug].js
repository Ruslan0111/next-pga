import { useEffect, useContext, useState } from 'react';
import { MenuContext } from '../_app.js';
import { useRouter } from 'next/router';
import RouterComponent from '../../components/RouterComponent';
import BaseSectionTop from '../../components/BaseSectionTop';
import ProductsPressureSystems from '../../components/Products/ProductsPressureSystems';
import ProductsCards from '../../components/Products/ProductsCards';
import ProductsBenefits from '../../components/Products/ProductsBenefits';

import Product1 from '../../components/Products/Product1';

function Products() {
  const setActiveMenuLink = useContext(MenuContext);

  const router = useRouter();
  const slug = router.query.slug;

  // const product = slug ? slug.length >= 2 : false;
  const product = slug ? (slug[0] !== 'uz' && slug[0] !== 'ru' && slug[0] !== 'en') : false;

  const lang = slug ? slug[slug.length - 1] : '';
  
  const [activeLang, setActiveLang] = useState('uz');
  useEffect(() => {
    if (!lang) {
      setActiveLang(localStorage.getItem('lang'));
    } else {
      setActiveLang(lang);
    }
  }, []);

  const links = [{
    title: 'products.products',
    to: '/products'
  }];

  if(product) {
    links.push({
      title: 'products.waterTubes',
      to: '/products/tube'
    });
  }

  useEffect(() => {
    window.scrollTo({top: 0, left: 0, behavior: "smooth"});
  }, [])

  useEffect(() => {
    if (product) {
      setActiveMenuLink(10);
    } else {
      setActiveMenuLink(2);
    }
  })

  return (
    <>
      <RouterComponent lang={activeLang}>
        <BaseSectionTop title="products.ourProducts" links={links} />
        {
          !product ? (<>
                        <ProductsPressureSystems />
                        <ProductsCards />
                        <ProductsBenefits /></>)
          : (<Product1 />)
        }
      </RouterComponent>
    </>
  )
}

export default Products;