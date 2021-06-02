import styles from './index.module.scss';
import ProductDescription from './ProductDescription';
import ProductSpecifications from './ProductSpecifications';
import ProductsBenefits from '../ProductsBenefits';
import ProductConnection from './ProductConnection';
import ProductDetails1 from './ProductDetails1';
import ProductDetails2 from './ProductDetails2';

function Product1() {
  return (
    <div className={styles.product1}>
      <ProductDescription />
      <ProductSpecifications />
      <ProductsBenefits bgColor="#fff" />
      <ProductConnection />
      <ProductDetails1 />
      <ProductDetails2 />
    </div>
  )
}

export default Product1;