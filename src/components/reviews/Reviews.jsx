import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Man from "../../assets/images/userman.png";
import Star from "../../assets/images/Vector.png";
import L from "../../assets/images/leaf.png";
import styles from './reviews.module.css';

const Reviews = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar'; // تحديد اتجاه اللغة

  return (
    <section className={styles.reviewsSection}>
      <Container fluid>
        <div className="d-flex flex-column align-items-center">
          <div className={`${styles.desMd} d-flex align-items-center`}>
            <h2 className={styles.reviw__title}>
              {isRTL ? 'عمالائنا' : 'Reviews'}
            </h2>
          </div>
        </div>

        <Row
          className={`justify-content-center ${
            isRTL ? 'flex-row-reverse' : ''
          }`}
        >
          {/* Comment 1 */}
          <Col md={6} lg={5} className="mb-4">
            <div className={styles.comments}>
              <div
                className={`${styles.commentor} d-flex align-items-center mb-2 ${
                  isRTL ? 'flex-row-reverse text-end' : ''
                }`}
              >
                <img
                  src={Man}
                  alt="User"
                  className={`${isRTL ? 'ms-3' : 'me-3'} ${styles.user__image}`}
                />
                <h4>{isRTL ? 'اسم المستخدم' : 'Lorem Ipsum'}</h4>
              </div>
              <div className={`${styles.text} mb-3`}>
                <p>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique explicabo facere reiciendis impedit aut delectus, nobis id eveniet esse eaque reprehenderit dolorum in aspernatur harum rem doloremque necessitatibus voluptatibus recusandae!
                </p>
              </div>
              <div
                className={`${styles.starLeaf} d-flex justify-content-between`}
              >
                <div className={styles.star}>
                  <img src={Star} alt="Star" className={styles.star__image} />
                  <img src={Star} alt="Star" className={styles.star__image} />
                  <img src={Star} alt="Star" className={styles.star__image} />
                  <img src={Star} alt="Star" className={styles.star__image} />
                  <img src={Star} alt="Star" className={styles.star__image} />
                </div>
                <div className={styles.leaf}>
                  <img src={L} alt="Leaf" />
                </div>
              </div>
            </div>
          </Col>

          {/* Comment 2 */}
          <Col md={6} lg={5} className="mb-4">
            <div className={styles.comments}>
              <div
                className={`${styles.commentor} d-flex align-items-center mb-2 ${
                  isRTL ? 'flex-row-reverse text-end' : ''
                }`}
              >
                <img
                  src={Man}
                  alt="User"
                  className={`${isRTL ? 'ms-3' : 'me-3'} ${styles.user__image}`}
                />
                <h4>{isRTL ? 'اسم المستخدم' : 'Lorem Ipsum'}</h4>
              </div>
              <div className={`${styles.text} mb-3`}>
                <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Similique explicabo facere reiciendis impedit aut delectus, nobis id eveniet esse eaque reprehenderit dolorum in aspernatur harum rem doloremque necessitatibus voluptatibus recusandae!
                </p>
              </div>
              <div
                className={`${styles.starLeaf} d-flex justify-content-between`}
              >
                <div className={styles.star}>
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                  <img src={Star} alt="Star" />
                </div>
                <div className={styles.leaf}>
                  <img src={L} alt="Leaf" />
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Reviews;
