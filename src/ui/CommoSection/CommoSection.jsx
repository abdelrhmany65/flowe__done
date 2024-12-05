import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import styles from './common.module.css';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

const CommoSection = ({ title }) => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar';

  return (
    <section>
      <section className={`${styles.commonSection} d-none d-lg-block`}>
      <Container fluid> 
        <Row className={`${styles.mdRow} align-items-center ${isRTL ? 'flex-row-reverse' : ''} justify-content-between`}>
          {/* النص والصورة */}
          <Col
            lg="6"
            xs="12"
            className={`d-flex align-items-center ${isRTL ? 'text-end' : 'text-start'} justify-content-${isRTL ? 'end' : 'start'}`}
          >
            <div className={`${styles.desComm} d-flex align-items-center`}>
              <h2 className={`${styles.commoTitle} ms-3 me-3`}>{title}</h2>
            </div>
          </Col>

          {/* الزر */}
          <Col
            lg="6"
            xs="12"
            className={`${styles.col__btn} d-flex justify-content-${isRTL ? 'start' : 'end'}`}
          >
            <div className={styles.wrapper}>
              <Link className={styles.btnHero} to="/shop/e">
                {isRTL ? 'تسوق الآن' : 'Shop Now'}
              </Link>
            </div>
          </Col>
        </Row>
      </Container>
      </section>

      <section className={`${styles.commonSection} d-lg-none`}>
        <Container fluid> 
          <Row className={`${styles.mdRow} align-items-center ${isRTL ? 'flex-row-reverse' : ''} justify-content-between`}>
            {/* النص والصورة */}
            <Col
              lg="12"
              xs="12"
              className={`d-flex align-items-center justify-content-center`}
            >
              <div className={`${styles.desComm} d-flex align-items-center justify-content-center`}>
                <h2 className={`${styles.commoTitle} ms-3 me-3`}>{title}</h2>
              </div>
            </Col>

            {/* الزر */}
            <Col
              lg="12"
              xs="12"
              className={`d-flex justify-content-center`}
            >
              <div className={styles.wrapper}>
                <Link className={styles.btnHero} to="/shop">
                  {isRTL ? 'تسوق الآن' : 'Shop Now'}
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </section>
  );
};

export default CommoSection;
