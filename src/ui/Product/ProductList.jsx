import React from 'react';
import { Container } from 'react-bootstrap';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import { Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import styles from './product.module.css';


import images02 from "../../assets/images/2619fafceaedd791a39fd2a196ec0641a.png";
import images03 from "../../assets/images/2619fafceaedd791a39fd2a196ec0641a.png";
import images04 from "../../assets/images/2619fafceaedd791a39fd2a196ec0641a.png";
import images05 from "../../assets/images/2619fafceaedd791a39fd2a196ec0641a.png";
import images06 from "../../assets/images/2619fafceaedd791a39fd2a196ec0641a.png";
import images07 from "../../assets/images/2619fafceaedd791a39fd2a196ec0641a.png";
import images08 from "../../assets/images/2619fafceaedd791a39fd2a196ec0641a.png";
import images09 from "../../assets/images/2619fafceaedd791a39fd2a196ec0641a.png";



const categories = [

  { name: 'Indoor Plants', image: images02 },
  { name: 'Flowering Plants', image: images03 },
  { name: 'Cacti and Succulents', image: images04 },
  { name: 'Hanging plants', image: images05 },
  { name: 'Indoor Tree Plants', image: images06 },
  { name: 'Gifts', image: images07 },
  { name: 'Subscription', image: images08 },
  { name: 'Planters & Accessories', image: images09 },
];

const ProductList = ({ setSelectedCategory }) => {
  return (
    <section className="mar__top">
      <Container>
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          
          loop={true}
          modules={[Autoplay, Pagination]}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 3 },
            576: { slidesPerView: 2 },
            350: { slidesPerView: 1 },
            0: { slidesPerView: 1 },
          }}
          className={styles.swiperContainer}
        >
          {categories.map((category, index) => (
            <SwiperSlide key={index}>
              <Card className={styles.productCard}>
                <Card.Img variant="top" src={category.image} />
                <Card.Body>
                  <Card.Title className={`text-center my-2`}>
                    {category.name}
                  </Card.Title>
                  <div className="centerer text-center mt-5">
                    <div className="wrap">
                    <Link
                      className="btn-collision"
                      to={`/shop/${category.name.replace(/\s+/g, '-').toLowerCase()}`} // تعديل الرابط ليشمل الفئة المحددة
                      onClick={() => setSelectedCategory(category.name)} // تحديد الفئة المختارة
                    >
                      Shop Now
                    </Link>
                    </div>
                  </div>
                </Card.Body>
              </Card>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    </section>
  );
};

export default ProductList;
