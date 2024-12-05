import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useTranslation } from 'react-i18next';
import Im from '../../assets/images/high-angle-view-white-tulip-flowers-bouquet-gift-box-with-blank-paper-white-background_23-2148082855 1.png';
// import Logo from '../../assets/images/logo(1).png';
import styles from './about.module.css';

const About = () => {
  const { i18n } = useTranslation();
  const isRTL = i18n.language === 'ar'; // تحديد اتجاه اللغة

  return (
    <div className={styles.about__us}>
      <Container>
        <Row className={`d-flex align-items-center ${isRTL ? 'flex-row-reverse' : ''}`}>
          {/* العمود الخاص بالصورة */}
          <Col
            md={6}
            className={`image ${isRTL ? 'text-end' : 'text-start'}`}
          >
            <img src={Im} className="w-100 h-100" alt="About Us" />
          </Col>

          {/* العمود الخاص بالمحتوى */}
          <Col
            md={6}
            className={`${styles.paragraph} ${isRTL ? 'text-end' : 'text-start'}`}
          >
            <div className={`${styles.about__explore} d-flex flex-column align-items-${isRTL ? 'end' : 'start'}`}>
              <div className="des-md d-flex align-items-center">
                {/* <img src={Logo} alt="image" className={`${styles.about__image} mb-3`} /> */}
                <h2 className={styles.about__title}>
                  {isRTL ? 'من نحن' : 'About Us'}
                </h2>
              </div>
            </div>
            <p className="p-2">
              {isRTL
                ? 'هذا النص هو مثال للنصوص باللغة العربية لإظهار الاتجاه. يمكن تخصيص المحتوى هنا ليعكس المحتوى العربي.'
                : 'This is an example of English content to demonstrate directionality. You can customize the content here for English.'}
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default About;
