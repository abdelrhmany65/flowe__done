import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Container, Row, Form, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next'; // استيراد useTranslation
import { updateQuantity } from '../store/slice/cartReducer';

import styles from './styles.module.css';
import productImg04 from "../assets/images/about Us.png";

const CheackOut = () => {
  const dispatch = useDispatch();
  const totalAmount = useSelector((state) => state.cart.totalAmount);

  const { t, i18n } = useTranslation(); // تهيئة الترجمة

  const handleQuantityChange = (id, quantity) => {
    dispatch(updateQuantity({ id, quantity: parseInt(quantity) }));
  };

  // تحديد الاتجاه بناءً على اللغة الحالية
  const currentDir = i18n.language === 'ar' ? 'rtl' : 'ltr';

  return (
    <div dir={currentDir}> {/* إضافة dir لتحديد الاتجاه */}
      <div className={`${styles.project__card}`}>
        <img src={productImg04} alt="Project" className={`${styles.project__image}`} />
        <div className={styles.project__card__body}>
          <h2>{t('what_you_need')}</h2> {/* نص متعدد اللغات */}
        </div>
      </div>

      <section className='my-5'>
        <Container>
          <Row>
            <Col lg={4} xs={12} className='mb-4'>
              <Form className='d-flex flex-column'>
                <Form.Group className="mb-3" controlId="email">
                  <Form.Label>{t('email_address')}</Form.Label>
                  <Form.Control type="email" placeholder={t('email_placeholder')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="name">
                  <Form.Label>{t('name')}</Form.Label>
                  <Form.Control type="text" placeholder={t('name_placeholder')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="phone">
                  <Form.Label>{t('phone')}</Form.Label>
                  <Form.Control type="number" placeholder={t('phone_placeholder')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="address">
                  <Form.Label>{t('street_address')}</Form.Label>
                  <Form.Control type="text" placeholder={t('address_placeholder')} />
                </Form.Group>
              </Form>
            </Col>

            <Col lg={4} xs={12} className='mb-4'>
              <Form className='d-flex flex-column'>
                <Form.Group className="mb-3" controlId="area">
                  <Form.Label>{t('area')}</Form.Label>
                  <Form.Control type="text" placeholder={t('area_placeholder')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="city">
                  <Form.Label>{t('city')}</Form.Label>
                  <Form.Control type="text" placeholder={t('city_placeholder')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="postalCode">
                  <Form.Label>{t('postal_code')}</Form.Label>
                  <Form.Control type="text" placeholder={t('postal_placeholder')} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="country">
                  <Form.Label>{t('country')}</Form.Label>
                  <Form.Control type="text" placeholder={t('country_placeholder')} />
                </Form.Group>
              </Form>
            </Col>

            <Col lg={4} className="total__sub mt-4 mt-md-0 mx-auto">
              <div className='p-3 rounded bg-light my-5'>
                <h6 className='fs-5 fw-bold fs-3 text-dark'>{t('sub_total')}</h6>
                <span className='text-success fw-bold fs-3'>${totalAmount.toFixed(2)}</span>
                <p className='mt-2'>{t('tax_shipping_info')}</p>
                <div className='mt-4 d-flex flex-column'>
                  <Link to='/shope' className="mb-2">
                    <button type="button" className="btn btn-dark w-100">
                      {t('continue_shopping')}
                    </button>
                  </Link>
                  <Link to='/chaekout'>
                    <button type="button" className="btn btn-success w-100">
                      {t('checkout')}
                    </button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  );
};

export default CheackOut;
