import React from 'react';
import { Container, Row, Col, Form } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Insta from '../../assets/images/iconfinder-social-media-applications-3instagram-4102579_113804.png';
import Face from '../../assets/images/iconfinder-social-media-applications-1facebook-4102573_113807.png';
import Whats from '../../assets/images/iconfinder-social-media-applications-23whatsapp-4102606_113811.png';
import Linkedin from '../../assets/images/iconfinder-social-media-applications-14linkedin-4102586_113786.png';
import phone from '../../assets/images/icon _phone_.png';
import email from '../../assets/images/icon _email_.png';
import logo from '../../assets/Logo/logo nabtaty-03.png';
import Location from '../../assets/images/Group 101.png';
import './footer.css';
import { Link } from 'react-router-dom';

function Footer() {
  const { t, i18n } = useTranslation();
  const isRTL = i18n.language === 'ar'; // تحديد الاتجاه بناءً على اللغة

  return (
    <section className={`footer ${isRTL ? 'rtl' : 'ltr'}`}>
      <Container>
        <Row className={`${isRTL ? 'flex-row-reverse' : 'flex-row'}`}> {/* تعديل الاتجاه بناءً على اللغة */}
          {/* العمود الأول: معلومات الشركة */}
          <Col md={6} className={`our-info ${isRTL ? 'start' : 'end'}`}>
            <img src={logo} className="logo" alt="Logo" />
            <div className="email d-flex mt-1">
              <img src={email} alt="Email Icon" />
              <p>{t('email', { defaultValue: 'email@gmail.com' })}</p>
            </div>
            <div className="email d-flex mt-1">
              <img src={phone} alt="Phone Icon" />
              <p>{t('phone', { defaultValue: '03322111' })}</p>
            </div>
            <div className="email d-flex mt-1">
              <img src={Location} alt="Location Icon" />
              <p>{t('location', { defaultValue: 'Location' })}</p>
            </div>
            <div className="social-media d-flex mt-3">
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                <img src={Insta} alt="Instagram" />
              </a>
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                <img src={Face} alt="Facebook" />
              </a>
              <a href="https://wa.me/your-number" target="_blank" rel="noopener noreferrer">
                <img src={Whats} alt="WhatsApp" />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">
                <img src={Linkedin} alt="LinkedIn" />
              </a>
            </div>

            <p className="stay">{t('stay_tuned', { defaultValue: 'Stay tuned!' })}</p>
          </Col>

          {/* العمود الثاني: نموذج الاتصال */}
          <Col md={6} className="user-info">
            <Form>
              <Form.Group controlId="Name">
                <Form.Control
                  type="text"
                  placeholder={t('name_placeholder', { defaultValue: 'Name' })}
                />
              </Form.Group>
              <Form.Group controlId="Phone" className="mt-3">
                <Form.Control
                  type="text"
                  placeholder={t('phone_placeholder', { defaultValue: 'Phone' })}
                />
              </Form.Group>
              <Form.Group controlId="Msg" className="mt-3">
                <Form.Control
                  as="textarea"
                  placeholder={t('message_placeholder', { defaultValue: 'Message' })}
                  rows={4}
                />
              </Form.Group>
              <div className="centerer mt-2">
                <div className="wrap">
                  <Link className="btn-collision" to="/shopNow/:id">
                    {t('send_now', { defaultValue: 'Send Now' })}
                  </Link>
                </div>
              </div>
            </Form>
          </Col>
        </Row>
      </Container>
    </section>
  );
}

export default Footer;
