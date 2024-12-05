import React, { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Carousel } from "react-bootstrap";
import Image01 from "../assets/images/WhatsApp Image 2024-09-24 at 3.54.02 PM.jpeg";
import Image02 from "../assets/images/pexels-moose-photos-170195-1037994.jpg";
import Image03 from "../assets/images/pexels-pixabay-414660.jpg";
import BtnAnimation from "../ui/btn/BtnAnimation";
import styles from "./styles.module.css";
import ProductList from "../ui/Product/ProductList";
import NewArrivals from "../ui/newarrivals/NewArrivals";
import About from "../components/about/About";
import Gifts from "../ui/Gifts/Gifts";
import Alpoum from "../components/Alpoum/Alpoum";
import Reviews from "../components/reviews/Reviews";
import Category from "../ui/category/Category";

// Hook to check if a component is in view
const useInView = (threshold = 0.1) => {
  const [isInView, setIsInView] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsInView(entry.isIntersecting);
      },
      { threshold }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [threshold]);

  return [ref, isInView];
};

const Home = () => {
  // استخدام الـ Hook لكل قسم
  const [productListRef, isProductListInView] = useInView(0.2);
  const [newArrivalsRef, isNewArrivalsInView] = useInView(0.2);
  const [aboutRef, isAboutInView] = useInView(0.2);
  const [giftsRef, isGiftsInView] = useInView(0.2);
  const [alpoumRef, isAlpoumInView] = useInView(0.2);
  const [reviewsRef, isReviewsInView] = useInView(0.2);
  const [categoryRef, isCategoryInView] = useInView(0.2);

  return (
    <>
      {/* Hero Section */}
      <div id="hero-section">
  <Carousel fade>
    <Carousel.Item>
      <img
        className={`d-block w-100 ${styles["hero-image"]}`}
        src={Image01}
        alt="firstSlideAlt"
      />
      <Carousel.Caption className={styles.carouselCaption}>
        <div className={styles.carouselTextContainer}>
          <h6 className={styles["caption-heading"]}>Living Life</h6>
          <h1 className={styles.carousel__caption}>Life in Love With Plants</h1>
          
          <BtnAnimation />
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className={`d-block w-100 ${styles["hero-image"]}`}
        src={Image02}
        alt="secondSlideAlt"
      />
      <Carousel.Caption className={styles.carouselCaption}>
        <div className={styles.carouselTextContainer}>
          <h6 className={styles["caption-heading"]}>Living Life</h6>
          <h1 className={styles.carousel__caption}>Life in Love With Plants</h1>
          <BtnAnimation />
        </div>
      </Carousel.Caption>
    </Carousel.Item>
    <Carousel.Item>
      <img
        className={`d-block w-100 ${styles["hero-image"]}`}
        src={Image03}
        alt="thirdSlideAlt"
      />
      <Carousel.Caption className={styles.carouselCaption}>
        <div className={styles.carouselTextContainer}>
          <h6 className={styles["caption-heading"]}>Living Life</h6>
          <h1 className={styles.carousel__caption}>Life in Love With Plants</h1>
          <BtnAnimation />
        </div>
      </Carousel.Caption>
    </Carousel.Item>
  </Carousel>
</div>


      {/* Sections with Scroll Animation */}
      <motion.div
        ref={productListRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isProductListInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <ProductList />
      </motion.div>

      <motion.div
        ref={newArrivalsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isNewArrivalsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <NewArrivals />
      </motion.div>

      <motion.div
        ref={aboutRef}
        initial={{ opacity: 0, x: -50 }}
        animate={isAboutInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <About />
      </motion.div>

      <motion.div
        ref={giftsRef}
        initial={{ scale: 0.8, opacity: 0 }}
        animate={isGiftsInView ? { scale: 1, opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Gifts />
      </motion.div>

      <motion.div
        ref={alpoumRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isAlpoumInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Alpoum />
      </motion.div>

      <motion.div
        ref={reviewsRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isReviewsInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Reviews />
      </motion.div>

      <motion.div
        ref={categoryRef}
        initial={{ opacity: 0, y: 50 }}
        animate={isCategoryInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: "easeInOut" }}
      >
        <Category />
      </motion.div>
    </>
  );
};

export default Home;
