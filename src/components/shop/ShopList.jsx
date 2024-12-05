import React from 'react';
import styles from './shop.module.css';
import { useTranslation } from 'react-i18next';

const categories = [
  'All',
  'Indoor Plants',
  'Flowering Plants',
  'Cacti and Succulents',
  'Hanging plants',
  'Indoor Tree Plants',
  'Gifts',
  'Subscription',
  'Planters & Accessories',
];

const ShopList = ({ selectedCategory, setSelectedCategory }) => {
  const { t } = useTranslation(); // استخدام الترجمة
  const title =
    selectedCategory === 'All'
      ? t('Categories')
       
      : `${t('Category')}: ${t(selectedCategory)}`; 
     

  return (
    <div>
      <div className={`${styles.categoryList}`}>
        <h3 className={styles.title}>{title}</h3>
        <div>
          {categories.map((category) => (
            <div
              key={category}
              className={`${styles.categoryItem} ${
                selectedCategory === category ? styles.active : ''
              }`}
              onClick={() => setSelectedCategory(category)}
            >
              {t(category)} {/* ترجمة الفئات */}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopList;
