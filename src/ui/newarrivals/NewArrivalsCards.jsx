import React from "react";
import styles from "./NewArrivals.module.css";
import { toast } from 'react-toastify';
import { useTranslation } from 'react-i18next'; 


const NewArrivalsCards = ({ product, onAddToCart, onAddToFavorites }) => {
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
    <main className={styles.main}>
      <div className={styles.card}>
        <img
          src={product.image || "https://via.placeholder.com/150"}
          alt={product.name}
        />
        <div className={styles.cardContent}>
          <h2>{product.name}</h2>
          <p className="text-light">{product.description}</p>

          <a
            href="#"
            className={`${styles.button} d-flex align-items-left text-light`}
            onClick={(event) => handleAddItem(event, onAddToCart, product, 'السلة')}
          >
            Add to Cart
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>

          <a
            href="#"
            className={`${styles.button} d-flex align-items-left text-light`}
            onClick={(event) => handleAddItem(event, onAddToFavorites, product, 'المفضله')}
          >
            Add to Favorites
            <span className="material-symbols-outlined">arrow_right_alt</span>
          </a>
        </div>
      </div>
    </main>
  );
};

export default NewArrivalsCards;
