import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Row, Col, Card } from "react-bootstrap";
import { getCategories } from "../../store/slice/categorySlice"; // المسار لملف Slice
import cart from '../../assets/images/bi_cart.svg';
import heart from '../../assets/images/heart.svg';
import { addToCart } from '../../store/slice/cartReducer';
import { addToFavorites } from '../../store/slice/favoritesSlice';
import { toast } from 'react-toastify';
import styles from "./shop.module.css";
import { Link } from "react-router-dom";
import { useTranslation } from 'react-i18next'; 

const ShopGrid = ({ selectedCategory, sortType, searchTerm }) => {
  const { t } = useTranslation();

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


  const handleAddItem = (event, action, product, actionType) => {
    event.preventDefault(); 
    action(product);

    const toastMessage = actionType === 'السلة'
      ? `${product.name} ${t('addToCart')}`
      : `${product.name} ${t('addToFavorites')}`;

    const toastClass = actionType === 'السلة' ? 'toast-cart' : 'toast-favorite';

    toast.success(toastMessage, {
      className: toastClass, 
    
    });
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  let filteredData = categories;
  if (selectedCategory !== 'All') {
    filteredData = categories.filter((category) => category.name === selectedCategory);
  }
  
  let products = filteredData.flatMap((category) => category.products);

  if (searchTerm) {
    products = products.filter((product) =>
      product.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }

  if (sortType === "price-asc") {
    products.sort((a, b) => a.price - b.price);
  } else if (sortType === "price-desc") {
    products.sort((a, b) => b.price - a.price);
  }

  return (
    <Row>
      {products.map((product) => (
        <Col lg={3} md={6} sm={12} key={product.id}>
          <Card className={styles.productCard}>
            <Link to={`/productdetails/${product.id}`}>
              <Card.Img 
                variant="top" 
                src={product.image} 
                className={styles.productImage}
              />
            </Link> 
            <Card.Body>
              <Card.Title>
                <Link to={`/productdetails/${product.id}`} className='text-dark'>
                  {product.name}
                </Link> 
              </Card.Title>
              <Card.Text className={styles.productDescription}>
                {product.description}
              </Card.Text>
              <div className="d-flex justify-content-between align-items-center">
                <span className={`${styles.price}`}>${product.price.toFixed(2)}</span>
                <div className={`${styles.icons} d-flex justify-content-between align-items-center`}>
                  {/* أيقونة العربة */}
                  <img
                    src={cart}
                    alt="Cart"
                    className={`${styles.shop__cart} cart-icon me-2`}
                    onClick={(event) => handleAddItem(event, handleAddToCart, product, 'السلة')}
                  />
                  {/* أيقونة القلب */}
                  <img
                    src={heart}
                    alt="Heart"
                    className={`${styles.shop__heart} heart-icon`}
                    onClick={(event) => handleAddItem(event, handleAddToFavorites, product, 'المفضلة')}
                  />
                </div>
              </div>
            </Card.Body>
          </Card>
        </Col>
      ))}
    </Row>
  );
};

export default ShopGrid;
