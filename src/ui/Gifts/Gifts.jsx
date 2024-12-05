import React, { useEffect } from 'react';
import { Container, Spinner, Row, Col } from 'react-bootstrap';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../../store/slice/categorySlice';
import { addToCart } from '../../store/slice/cartReducer';
import { addToFavorites } from '../../store/slice/favoritesSlice';

import styles from './Gifts.module.css'; 
import CommoSection from '../CommoSection/CommoSection';
import GiftsCard from './GiftsCard';
import LoadingComponent from '../../components/Loading/LoadingComponent';

const Gifts = () => {
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
      <Container fluid>
        <Container> 
          <Row className='mb-5'>

          <CommoSection title="Gifts" className/>
          </Row>
        </Container>

        {/* سلايدر عرض المنتجات */}
        <Row className="g-0 m-0 p-0">
          {categories.map((item) => {
            if (item.name === "Gifts") {
              return item.products.map((product) => (
                <Col key={product.id} xs={12} sm={6} md={4} lg={3}>
                  <GiftsCard
                    product={product}
                    onAddToCart={handleAddToCart}
                    onAddToFavorites={handleAddToFavorites}
                  />
                </Col>
              ));
            }
            return null;
          })}
        </Row>
      </Container>
    </section>
  );
};

export default Gifts;
