import React, { useEffect } from 'react';
import { Container } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/slice/categorySlice';
import { addToCart } from '../../store/slice/cartReducer';
import { addToFavorites } from '../../store/slice/favoritesSlice';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/autoplay';
import 'swiper/css/pagination';
import { Autoplay, Pagination } from 'swiper/modules';
import CategoryCard from './CategoryCard';
import styles from './category.module.css'; // CSS Modules
import CommoSection from '../CommoSection/CommoSection';
import LoadingComponent from '../../components/Loading/LoadingComponent'; 


const Category = () => {
  const dispatch = useDispatch();
  const { categories, loading, error } = useSelector((state) => state.categories);

  useEffect(() => {
    dispatch(getCategories());
  }, [dispatch]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
  };

  const handleAddToFavorites = (item) => {
    dispatch(addToFavorites(item));
  };

  if (loading) {
    return <LoadingComponent />;
  }

  if (error) {
    return (
      <div className="errorMessage my-3">
        Error: {error}
      </div>
    );
  }

  return (
    <section className="mar__top">
      <Container>
        <CommoSection title="Indoor Plants" />

        {/* سلايدر عرض المنتجات */}
        <Swiper
          spaceBetween={20}
          slidesPerView={4}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          pagination={{ clickable: true }}
          loop={true}
          modules={[Autoplay]}
          breakpoints={{
            1024: { slidesPerView: 4 },
            768: { slidesPerView: 2 },
            576: { slidesPerView: 2 },
            350: { slidesPerView: 1 },
            0: { slidesPerView: 1 }
          }}
          className={`${styles.swiperPagination} my-4`}
        >
          {categories.map((item) => {
            if (item.name === "Indoor Plants") {
              return item.products.map((product) => (
                <SwiperSlide key={product.id}>
                  <CategoryCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToFavorites={handleAddToFavorites}
                  />
                </SwiperSlide>
              ));
            }
            return null;
          })}
        </Swiper>
      </Container>
    </section>
  );
};

export default Category;
