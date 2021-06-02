import "slick-carousel/slick/slick.css";
import styles from './index.module.scss';
import Slider from "react-slick";
import BaseSectionTitle from '../BaseSectionTitle';

function Partners({ titleSmall, titleBig }) {
  const sliderSettings = {
    arrows: false,
    slidesToShow: 6,
    slidesToScroll: 6,
    swipeToSlide: true,
    autoplay: true,
    infinite: true,
    responsive: [
      {
        breakpoint: 1210,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 4,
          infinite: true,
        }
      },
      {
        breakpoint: 800,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
        }
      },
      {
        breakpoint: 400,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
        }
      },
    ]
  }

  return (
    <div className={styles.main__partners}>
      <div className="container">
        <BaseSectionTitle titleSmall={titleSmall} titleBig={titleBig} />
        <div className={`${styles['main__partners-slider']} mt-2`}>
          <Slider {...sliderSettings}>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-1.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-2.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-3.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-4.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-5.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-6.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-1.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-2.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-3.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-4.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-5.png" alt="" />
            </div>
            <div className={styles['main__partners-slider-item']}>
              <img src="/images/partner-6.png" alt="" />
            </div>
          </Slider>
        </div>
      </div>
    </div>
  )
}

export default Partners;