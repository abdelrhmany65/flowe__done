import React from 'react';
import { Card, Col } from 'react-bootstrap';
import styles from './Gifts.module.css';
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next'; 

const GiftsCard = ({ product, onAddToCart, onAddToFavorites }) => {

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
    <Col>
      <figure className={styles.giftCard}>
        <img
          src={product.image || 'default-image.png'}
          alt={product.name}
          className={styles.cardImage}
        />
        <figcaption className={styles.cardCaption}>
          <Card.Body className="text-center">
            <Card.Title className={styles.cardTitle}>
              {product.name.split("").map((char, index) => (
                <span key={index} style={{ '--char-index': index }}>{char}</span>
              ))}
            <div className={styles.iconsContainer}>
              <span
                href="#"
                className={`${styles.cart} d-flex align-items-center text-light`}
                onClick={(event) => handleAddItem(event, onAddToCart, product, 'السلة')}
              >
                Add to Cart
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </span>

              <span
                href="#"
                className={`${styles.heart} d-flex align-items-center text-light `}
                onClick={(event) => handleAddItem(event, onAddToFavorites, product, 'المفضلة')}
              >
                Add to Favorites
                <span className="material-symbols-outlined">arrow_right_alt</span>
              </span>
            </div>
            </Card.Title>
          </Card.Body>
        </figcaption>
      </figure>
    </Col>
  );
}

export default GiftsCard;
