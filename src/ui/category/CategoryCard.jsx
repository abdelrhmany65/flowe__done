import React from 'react';
import { Col } from 'react-bootstrap';
import styles from './category.module.css'; 
import cartIcon from "../../assets/images/bi_cart.svg";
import heartIcon from "../../assets/images/heart.svg";
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next'; 
import { Link } from 'react-router-dom';

const CategoryCard = ({ product, onAddToCart, onAddToFavorites }) => {

  const { t } = useTranslation();


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


  return (
    <Col className="mb-4">
      <div className={styles.flipBoxItem}>
        <div className={styles.flipBox}>
          <div className={`${styles.flipBoxFront} text-center`} style={{ backgroundImage: `url(${product.image || 'default-image.png'})` }}>
          </div>
          <div className={`${styles.flipBoxBack} text-center`}>
            <div className={`${styles.inner} ${styles.colorWhite}`}>
              <h3 className={styles.flipBoxHeader}>
              <Link to={`/productdetails/${product.id}`} className='text-light'>
                {product.name}
              </Link> 

              </h3>
              <p className={styles.flipBoxText}>{product.description}</p>
              <span className={styles.price}>${product.price}</span>
              <div className={styles.icons}>
                <img
                  src={heartIcon}
                  alt="heart"
                  onClick={(event) => handleAddItem(event, onAddToFavorites, product, 'المفضلة')}
                  className={styles.heartIcon}
                />
                <img
                  src={cartIcon}
                  alt="cart"
                  onClick={(event) => handleAddItem(event, onAddToCart, product, 'السلة')}
                  className={styles.cartIcon}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Col>
  );
};

export default CategoryCard;
