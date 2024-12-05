import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import { EffectCoverflow, Pagination } from 'swiper/modules';
import styles from './Alpoum.module.css';
import { Container, Row } from 'react-bootstrap';
import slide_image_1 from '../../assets/images/1000_F_245380560_4levUxm7EZzLJi2lx2GGH25rgp456dl1 1.png';
import slide_image_2 from '../../assets/images/beautiful-bouquet-roses_23-2150718725 1.png';
import slide_image_3 from '../../assets/images/c692149b242076285cca3c09c3b1a67f.png';
import slide_image_4 from '../../assets/images/1000_F_245380560_4levUxm7EZzLJi2lx2GGH25rgp456dl1 1.png';
import slide_image_5 from '../../assets/images/beautiful-bouquet-roses_23-2150718725 1.png';
import slide_image_6 from '../../assets/images/c692149b242076285cca3c09c3b1a67f.png';
import CommoSection from '../../ui/CommoSection/CommoSection';

const Alpoum = () => {
  const swiperRef = React.useRef(null);

  const handleNext = () => {
    swiperRef.current.swiper.slideNext();
  };

  const handlePrev = () => {
    swiperRef.current.swiper.slidePrev();
  };

  return (
    <div id="album-slider-section" className="d-block">
      <Container className={styles.alpoumContainer}>
        <Row className="justify-content-center align-items-center text-center">
          <CommoSection title="Our Album" />
        </Row>
        <Swiper
          ref={swiperRef}
          effect={'coverflow'}
          grabCursor={true}
          centeredSlides={true} /* تغيير المركز للشرائح */
          loop={true}
          slidesPerView={5} /* عرض 5 شرائح بجانب بعضها */
          spaceBetween={20} /* المسافة بين الشرائح */
          breakpoints={{
            1240: {
              slidesPerView: 5,
            },
            900: {
              slidesPerView: 3,
            },
            500: {
              slidesPerView: 1,
            },
            0: {
              slidesPerView: 1,
            },
          }}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ el: '.swiper-pagination', clickable: true }}
          modules={[EffectCoverflow, Pagination]}
          className={styles.swiperContainer}
        >
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide_image_1} alt="Slide 1" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide_image_2} alt="Slide 2" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide_image_3} alt="Slide 3" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide_image_4} alt="Slide 4" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide_image_5} alt="Slide 5" />
          </SwiperSlide>
          <SwiperSlide className={styles.swiperSlide}>
            <img src={slide_image_6} alt="Slide 6" />
          </SwiperSlide>
        </Swiper>

        <div className={styles.sliderControler}>
          <div className={`${styles.sliderArrow} swiper-button-prev`}>
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className={`${styles.sliderArrow} swiper-button-next`}>
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className={styles.swiperPagination}></div>
        </div>
      </Container>
    </div>
  );
}

export default Alpoum;
