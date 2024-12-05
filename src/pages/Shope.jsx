import React, { useState } from 'react';
import { motion } from 'framer-motion'; // استيراد Framer Motion
import { Container, Row, Col } from 'react-bootstrap';
import ShopList from '../components/shop/ShopList';
import ShopFilterBar from '../components/shop/ShopFilterBar';
import ShopGrid from '../components/shop/ShopGrid';
import styles from './styles.module.css';
import productImg04 from "../assets/images/about Us.png";
import { useTranslation } from 'react-i18next';
import Header from '../components/header/Header';

const Shope = () => {
  const { i18n } = useTranslation(); 
  const currentLang = i18n.language; 
  const direction = currentLang === 'ar' ? 'rtl' : 'ltr';

  
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortType, setSortType] = useState('default');
  const [searchTerm, setSearchTerm] = useState('');

  // تعريف أنيميشن للعناصر
  const fadeInUp = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0 },
  };

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  return (
    <div style={{ direction }}>
      <Header setSelectedCategory={setSelectedCategory} selectedCategory={selectedCategory} />

      {/* Header Section with Animation */}
      <motion.div
        className={`${styles.project__card}`}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <img
          src={productImg04}
          alt="Project"
          className={`${styles.project__image}`}
        />
        <div className={styles.project__card__body}>
          <motion.h2
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: 'easeOut' }}
          >
            What you need!
          </motion.h2>
        </div>
      </motion.div>

      <Container>
        <Row>
          {/* Sidebar with Animation */}
          <motion.div
            className="col-lg-3"
            variants={fadeInUp}
            initial="hidden"
            animate="visible"
            transition={{ duration: 0.8 }}
          >
            <ShopList
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
            />
          </motion.div>

          {/* Main Content */}
          <motion.div
            className="col-lg-9"
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
          >
            <motion.div variants={fadeInUp}>
              <ShopFilterBar
                sortType={sortType}
                setSortType={setSortType}
                searchTerm={searchTerm}
                setSearchTerm={setSearchTerm}
              />
            </motion.div>

            <motion.div
              variants={fadeInUp}
              transition={{ delay: 0.2 }}
            >
              <ShopGrid
                selectedCategory={selectedCategory}
                sortType={sortType}
                searchTerm={searchTerm}
              />
            </motion.div>
          </motion.div>
        </Row>
      </Container>
    </div>
  );
};

export default Shope;
