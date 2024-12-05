import React, { useEffect, useState } from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import { Link, useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next';

import { addToCart } from '../store/slice/cartReducer';
import { addToFavorites } from '../store/slice/favoritesSlice';

import Star from "../assets/images/Vector.png";
import styles from "./styles.module.css"
import ProductList from '../ui/Product/ProductList';
import productImg04 from "../assets/images/about Us.png";
import LoadingComponent from '../components/Loading/LoadingComponent';

const ProductDetails = () => {

  const { i18n } = useTranslation(); 
  const currentLang = i18n.language; 
  const direction = currentLang === 'ar' ? 'rtl' : 'ltr'

  const { productId } = useParams(); // جلب معرف المنتج من الـ URL
  const dispatch = useDispatch();
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);  // تعريف حالة الخطأ

  const { categories } = useSelector((state) => state.categories);

  // جلب بيانات المنتج بناءً على معرف المنتج
  useEffect(() => {
    let isMounted = true;

    if (categories.length > 0) {
      try {
        const foundProduct = categories
          .map(category => category.products.find((prod) => prod.id === parseInt(productId)))
          .filter(Boolean)[0];
        if (foundProduct && isMounted) {
          setProduct(foundProduct);
          setLoading(false);
        } else {
          setError("Product not found");
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }

    return () => {
      isMounted = false; // غلق التحديث عند التفكيك
    };
  }, [categories, productId]);

  const handleAddToCart = (item) => {
    dispatch(addToCart(item));
    toast.success(`${item.name} تم إضافته إلى السلة بنجاح!`);
  };

  const handleAddToFavorites = (item) => {
    dispatch(addToFavorites(item));
    toast.success(`${item.name} تم إضافته إلى المفضلة بنجاح!`);
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

  const { name, image, description, price, rating } = product;

  return (
    <div style={{direction}}>
      {/* Hero */}
      <div className={`${styles.project__card}`}>
        <img src={productImg04} alt="Project" className={`${styles.project__image}`} />
        <div className={styles.project__card__body}>
          <h2>What you need!</h2>
        </div>
      </div>

      <Container>
        <Row className="d-flex justify-content-center align-items-center my-5">
          {/* صورة المنتج */}
          <Col md={6} xs={12} className="text-center">
            <div className={styles.img__container}>
              <img src={image} alt={name} className={styles.img__container__top}/>
            </div>
          </Col>

          {/* تفاصيل المنتج */}
          <Col md={6} xs={12}>
            <h2 className="pt-5 p-3 fw-bolder">{name}</h2>
            <div className="d-flex ps-3 align-items-center">
              <div className={styles.star}>
                {[...Array(5)].map((_, i) => (
                  <img key={i} src={Star} alt="Star" className={styles.star__image} />
                ))}
              </div>
              <p className="text-muted ms-2">(<span className="text-warning">{rating}</span> rating)</p>
            </div>
            <h3 className="p-3 text-muted fw-bolder">{description}</h3>
            <p className="ps-3 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo cumque optio aperiam iusto voluptatibus sunt reprehenderit quam. Non magni assumenda esse. Obcaecati vero expedita at voluptatibus facilis consectetur assumenda dolorum.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quisquam omnis molestias tempore esse odio! Iste, velit sunt quas ad, ipsum amet vitae id dolorum qui facilis numquam veniam suscipit!
            </p>
            <div className="d-flex justify-content-between align-items-center mt-4">
              <span className="fs-4 text-success fw-bold ps-3">${price.toFixed(2)}</span>
              <div className="d-flex">
                <button
                  className="btn btn-success me-2"
                  onClick={() => handleAddToCart(product)}
                >
                  Add to cart
                </button>
                <Link to='/shop'>
                  <button type="button" className="btn btn-dark mx-2">
                    Continue Shopping
                  </button>
                </Link>
              </div>
            </div>
          </Col>
        </Row>

        <Row>
          <Col md={12}>
            <div className="review d-flex mt-5 pt-5 mb-4">
              <p className="px-4 text-muted">Description: <span className="ms-4"> Reviews: (2)</span></p>
            </div>
            <p className="ps-3 text-muted">Lorem ipsum, dolor sit amet consectetur adipisicing elit. Illo cumque optio aperiam iusto voluptatibus sunt reprehenderit quam. Non magni assumenda esse. Obcaecati vero expedita at voluptatibus facilis consectetur assumenda dolorum.
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet quisquam omnis molestias tempore esse odio! Iste, velit sunt quas ad, ipsum amet vitae id dolorum qui facilis numquam veniam suscipit!
            </p>
          </Col>
        </Row>

        <Row>
          <Col lg={12}>
            <p className="text-center fw-bold m-5 p-5 bg-light fs-1">You might also like</p>
          </Col>
          {/* <ProductList /> */}
        </Row>
      </Container>
    </div>
  );
};

export default ProductDetails;
